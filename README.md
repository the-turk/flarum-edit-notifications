# Edit Notifications for Flarum

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/the-turk/flarum-edit-notifications/blob/master/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/the-turk/flarum-edit-notifications.svg)](https://packagist.org/packages/the-turk/flarum-edit-notifications) [![Total Downloads](https://img.shields.io/packagist/dt/the-turk/flarum-edit-notifications.svg)](https://packagist.org/packages/the-turk/flarum-edit-notifications)

This extension will let users know when their post is edited (because they've the right to know!)

[OPTIONAL] It'll also notify users about edits on posts that they interacted (liked, mentioned, reacted or voted). So when you get interacted with a post, you'll be notified when it's edited. You could think as it is 'post subscription'.

![Screenshot](https://i.ibb.co/6Wmyz1t/edit-notifications.png)

## Features

- Uses queues for notifications.
- Integration with `flarum/likes`, `flarum/mentions`, `fof/reactions` & `fof/gamification`

## Installation

Use [Bazaar](https://discuss.flarum.org/d/5151) or install manually:

```bash
composer require the-turk/flarum-edit-notifications
```

## Updating

```bash
composer update the-turk/flarum-edit-notifications
php flarum cache:clear
```

## Usage

Enable the extension. Disable notifications for interacted posts from the settings page if you wish.

**Reminder:** Users can disable these notifications individually in their settings page if they wish.

## Links

- [Flarum Discuss post](https://discuss.flarum.org/)
- [Source code on GitHub](https://github.com/the-turk/flarum-edit-notifications)
- [Changelog](https://github.com/the-turk/flarum-edit-notifications/blob/master/CHANGELOG.md)
- [Report an issue](https://github.com/the-turk/flarum-edit-notifications/issues)
- [Download via Packagist](https://packagist.org/packages/the-turk/flarum-edit-notifications)
