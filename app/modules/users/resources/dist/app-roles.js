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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(19);
module.exports = __webpack_require__(22);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(17)
/* template */
var __vue_template__ = __webpack_require__(18)
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
Component.options.__file = "resources/src/app-roles-index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-abe6703a", Component.options)
  } else {
    hotAPI.reload("data-v-abe6703a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
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

module.exports = {

    name: 'app-roles-index',

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
        routes: {
            default: function _default() {
                return [];
            },
            type: Array
        }
    },

    mounted: function mounted() {
        this.$store.commit('list/init', this.roles);
    }
};
liro.component(module.exports);

/***/ }),
/* 18 */
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
        { attrs: { to: "app-toolbar-left" } },
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
                  _vm._s(_vm.$t("liro-users.toolbar.help")) +
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
            _vm._v(_vm._s(_vm.$t("liro-users.backend.roles.index")))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { width: "300px", "margin-left": "auto" } },
          [
            _c("app-list-search", {
              attrs: {
                columns: ["title", "description"],
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
              { staticClass: "uk-table-list-td uk-width-1-4" },
              [
                _c("app-list-sort", { attrs: { column: "title" } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("liro-users.form.title")) +
                      "\n                "
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "uk-table-list-td uk-width-2-4" },
              [
                _c("app-list-sort", { attrs: { column: "description" } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("liro-users.form.description")) +
                      "\n                "
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "uk-table-list-td uk-width-1-4" }, [
              _c("span", [_vm._v(_vm._s(_vm.$t("liro-users.form.routes")))])
            ]),
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
          _vm._l(_vm.list, function(role) {
            return _vm.list.length != 0
              ? _c("div", { key: role.id, staticClass: "uk-table-list-row" }, [
                  _c("div", { staticClass: "uk-table-list-td uk-width-1-4" }, [
                    _c("a", { attrs: { href: role.edit_route } }, [
                      _vm._v(_vm._s(role.title))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-table-list-td uk-width-2-4" }, [
                    _c("span", { staticClass: "uk-text-muted" }, [
                      _vm._v(_vm._s(role.description))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "uk-table-list-td uk-width-1-4" }, [
                    _c("span", { staticClass: "uk-text-muted" }, [
                      _vm._v(
                        _vm._s(
                          _vm.$tc(
                            "liro-users.form.route_count",
                            role.route_ids.length,
                            { count: role.route_ids.length }
                          )
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "uk-table-list-td uk-table-list-td-s uk-text-center"
                    },
                    [_c("span", [_vm._v(_vm._s(role.id))])]
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
                [_c("span", [_vm._v(_vm._s(_vm.$t("liro-users.form.empty")))])]
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
    require("vue-hot-reload-api")      .rerender("data-v-abe6703a", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(20)
/* template */
var __vue_template__ = __webpack_require__(21)
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
Component.options.__file = "resources/src/app-roles-create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-817f018a", Component.options)
  } else {
    hotAPI.reload("data-v-817f018a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
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

module.exports = {

    name: 'app-roles-create',

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
        routes: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        role: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },

    data: function data() {
        return {
            disabled: false,
            item: this.role
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('role.undo', function () {
            _this.item = _this.$store.state.history.undo();
        });

        this.$liro.listen('role.redo', function () {
            _this.item = _this.$store.state.history.redo();
        });

        this.$liro.listen('role.reset', function () {
            _this.item = _this.$store.state.history.reset();
        });

        this.$liro.listen('role.create', function () {
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
/* 21 */
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
        { attrs: { to: "app-toolbar-left" } },
        [
          _c(
            "app-toolbar-event",
            {
              staticClass: "uk-icon-success",
              attrs: {
                icon: "fa fa-check",
                event: "role.create",
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
                event: "role.undo",
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
                event: "role.redo",
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
                event: "role.reset",
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
              attrs: {
                icon: "fa fa-info-circle",
                href: "#",
                "uk-toggle": "target: #app-module-help"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-users.toolbar.help")) +
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
          _vm._v(_vm._s(_vm.$t("liro-users.backend.roles.create")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "fieldset",
        { staticClass: "uk-fieldset" },
        [
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.title"),
              type: "text",
              id: "title",
              name: "title",
              rules: "required|min:4"
            },
            model: {
              value: _vm.item.title,
              callback: function($$v) {
                _vm.$set(_vm.item, "title", $$v)
              },
              expression: "item.title"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.access"),
              type: "text",
              id: "access",
              name: "access",
              rules: "required|alpha|min:4"
            },
            model: {
              value: _vm.item.access,
              callback: function($$v) {
                _vm.$set(_vm.item, "access", $$v)
              },
              expression: "item.access"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.description"),
              type: "description",
              id: "description",
              name: "description"
            },
            model: {
              value: _vm.item.description,
              callback: function($$v) {
                _vm.$set(_vm.item, "description", $$v)
              },
              expression: "item.description"
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.$liro.func.group(_vm.routes), function(group, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "uk-margin uk-padding uk-background-muted"
              },
              [
                _c("div", { staticClass: "uk-width-1-1" }, [
                  _c("h4", [_vm._v(_vm._s(_vm.$t(index + ".group")))])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
                  },
                  _vm._l(group, function(route) {
                    return _c(
                      "label",
                      {
                        key: route.id,
                        staticClass: "uk-display-inline-block uk-margin-small"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.item.route_names,
                              expression: "item.route_names"
                            }
                          ],
                          staticClass: "uk-checkbox",
                          staticStyle: { "margin-right": "4px" },
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: route,
                            checked: Array.isArray(_vm.item.route_names)
                              ? _vm._i(_vm.item.route_names, route) > -1
                              : _vm.item.route_names
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.item.route_names,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = route,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.item,
                                      "route_names",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.item,
                                      "route_names",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.item, "route_names", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t(route)))])
                      ]
                    )
                  })
                )
              ]
            )
          })
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-817f018a", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(23)
/* template */
var __vue_template__ = __webpack_require__(24)
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
Component.options.__file = "resources/src/app-roles-edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b5559ee", Component.options)
  } else {
    hotAPI.reload("data-v-3b5559ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
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

module.exports = {

    name: 'app-roles-edit',

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
        routes: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        role: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },

    data: function data() {
        return {
            disabled: false,
            item: this.role
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.save, 600), {
            deep: true
        });

        this.$liro.listen('role.undo', function () {
            _this.item = _this.$store.state.history.undo();
        });

        this.$liro.listen('role.redo', function () {
            _this.item = _this.$store.state.history.redo();
        });

        this.$liro.listen('role.reset', function () {
            _this.item = _this.$store.state.history.reset();
        });

        this.$liro.listen('role.save', function () {
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
/* 24 */
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
        { attrs: { to: "app-toolbar-left" } },
        [
          _c(
            "app-toolbar-event",
            {
              staticClass: "uk-icon-success",
              attrs: {
                icon: "fa fa-check",
                event: "role.save",
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
                event: "role.undo",
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
                event: "role.redo",
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
                event: "role.reset",
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
          ),
          _vm._v(" "),
          _c("app-toolbar-spacer"),
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
                  _vm._s(_vm.$t("liro-users.toolbar.help")) +
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
          _vm._v(_vm._s(_vm.$t("liro-users.backend.roles.edit")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "fieldset",
        { staticClass: "uk-fieldset" },
        [
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.title"),
              type: "text",
              id: "title",
              name: "title",
              rules: "required|min:4"
            },
            model: {
              value: _vm.item.title,
              callback: function($$v) {
                _vm.$set(_vm.item, "title", $$v)
              },
              expression: "item.title"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-users.form.description"),
              type: "description",
              id: "description",
              name: "description"
            },
            model: {
              value: _vm.item.description,
              callback: function($$v) {
                _vm.$set(_vm.item, "description", $$v)
              },
              expression: "item.description"
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.$liro.func.group(_vm.routes), function(group, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "uk-margin uk-padding uk-background-muted"
              },
              [
                _c("div", { staticClass: "uk-width-1-1" }, [
                  _c("h4", [_vm._v(_vm._s(_vm.$t(index + ".group")))])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l"
                  },
                  _vm._l(group, function(route) {
                    return _c(
                      "label",
                      {
                        key: route.id,
                        staticClass: "uk-display-inline-block uk-margin-small"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.item.route_names,
                              expression: "item.route_names"
                            }
                          ],
                          staticClass: "uk-checkbox",
                          staticStyle: { "margin-right": "4px" },
                          attrs: { type: "checkbox" },
                          domProps: {
                            value: route,
                            checked: Array.isArray(_vm.item.route_names)
                              ? _vm._i(_vm.item.route_names, route) > -1
                              : _vm.item.route_names
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.item.route_names,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = route,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.item,
                                      "route_names",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.item,
                                      "route_names",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.item, "route_names", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(_vm.$t(route)))])
                      ]
                    )
                  })
                )
              ]
            )
          })
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-3b5559ee", module.exports)
  }
}

/***/ })
/******/ ]);