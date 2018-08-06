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
__webpack_require__(5);
module.exports = __webpack_require__(8);


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
Component.options.__file = "resources/src/types/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fb1c309", Component.options)
  } else {
    hotAPI.reload("data-v-4fb1c309", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    computed: {
        list: function list() {
            return this.types;
        }
    },

    props: {
        createRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },
        types: {
            default: function _default() {
                return this.$liro.data.get('types', []);
            },

            type: [Array, Object]
        },
        themes: {
            default: function _default() {
                return this.$liro.data.get('themes', []);
            },

            type: [Array, Object]
        }
    },

    data: function data() {

        return {
            TypesModel: this.types
        };
    }
});

if (window.liro) {
    liro.vue.$component('app-types-index', this.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-helper-list", {
    attrs: { database: "app-menus-types" },
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
                          _vm._s(_vm.$t("liro-menus.toolbar.help")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.create")) +
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
                      columns: ["title", "theme", "route"],
                      config: options.search,
                      placeholder: _vm.$t("liro-menus.form.search")
                    },
                    on: { search: search }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("portal", { attrs: { to: "app-module-help" } }, [
                _c("h1", [_vm._v(_vm._s(_vm.$t("liro-menus.toolbar.help")))])
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
                      [_vm._v(_vm._s(_vm.$t("liro-menus.backend.types.index")))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticStyle: { width: "300px", "margin-left": "auto" }
                  })
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
                        { staticClass: "uk-table-list-td uk-width-2-4" },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: { column: "title", config: options.order },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-menus.form.title")) +
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
                        { staticClass: "uk-table-list-td uk-width-1-4" },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: { column: "theme", config: options.order },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-menus.form.theme")) +
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
                        { staticClass: "uk-table-list-td uk-width-1-4" },
                        [
                          _c(
                            "app-list-order",
                            {
                              attrs: { column: "route", config: options.order },
                              on: { order: order }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("liro-menus.form.route")) +
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
                                  _vm._s(_vm.$t("liro-menus.form.id")) +
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
                            { staticClass: "uk-table-list-td uk-width-2-4" },
                            [
                              _c("a", { attrs: { href: item.edit_route } }, [
                                _vm._v(_vm._s(item.title))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-table-list-td uk-width-1-4" },
                            [
                              _c("span", { staticClass: "uk-text-muted" }, [
                                _vm._v(_vm._s(item.theme))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-table-list-td uk-width-1-4" },
                            [
                              _c("span", { staticClass: "uk-text-muted" }, [
                                _vm._v(_vm._s(item.route))
                              ])
                            ]
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
                            _vm._v(_vm._s(_vm.$t("liro-menus.form.empty")))
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
      value: _vm.TypesModel,
      callback: function($$v) {
        _vm.TypesModel = $$v
      },
      expression: "TypesModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fb1c309", module.exports)
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
Component.options.__file = "resources/src/types/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-638a2e56", Component.options)
  } else {
    hotAPI.reload("data-v-638a2e56", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        type: {
            default: function _default() {
                return this.$liro.data.get('type', {});
            },

            type: Object
        },

        themes: {
            default: function _default() {
                return this.$liro.data.get('themes', []);
            },

            type: [Array, Object]
        }

    },

    data: function data() {

        return {
            TypeModel: this.type
        };
    },


    methods: {
        create: function create() {
            this.$http.post(this.createRoute, this.TypeModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-types-create', this.default);
}

/***/ }),
/* 7 */
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
                    { attrs: { "uk-toggle": "target: #app-module-help" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-menus.toolbar.help")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.create")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.close")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.undo")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.redo")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.discard")) +
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
                  [_vm._v(_vm._s(_vm.$t("liro-menus.backend.types.create")))]
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
                        name: "title",
                        rules: "required|min:4",
                        label: _vm.$t("liro-menus.form.title")
                      },
                      model: {
                        value: item.title,
                        callback: function($$v) {
                          _vm.$set(item, "title", $$v)
                        },
                        expression: "item.title"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-input", {
                      attrs: {
                        name: "route",
                        label: _vm.$t("liro-menus.form.route")
                      },
                      model: {
                        value: item.route,
                        callback: function($$v) {
                          _vm.$set(item, "route", $$v)
                        },
                        expression: "item.route"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select", {
                      attrs: {
                        name: "theme",
                        options: _vm.themes,
                        "option-label": "name",
                        "option-value": "name",
                        label: _vm.$t("liro-menus.form.theme"),
                        placeholder: _vm.$t("liro-menus.placeholder.themes")
                      },
                      model: {
                        value: item.theme,
                        callback: function($$v) {
                          _vm.$set(item, "theme", $$v)
                        },
                        expression: "item.theme"
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
      value: _vm.TypeModel,
      callback: function($$v) {
        _vm.TypeModel = $$v
      },
      expression: "TypeModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-638a2e56", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(9)
/* template */
var __vue_template__ = __webpack_require__(10)
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
Component.options.__file = "resources/src/types/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f9d49ba", Component.options)
  } else {
    hotAPI.reload("data-v-0f9d49ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
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

/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        indexRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        type: {
            default: function _default() {
                return this.$liro.data.get('type', {});
            },

            type: Object
        },

        themes: {
            default: function _default() {
                return this.$liro.data.get('themes', []);
            },

            type: [Array, Object]
        }

    },

    data: function data() {

        return {
            TypeModel: this.type
        };
    },


    methods: {
        edit: function edit() {
            this.$http.post(this.TypeModel.edit_route, this.TypeModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-types-edit', this.default);
}

/***/ }),
/* 10 */
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
                    { attrs: { "uk-toggle": "target: #app-module-help" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-menus.toolbar.help")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.save")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.close")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.undo")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.redo")) +
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
                          _vm._s(_vm.$t("liro-menus.toolbar.discard")) +
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
                  [_vm._v(_vm._s(_vm.$t("liro-menus.backend.types.edit")))]
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
                        name: "title",
                        rules: "required|min:4",
                        label: _vm.$t("liro-menus.form.title")
                      },
                      model: {
                        value: item.title,
                        callback: function($$v) {
                          _vm.$set(item, "title", $$v)
                        },
                        expression: "item.title"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-input", {
                      attrs: {
                        name: "route",
                        label: _vm.$t("liro-menus.form.route")
                      },
                      model: {
                        value: item.route,
                        callback: function($$v) {
                          _vm.$set(item, "route", $$v)
                        },
                        expression: "item.route"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-form-select", {
                      attrs: {
                        name: "theme",
                        options: _vm.themes,
                        "option-label": "name",
                        "option-value": "name",
                        label: _vm.$t("liro-menus.form.theme"),
                        placeholder: _vm.$t("liro-menus.placeholder.themes")
                      },
                      model: {
                        value: item.theme,
                        callback: function($$v) {
                          _vm.$set(item, "theme", $$v)
                        },
                        expression: "item.theme"
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
      value: _vm.TypeModel,
      callback: function($$v) {
        _vm.TypeModel = $$v
      },
      expression: "TypeModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f9d49ba", module.exports)
  }
}

/***/ })
/******/ ]);