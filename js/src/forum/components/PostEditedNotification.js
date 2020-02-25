import Notification from 'flarum/components/Notification';
import { truncate } from 'flarum/utils/string';

export default class PostEditedNotification extends Notification {
  icon() {
    return 'fas fa-pencil-alt';
  }

  href() {
    return app.route.post(this.props.notification.subject());
  }

  content() {
    const notification = this.props.notification;
    const user = notification.fromUser();

    return app.translator.trans('the-turk-edit-notifications.forum.notifications.post_edited_text', {user});
  }

  excerpt() {
    return truncate(this.props.notification.subject().contentPlain(), 200);
  }
}
