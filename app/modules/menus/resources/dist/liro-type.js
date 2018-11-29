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
__webpack_require__(22);
module.exports = __webpack_require__(25);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(17)
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
Component.options.__file = "resources/src/type/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c800480", Component.options)
  } else {
    hotAPI.reload("data-v-4c800480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_item__ = __webpack_require__(18);
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
//
//
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

    /**
     * Get data from liro framework
     */
    data: function data() {
        return {
            states: Liro.data.get('states'),
            types: Liro.data.get('types')
        };
    }

});

if (window.Liro) {
    Liro.vue.component('liro-type-index', this.default);
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
Component.options.__file = "resources/src/type/index/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50546c72", Component.options)
  } else {
    hotAPI.reload("data-v-50546c72", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        updateTypeState: function updateTypeState() {

            var url = Liro.routes.get('liro-menus.type.edit', {
                type: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateTypeResponse);
        },

        updateTypeResponse: function updateTypeResponse(res) {

            var message = Liro.messages.get('liro-menus::message.type.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-type-index-item', this.default);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "th-table-tr uk-flex uk-flex-middle" }, [
    _c("div", { staticClass: "uk-width-1-3" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.Liro.routes.get("liro-menus.type.edit", {
              type: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.title) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-3" }, [
      _c("span", [
        _vm._v("\n            " + _vm._s(_vm.value.route) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-3" }, [
      _c("span", [
        _vm._v("\n            " + _vm._s(_vm.value.theme) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "th-table-td-m uk-text-center" },
      [
        _c("app-list-switch", {
          staticClass: "is-state",
          attrs: { active: _vm.value.state },
          on: { click: _vm.updateTypeState }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "th-table-td-m uk-text-center" }, [
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
    require("vue-hot-reload-api")      .rerender("data-v-50546c72", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-list", {
    staticClass: "liro-type-index",
    attrs: { database: "menus.type.index" },
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
                        href: _vm.Liro.routes.get("liro-menus.type.create")
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.Liro.messages.get(
                              "liro-menus::module.type.create"
                            )
                          ) +
                          "\n                "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "th-table-container" }, [
                _c("div", { staticClass: "th-table uk-margin-remove-bottom" }, [
                  _c("div", { staticClass: "th-table-head" }, [
                    _c(
                      "div",
                      { staticClass: "th-table-tr uk-flex uk-flex-middle" },
                      [
                        _c(
                          "div",
                          { staticClass: "uk-margin-auto-left" },
                          [
                            _c("app-list-search", {
                              attrs: {
                                columns: ["title", "route"],
                                config: config.search,
                                placeholder: _vm.Liro.messages.get(
                                  "theme::form.search.placeholder"
                                )
                              },
                              on: { search: search }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "th-table-filter" }, [
                    _c(
                      "div",
                      { staticClass: "th-table-tr uk-flex uk-flex-middle" },
                      [
                        _c(
                          "div",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: {
                                  column: "title",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-menus::form.type.title"
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
                          "div",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: {
                                  column: "route",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-menus::form.type.route"
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
                          "div",
                          { staticClass: "uk-width-1-3" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: {
                                  column: "theme",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-menus::form.type.theme"
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
                          "div",
                          { staticClass: "th-table-td-m uk-text-center" },
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
                                        "liro-menus::form.type.state"
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
                          "div",
                          { staticClass: "th-table-td-m uk-text-center" },
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
                                        "liro-menus::form.type.id"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  items.length != 0
                    ? _c(
                        "div",
                        { staticClass: "th-table-body" },
                        _vm._l(items, function(item, index) {
                          return _c("liro-type-index-item", {
                            key: index,
                            attrs: { value: item }
                          })
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  items.length == 0
                    ? _c("div", { staticClass: "th-table-body" }, [
                        _c("div", { staticClass: "th-table-tr" }, [
                          _c(
                            "div",
                            { staticClass: "uk-width-1-1 uk-text-center" },
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
                  _c("div", { staticClass: "th-table-footer" }, [
                    _c(
                      "div",
                      { staticClass: "th-table-tr uk-flex uk-flex-middle" },
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
              ])
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.types,
      callback: function($$v) {
        _vm.types = $$v
      },
      expression: "types"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c800480", module.exports)
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
Component.options.__file = "resources/src/type/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b34d63e", Component.options)
  } else {
    hotAPI.reload("data-v-6b34d63e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    /**
     * Get data from liro framework
     */
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            locales: this.Liro.data.get('locales'),
            type: this.Liro.data.get('type')
        };
    },

    methods: {

        /**
         * Submit ajax request to create type
         */
        storeType: function storeType() {
            var url = Liro.routes.get('liro-menus.type.create');
            Axios.post(url, this.type).then(this.storeTypeResponse);
        },

        /**
         * Redirect with success message
         */
        storeTypeResponse: function storeTypeResponse(res) {

            var values = {
                type: res.data.type.id
            };

            var query = {
                success: 'liro-menus::message.type.created'
            };

            Liro.routes.redirect('liro-menus.type.edit', values, query);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-type-create', this.default);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-type-create uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.Liro.routes.get("liro-menus.type.index") }
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
              staticClass: "uk-button uk-button-success uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.storeType }
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
      _c("div", { staticClass: "uk-flex-last uk-width-large" }, [
        _c(
          "div",
          { staticClass: "th-form" },
          [
            _c("legend", { staticClass: "uk-legend uk-legend-small" }, [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.Liro.messages.get("liro-menus::form.legend.general")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-state uk-width-1-1",
              attrs: {
                name: "state",
                options: _vm.states,
                label: _vm.Liro.messages.get("liro-menus::form.type.state")
              },
              model: {
                value: _vm.type.state,
                callback: function($$v) {
                  _vm.$set(_vm.type, "state", $$v)
                },
                expression: "type.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "locale",
                options: _vm.locales,
                label: _vm.Liro.messages.get("liro-menus::form.type.locale"),
                placeholder: _vm.Liro.messages.get(
                  "liro-menus::form.type.select_locale"
                )
              },
              model: {
                value: _vm.type.locale,
                callback: function($$v) {
                  _vm.$set(_vm.type, "locale", $$v)
                },
                expression: "type.locale"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-flex-first uk-flex-auto" }, [
        _c(
          "div",
          { staticClass: "th-form" },
          [
            _c("legend", { staticClass: "uk-legend uk-legend-small" }, [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.Liro.messages.get("liro-menus::form.legend.info")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "title",
                label: _vm.Liro.messages.get("liro-menus::form.type.title")
              },
              model: {
                value: _vm.type.title,
                callback: function($$v) {
                  _vm.$set(_vm.type, "title", $$v)
                },
                expression: "type.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "route",
                label: _vm.Liro.messages.get("liro-menus::form.type.route")
              },
              model: {
                value: _vm.type.route,
                callback: function($$v) {
                  _vm.$set(_vm.type, "route", $$v)
                },
                expression: "type.route"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "theme",
                label: _vm.Liro.messages.get("liro-menus::form.type.theme")
              },
              model: {
                value: _vm.type.theme,
                callback: function($$v) {
                  _vm.$set(_vm.type, "theme", $$v)
                },
                expression: "type.theme"
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
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b34d63e", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(26)
/* template */
var __vue_template__ = __webpack_require__(27)
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
Component.options.__file = "resources/src/type/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42698ecc", Component.options)
  } else {
    hotAPI.reload("data-v-42698ecc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    /**
     * Get data from liro framework
     */
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            locales: this.Liro.data.get('locales'),
            type: this.Liro.data.get('type')
        };
    },

    methods: {

        /**
         * Submit ajax request to save type
         */
        updateType: function updateType() {

            var url = Liro.routes.get('liro-menus.type.edit', {
                type: this.type.id
            });

            Axios.post(url, this.type).then(this.updateTypeResponse);
        },

        /**
         * Show success message
         */
        updateTypeResponse: function updateTypeResponse(res) {
            var message = Liro.messages.get('liro-menus::message.type.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-type-edit', this.default);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-type-edit uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.Liro.routes.get("liro-menus.type.index") }
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
              staticClass: "uk-button uk-button-success uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.updateType }
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
      _c("div", { staticClass: "uk-flex-last uk-width-large" }, [
        _c(
          "div",
          { staticClass: "th-form" },
          [
            _c("legend", { staticClass: "uk-legend uk-legend-small" }, [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.Liro.messages.get("liro-menus::form.legend.general")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-state uk-width-1-1",
              attrs: {
                name: "state",
                options: _vm.states,
                label: _vm.Liro.messages.get("liro-menus::form.type.state")
              },
              model: {
                value: _vm.type.state,
                callback: function($$v) {
                  _vm.$set(_vm.type, "state", $$v)
                },
                expression: "type.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "locale",
                options: _vm.locales,
                label: _vm.Liro.messages.get("liro-menus::form.type.locale"),
                placeholder: _vm.Liro.messages.get(
                  "liro-menus::form.type.select_locale"
                )
              },
              model: {
                value: _vm.type.locale,
                callback: function($$v) {
                  _vm.$set(_vm.type, "locale", $$v)
                },
                expression: "type.locale"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-flex-first uk-flex-auto" }, [
        _c(
          "div",
          { staticClass: "th-form" },
          [
            _c("legend", { staticClass: "uk-legend uk-legend-small" }, [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.Liro.messages.get("liro-menus::form.legend.info")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "title",
                label: _vm.Liro.messages.get("liro-menus::form.type.title")
              },
              model: {
                value: _vm.type.title,
                callback: function($$v) {
                  _vm.$set(_vm.type, "title", $$v)
                },
                expression: "type.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "route",
                label: _vm.Liro.messages.get("liro-menus::form.type.route")
              },
              model: {
                value: _vm.type.route,
                callback: function($$v) {
                  _vm.$set(_vm.type, "route", $$v)
                },
                expression: "type.route"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "theme",
                label: _vm.Liro.messages.get("liro-menus::form.type.theme")
              },
              model: {
                value: _vm.type.theme,
                callback: function($$v) {
                  _vm.$set(_vm.type, "theme", $$v)
                },
                expression: "type.theme"
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
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42698ecc", module.exports)
  }
}

/***/ })
/******/ ]);