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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(5);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
/* template */
var __vue_template__ = __webpack_require__(4)
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
Component.options.__file = "resources/src/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-761a4485", Component.options)
  } else {
    hotAPI.reload("data-v-761a4485", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        return {
            user: {
                email: '', password: ''
            }
        };
    },

    methods: {

        authUser: function authUser() {
            var url = Liro.routes.get('liro-users.ajax.auth.login');
            Axios.post(url, this.user).then(this.authUserResponse, this.authUserError);
        },

        authUserError: function authUserError(res) {
            var _this = this;

            setTimeout(function () {
                $(_this.$refs.form).removeClass('uk-animation-shake');
            }, 1000);

            $(this.$refs.form).addClass('uk-animation-shake');
        },

        authUserResponse: function authUserResponse(res) {
            Liro.routes.redirect(res.data.redirect, null, null);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-auth-login', this.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "form", staticClass: "liro-auth-login" }, [
    _c(
      "form",
      {
        staticClass: "uk-form uk-margin-remove",
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.authUser($event)
          }
        }
      },
      [
        _c("div", { staticClass: "uk-margin-bottom" }, [
          _c("div", { staticClass: "uk-flex" }, [
            _c(
              "label",
              { staticClass: "uk-form-label", attrs: { for: "email" } },
              [
                _vm._v(
                  _vm._s(_vm.Liro.messages.get("liro-users::form.auth.email"))
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-form-controls" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.email,
                  expression: "user.email"
                }
              ],
              staticClass: "uk-input",
              attrs: { id: "email", type: "email", name: "email" },
              domProps: { value: _vm.user.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-margin-bottom" }, [
          _c("div", { staticClass: "uk-flex" }, [
            _c(
              "label",
              {
                staticClass: "uk-form-label uk-margin-auto-right",
                attrs: { for: "password" }
              },
              [
                _vm._v(
                  _vm._s(
                    _vm.Liro.messages.get("liro-users::form.auth.password")
                  )
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "uk-form-label-link", attrs: { href: "#" } },
              [
                _vm._v(
                  _vm._s(
                    _vm.Liro.messages.get(
                      "liro-users::form.auth.password_forget"
                    )
                  )
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-form-controls" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user.password,
                  expression: "user.password"
                }
              ],
              staticClass: "uk-input",
              attrs: { id: "password", type: "password", name: "password" },
              domProps: { value: _vm.user.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "password", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-form-controls" }, [
          _c(
            "button",
            {
              staticClass: "uk-button uk-button-primary uk-width-1-1",
              attrs: { type: "submit" }
            },
            [
              _c("i", { attrs: { "uk-icon": "key" } }),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  _vm._s(_vm.Liro.messages.get("liro-users::form.auth.login"))
                )
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-761a4485", module.exports)
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(6)
/* template */
var __vue_template__ = __webpack_require__(7)
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
Component.options.__file = "resources/src/auth/modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5de90dc9", Component.options)
  } else {
    hotAPI.reload("data-v-5de90dc9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        return {
            user: {
                email: '', password: ''
            }
        };
    },

    mounted: function mounted() {
        // Refresh token everey 30 minutes
        setInterval(this.refreshToken, 1000 * 60 * 30);

        // Show login form after 60 minutes
        setInterval(this.showModal, 1000 * 60 * 60);
    },

    methods: {

        showModal: function showModal() {
            UIkit.modal(this.$refs.modal).show();
        },

        authUser: function authUser() {
            var url = Liro.routes.get('liro-users.ajax.auth.login');
            Axios.post(url, this.user).then(this.authUserResponse, this.authUserError);
        },

        authUserResponse: function authUserResponse(res) {
            UIkit.modal(this.$refs.modal).hide();
        },

        authUserError: function authUserError(res) {
            var _this = this;

            setTimeout(function () {
                $(_this.$refs.form).removeClass('uk-animation-shake');
            }, 1000);

            $(this.$refs.form).addClass('uk-animation-shake');
        },

        refreshToken: function refreshToken() {
            var url = Liro.routes.get('liro-users.ajax.auth.token');
            Axios.post(url, this.user).then(this.refreshTokenResponse);
        },

        refreshTokenResponse: function refreshTokenResponse(res) {
            $('meta[csrf-token]').attr('content', res.data.token);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-auth-modal', this.default);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "liro-auth-modal",
      attrs: {
        "uk-modal": "esc-close: false; bg-close: false; container: false;"
      }
    },
    [
      _c(
        "div",
        { staticClass: "uk-modal-dialog uk-margin-auto-vertical uk-padding" },
        [
          _c(
            "form",
            {
              ref: "form",
              staticClass: "uk-form uk-margin-remove",
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.authUser($event)
                }
              }
            },
            [
              _c("div", { staticClass: "uk-margin-bottom" }, [
                _c(
                  "label",
                  { staticClass: "uk-form-label", attrs: { for: "email" } },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.Liro.messages.get("liro-users::form.auth.email")
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "uk-form-controls" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.email,
                        expression: "user.email"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: { id: "email", type: "email", name: "email" },
                    domProps: { value: _vm.user.email },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-margin-bottom" }, [
                _c(
                  "label",
                  { staticClass: "uk-form-label", attrs: { for: "password" } },
                  [
                    _vm._v(
                      _vm._s(
                        _vm.Liro.messages.get("liro-users::form.auth.password")
                      )
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "uk-form-controls" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.password,
                        expression: "user.password"
                      }
                    ],
                    staticClass: "uk-input",
                    attrs: {
                      id: "password",
                      type: "password",
                      name: "password"
                    },
                    domProps: { value: _vm.user.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "password", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-form-controls" }, [
                _c(
                  "button",
                  {
                    staticClass: "uk-button uk-button-primary uk-width-1-1",
                    attrs: { type: "submit" }
                  },
                  [
                    _c("i", { attrs: { "uk-icon": "key" } }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.Liro.messages.get("liro-users::form.auth.login")
                        )
                      )
                    ])
                  ]
                )
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5de90dc9", module.exports)
  }
}

/***/ })
/******/ ]);