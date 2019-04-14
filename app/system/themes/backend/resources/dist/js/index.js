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
            bindMode: 'hover',
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
        if ($(el).find(this.options.navSelector).length === 0) {
            return;
        }
        if (this.options.bindMode === 'hover') {
            this.bindHoverEvent(el);
        }
        if (this.options.bindMode === 'click') {
            this.bindClickEvent(el);
        }
        $(el).addClass(this.options.baseName);
    };
    Nav.prototype.bindHoverEvent = function (el) {
        var _this = this;
        $(el).on('mouseenter', function () {
            _this.openNav(el);
        });
        $(el).on('mouseleave', function () {
            _this.closeNav(el);
        });
    };
    Nav.prototype.bindClickEvent = function (el) {
        var _this = this;
        var open = false;
        $(el).on('click', function () {
            if (open === false) {
                _this.openNav(el);
                return open = true;
            }
            if (open === true) {
                _this.closeNav(el);
                return open = false;
            }
        });
        $(document).on('click', function (event) {
            if ($(event.target).is(el) || $(event.target).parents().is(el)) {
                return;
            }
            _this.closeNav(el);
            return open = false;
        });
        $(el).children('a').on('click', function (event) {
            event.preventDefault();
        });
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
    };
    Nav.prototype.closeNav = function (el) {
        var _this = this;
        var $nav = $(el).find(this.options.navSelector).eq(0);
        var options = {
            duration: this.options.duration,
            delay: this.options.delay
        };
        options.begin = function () {
            $(el).removeClass(_this.getReadyClass());
        };
        options.complete = function () {
            $(el).removeClass(_this.getOpenClass());
            $nav.css({ display: 'none' });
        };
        $nav.velocity('stop', true)
            .velocity({ opacity: 0, height: 0 }, options);
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

/***/ "./resources/src/js/liro/Essentials/asset.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Asset = /** @class */ (function () {
    function Asset() {
    }
    Asset.errorFallback = function (link) {
        console.error('Error on loading: ' + link);
    };
    Asset.loadFallback = function (link) {
        console.info('Done on loading: ' + link);
    };
    Asset.script = function (link, load, error) {
        if (load === void 0) { load = undefined; }
        if (error === void 0) { error = undefined; }
        var el = document.createElement('script');
        $.extend(el, {
            src: link, async: true
        });
        $.extend(el, {
            onload: function () {
                load ? load.call({}, link) :
                    Asset.loadFallback.call({}, link);
            },
            onerror: function () {
                error ? error.call({}, link) :
                    Asset.errorFallback.call({}, link);
            }
        });
        document.getElementsByTagName("head")[0].append(el);
        return this;
    };
    Asset.style = function (link, load, error) {
        if (load === void 0) { load = undefined; }
        if (error === void 0) { error = undefined; }
        var el = document.createElement('link');
        $.extend(el, {
            href: link, rel: 'stylesheet'
        });
        $.extend(el, {
            onload: function () {
                load ? load.call({}, link) :
                    Asset.loadFallback.call({}, link);
            },
            onerror: function () {
                error ? error.call({}, link) :
                    Asset.errorFallback.call({}, link);
            }
        });
        document.getElementsByTagName("head")[0].append(el);
        return this;
    };
    return Asset;
}());
exports.default = Asset;


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
        return this;
    };
    /**
     * Parse param string to object (e.g. foo: bar; test: lorem).
     */
    Element.parseParams = function (params) {
        var parsed = {};
        var result = params.match(/(^|;)(\s*[^\s]+\s*:\s*(".*?"|'.*?'|.*?)\s*)(?=(;|$))/g);
        if (result === undefined || result === null) {
            return parsed;
        }
        result.forEach(function (match) {
            // Get key and value from match
            var attribute = match.match(/^;?\s*([^\s]+)\s*:\s*(".*?"|'.*?'|.*?)\s*$/);
            // Skip if length does not match
            if (attribute.length !== 3) {
                return;
            }
            var value = attribute[2]
                .replace(/(^["']*|["']*$)/g, '');
            if (typeof value === 'string' && value.match(/^true$/i)) {
                value = true;
            }
            if (typeof value === 'string' && value.match(/^false$/i)) {
                value = false;
            }
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

/***/ "./resources/src/js/liro/Essentials/event.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Event = /** @class */ (function () {
    function Event() {
    }
    Event.bind = function (name, callback) {
        this.events.push({ name: name, callback: callback });
        return this;
    };
    Event.fire = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this.events.filter(function (item) {
            return item.name === name;
        });
        $.each(events, function (index, event) {
            var _a;
            (_a = event.callback).call.apply(_a, [{}].concat(args));
        });
        return this;
    };
    Event.clear = function (name) {
        this.events = this.events.filter(function (item) {
            return item.name !== name;
        });
        return this;
    };
    Event.events = [];
    return Event;
}());
exports.default = Event;


/***/ }),

/***/ "./resources/src/js/liro/Essentials/module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = __webpack_require__("./resources/src/js/liro/Essentials/queue.ts");
var asset_1 = __webpack_require__("./resources/src/js/liro/Essentials/asset.ts");
var Module = /** @class */ (function () {
    function Module() {
    }
    Module.bind = function (name, config) {
        this.imports[name] = _.assign({
            scripts: [], styles: [], modules: []
        }, config);
        return this;
    };
    Module.load = function (name, load, error) {
        var _this = this;
        if (load === void 0) { load = undefined; }
        if (error === void 0) { error = undefined; }
        var reload = function () {
            _this.load(name, load, error);
        };
        if (!_.has(this.imports, name)) {
            return error ? error() : error;
        }
        if (_.has(this.loaded, name)) {
            return load ? load() : load;
        }
        if (_.has(this.aborted, name)) {
            return error ? error() : error;
        }
        if (_.has(this.pending, name)) {
            return setTimeout(reload, 100);
        }
        var queue = new queue_1.default();
        queue.add(function (next) {
            _this.pending.push(name);
            next();
        });
        this.imports[name].styles.forEach(function (style) {
            queue.add(function (next) { return asset_1.default.style(style, next, error); });
        });
        this.imports[name].scripts.forEach(function (script) {
            queue.add(function (next) { return asset_1.default.script(script, next, error); });
        });
        queue.add(function (next) {
            _.pull(_this.pending, name);
            var modules = _.intersection(_.keys(_this.exports), _this.imports[name].modules);
            if (modules.length !== _this.imports[name].modules.length) {
                return error ? error() : error;
            }
            _this.loaded.push(name);
            next();
        });
        queue.add(load).run();
    };
    ;
    Module.export = function (name, data) {
        return this.exports[name] = data;
    };
    Module.import = function (name, load, error) {
        var _this = this;
        if (load === void 0) { load = undefined; }
        if (error === void 0) { error = undefined; }
        if (this.exports[name] !== undefined) {
            return load ? load(this.exports[name]) : load;
        }
        var index = _.findKey(this.imports, function (item) {
            return _.intersection(item.modules, [name]).length;
        });
        if (index === undefined) {
            return error ? error() : error;
        }
        if (this.loaded[index] !== undefined) {
            return load ? load(this.exports[name]) : load;
        }
        this.load(index, function () { return load(_this.exports[name]); }, error);
    };
    ;
    Module.imports = {};
    Module.exports = {};
    Module.pending = [];
    Module.loaded = [];
    Module.aborted = [];
    return Module;
}());
exports.default = Module;


/***/ }),

