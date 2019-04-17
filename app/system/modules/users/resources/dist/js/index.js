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

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/src/ts/auth/auth-login.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    email: '', password: '', remember: false
};
var errors = {
    email: null, password: null
};
exports.default = {
    data: function () {
        return {
            load: false, user: user, error: errors
        };
    },
    methods: {
        authUser: function () {
            this.ux.ajax.call(['auth-login', 'auth'], true, this.user)
                .then(this.authUserDone, this.authUserError);
        },
        authUserDone: function (res) {
            this.$router.push({ path: '/' });
        },
        authUserError: function (res) {
            this.error = $.extend({}, errors, res.data.errors);
        }
    }
};


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/src/ts/controllers/foo.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mounted: function () {
        console.log('foobar');
    },
    data: function () {
        return { test: 'jajajaja!' };
    },
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08d8ca7e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/src/ts/controllers/foo.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", [_vm._v("FOOOOOOO BBBBAAAAARRR")]),
    _vm._v(" "),
    _c("p", { domProps: { innerHTML: _vm._s(_vm.test) } })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-08d8ca7e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0a535afe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/src/ts/auth/auth-login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-users-auth-login" },
    [
      _c(
        "el-form",
        {
          staticClass: "login__form",
          attrs: { "label-position": "top", model: _vm.user },
          nativeOn: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.authUser($event)
            }
          }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "email",
                label: _vm.trans("liro-users::form.auth.email"),
                error: _vm.error.email
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "password",
                label: _vm.trans("liro-users::form.auth.password"),
                error: _vm.error.password
              }
            },
            [
              _c("el-input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.user.password,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "password", $$v)
                  },
                  expression: "user.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-form-item", [
            _c("div", { staticClass: "grid grid--row grid--middle" }, [
              _c(
                "div",
                { staticClass: "col col--left" },
                [
                  _c(
                    "el-checkbox",
                    {
                      model: {
                        value: _vm.user.remember,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "remember", $$v)
                        },
                        expression: "user.remember"
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.trans("liro-users::form.auth.remember_me")
                          ) +
                          "\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col col--right" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.trans("liro-users::form.auth.password_forget")
                      ) +
                      "\n                    "
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticClass: "login__submit",
                  attrs: { type: "primary", "native-type": "submit" }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("liro-users::form.auth.login")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a535afe", module.exports)
  }
}

/***/ }),

/***/ "./resources/src/ts/ajax/auth.ts":
/***/ (function(module, exports) {

ux.ajax.bind('auth-login', function (ajax, query) {
    var route = ux.route.get('liro-users.ajax.auth.login');
    return ajax.post(route, query);
});
ux.ajax.bind('auth-logout', function (ajax, query) {
    var route = ux.route.get('liro-users.ajax.auth.logout');
    return ajax.post(route, query);
});


/***/ }),

/***/ "./resources/src/ts/auth/auth-login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/src/ts/auth/auth-login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0a535afe\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/src/ts/auth/auth-login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/src/ts/auth/auth-login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a535afe", Component.options)
  } else {
    hotAPI.reload("data-v-0a535afe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/src/ts/controllers/foo.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/src/ts/controllers/foo.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08d8ca7e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/src/ts/controllers/foo.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/src/ts/controllers/foo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08d8ca7e", Component.options)
  } else {
    hotAPI.reload("data-v-08d8ca7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/src/ts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/src/ts/ajax/auth.ts");
var UserIndex = __webpack_require__("./resources/src/ts/controllers/foo.vue");
ux.ext.export('liro-users-user-index', UserIndex);
var AuthLogin = __webpack_require__("./resources/src/ts/auth/auth-login.vue");
ux.ext.export('liro-users-auth-login', AuthLogin);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/src/ts/index.ts");


/***/ })

/******/ });