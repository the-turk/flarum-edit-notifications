import app from 'flarum/app';
import EditNotificationsSettingsModal from "./modals/EditNotificationsSettingsModal";

// initialize settings modal
app.initializers.add('the-turk-edit-notifications', app => {
  app.extensionSettings['the-turk-edit-notifications'] =
    () => app.modal.show(new EditNotificationsSettingsModal());
});
