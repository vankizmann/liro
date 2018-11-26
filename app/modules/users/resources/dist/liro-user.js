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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
__webpack_require__(15);
module.exports = __webpack_require__(18);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(14)
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
Component.options.__file = "resources/src/user/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b72c05e", Component.options)
  } else {
    hotAPI.reload("data-v-5b72c05e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_item__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_item__);
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
            states: this.Liro.data.get('states'),
            roles: this.Liro.data.get('roles'),
            users: this.Liro.data.get('users')
        };
    }

});

if (window.Liro) {
    Liro.vue.component('liro-user-index', this.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(12)
/* template */
var __vue_template__ = __webpack_require__(13)
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
Component.options.__file = "resources/src/user/index/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7faf3bc1", Component.options)
  } else {
    hotAPI.reload("data-v-7faf3bc1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        updateUser: function updateUser() {

            var url = Liro.routes.get('liro-users.user.edit', {
                user: this.value.id
            });

            var user = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, user).then(this.updateUserResponse);
        },

        updateUserResponse: function updateUserResponse(res) {

            var message = Liro.messages.get('liro-users::message.user.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-user-index-item', this.default);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tr", [
    _c(
      "td",
      { staticClass: "uk-text-center" },
      [
        _c("app-list-switch", {
          staticClass: "is-state",
          attrs: { active: _vm.value.state },
          on: { click: _vm.updateUser }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("td", [
      _c(
        "a",
        {
          attrs: {
            href: _vm.Liro.routes.get("liro-users.user.edit", {
              user: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.name) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("td", [
      _c("span", [
        _vm._v("\n            " + _vm._s(_vm.value.email) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c(
      "td",
      _vm._l(
        _vm.Liro.helpers.map(
          _vm.value.role_ids,
          "id",
          _vm.$parent.$parent.roles
        ),
        function(role, index) {
          return _c(
            "span",
            { key: index, staticClass: "uk-label uk-margin-small-right" },
            [_vm._v("\n            " + _vm._s(role.title) + "\n        ")]
          )
        }
      )
    ),
    _vm._v(" "),
    _c("td", { staticClass: "uk-text-center" }, [
      _c("span", [
        _vm._v("\n            " + _vm._s(_vm.value.id) + "\n        ")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7faf3bc1", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-list", {
    staticClass: "liro-user-index",
    attrs: { database: "users.user.index" },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var items = ref.items
          var pages = ref.pages
          var config = ref.config
          var order = ref.order
          var search = ref.search
          var paginate = ref.paginate
          var filter = ref.filter
          return _c(
            "div",
            {},
            [
              _c("portal", { attrs: { to: "app-toolbar" } }, [
                _c("div", { staticClass: "uk-navbar-item" }, [
                  _c(
                    "a",
                    {
                      staticClass: "uk-button uk-button-primary",
                      attrs: {
                        href: _vm.Liro.routes.get("liro-users.user.create")
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.Liro.messages.get(
                              "liro-users::module.user.create"
                            )
                          ) +
                          "\n                "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "th-form is-table" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "uk-table uk-table-divider uk-table-middle uk-margin-remove-bottom"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c(
                          "th",
                          { staticClass: "uk-width-small uk-text-center" },
                          [
                            _c(
                              "app-list-filter",
                              {
                                attrs: {
                                  column: "state",
                                  config: config.filter,
                                  filters: _vm.states
                                },
                                on: { filter: filter }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-users::form.user.state"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: { column: "name", config: config.order },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-users::form.user.name"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: {
                                  column: "email",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-users::form.user.email"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-filter",
                              {
                                attrs: {
                                  column: "role_ids",
                                  config: config.filter,
                                  filters: _vm.roles,
                                  "filters-value": "id",
                                  "filters-label": "title"
                                },
                                on: { filter: filter }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-users::form.user.role"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          { staticClass: "uk-width-small uk-text-center" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: { column: "id", config: config.order },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-users::form.user.id"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    items.length != 0
                      ? _c(
                          "tbody",
                          _vm._l(items, function(item, index) {
                            return _c("liro-user-index-item", {
                              key: index,
                              attrs: { value: item }
                            })
                          })
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    items.length == 0
                      ? _c("tbody", [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "uk-text-center",
                                attrs: { colspan: "5" }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "theme::form.list.empty"
                                      )
                                    ) +
                                    "\n                        "
                                )
                              ]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("tfoot", [
                      _c("tr", [
                        _c(
                          "td",
                          { attrs: { colspan: "5" } },
                          [
                            _c("app-list-pagination", {
                              attrs: { pages: pages, config: config.paginate },
                              on: { paginate: paginate }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.users,
      callback: function($$v) {
        _vm.users = $$v
      },
      expression: "users"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5b72c05e", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
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
Component.options.__file = "resources/src/user/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c37cb5e6", Component.options)
  } else {
    hotAPI.reload("data-v-c37cb5e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            roles: this.Liro.data.get('roles'),
            user: this.Liro.data.get('user')
        };
    },


    methods: {

        storeUser: function storeUser() {
            var url = Liro.routes.get('liro-users.user.create');
            Axios.post(url, this.user).then(this.storeUserResponse);
        },

        storeUserResponse: function storeUserResponse(res) {

            var values = {
                user: res.data.user.id
            };

            var query = {
                success: 'liro-users::message.user.created'
            };

            Liro.routes.redirect('liro-users.user.edit', values, query);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-user-create', this.default);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-user-create" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.Liro.routes.get("liro-users.user.index") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.Liro.messages.get("theme::form.toolbar.close")) +
                  "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              directives: [
                {
                  name: "shortkey",
                  rawName: "v-shortkey",
                  value: ["meta", "s"],
                  expression: "['meta', 's']"
                }
              ],
              staticClass: "uk-button uk-button-success uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.storeUser, shortkey: _vm.storeUser }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.Liro.messages.get("theme::form.toolbar.save")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "th-form" },
        [
          _c("app-form-select", {
            attrs: {
              name: "state",
              options: _vm.states,
              label: _vm.Liro.messages.get("liro-users::form.user.state"),
              placeholder: _vm.Liro.messages.get(
                "liro-users::form.user.select_state"
              )
            },
            model: {
              value: _vm.user.state,
              callback: function($$v) {
                _vm.$set(_vm.user, "state", $$v)
              },
              expression: "user.state"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              name: "role_ids",
              options: _vm.roles,
              multiple: true,
              "options-label": "title",
              "options-value": "id",
              label: _vm.Liro.messages.get("liro-users::form.user.role"),
              placeholder: _vm.Liro.messages.get(
                "liro-users::form.user.select_role"
              )
            },
            model: {
              value: _vm.user.role_ids,
              callback: function($$v) {
                _vm.$set(_vm.user, "role_ids", $$v)
              },
              expression: "user.role_ids"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "name",
              label: _vm.Liro.messages.get("liro-users::form.user.name")
            },
            model: {
              value: _vm.user.name,
              callback: function($$v) {
                _vm.$set(_vm.user, "name", $$v)
              },
              expression: "user.name"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "email",
              label: _vm.Liro.messages.get("liro-users::form.user.email")
            },
            model: {
              value: _vm.user.email,
              callback: function($$v) {
                _vm.$set(_vm.user, "email", $$v)
              },
              expression: "user.email"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              type: "password",
              name: "password",
              label: _vm.Liro.messages.get("liro-users::form.user.password")
            },
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
    require("vue-hot-reload-api")      .rerender("data-v-c37cb5e6", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(19)
/* template */
var __vue_template__ = __webpack_require__(20)
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
Component.options.__file = "resources/src/user/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04a9c55b", Component.options)
  } else {
    hotAPI.reload("data-v-04a9c55b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            roles: this.Liro.data.get('roles'),
            user: this.Liro.data.get('user')
        };
    },


    methods: {

        updateUser: function updateUser() {

            var url = Liro.routes.get('liro-users.user.edit', {
                user: this.user.id
            });

            Axios.post(url, this.user).then(this.updateUserResponse);
        },

        updateUserResponse: function updateUserResponse(res) {
            var message = Liro.messages.get('liro-users::message.user.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-user-edit', this.default);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-user-edit" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.Liro.routes.get("liro-users.user.index") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.Liro.messages.get("theme::form.toolbar.close")) +
                  "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              directives: [
                {
                  name: "shortkey",
                  rawName: "v-shortkey",
                  value: ["meta", "s"],
                  expression: "['meta', 's']"
                }
              ],
              staticClass: "uk-button uk-button-success uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.updateUser, shortkey: _vm.updateUser }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.Liro.messages.get("theme::form.toolbar.save")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "th-form" },
        [
          _c("app-form-select", {
            attrs: {
              name: "state",
              options: _vm.states,
              label: _vm.Liro.messages.get("liro-users::form.user.state"),
              placeholder: _vm.Liro.messages.get(
                "liro-users::form.user.select_state"
              )
            },
            model: {
              value: _vm.user.state,
              callback: function($$v) {
                _vm.$set(_vm.user, "state", $$v)
              },
              expression: "user.state"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              name: "role_ids",
              options: _vm.roles,
              multiple: true,
              "options-label": "title",
              "options-value": "id",
              label: _vm.Liro.messages.get("liro-users::form.user.role"),
              placeholder: _vm.Liro.messages.get(
                "liro-users::form.user.select_role"
              )
            },
            model: {
              value: _vm.user.role_ids,
              callback: function($$v) {
                _vm.$set(_vm.user, "role_ids", $$v)
              },
              expression: "user.role_ids"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "name",
              label: _vm.Liro.messages.get("liro-users::form.user.name")
            },
            model: {
              value: _vm.user.name,
              callback: function($$v) {
                _vm.$set(_vm.user, "name", $$v)
              },
              expression: "user.name"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "email",
              label: _vm.Liro.messages.get("liro-users::form.user.email")
            },
            model: {
              value: _vm.user.email,
              callback: function($$v) {
                _vm.$set(_vm.user, "email", $$v)
              },
              expression: "user.email"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              type: "password",
              name: "password",
              label: _vm.Liro.messages.get("liro-users::form.user.password")
            },
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
    require("vue-hot-reload-api")      .rerender("data-v-04a9c55b", module.exports)
  }
}

/***/ })
/******/ ]);