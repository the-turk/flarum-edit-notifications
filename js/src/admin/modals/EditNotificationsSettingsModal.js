import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

// just to make things easier
const settingsPrefix = 'the-turk-edit-notifications.';
const translationPrefix = settingsPrefix + 'admin.settings.';

export default class StargazingSettingsModal extends SettingsModal {
  title() {
    return app.translator.trans(translationPrefix + 'title');
  }

  /**
   * Build modal form.
   *
   * @returns {*}
   */
  form() {
    return [
      m('.Form-group', [
        m('label', Switch.component({
          state: this.setting(settingsPrefix + 'enableInteracts', '1')() === '1',
          children: app.translator.trans(translationPrefix + 'enableInteracts'),
          onchange: value => {
            this.setting(settingsPrefix + 'enableInteracts')(value ? '1' : '0');
          }
        }))
      ]),
    ];
  }
}
