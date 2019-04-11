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

/***/ "./resources/src/js/liro/Elements/nav.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Nav = /** @class */ (function () {
    function Nav(el, options) {
        this.options = {
            duration: 200,
            delay: 300,
            navSelector: '> div',
            baseName: 'js__nav',
            openModifier: 'open',
            readyModifier: 'ready'
        };
        this.el = el;
        this.options = $.extend({}, this.options, options);
    }
    Nav.prototype.bind = function () {
        var _this = this;
        $(this.el).find('> ul > li').map(function (index, el) {
            _this.bindEvent(index, el);
        });
    };
    Nav.prototype.bindEvent = function (index, el) {
        var _this = this;
        $(el).on('mouseenter', function () {
            _this.openNav(el);
        });
        $(el).on('mouseleave', function () {
            _this.closeNav(el);
        });
        $(el).addClass(this.options.baseName);
    };
    Nav.prototype.openNav = function (el) {
        var _this = this;
        var $nav = $(el).find(this.options.navSelector).eq(0);
        var options = {
            duration: this.options.duration
        };
        options.complete = function () {
            $(el).addClass(_this.getReadyClass());
        };
        var height = $nav.realHeight();
        if (!$(el).hasClass(this.getOpenClass())) {
            $nav.css({ display: 'block', height: 0 });
        }
        $nav.velocity('stop')
            .velocity({ opacity: 1, height: height }, options);
        $(el).addClass(this.getOpenClass());
        $nav.css({ zIndex: 20 });
    };
    Nav.prototype.closeNav = function (el) {
        var _this = this;
        var $nav = $(el).find(this.options.navSelector).eq(0);
        var options = {
            duration: this.options.duration,
            delay: this.options.delay
        };
        options.beginn = function () {
            $(el).removeClass(_this.getReadyClass());
        };
        options.complete = function () {
            $(el).removeClass(_this.getOpenClass());
            $nav.css({ display: 'none' });
        };
        $nav.velocity('stop', true)
            .velocity({ opacity: 0, height: 0 }, options);
        $nav.css({ zIndex: 10 });
    };
    Nav.prototype.getOpenClass = function () {
        return this.options.baseName + '--' + this.options.openModifier;
    };
    Nav.prototype.getReadyClass = function () {
        return this.options.baseName + '--' + this.options.readyModifier;
    };
    return Nav;
}());
exports.default = Nav;


/***/ }),

/***/ "./resources/src/js/liro/Essentials/dom.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DOM = /** @class */ (function () {
    function DOM() {
    }
    /**
     * Call callback on dom ready.
     */
    DOM.ready = function (callback) {
        var _this = this;
        // Create callback with destroyer
        var callbackHandler = function () {
            _this.destroyListener(callbackHandler);
            callback.call({});
        };
        // Call function if already loaded
        if (document.readyState === 'complete') {
            return callbackHandler();
        }
        return this.registerListener(callbackHandler);
    };
    /**
     * Register callback on dom content loaded event.
     */
    DOM.registerListener = function (callback) {
        document.addEventListener('DOMContentLoaded', callback);
        window.addEventListener('load', callback);
    };
    /**
     * Remove listener for dom content loaded event.
     */
    DOM.destroyListener = function (callback) {
        document.removeEventListener('DOMContentLoaded', callback);
        window.removeEventListener('load', callback);
    };
    return DOM;
}());
exports.default = DOM;


/***/ }),

/***/ "./resources/src/js/liro/Essentials/element.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Element = /** @class */ (function () {
    function Element() {
    }
    /**
     * Bind callback on selector.
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
    /**
     * Parse param string to object (e.g. foo: bar; test: lorem).
     */
    Element.parseParams = function (params) {
        var parsed = {};
        var result = params.match(/(?<=(^|;))([^\s]+\s*:\s*(".*?"|'.*?'|.*?)\s*)(?=(;|$))/g);
        if (result === undefined || result === null) {
            return parsed;
        }
        result.forEach(function (match) {
            // Get key and value from match
            var attribute = match.match(/^([^\s]+)\s*:\s*(".*?"|'.*?'|.*?)\s*$/);
            // Skip if length does not match
            if (attribute.length !== 3) {
                return;
            }
            var value = attribute[2]
                .replace(/(^["']*|["']*$)/g, '');
            if (typeof value === 'string' && value.match(/^[0-9]+$/)) {
                value = parseInt(value);
            }
            if (typeof value === 'string' && value.match(/^[0-9\\.]+$/)) {
                value = parseFloat(value);
            }
            // Add to parsed
            parsed[attribute[1]] = value;
        });
        return parsed;
    };
    /**
     * Return prefix with key.
     */
    Element.getPrefix = function (key) {
        return key ? this.prefix + '-' + key : this.prefix;
    };
    /**
     * Set prefix to given value.
     */
    Element.setPrefix = function (prefix) {
        this.prefix = prefix;
    };
    /**
     * Prefix for attribute selector.
     */
    Element.prefix = 'js';
    return Element;
}());
exports.default = Element;


/***/ }),

/***/ "./resources/src/js/liro/Extends/jquery.ts":
/***/ (function(module, exports) {

/**
 * Get real height from element.
 */
$.fn.realHeight = function (display) {
    if (display === void 0) { display = 'block'; }
    // Store current styles
    var style = $(this).eq(0).attr('style');
    // Clear styles
    $(this).eq(0).attr('style', 'display: ' + display);
    // Store height without styles
    var height = $(this).eq(0).outerHeight();
    // Reappend styles
    $(this).eq(0).attr('style', style);
    return height;
};
/**
 * Get real width from element.
 */
$.fn.realWidth = function (display) {
    if (display === void 0) { display = 'block'; }
    // Store current styles
    var style = $(this).eq(0).attr('style');
    // Clear styles
    $(this).eq(0).attr('style', 'display: ' + display);
    // Store height without styles
    var width = $(this).eq(0).outerWidth();
    // Reappend styles
    $(this).eq(0).attr('style', style);
    return width;
};


/***/ }),

/***/ "./resources/src/js/liro/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__("./resources/src/js/liro/Essentials/dom.ts");
var element_1 = __webpack_require__("./resources/src/js/liro/Essentials/element.ts");
var nav_1 = __webpack_require__("./resources/src/js/liro/Elements/nav.ts");
dom_1.default.ready(function () {
    __webpack_require__("./resources/src/js/liro/Extends/jquery.ts");
    element_1.default.bind('nav', function (el, options) {
        new nav_1.default(el, options).bind();
    });
    console.log('Ready!');
});


/***/ }),

/***/ "./resources/src/sass/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/src/js/liro/index.ts");
module.exports = __webpack_require__("./resources/src/sass/index.scss");


/***/ })

/******/ });