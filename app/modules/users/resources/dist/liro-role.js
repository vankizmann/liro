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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
__webpack_require__(28);
module.exports = __webpack_require__(31);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(23)
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
Component.options.__file = "resources/src/role/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18df9abc", Component.options)
  } else {
    hotAPI.reload("data-v-18df9abc", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_item__ = __webpack_require__(24);
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




/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {

        roles: function roles() {
            return this.$root.roles;
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-role-index', this.default);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(25)
/* template */
var __vue_template__ = __webpack_require__(26)
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
Component.options.__file = "resources/src/role/index/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76b54894", Component.options)
  } else {
    hotAPI.reload("data-v-76b54894", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
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

    }

});

if (window.Liro) {
    Liro.vue.component('liro-role-index-item', this.default);
}

/***/ }),
/* 26 */
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
            href: _vm.route("liro-users.admin.role.edit", {
              role: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.title) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-2" }, [
      _c("span", { staticClass: "uk-text-muted" }, [
        _vm._v("\n            " + _vm._s(_vm.value.description) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "th-table-td-l uk-text-center" }, [
      _c("span", [
        _vm._v(
          "\n            " + _vm._s(_vm.value.route_names.length) + "\n        "
        )
      ])
    ]),
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
    require("vue-hot-reload-api")      .rerender("data-v-76b54894", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("app-list", {
    staticClass: "liro-role-index",
    attrs: { database: "users.role.index" },
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
                      attrs: { href: _vm.route("liro-users.admin.role.create") }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.trans("liro-users::module.role.create")) +
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
                                columns: ["title", "route"],
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
                                      _vm.trans("liro-users::form.role.title")
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
                              { attrs: { column: "description" } },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.trans(
                                        "liro-users::form.role.description"
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
                          {
                            staticClass:
                              "th-table-td th-table-td-l uk-text-center"
                          },
                          [
                            _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.trans("liro-users::form.role.routes")
                                  ) +
                                  "\n                            "
                              )
                            ])
                          ]
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
                                    _vm.trans("liro-users::form.role.id")
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
                      return _c("liro-role-index-item", {
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
                      _c("div", { staticClass: "th-table-tr" }, [
                        _c(
                          "div",
                          { staticClass: "uk-width-1-1 uk-text-center" },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.trans("theme::form.list.empty")) +
                                "\n                        "
                            )
                          ]
                        )
                      ])
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
      value: _vm.roles,
      callback: function($$v) {
        _vm.roles = $$v
      },
      expression: "roles"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18df9abc", module.exports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(29)
