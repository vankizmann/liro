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
Component.options.__file = "resources\\src\\app-users-index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-213f3154", Component.options)
  } else {
    hotAPI.reload("data-v-213f3154", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {

    name: 'app-users-index',

    computed: {
        list: function list() {
            return this.$store.getters['list/get'];
        }
    },

    props: {
        createRoute: {
            default: '',
            type: String
        },
        roles: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        users: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled') }, { value: 0, label: this.$t('liro-users.form.disabled') }];
            },

            type: Array
        }
    },

    mounted: function mounted() {
        this.$store.commit('list/init', this.users);
    }
};
liro.component(module.exports);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-form uk-form-stacked" },
    [
      _c(
        "portal",
        { attrs: { to: "app-infobar-action" } },
        [
          _c(
            "app-toolbar-link",
            {
              staticClass: "uk-icon-success",
              attrs: { icon: "fa fa-plus", href: _vm.createRoute }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.create")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-link",
            {
              attrs: {
                icon: "fa fa-info-circle",
                href: "#",
                "uk-toggle": "target: #app-module-help"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.help")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "app-module-help" } }, [
        _c("h1", [_vm._v(_vm._s(_vm.$t("liro-users.toolbar.help")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-flex uk-flex-middle uk-margin-bottom" }, [
        _c("div", [
          _c("h1", { staticClass: "uk-text-lead uk-margin-remove" }, [
            _vm._v(_vm._s(_vm.$t("liro-users.backend.users.index")))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { width: "300px", "margin-left": "auto" } },
          [
            _c("app-list-search", {
              attrs: {
                columns: ["name", "email"],
                placeholder: _vm.$t("liro-users.form.search")
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-table-list" },
        [
          _c("div", { staticClass: "uk-table-list-head" }, [
            _c(
              "div",
              { staticClass: "uk-table-list-td uk-width-1-3" },
              [
                _c("app-list-sort", { attrs: { column: "name" } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("liro-users.form.name")) +
                      "\n                "
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "uk-table-list-td uk-width-1-3" },
              [
                _c("app-list-sort", { attrs: { column: "email" } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("liro-users.form.email")) +
                      "\n                "
                  )
                ])
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
                      filters: _vm.roles,
                      "filters-value": "id",
                      "filters-label": "title",
                      reset: _vm.$t("liro-users.form.reset")
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("liro-users.form.roles")) +
                        "\n                "
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
                      reset: _vm.$t("liro-users.form.reset"),
                      filters: _vm.states
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("liro-users.form.state")) +
                        "\n                "
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
                  "uk-table-list-td uk-table-list-td-s uk-text-center"
              },
              [
                _c(
                  "app-list-sort",
                  { attrs: { column: "id", reverse: true } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("liro-users.form.id")) +
                        "\n                "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.list, function(user) {
            return _vm.list.length != 0
              ? _c("div", { key: user.id, staticClass: "uk-table-list-row" }, [
                  _c("div", { staticClass: "uk-table-list-td uk-width-1-3" }, [
                    _c("a", { attrs: { href: user.edit_route } }, [
                      _vm._v(_vm._s(user.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-table-list-td uk-width-1-3" }, [
                    _c("span", [_vm._v(_vm._s(user.email))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-table-list-td uk-width-1-3" }, [
                    _c(
                      "ul",
                      { staticClass: "uk-list-inline uk-margin-remove" },
                      _vm._l(
                        _vm.$liro.func.map(user.role_ids, "id", _vm.roles),
                        function(role) {
                          return _c("li", { key: role.id }, [
                            _c("a", { attrs: { href: role.edit_route } }, [
                              _vm._v(_vm._s(role.title))
                            ])
                          ])
                        }
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "uk-table-list-td uk-table-list-td-m uk-text-center"
                    },
                    [
                      _c("app-list-state", {
                        attrs: {
                          active: user.state == 1,
                          href:
                            user.state == 1
                              ? user.disable_route
                              : user.enable_route
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
                        "uk-table-list-td uk-table-list-td-s uk-text-center"
                    },
                    [_c("span", [_vm._v(_vm._s(user.id))])]
                  )
                ])
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.list.length == 0
            ? _c(
                "div",
                {
                  staticClass: "uk-table-list-empty uk-padding uk-text-center"
                },
                [_c("span", [_vm._v(_vm._s(_vm.$t("users.form.empty")))])]
              )
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-table-list-pagination uk-margin" },
        [_c("app-list-pagination")],
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
    require("vue-hot-reload-api")      .rerender("data-v-213f3154", module.exports)
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
Component.options.__file = "resources\\src\\app-users-create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e5b43ea", Component.options)
  } else {
    hotAPI.reload("data-v-2e5b43ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {

    name: 'app-users-create',

    computed: {
        canUndo: function canUndo() {
            return this.$store.getters['history/canUndo'];
        },
        canRedo: function canRedo() {
            return this.$store.getters['history/canRedo'];
        }
    },

    props: {
        createRoute: {
            default: '',
            type: String
        },
        indexRoute: {
            default: '',
            type: String
        },
        roles: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        user: {
            default: function _default() {
                return {};
            },

            type: Object
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
            disabled: false,
            item: this.user
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('user.undo', function () {
            _this.item = _this.$store.state.history.undo();
        });

        this.$liro.listen('user.redo', function () {
            _this.item = _this.$store.state.history.redo();
        });

        this.$liro.listen('user.reset', function () {
            _this.item = _this.$store.state.history.reset();
        });

        this.$liro.listen('user.create', function () {
            _this.$http.post(_this.createRoute, _this.item);
        });

        this.$liro.listen('ajax.load', function () {
            _this.disabled = true;
        });

        this.$liro.listen('ajax.error', function () {
            _this.disabled = false;
        });
    },


    methods: {
        create: function create() {
            if (this.$store.state.history.preventer()) {
                this.$store.commit('history/save', this.item);
            }
        }
    }

};
liro.component(module.exports);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-form uk-form-stacked" },
    [
      _c(
        "portal",
        { attrs: { to: "app-infobar-action" } },
        [
          _c(
            "app-toolbar-link",
            {
              attrs: {
                icon: "fa fa-info-circle",
                href: "#",
                "uk-toggle": "target: #app-module-help"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.help")) +
                  "\n        "
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
            "app-toolbar-event",
            {
              staticClass: "uk-icon-success",
              attrs: {
                icon: "fa fa-check",
                event: "user.create",
                disabled: _vm.disabled
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.create")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-link",
            {
              staticClass: "uk-icon-danger",
              attrs: {
                icon: "fa fa-times",
                href: _vm.indexRoute,
                disabled: _vm.disabled
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.close")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c("app-toolbar-spacer"),
          _vm._v(" "),
          _c(
            "app-toolbar-event",
            {
              attrs: {
                icon: "fa fa-undo",
                event: "user.undo",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.undo")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-event",
            {
              attrs: {
                icon: "fa fa-redo",
                event: "user.redo",
                disabled: !_vm.canRedo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.redo")) +
                  "\n        "
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
            "app-toolbar-event",
            {
              staticClass: "uk-icon-danger",
              attrs: {
                icon: "fa fa-ban",
                event: "user.reset",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.discard")) +
                  "\n        "
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
      _c("div", { staticClass: "uk-margin-bottom" }, [
        _c("h1", { staticClass: "uk-text-lead uk-margin-remove" }, [
          _vm._v(_vm._s(_vm.$t("liro-users.backend.users.create")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "fieldset",
        { staticClass: "uk-fieldset" },
        [
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.name"),
              type: "text",
              id: "name",
              name: "name",
              rules: "required|min:4"
            },
            model: {
              value: _vm.item.name,
              callback: function($$v) {
                _vm.$set(_vm.item, "name", $$v)
              },
              expression: "item.name"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              label: _vm.$t("liro-users.form.state"),
              id: "state",
              name: "state",
              options: _vm.states,
              placeholder: _vm.$t("liro-users.placeholder.state")
            },
            model: {
              value: _vm.item.state,
              callback: function($$v) {
                _vm.$set(_vm.item, "state", $$v)
              },
              expression: "item.state"
            }
          }),
          _vm._v(" "),
          _c("app-form-select-multiple", {
            attrs: {
              label: _vm.$t("liro-users.form.roles"),
              id: "role_ids",
              name: "role_ids",
              options: _vm.roles,
              "option-label": "title",
              "option-value": "id",
              placeholder: _vm.$t("liro-users.placeholder.roles")
            },
            model: {
              value: _vm.item.role_ids,
              callback: function($$v) {
                _vm.$set(_vm.item, "role_ids", $$v)
              },
              expression: "item.role_ids"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.email"),
              type: "email",
              id: "email",
              name: "email",
              rules: "required|email"
            },
            model: {
              value: _vm.item.email,
              callback: function($$v) {
                _vm.$set(_vm.item, "email", $$v)
              },
              expression: "item.email"
            }
          }),
          _vm._v(" "),
          _c("app-form-password", {
            attrs: {
              label: _vm.$t("liro-users.form.password"),
              id: "password",
              name: "password",
              rules: "min:6",
              generate: _vm.$t("liro-users.form.generate")
            },
            model: {
              value: _vm.item.password,
              callback: function($$v) {
                _vm.$set(_vm.item, "password", $$v)
              },
              expression: "item.password"
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
    require("vue-hot-reload-api")      .rerender("data-v-2e5b43ea", module.exports)
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
Component.options.__file = "resources\\src\\app-users-edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65311110", Component.options)
  } else {
    hotAPI.reload("data-v-65311110", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {

    name: 'app-users-edit',

    computed: {
        canUndo: function canUndo() {
            return this.$store.getters['history/canUndo'];
        },
        canRedo: function canRedo() {
            return this.$store.getters['history/canRedo'];
        }
    },

    props: {
        indexRoute: {
            default: '',
            type: String
        },
        roles: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        user: {
            default: function _default() {
                return {};
            },

            type: Object
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
            disabled: false,
            item: this.user
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.save, 600), {
            deep: true
        });

        this.$liro.listen('user.undo', function () {
            _this.item = _this.$store.state.history.undo();
        });

        this.$liro.listen('user.redo', function () {
            _this.item = _this.$store.state.history.redo();
        });

        this.$liro.listen('user.reset', function () {
            _this.item = _this.$store.state.history.reset();
        });

        this.$liro.listen('user.save', function () {
            _this.$http.post(_this.item.edit_route, _this.item);
        });

        this.$liro.listen('ajax.load', function () {
            _this.disabled = true;
        });

        this.$liro.listen('ajax.done', function () {
            _this.disabled = false;
        });

        this.$liro.listen('ajax.error', function () {
            _this.disabled = false;
        });
    },


    methods: {
        save: function save() {
            if (this.$store.state.history.preventer()) {
                this.$store.commit('history/save', this.item);
            }
        }
    }

};
liro.component(module.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-form uk-form-stacked" },
    [
      _c(
        "portal",
        { attrs: { to: "app-infobar-action" } },
        [
          _c(
            "app-toolbar-link",
            {
              attrs: {
                icon: "fa fa-info-circle",
                href: "#",
                "uk-toggle": "target: #app-module-help"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.help")) +
                  "\n        "
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
            "app-toolbar-event",
            {
              staticClass: "uk-icon-success",
              attrs: {
                icon: "fa fa-check",
                event: "user.save",
                disabled: _vm.disabled
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.save")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-link",
            {
              staticClass: "uk-icon-danger",
              attrs: {
                icon: "fa fa-times",
                href: _vm.indexRoute,
                disabled: _vm.disabled
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.close")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c("app-toolbar-spacer"),
          _vm._v(" "),
          _c(
            "app-toolbar-event",
            {
              attrs: {
                icon: "fa fa-undo",
                event: "user.undo",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.undo")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-event",
            {
              attrs: {
                icon: "fa fa-redo",
                event: "user.redo",
                disabled: !_vm.canRedo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.redo")) +
                  "\n        "
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
            "app-toolbar-event",
            {
              staticClass: "uk-icon-danger",
              attrs: {
                icon: "fa fa-ban",
                event: "user.reset",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.discard")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c("app-toolbar-spacer"),
          _vm._v(" "),
          _c(
            "app-toolbar-link",
            {
              staticClass: "uk-icon-danger",
              attrs: { icon: "fa fa-minus-circle", href: _vm.item.delete_route }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.delete")) +
                  "\n        "
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
      _c("div", { staticClass: "uk-margin-bottom" }, [
        _c("h1", { staticClass: "uk-text-lead uk-margin-remove" }, [
          _vm._v(_vm._s(_vm.$t("liro-users.backend.users.edit")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "fieldset",
        { staticClass: "uk-fieldset" },
        [
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.name"),
              type: "text",
              id: "name",
              name: "name",
              rules: "required|min:4"
            },
            model: {
              value: _vm.item.name,
              callback: function($$v) {
                _vm.$set(_vm.item, "name", $$v)
              },
              expression: "item.name"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              label: _vm.$t("liro-users.form.state"),
              id: "state",
              name: "state",
              options: _vm.states,
              placeholder: _vm.$t("liro-users.placeholder.state")
            },
            model: {
              value: _vm.item.state,
              callback: function($$v) {
                _vm.$set(_vm.item, "state", $$v)
              },
              expression: "item.state"
            }
          }),
          _vm._v(" "),
          _c("app-form-select-multiple", {
            attrs: {
              label: _vm.$t("liro-users.form.roles"),
              id: "role_ids",
              name: "role_ids",
              options: _vm.roles,
              "option-label": "title",
              "option-value": "id",
              placeholder: _vm.$t("liro-users.placeholder.roles")
            },
            model: {
              value: _vm.item.role_ids,
              callback: function($$v) {
                _vm.$set(_vm.item, "role_ids", $$v)
              },
              expression: "item.role_ids"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.email"),
              type: "email",
              id: "email",
              name: "email",
              rules: "required|email"
            },
            model: {
              value: _vm.item.email,
              callback: function($$v) {
                _vm.$set(_vm.item, "email", $$v)
              },
              expression: "item.email"
            }
          }),
          _vm._v(" "),
          _c("app-form-password", {
            attrs: {
              label: _vm.$t("liro-users.form.password"),
              id: "password",
              name: "password",
              rules: "min:6",
              generate: _vm.$t("liro-users.form.generate")
            },
            model: {
              value: _vm.item.password,
              callback: function($$v) {
                _vm.$set(_vm.item, "password", $$v)
              },
              expression: "item.password"
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
    require("vue-hot-reload-api")      .rerender("data-v-65311110", module.exports)
  }
}

/***/ })
/******/ ]);