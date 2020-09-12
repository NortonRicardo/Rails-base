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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/my_alert.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/my_alert.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/my_alert.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This file has to be required before rails-ujs
// To use it change `data-confirm` of your links to `data-confirm-swal`
(function () {
  var handleConfirm = function handleConfirm(element) {
    if (!allowAction(this)) {
      Rails.stopEverything(element);
    }
  };

  var allowAction = function allowAction(element) {
    if (element.getAttribute('data-confirm-swal') === null) {
      return true;
    }

    showConfirmationDialog(element);
    return false;
  }; // Display the confirmation dialog


  var showConfirmationDialog = function showConfirmationDialog(element) {
    var message = element.getAttribute('data-confirm-swal');
    var text = element.getAttribute('data-text');
    swal({
      title: message || 'Are you sure?',
      text: text || '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(function (result) {
      return confirmed(element, result);
    });
  };

  var confirmed = function confirmed(element, result) {
    if (result.value) {
      // User clicked confirm button
      element.removeAttribute('data-confirm-swal');
      element.click();
    }
  }; // Hook the event before the other rails events so it works togeter
  // with `method: :delete`.
  // See https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts/rails-ujs/start.coffee#L69


  document.addEventListener('rails:attachBindings', function (element) {
    Rails.delegate(document, 'a[data-confirm-swal]', 'click', handleConfirm);
  });
}).call(this);

/***/ })

/******/ });
//# sourceMappingURL=my_alert-23d946a211963459d3d2.js.map