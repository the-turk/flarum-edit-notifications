module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/InteractedPostEditedNotification.js":
/*!******************************************************************!*\
  !*** ./src/forum/components/InteractedPostEditedNotification.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractedPostEditedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__);




var InteractedPostEditedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InteractedPostEditedNotification, _Notification);

  function InteractedPostEditedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = InteractedPostEditedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-pencil-alt';
  };

  _proto.href = function href() {
    return app.route.post(this.props.notification.subject());
  };

  _proto.content = function content() {
    var notification = this.props.notification;
    var user = notification.fromUser();
    return app.translator.trans('the-turk-edit-notifications.forum.notifications.interacted_post_edited_text', {
      user: user
    });
  };

  _proto.excerpt = function excerpt() {
    return Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__["truncate"])(this.props.notification.subject().contentPlain(), 200);
  };

  return InteractedPostEditedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PostEditedNotification.js":
/*!********************************************************!*\
  !*** ./src/forum/components/PostEditedNotification.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostEditedNotification; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Notification */ "flarum/components/Notification");
/* harmony import */ var flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__);




var PostEditedNotification =
/*#__PURE__*/
function (_Notification) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostEditedNotification, _Notification);

  function PostEditedNotification() {
    return _Notification.apply(this, arguments) || this;
  }

  var _proto = PostEditedNotification.prototype;

  _proto.icon = function icon() {
    return 'fas fa-pencil-alt';
  };

  _proto.href = function href() {
    return app.route.post(this.props.notification.subject());
  };

  _proto.content = function content() {
    var notification = this.props.notification;
    var user = notification.fromUser();
    return app.translator.trans('the-turk-edit-notifications.forum.notifications.post_edited_text', {
      user: user
    });
  };

  _proto.excerpt = function excerpt() {
    return Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_2__["truncate"])(this.props.notification.subject().contentPlain(), 200);
  };

  return PostEditedNotification;
}(flarum_components_Notification__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostEditedNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/PostEditedNotification */ "./src/forum/components/PostEditedNotification.js");
/* harmony import */ var _components_InteractedPostEditedNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InteractedPostEditedNotification */ "./src/forum/components/InteractedPostEditedNotification.js");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/NotificationGrid */ "flarum/components/NotificationGrid");
/* harmony import */ var flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4__);





flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('the-turk/edit-histories', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.notificationComponents.postEdited = _components_PostEditedNotification__WEBPACK_IMPORTED_MODULE_2__["default"];
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.notificationComponents.interactedPostEdited = _components_InteractedPostEditedNotification__WEBPACK_IMPORTED_MODULE_3__["default"];
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_NotificationGrid__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'notificationTypes', function (items) {
    items.add('postEdited', {
      name: 'postEdited',
      icon: 'fas fa-pencil-alt',
      label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('the-turk-edit-notifications.forum.settings.notify_post_edited_label')
    });

    if (flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('interactedEditNotifications') === true) {
      items.add('interactedPostEdited', {
        name: 'interactedPostEdited',
        icon: 'fas fa-pencil-alt',
        label: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('the-turk-edit-notifications.forum.settings.notify_interacted_post_edited_label')
      });
    }
  });
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Notification":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/Notification']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Notification'];

/***/ }),

/***/ "flarum/components/NotificationGrid":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationGrid']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationGrid'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map