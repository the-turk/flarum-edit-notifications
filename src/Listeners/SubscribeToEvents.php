<?php
namespace TheTurk\EditNotifications\Listeners;

use Flarum\Post\Event\Revised as PostRevised;
use TheTurk\EditNotifications\Jobs\SendNotificationWhenPostIsEdited;
use Illuminate\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Extension\ExtensionManager;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;

class SubscribeToEvents
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var ExtensionManager
     */
    private $extensions;

    /**
     * @param SettingsRepositoryInterface $settings
     * @param ExtensionManager $extensions
     */
    public function __construct(
      SettingsRepositoryInterface $settings,
      ExtensionManager $extensions
    )
    {
        $this->settings = $settings;
        $this->extensions = $extensions;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PostRevised::class, [$this, 'whenPostRevised']);
        if ($this->extensions->isEnabled('the-turk-flarum-diff')) {
            $events->listen(
                \TheTurk\Diff\Events\PostWasRollbacked::class,
                [$this, 'whenPostRevised']
            );
        }
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function whenPostRevised($event)
    {
        $actor = $event->actor;
	      $post = $event->post;

    		app('flarum.queue.connection')->push(
      			new SendNotificationWhenPostIsEdited(
      			  $post,
      			  $actor
      			)
    		);
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