/***/ "./resources/src/js/liro/Essentials/queue.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.queueHandler = function (queue, index) {
        var _this = this;
        return function () {
            if (queue.length - 1 > index++) {
                queue[index](_this.queueHandler(queue, index));
            }
        };
    };
    Queue.prototype.clear = function () {
        this.queue = [];
        return this;
    };
    Queue.prototype.add = function (callback) {
        this.queue.push(callback);
        return this;
    };
    Queue.prototype.run = function () {
        if (this.queue.length) {
            this.queue[0](this.queueHandler(this.queue.slice(0), 0));
        }
        return this;
    };
    return Queue;
}());
exports.default = Queue;


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
var module_1 = __webpack_require__("./resources/src/js/liro/Essentials/module.ts");
var event_1 = __webpack_require__("./resources/src/js/liro/Essentials/event.ts");
var element_1 = __webpack_require__("./resources/src/js/liro/Essentials/element.ts");
var nav_1 = __webpack_require__("./resources/src/js/liro/Elements/nav.ts");
dom_1.default.ready(function () {
    __webpack_require__("./resources/src/js/liro/Extends/jquery.ts");
    module_1.default.bind('foo', {
        styles: [
        // 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'
        ],
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'
        ],
        modules: ['bar']
    });
    module_1.default.export('foo', {});
    // Module.load('foo', () => {
    //     console.log('foo loaded!');
    // }, () => {
    //     console.log('NIX OK');
    // });
    module_1.default.import('bar', function () {
        console.log('bar loaded!');
    }, function () {
        console.log('iwas ist schief gelaufen :(');
    });
    event_1.default.bind('foobar', function () {
        console.log('foobar not triggered!');
    });
    element_1.default.bind('nav', function (el, options) {
        new nav_1.default(el, options).bind();
    });
    event_1.default.clear('foobar');
    event_1.default.bind('foobar', function () {
        console.log('foobar now triggered :)');
    });
    event_1.default.fire('foobar');
    console.log('Ready!');
});


/***/ }),

/***/ "./resources/src/sass/theme/index.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/src/sass/vendor.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/src/js/liro/index.ts");
__webpack_require__("./resources/src/sass/theme/index.scss");
module.exports = __webpack_require__("./resources/src/sass/vendor.scss");


/***/ })

/******/ });