/* template */
var __vue_template__ = __webpack_require__(30)
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
Component.options.__file = "resources/src/role/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ac80782", Component.options)
  } else {
    hotAPI.reload("data-v-2ac80782", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_module__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        modules: function modules() {
            return this.$root.modules;
        },

        role: function role() {
            return this.$root.role;
        }

    },

    methods: {

        storeRole: function storeRole() {
            var url = Liro.routes.get('liro-users.ajax.role.store');
            Axios.post(url, this.role).then(this.storeRoleResponse);
        },

        storeRoleResponse: function storeRoleResponse(res) {

            var values = {
                role: res.data.id
            };

            var query = {
                success: 'liro-users::message.role.created'
            };

            Liro.routes.redirect('liro-users.admin.role.edit', values, query);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-role-create', this.default);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-role-create" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.route("liro-users.admin.role.index") }
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
              on: { click: _vm.storeRole, shortkey: _vm.storeRole }
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
      _c(
        "div",
        { staticClass: "th-form" },
        [
          _c("legend", { staticClass: "uk-legend" }, [
            _c("span", [
              _vm._v(_vm._s(_vm.trans("liro-users::form.legend.info")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "app-label",
            { attrs: { label: _vm.trans("liro-users::form.role.title") } },
            [
              _c("app-input", {
                attrs: { name: "title" },
                model: {
                  value: _vm.role.title,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "title", $$v)
                  },
                  expression: "role.title"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-label",
            {
              attrs: { label: _vm.trans("liro-users::form.role.description") }
            },
            [
              _c("app-input", {
                attrs: { name: "description" },
                model: {
                  value: _vm.role.description,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "description", $$v)
                  },
                  expression: "role.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-label",
            { attrs: { label: _vm.trans("liro-users::form.role.access") } },
            [
              _c("app-input", {
                attrs: { name: "access" },
                model: {
                  value: _vm.role.access,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "access", $$v)
                  },
                  expression: "role.access"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.modules.length != 0
        ? _c("div", [
            _c(
              "ul",
              { attrs: { "uk-tab": "" } },
              _vm._l(_vm.modules, function(item, index) {
                return _c("li", { key: index }, [
                  _c("a", { attrs: { href: "javascript:void(0)" } }, [
                    _vm._v(_vm._s(index))
                  ])
                ])
              })
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "uk-switcher uk-margin" },
              _vm._l(_vm.modules, function(items, index) {
                return _c(
                  "li",
                  { key: index },
                  [
                    _c("liro-role-edit-module", {
                      attrs: { items: items },
                      model: {
                        value: _vm.role.route_names,
                        callback: function($$v) {
                          _vm.$set(_vm.role, "route_names", $$v)
                        },
                        expression: "role.route_names"
                      }
                    })
                  ],
                  1
                )
              })
            )
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-2ac80782", module.exports)
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(32)
/* template */
var __vue_template__ = __webpack_require__(36)
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
Component.options.__file = "resources/src/role/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-763f7de0", Component.options)
  } else {
    hotAPI.reload("data-v-763f7de0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_module__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__edit_module__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        modules: function modules() {
            return this.$root.modules;
        },

        role: function role() {
            return this.$root.role;
        }

    },

    methods: {

        updateRole: function updateRole() {

            var url = Liro.routes.get('liro-users.ajax.role.update', {
                role: this.role.id
            });

            Axios.put(url, this.role).then(this.updateRoleResponse);
        },

        updateRoleResponse: function updateRoleResponse(res) {
            var message = Liro.messages.get('liro-users::message.role.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-role-edit', this.default);
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(34)
/* template */
var __vue_template__ = __webpack_require__(35)
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
Component.options.__file = "resources/src/role/edit/module.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9cd4620a", Component.options)
  } else {
    hotAPI.reload("data-v-9cd4620a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    model: {
        prop: 'model',
        event: 'input'
    },

    props: {

        model: {
            required: true,
            type: Array
        },

        items: {
            required: true,
            type: [Object, Array]
        }

    },

    data: function data() {
        return {
            ghost: this.model
        };
    },

    watch: {

        model: function model() {
            this.ghost = this.model;
        }

    },

    methods: {

        updateValue: function updateValue(value) {
            this.$emit('input', value);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-role-edit-module', this.default);
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-role-edit-module" },
    _vm._l(_vm.items, function(routes, group) {
      return _c("div", { key: group, staticClass: "th-form" }, [
        _c("legend", { staticClass: "uk-legend" }, [
          _c("span", [_vm._v(_vm._s(group))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-margin" }, [
          _c(
            "div",
            {
              staticClass:
                "uk-grid-small uk-child-width-1-2@m uk-child-width-1-3@l",
              attrs: { "uk-grid": "" }
            },
            _vm._l(routes, function(name, index) {
              return _c(
                "div",
                { key: index },
                [
                  _c("app-checkbox", {
                    attrs: { label: name, value: index },
                    on: { input: _vm.updateValue },
                    model: {
                      value: _vm.ghost,
                      callback: function($$v) {
                        _vm.ghost = $$v
                      },
                      expression: "ghost"
                    }
                  })
                ],
                1
              )
            })
          )
        ])
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9cd4620a", module.exports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-role-edit" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.route("liro-users.admin.role.index") }
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
              on: { click: _vm.updateRole, shortkey: _vm.updateRole }
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
      _c(
        "div",
        { staticClass: "th-form" },
        [
          _c("legend", { staticClass: "uk-legend" }, [
            _c("span", [
              _vm._v(_vm._s(_vm.trans("liro-users::form.legend.info")))
            ])
          ]),
          _vm._v(" "),
          _c(
            "app-label",
            { attrs: { label: _vm.trans("liro-users::form.role.title") } },
            [
              _c("app-input", {
                attrs: { name: "title" },
                model: {
                  value: _vm.role.title,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "title", $$v)
                  },
                  expression: "role.title"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-label",
            {
              attrs: { label: _vm.trans("liro-users::form.role.description") }
            },
            [
              _c("app-input", {
                attrs: { name: "description" },
                model: {
                  value: _vm.role.description,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "description", $$v)
                  },
                  expression: "role.description"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "app-label",
            { attrs: { label: _vm.trans("liro-users::form.role.access") } },
            [
              _c("app-input", {
                attrs: { name: "access" },
                model: {
                  value: _vm.role.access,
                  callback: function($$v) {
                    _vm.$set(_vm.role, "access", $$v)
                  },
                  expression: "role.access"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.modules.length != 0
        ? _c("div", [
            _c(
              "ul",
              { attrs: { "uk-tab": "" } },
              _vm._l(_vm.modules, function(item, index) {
                return _c("li", { key: index }, [
                  _c("a", { attrs: { href: "javascript:void(0)" } }, [
                    _vm._v(_vm._s(index))
                  ])
                ])
              })
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "uk-switcher uk-margin" },
              _vm._l(_vm.modules, function(items, index) {
                return _c(
                  "li",
                  { key: index },
                  [
                    _c("liro-role-edit-module", {
                      attrs: { items: items },
                      model: {
                        value: _vm.role.route_names,
                        callback: function($$v) {
                          _vm.$set(_vm.role, "route_names", $$v)
                        },
                        expression: "role.route_names"
                      }
                    })
                  ],
                  1
                )
              })
            )
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-763f7de0", module.exports)
  }
}

/***/ })
/******/ ]);