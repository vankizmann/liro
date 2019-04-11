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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/src/js/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__("./resources/src/js/liro/dom.ts");
var element_1 = __webpack_require__("./resources/src/js/liro/element.ts");
dom_1.default.ready(function () {
    element_1.default.setPrefix('sx');
    element_1.default.bind('test', function (el, options) {
        el.innerHTML += options.text || '';
    });
});


/***/ }),

/***/ "./resources/src/js/liro/dom.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DOM = /** @class */ (function () {
    function DOM() {
    }
    DOM.ready = function (callback) {
        var _this = this;
        var callbackHandler = function () {
            _this.destroyListener(callbackHandler);
            callback.call({});
        };
        if (document.readyState === 'complete') {
            return callbackHandler();
        }
        return this.registerListener(callbackHandler);
    };
    DOM.registerListener = function (callback) {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    };
    DOM.destroyListener = function (callback) {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    };
    return DOM;
}());
exports.default = DOM;


/***/ }),

/***/ "./resources/src/js/liro/element.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Element = /** @class */ (function () {
    function Element() {
    }
    /**
     * Map callback on selector.
     */
    Element.bind = function (key, callback) {
        var _this = this;
        var selector = this.getPrefix(key);
        document.querySelectorAll('[' + selector + ']')
            .forEach(function (el) {
            callback.call({}, el, _this.parseParams(el.getAttribute(selector)));
        });
        return true;
    };
    Element.parseParams = function (params) {
        var parsed = {};
        params.match(/(?<=(^|;))([^\s]+\s*:\s*(".*?"|'.*?'|.*?)?\s*)(?=(;|$))/g).forEach(function (match) {
            var attribute = match.match(/([^\s]+)\s*:\s*(".*?"|'.*?'|.*?)?\s*/);
            if (attribute.length !== 3) {
                return;
            }
            parsed[attribute[1]] = attribute[2].replace(/(^["']*|["']*$)/g, '');
        });
        return parsed;
    };
    Element.getPrefix = function (key) {
        return key ? this.prefix + '-' + key : this.prefix;
    };
    Element.setPrefix = function (prefix) {
        this.prefix = prefix;
    };
    Element.prefix = 'ui';
    return Element;
}());
exports.default = Element;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/src/js/index.ts");


/***/ })

/******/ });