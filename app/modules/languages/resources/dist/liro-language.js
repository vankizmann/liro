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
__webpack_require__(8);
module.exports = __webpack_require__(11);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
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
Component.options.__file = "resources/src/language/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2406ad9e", Component.options)
  } else {
    hotAPI.reload("data-v-2406ad9e", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_item__ = __webpack_require__(4);
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

    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            defaults: this.Liro.data.get('defaults'),
            roles: this.Liro.data.get('roles'),
            languages: this.Liro.data.get('languages')
        };
    }

});

if (window.Liro) {
    Liro.vue.component('liro-language-index', this.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(5)
/* template */
var __vue_template__ = __webpack_require__(6)
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
Component.options.__file = "resources/src/language/index/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a7e73d8", Component.options)
  } else {
    hotAPI.reload("data-v-5a7e73d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        updateLanguageState: function updateLanguageState() {

            var url = Liro.routes.get('liro-languages.language.edit', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageDefault: function updateLanguageDefault() {

            var url = Liro.routes.get('liro-languages.language.edit', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.post(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageResponse: function updateLanguageResponse(res) {

            var message = Liro.messages.get('liro-languages::message.language.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.language);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-language-index-item', this.default);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "th-table-tr uk-flex uk-flex-middle" }, [
    _c("div", { staticClass: "uk-width-1-2" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.Liro.routes.get("liro-languages.language.edit", {
              language: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.title) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-2" }, [
      _c("span", { staticClass: "uk-text-muted" }, [
        _vm._v("\n            " + _vm._s(_vm.value.locale) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "th-table-td-m uk-text-center" },
      [
        _c("app-list-switch", {
          staticClass: "is-default",
          attrs: { active: _vm.value.default },
          on: { click: _vm.updateLanguageDefault }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "th-table-td-m uk-text-center" },
      [
        _c("app-list-switch", {
          staticClass: "is-state",
          attrs: { active: _vm.value.state },
          on: { click: _vm.updateLanguageState }
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
    require("vue-hot-reload-api")      .rerender("data-v-5a7e73d8", module.exports)
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-list", {
    staticClass: "liro-language-index",
    attrs: { database: "languages.language.index" },
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
                        href: _vm.Liro.routes.get(
                          "liro-languages.language.create"
                        )
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.Liro.messages.get(
                              "liro-languages::module.language.create"
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
                                columns: ["title", "locale"],
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
                          { staticClass: "uk-width-1-2" },
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
                                        "liro-languages::form.language.title"
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
                          { staticClass: "uk-width-1-2" },
                          [
                            _c(
                              "app-list-sort",
                              {
                                attrs: {
                                  column: "locale",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-languages::form.language.locale"
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
                                  column: "default",
                                  config: config.filter,
                                  filters: _vm.defaults
                                },
                                on: { filter: filter }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
                                        "liro-languages::form.language.default"
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
                                        "liro-languages::form.language.state"
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
                                        "liro-languages::form.language.id"
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
                          return _c("liro-language-index-item", {
                            key: index,
                            attrs: { value: item }
                          })
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  items.length == 0
                    ? _c("div", { staticClass: "th-table-body" }, [
                        _c(
                          "div",
                          { staticClass: "th-table-tr uk-flex uk-flex-middle" },
                          [
                            _c(
                              "div",
                              { staticClass: "uk-width1-1 uk-text-center" },
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
                          ]
                        )
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
      value: _vm.languages,
      callback: function($$v) {
        _vm.languages = $$v
      },
      expression: "languages"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2406ad9e", module.exports)
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
Component.options.__file = "resources/src/language/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6f95e40", Component.options)
  } else {
    hotAPI.reload("data-v-f6f95e40", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            defaults: this.Liro.data.get('defaults'),
            roles: this.Liro.data.get('roles'),
            language: this.Liro.data.get('language')
        };
    },


    methods: {

        storeLanguage: function storeLanguage() {
            var url = Liro.routes.get('liro-languages.language.create');
            Axios.post(url, this.language).then(this.storeLanguageResponse);
        },

        storeLanguageResponse: function storeLanguageResponse(res) {

            var values = {
                language: res.data.language.id
            };

            var query = {
                success: 'liro-languages::message.language.created'
            };

            Liro.routes.redirect('liro-languages.language.edit', values, query);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-language-create', this.default);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-language-create uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: {
                href: _vm.Liro.routes.get("liro-languages.language.index")
              }
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
              on: { click: _vm.storeLanguage, shortkey: _vm.storeLanguage }
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
                    _vm.Liro.messages.get("liro-languages::form.legend.general")
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
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.state"
                )
              },
              model: {
                value: _vm.language.state,
                callback: function($$v) {
                  _vm.$set(_vm.language, "state", $$v)
                },
                expression: "language.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-default uk-width-1-1",
              attrs: {
                name: "default",
                options: _vm.defaults,
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.default"
                )
              },
              model: {
                value: _vm.language.default,
                callback: function($$v) {
                  _vm.$set(_vm.language, "default", $$v)
                },
                expression: "language.default"
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
                    _vm.Liro.messages.get("liro-languages::form.legend.info")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "title",
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.title"
                )
              },
              model: {
                value: _vm.language.title,
                callback: function($$v) {
                  _vm.$set(_vm.language, "title", $$v)
                },
                expression: "language.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "locale",
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.locale"
                )
              },
              model: {
                value: _vm.language.locale,
                callback: function($$v) {
                  _vm.$set(_vm.language, "locale", $$v)
                },
                expression: "language.locale"
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
    require("vue-hot-reload-api")      .rerender("data-v-f6f95e40", module.exports)
  }
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
Component.options.__file = "resources/src/language/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-860b6c24", Component.options)
  } else {
    hotAPI.reload("data-v-860b6c24", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            defaults: this.Liro.data.get('defaults'),
            language: this.Liro.data.get('language')
        };
    },


    methods: {

        updateLanguage: function updateLanguage() {

            var url = Liro.routes.get('liro-languages.language.edit', {
                language: this.language.id
            });

            Axios.post(url, this.language).then(this.updateLanguageResponse);
        },

        updateLanguageResponse: function updateLanguageResponse(res) {
            var message = Liro.messages.get('liro-languages::message.language.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-language-edit', this.default);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-language-edit uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: {
                href: _vm.Liro.routes.get("liro-languages.language.index")
              }
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
              on: { click: _vm.updateLanguage, shortkey: _vm.updateLanguage }
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
                    _vm.Liro.messages.get("liro-languages::form.legend.general")
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
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.state"
                )
              },
              model: {
                value: _vm.language.state,
                callback: function($$v) {
                  _vm.$set(_vm.language, "state", $$v)
                },
                expression: "language.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-default uk-width-1-1",
              attrs: {
                name: "default",
                options: _vm.defaults,
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.default"
                )
              },
              model: {
                value: _vm.language.default,
                callback: function($$v) {
                  _vm.$set(_vm.language, "default", $$v)
                },
                expression: "language.default"
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
                    _vm.Liro.messages.get("liro-languages::form.legend.info")
                  ) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "title",
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.title"
                )
              },
              model: {
                value: _vm.language.title,
                callback: function($$v) {
                  _vm.$set(_vm.language, "title", $$v)
                },
                expression: "language.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "locale",
                label: _vm.Liro.messages.get(
                  "liro-languages::form.language.locale"
                )
              },
              model: {
                value: _vm.language.locale,
                callback: function($$v) {
                  _vm.$set(_vm.language, "locale", $$v)
                },
                expression: "language.locale"
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
    require("vue-hot-reload-api")      .rerender("data-v-860b6c24", module.exports)
  }
}

/***/ })
/******/ ]);