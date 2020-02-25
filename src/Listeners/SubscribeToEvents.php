<?php
namespace TheTurk\EditNotifications\Listeners;

use Flarum\Post\Event\Saving as PostSaving;
use TheTurk\EditNotifications\Jobs\SendNotificationWhenPostIsEdited;
use Illuminate\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;

class SubscribeToEvents
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * Gets the settings variable. Called on Object creation.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostSaving::class, [$this, 'whenSavingPost']);
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * @param PostSaving $event
     */
    public function whenSavingPost(PostSaving $event)
    {
        $actor = $event->actor;

		if ($event->post->exists) {
			$event->post->afterSave(function ($post) use ($actor) {
				app('flarum.queue.connection')->push(
					new SendNotificationWhenPostIsEdited(
					  $post,
					  $actor
					)
				);
			});
		}
    }

    /**
     * @param Serializing $event
     */
    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes += [
              'interactedEditNotifications' => (bool)
                  $this->settings->get('enableInteracts', true)
            ];
        }
    }
}
