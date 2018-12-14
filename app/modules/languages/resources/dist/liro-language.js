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

    computed: {

        defaults: function defaults() {
            return this.$root.defaults;
        },

        states: function states() {
            return this.$root.states;
        },

        languages: function languages() {
            return this.$root.languages;
        }

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

            var url = Liro.routes.get('liro-languages.ajax.language.update', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.put(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageDefault: function updateLanguageDefault() {

            var url = Liro.routes.get('liro-languages.ajax.language.update', {
                language: this.value.id
            });

            var language = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.put(url, language).then(this.updateLanguageResponse);
        },

        updateLanguageResponse: function updateLanguageResponse(res) {
            var message = Liro.messages.get('liro-languages::message.language.saved');
            UIkit.notification(message, 'success');
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
    _c(
      "div",
      { staticClass: "th-table-td-xs" },
      [_c("app-list-select", { attrs: { value: _vm.value.id } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-2" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.route("liro-languages.admin.language.edit", {
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
                        href: _vm.route("liro-languages.admin.language.create")
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.trans("liro-languages::admin.language.create")
                          ) +
                          "\n                "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "th-form is-table" }, [
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
                                placeholder: _vm.trans(
                                  "theme::form.search.placeholder"
                                )
                              }
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
                          { staticClass: "th-table-td th-table-td-xs" },
                          [
                            _c("app-list-select-all", {
                              staticClass:
                                "uk-display-inline-block uk-margin-right"
                            })
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
                              { attrs: { column: "title" } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.trans(
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
                              { attrs: { column: "locale" } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.trans(
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
                                  filters: _vm.defaults
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.trans(
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
                                attrs: { column: "state", filters: _vm.states }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.trans(
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
                            _c("app-list-sort", { attrs: { column: "id" } }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.trans(
                                      "liro-languages::form.language.id"
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: items.length != 0,
                          expression: "items.length != 0"
                        }
                      ],
                      staticClass: "th-table-body"
                    },
                    _vm._l(items, function(item, index) {
                      return _c("liro-language-index-item", {
                        key: index,
                        attrs: { value: item }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: items.length == 0,
                          expression: "items.length == 0"
                        }
                      ],
                      staticClass: "th-table-body"
                    },
                    [
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
                                  _vm._s(_vm.trans("theme::form.list.empty")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "th-table-footer" }, [
                    _c(
                      "div",
                      { staticClass: "th-table-tr uk-flex uk-flex-middle" },
                      [_c("app-list-pagination")],
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {

        defaults: function defaults() {
            return this.$root.defaults;
        },

        states: function states() {
            return this.$root.states;
        },

        language: function language() {
            return this.$root.language;
        }

    },

    methods: {

        storeLanguage: function storeLanguage() {
            var url = Liro.routes.get('liro-languages.ajax.language.store');
            Axios.post(url, this.language).then(this.storeLanguageResponse);
        },

        storeLanguageResponse: function storeLanguageResponse(res) {

            var values = {
                language: res.data.id
            };

            var query = {
                success: 'liro-languages::message.language.created'
            };

            Liro.routes.redirect('liro-languages.admin.language.edit', values, query);
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
              attrs: { href: _vm.route("liro-languages.admin.language.index") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.trans("theme::form.toolbar.close")) +
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
                  _vm._s(_vm.trans("theme::form.toolbar.save")) +
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
              _c("span", [
                _vm._v(_vm._s(_vm.trans("liro-languages::form.legend.general")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.state")
                }
              },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-state",
                    model: {
                      value: _vm.language.state,
                      callback: function($$v) {
                        _vm.$set(_vm.language, "state", $$v)
                      },
                      expression: "language.state"
                    }
                  },
                  _vm._l(_vm.states, function(item) {
                    return _c("app-switch-option", {
                      key: item.value,
                      attrs: { value: item.value, label: item.label }
                    })
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.default")
                }
              },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-default",
                    model: {
                      value: _vm.language.default,
                      callback: function($$v) {
                        _vm.$set(_vm.language, "default", $$v)
                      },
                      expression: "language.default"
                    }
                  },
                  _vm._l(_vm.defaults, function(item) {
                    return _c("app-switch-option", {
                      key: item.value,
                      attrs: { value: item.value, label: item.label }
                    })
                  })
                )
              ],
              1
            )
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
              _c("span", [
                _vm._v(_vm._s(_vm.trans("liro-languages::form.legend.info")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.title")
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.language.title,
                    callback: function($$v) {
                      _vm.$set(_vm.language, "title", $$v)
                    },
                    expression: "language.title"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.locale")
                }
              },
              [
                _c("app-input", {
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
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {

        defaults: function defaults() {
            return this.$root.defaults;
        },

        states: function states() {
            return this.$root.states;
        },

        language: function language() {
            return this.$root.language;
        }

    },

    methods: {

        updateLanguage: function updateLanguage() {

            var url = Liro.routes.get('liro-languages.ajax.language.update', {
                language: this.language.id
            });

            Axios.put(url, this.language).then(this.updateLanguageResponse);
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
              attrs: { href: _vm.route("liro-languages.admin.language.index") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.trans("theme::form.toolbar.close")) +
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
                  _vm._s(_vm.trans("theme::form.toolbar.save")) +
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
              _c("span", [
                _vm._v(_vm._s(_vm.trans("liro-languages::form.legend.general")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.state")
                }
              },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-state",
                    model: {
                      value: _vm.language.state,
                      callback: function($$v) {
                        _vm.$set(_vm.language, "state", $$v)
                      },
                      expression: "language.state"
                    }
                  },
                  _vm._l(_vm.states, function(item) {
                    return _c("app-switch-option", {
                      key: item.value,
                      attrs: { value: item.value, label: item.label }
                    })
                  })
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.default")
                }
              },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-default",
                    model: {
                      value: _vm.language.default,
                      callback: function($$v) {
                        _vm.$set(_vm.language, "default", $$v)
                      },
                      expression: "language.default"
                    }
                  },
                  _vm._l(_vm.defaults, function(item) {
                    return _c("app-switch-option", {
                      key: item.value,
                      attrs: { value: item.value, label: item.label }
                    })
                  })
                )
              ],
              1
            )
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
              _c("span", [
                _vm._v(_vm._s(_vm.trans("liro-languages::form.legend.info")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.title")
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.language.title,
                    callback: function($$v) {
                      _vm.$set(_vm.language, "title", $$v)
                    },
                    expression: "language.title"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-languages::form.language.locale")
                }
              },
              [
                _c("app-input", {
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