### 0.1.5

- **Update** version constraints for Flarum 0.1.0-beta.13.

### 0.1.4

- **Add** `the-turk/flarum-diff` v1.0.0 support.
- **Update** dependencies.

### 0.1.3

- **Update** version constraints for Flarum 0.1.0-beta.12.
- **Add** `the-turk/flarum-diff` rollback support.

### 0.1.2

- **Fix** don't try to notify [deleted] users.
- **Fix** queue notifications back into `Revised` event because now I'm sure it raises after `Saving` event. 🤦‍♂️

This will also fix wrong notifications occuring when one reacts to a post | saves post without changes.

### 0.1.1

- **Fix** queue notifications `afterSave()` since `Revised` event raises before `Saving`