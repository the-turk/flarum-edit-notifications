import app from 'flarum/app';
import {extend} from 'flarum/extend';
import PostEditedNotification from './components/PostEditedNotification';
import InteractedPostEditedNotification from './components/InteractedPostEditedNotification';
import NotificationGrid from 'flarum/components/NotificationGrid';

app.initializers.add('the-turk/edit-histories', () => {
  app.notificationComponents.postEdited = PostEditedNotification;
  app.notificationComponents.interactedPostEdited = InteractedPostEditedNotification;

  extend(NotificationGrid.prototype, 'notificationTypes', function (items) {
    items.add('postEdited', {
      name: 'postEdited',
      icon: 'fas fa-pencil-alt',
      label: app.translator.trans('the-turk-edit-notifications.forum.settings.notify_post_edited_label')
    });
    
    if (app.forum.attribute('interactedEditNotifications') === true) {
      items.add('interactedPostEdited', {
        name: 'interactedPostEdited',
        icon: 'fas fa-pencil-alt',
        label: app.translator.trans('the-turk-edit-notifications.forum.settings.notify_interacted_post_edited_label')
      });
    }
  });
});
