<?php
namespace TheTurk\EditNotifications\Jobs;

use TheTurk\EditNotifications\Notification\PostEditedBlueprint;
use TheTurk\EditNotifications\Notification\InteractedPostEditedBlueprint;
use Flarum\Notification\NotificationSyncer;
use Flarum\Notification\Notification;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Post\Post;
use Flarum\User\User;
use Flarum\Extension\ExtensionManager;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;

class SendNotificationWhenPostIsEdited implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * @var Post
     */
    protected $post;

    /**
     * @var User
     */
    protected $actor;

    /**
     * @param Post $post
     * @param User $actor
     */
    public function __construct(
         Post $post,
         User $actor
     ) {
        $this->post = $post;
        $this->actor = $actor;
    }

    public function handle(NotificationSyncer $notifications)
    {
        if (null !== $this->post->user && $this->post->user->id != $this->actor->id) {
            $blueprint = new PostEditedBlueprint($this->post, $this->actor);
            $this->removePreviousNotifications($blueprint);
            $notifications->sync($blueprint, [$this->post->user]);
        }

        $settings = app(SettingsRepositoryInterface::class);

        if ($settings->get('the-turk-edit-notifications.enableInteracts', true)) {
            $extensionManager = app(ExtensionManager::class);

            // integration with other extensions
            $haveLikes = $extensionManager->isEnabled('flarum-likes');
            $haveMentions = $extensionManager->isEnabled('flarum-mentions');
            $haveReactions = $extensionManager->isEnabled('fof-reactions');
            $haveGamification = $extensionManager->isEnabled('fof-gamification');

            if ($haveLikes || $haveMentions || $haveReactions || $haveGamification) {
                $blueprint = new InteractedPostEditedBlueprint($this->post, $this->actor);
                $this->removePreviousNotifications($blueprint);
                $userIds = [];

                if ($haveLikes) {
                    $likes = $this->post->likes();

                    if ($likes->exists()) {
                        foreach ($likes->get() as $l) {
                            if (null !== $l && $l->id !== $this->actor->id) {
                                if (null !== $this->post->user && $l->id === $this->post->user->id) {
                                    continue;
                                }
                                $userIds[] = $l->id;
                            }
                        }
                    }
                }

                if ($haveMentions) {
                    $postMentions = $this->post->mentionedBy();

                    if ($postMentions->exists()) {
                        foreach ($postMentions->get() as $m) {
                            if (null !== $m->user && $m->user->id !== $this->actor->id) {
                                if (null !== $this->post->user && $m->user->id === $this->post->user->id) {
                                    continue;
                                }
                                $userIds[] = $m->user->id;
                            }
                        }
                    }
                }

                if ($haveReactions) {
                    $postReactions = $this->post->reactions();

                    if ($postReactions->exists()) {
                        foreach ($postReactions->get() as $r) {
                            if (is_int($r->pivot->user_id) && $r->pivot->user_id !== $this->actor->id) {
                                if (null !== $this->post->user && $r->pivot->user_id === $this->post->user->id) {
                                    continue;
                                }
                                $userIds[] = $r->pivot->user_id;
                            }
                        }
                    }
                }

                if ($haveGamification) {
                    $postUpVotes = $this->post->upvotes();
                    $postDownVotes = $this->post->downvotes();

                    if ($postUpVotes->exists()) {
                        foreach ($postUpVotes->get() as $uv) {
                            if (null !== $uv && $uv->id !== $this->actor->id) {
                                if (null !== $this->post->user && $uv->id === $this->post->user->id) {
                                    continue;
                                }
                                $userIds[] = $uv->id;
                            }
                        }
                    }

                    if ($postDownVotes->exists()) {
                        foreach ($postDownVotes->get() as $dv) {
                            if (null !== $dv && $dv->id !== $this->actor->id) {
                                if (null !== $this->post->user && $dv->id === $this->post->user->id) {
                                    continue;
                                }
                                $userIds[] = $dv->id;
                            }
                        }
                    }
                }

                $userIds = array_unique($userIds);
                $userIds = array_filter($userIds);
                $notifications->sync(
                    $blueprint,
                    User::whereIn('id', $userIds)->get()->all()
                );
            }
        }
    }

    /**
     * We have to notify them again, if needed.
     *
     * @param \Flarum\Notification\Blueprint\BlueprintInterface $blueprint
     * @return bool|null
     */
    protected function removePreviousNotifications(BlueprintInterface $blueprint)
    {
        return Notification::where([
            'type' => $blueprint::getType(),
            'from_user_id' => ($fromUser = $blueprint->getFromUser()) ? $fromUser->id : null,
            'subject_id' => ($subject = $blueprint->getSubject()) ? $subject->id : null,
            'data' => null
        ])->whereNotNull('read_at')->delete();
    }
}
