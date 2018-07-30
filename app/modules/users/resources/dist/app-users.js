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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(9);
module.exports = __webpack_require__(12);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
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
Component.options.__file = "resources/src/users/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa82dc50", Component.options)
  } else {
    hotAPI.reload("data-v-fa82dc50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
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

    props: {

        createRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        users: {
            default: function _default() {
                return this.$liro.data.get('users', []);
            },

            type: [Array, Object]
        },

        roles: {
            default: function _default() {
                return this.$liro.data.get('roles', []);
            },

            type: [Array, Object]
        },

        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        }

    },

    data: function data() {

        return {
            UsersModel: this.users
        };
    },


    methods: {
        enable: function enable(item) {
            this.$http.post(item.enable_route, {}).then(function () {
                item.state = 1;
            });
        },
        disable: function disable(item) {
            this.$http.post(item.disable_route, {}).then(function () {
                item.state = 0;
            });
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-users-index', this.default);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-helper-list", {
    attrs: { database: "users_users" },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var items = ref.items
          var pages = ref.pages
          var options = ref.options
          var order = ref.order
          var search = ref.search
          var paginate = ref.paginate
          var filter = ref.filter
          return _c(
            "div",
            {},
            [
              _c(
                "portal",
                { attrs: { to: "app-infobar-right" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: {
                        disabled: true,
                        "uk-toggle": "target: #app-module-help"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.help")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-left" } },
                [
                  _c(
                    "app-toolbar-button",
                    { attrs: { icon: "plus", href: _vm.createRoute } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.create")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-right" } },
                [
                  _c("app-list-search", {
                    attrs: {
                      columns: ["name", "email"],
                      config: options.search,
                      placeholder: _vm.$t("liro-users.form.search")
                    },
                    on: { search: search }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("portal", { attrs: { to: "app-module-help" } }, [
                _c("h1", [_vm._v(_vm._s(_vm.$t("liro-users.toolbar.help")))])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "uk-flex uk-flex-middle uk-margin-large" },
                [
                  _c("div", [
                    _c(
                      "h1",
                      { staticClass: "uk-heading-primary uk-margin-remove" },
                      [_vm._v(_vm._s(_vm.$t("liro-users.backend.users.index")))]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "uk-form uk-form-stacked" }, [
                _c(
                  "div",
                  { staticClass: "uk-table-list uk-table-list-highlight" },
                  [
                    _c("div", { staticClass: "uk-table-list-head" }, [
                      _c(
                        "div",
                        { staticClass: "uk-table-list-td uk-width-1-3" },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: { column: "name", config: options.order },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-users.form.name")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-table-list-td uk-width-1-3" },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: { column: "email", config: options.order },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-users.form.email")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-table-list-td uk-width-1-3" },
                        [
                          _c(
                            "app-list-filter",
                            {
                              attrs: {
                                column: "role_ids",
                                config: options.filter,
                                filters: _vm.roles,
                                "filters-value": "id",
                                "filters-label": "title"
                              },
                              on: { filter: filter }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-users.form.roles")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "uk-table-list-td uk-table-list-td-m uk-text-center"
                        },
                        [
                          _c(
                            "app-list-filter",
                            {
                              attrs: {
                                column: "state",
                                config: options.filter,
                                filters: _vm.states
                              },
                              on: { filter: filter }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-users.form.state")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "uk-table-list-td uk-table-list-td-m uk-text-center"
                        },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: {
                                column: "id",
                                reverse: true,
                                config: options.order
                              },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-users.form.id")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(items, function(item, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "uk-table-list-row" },
                        [
                          _c(
                            "div",
                            { staticClass: "uk-table-list-td uk-width-1-3" },
                            [
                              _c("a", { attrs: { href: item.edit_route } }, [
                                _vm._v(_vm._s(item.name))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-table-list-td uk-width-1-3" },
                            [_c("span", [_vm._v(_vm._s(item.email))])]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-table-list-td uk-width-1-3" },
                            [
                              _c(
                                "ul",
                                {
                                  staticClass: "uk-list-inline uk-margin-remove"
                                },
                                _vm._l(
                                  _vm.$liro.func.map(
                                    item.role_ids,
                                    "id",
                                    _vm.roles
                                  ),
                                  function(role) {
                                    return _c("li", { key: role.id }, [
                                      _c(
                                        "a",
                                        { attrs: { href: role.edit_route } },
                                        [_vm._v(_vm._s(role.title))]
                                      )
                                    ])
                                  }
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "uk-table-list-td uk-table-list-td-m uk-text-center"
                            },
                            [
                              _c("app-list-state", {
                                attrs: { active: item.state == 1 },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    item.state == 1
                                      ? _vm.disable(item)
                                      : _vm.enable(item)
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "uk-table-list-td uk-table-list-td-m uk-text-center"
                            },
                            [_c("span", [_vm._v(_vm._s(item.id))])]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    items.length == 0
                      ? _c("div", { staticClass: "uk-table-list-empty" }, [
                          _c("span", [
                            _vm._v(_vm._s(_vm.$t("liro-users.form.empty")))
                          ])
                        ])
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "uk-table-list-pagination" },
                  [
                    _c("app-list-pagination", {
                      attrs: { pages: pages, config: options.paginate },
                      on: { paginate: paginate }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.UsersModel,
      callback: function($$v) {
        _vm.UsersModel = $$v
      },
      expression: "UsersModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fa82dc50", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(11)
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
Component.options.__file = "resources/src/users/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06701834", Component.options)
  } else {
    hotAPI.reload("data-v-06701834", Component.options)
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        createRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        indexRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        user: {
            default: function _default() {
                return this.$liro.data.get('user', {});
            },

            type: Object
        },

        roles: {
            default: function _default() {
                return this.$liro.data.get('roles', []);
            },

            type: [Array, Object]
        },

        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        }

    },

    data: function data() {

        return {
            UserModel: this.user
        };
    },


    methods: {
        create: function create() {
            this.$http.post(this.createRoute, this.UserModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-users-create', this.default);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-helper-history", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var item = ref.item
          var canUndo = ref.canUndo
          var canRedo = ref.canRedo
          var undo = ref.undo
          var redo = ref.redo
          var reset = ref.reset
          return _c(
            "div",
            {},
            [
              _c(
                "portal",
                { attrs: { to: "app-infobar-right" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: {
                        disabled: true,
                        "uk-toggle": "target: #app-module-help"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.help")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-left" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { icon: "check" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.create()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.create")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    { attrs: { icon: "close", href: _vm.indexRoute } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.close")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("app-toolbar-spacer"),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canUndo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          undo()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.undo")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canRedo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          redo()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.redo")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-right" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canUndo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          reset()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.discard")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("portal", { attrs: { to: "app-module-help" } }, [
                _c("h1", [_vm._v("Help")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-margin-large" }, [
                _c(
                  "h1",
                  { staticClass: "uk-heading-primary uk-margin-remove" },
                  [_vm._v(_vm._s(_vm.$t("liro-users.backend.users.create")))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-form uk-form-stacked" }, [
                _c(
                  "fieldset",
                  { staticClass: "uk-fieldset" },
                  [
                    _c("app-form-input", {
                      attrs: {
                        name: "name",
                        rules: "required|min:4",
                        label: _vm.$t("liro-users.form.name")
                      },
                      model: {
                        value: item.name,
                        callback: function($$v) {
                          _vm.$set(item, "name", $$v)
                        },
                        expression: "item.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select", {
                      attrs: {
                        name: "state",
                        options: _vm.states,
                        label: _vm.$t("liro-users.form.state"),
                        placeholder: _vm.$t("liro-users.placeholder.state")
                      },
                      model: {
                        value: item.state,
                        callback: function($$v) {
                          _vm.$set(item, "state", $$v)
                        },
                        expression: "item.state"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select-multiple", {
                      attrs: {
                        name: "role_ids",
                        options: _vm.roles,
                        "option-label": "title",
                        "option-value": "id",
                        label: _vm.$t("liro-users.form.roles"),
                        placeholder: _vm.$t("liro-users.placeholder.roles")
                      },
                      model: {
                        value: item.role_ids,
                        callback: function($$v) {
                          _vm.$set(item, "role_ids", $$v)
                        },
                        expression: "item.role_ids"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-input", {
                      attrs: {
                        type: "email",
                        name: "email",
                        rules: "required|email",
                        label: _vm.$t("liro-users.form.email")
                      },
                      model: {
                        value: item.email,
                        callback: function($$v) {
                          _vm.$set(item, "email", $$v)
                        },
                        expression: "item.email"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-password", {
                      attrs: {
                        name: "password",
                        rules: "min:6",
                        label: _vm.$t("liro-users.form.password"),
                        generate: _vm.$t("liro-users.form.generate")
                      },
                      model: {
                        value: item.password,
                        callback: function($$v) {
                          _vm.$set(item, "password", $$v)
                        },
                        expression: "item.password"
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.UserModel,
      callback: function($$v) {
        _vm.UserModel = $$v
      },
      expression: "UserModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06701834", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(13)
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
Component.options.__file = "resources/src/users/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7df7f674", Component.options)
  } else {
    hotAPI.reload("data-v-7df7f674", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
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

    props: {

        indexRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        user: {
            default: function _default() {
                return this.$liro.data.get('user', {});
            },

            type: Object
        },

        roles: {
            default: function _default() {
                return this.$liro.data.get('roles', []);
            },

            type: [Array, Object]
        },

        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        }

    },

    data: function data() {

        return {
            UserModel: this.user
        };
    },


    methods: {
        edit: function edit() {
            this.$http.post(this.UserModel.edit_route, this.UserModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-users-edit', this.default);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-helper-history", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var item = ref.item
          var canUndo = ref.canUndo
          var canRedo = ref.canRedo
          var undo = ref.undo
          var redo = ref.redo
          var reset = ref.reset
          return _c(
            "div",
            {},
            [
              _c(
                "portal",
                { attrs: { to: "app-infobar-right" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: {
                        disabled: true,
                        "uk-toggle": "target: #app-module-help"
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.help")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-left" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { icon: "check" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.edit()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.save")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    { attrs: { icon: "close", href: _vm.indexRoute } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.close")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("app-toolbar-spacer"),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canUndo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          undo()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.undo")) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canRedo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          redo()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.redo")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "app-toolbar-right" } },
                [
                  _c(
                    "app-toolbar-button",
                    {
                      attrs: { disabled: !canUndo },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          reset()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-users.toolbar.discard")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("portal", { attrs: { to: "app-module-help" } }, [
                _c("h1", [_vm._v("Help")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-margin-large" }, [
                _c(
                  "h1",
                  { staticClass: "uk-heading-primary uk-margin-remove" },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("liro-users.backend.users.edit")) +
                        "\n            "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "uk-form uk-form-stacked" }, [
                _c(
                  "fieldset",
                  { staticClass: "uk-fieldset" },
                  [
                    _c("app-form-input", {
                      attrs: {
                        name: "name",
                        rules: "required|min:4",
                        label: _vm.$t("liro-users.form.name")
                      },
                      model: {
                        value: item.name,
                        callback: function($$v) {
                          _vm.$set(item, "name", $$v)
                        },
                        expression: "item.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select", {
                      attrs: {
                        name: "state",
                        options: _vm.states,
                        label: _vm.$t("liro-users.form.state"),
                        placeholder: _vm.$t("liro-users.placeholder.state")
                      },
                      model: {
                        value: item.state,
                        callback: function($$v) {
                          _vm.$set(item, "state", $$v)
                        },
                        expression: "item.state"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select-multiple", {
                      attrs: {
                        name: "role_ids",
                        options: _vm.roles,
                        "option-label": "title",
                        "option-value": "id",
                        label: _vm.$t("liro-users.form.roles"),
                        placeholder: _vm.$t("liro-users.placeholder.roles")
                      },
                      model: {
                        value: item.role_ids,
                        callback: function($$v) {
                          _vm.$set(item, "role_ids", $$v)
                        },
                        expression: "item.role_ids"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-input", {
                      attrs: {
                        user: "email",
                        name: "email",
                        rules: "required|email",
                        label: _vm.$t("liro-users.form.email")
                      },
                      model: {
                        value: item.email,
                        callback: function($$v) {
                          _vm.$set(item, "email", $$v)
                        },
                        expression: "item.email"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-media-browser", {
                      attrs: { label: _vm.$t("liro-users.form.image") },
                      model: {
                        value: item.image,
                        callback: function($$v) {
                          _vm.$set(item, "image", $$v)
                        },
                        expression: "item.image"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-password", {
                      attrs: {
                        name: "password",
                        rules: "min:6",
                        label: _vm.$t("liro-users.form.password"),
                        generate: _vm.$t("liro-users.form.generate")
                      },
                      model: {
                        value: item.password,
                        callback: function($$v) {
                          _vm.$set(item, "password", $$v)
                        },
                        expression: "item.password"
                      }
                    })
                  ],
                  1
                )
              ])
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.UserModel,
      callback: function($$v) {
        _vm.UserModel = $$v
      },
      expression: "UserModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7df7f674", module.exports)
  }
}

/***/ })
/******/ ]);