<?php

/**
 * Edit Histories Extension for Flarum.
 *
 * LICENSE: For the full copyright and license information,
 * please view the LICENSE.md file that was distributed
 * with this source code.
 *
 * @package    the-turk/flarum-edit-histories
 * @author     Hasan Özbey <hasanoozbey@gmail.com>
 * @copyright  2020
 * @license    The MIT License
 * @version    Release: 0.1.5
 * @link       https://github.com/the-turk/flarum-edit-notifications
 */

namespace TheTurk\EditNotifications;

use Flarum\Extend;
use Flarum\Api\Serializer\PostSerializer;
use TheTurk\EditNotifications\Notification\PostEditedBlueprint;
use TheTurk\EditNotifications\Notification\InteractedPostEditedBlueprint;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\ConfigureNotificationTypes;
use TheTurk\EditNotifications\Listeners\SubscribeToEvents;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    (new Extend\Locales(__DIR__ . '/locale')),
    function (Dispatcher $events) {
        $events->listen(ConfigureNotificationTypes::class, function (ConfigureNotificationTypes $event) {
            $event->add(PostEditedBlueprint::class, PostSerializer::class, ['alert']);
            $event->add(InteractedPostEditedBlueprint::class, PostSerializer::class, ['alert']);
        });

        $events->subscribe(SubscribeToEvents::class);
    },
];
