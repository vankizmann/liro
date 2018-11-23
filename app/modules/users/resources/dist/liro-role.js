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




/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        return {
            roles: this.Liro.data.get('roles')
        };
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
  return _c("tr", [
    _c("td", [
      _c(
        "a",
        {
          attrs: {
            href: _vm.Liro.routes.get("liro-users.role.edit", {
              role: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.title) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("td", [
      _c("span", [
        _vm._v("\n            " + _vm._s(_vm.value.description) + "\n        ")
      ])
    ]),
    _vm._v(" "),
    _c("td", [
      _c("span", [
        _vm._v(
          "\n            " + _vm._s(_vm.value.route_names.length) + "\n        "
        )
      ])
    ]),
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
                        href: _vm.Liro.routes.get("liro-users.role.create")
                      }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.Liro.messages.get(
                              "liro-users::module.role.create"
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
                                        "liro-users::form.role.title"
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
                                  column: "description",
                                  config: config.order
                                },
                                on: { order: order }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm.Liro.messages.get(
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
                        _c("th", { staticClass: "uk-width-1-3" }, [
                          _c("span", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.Liro.messages.get(
                                    "liro-users::form.role.routes"
                                  )
                                ) +
                                "\n                            "
                            )
                          ])
                        ]),
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
                                        "liro-users::form.role.id"
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
                            return _c("liro-role-index-item", {
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            modules: this.Liro.data.get('modules'),
            role: this.Liro.data.get('role')
        };
    },


    methods: {

        storeRole: function storeRole() {
            var url = Liro.routes.get('liro-users.role.create');
            Axios.post(url, this.role).then(this.storeRoleResponse);
        },

        storeRoleResponse: function storeRoleResponse(res) {

            var values = {
                role: res.data.role.id
            };

            var query = {
                success: 'liro-users::message.role.created'
            };

            Liro.routes.redirect('liro-users.role.edit', values, query);
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
              attrs: { href: _vm.Liro.routes.get("liro-users.role.index") }
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
              on: { click: _vm.storeRole, shortkey: _vm.storeRole }
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
          _c("app-form-input", {
            attrs: {
              name: "title",
              label: _vm.Liro.messages.get("liro-users::form.role.title")
            },
            model: {
              value: _vm.role.title,
              callback: function($$v) {
                _vm.$set(_vm.role, "title", $$v)
              },
              expression: "role.title"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "description",
              label: _vm.Liro.messages.get("liro-users::form.role.description")
            },
            model: {
              value: _vm.role.description,
              callback: function($$v) {
                _vm.$set(_vm.role, "description", $$v)
              },
              expression: "role.description"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "access",
              label: _vm.Liro.messages.get("liro-users::form.role.access")
            },
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
      ),
      _vm._v(" "),
      _vm._l(_vm.modules, function(routes, index) {
        return _c("div", { key: index, staticClass: "th-form" }, [
          _c("div", { staticClass: "uk-margin-bottom" }, [
            _c(
              "span",
              {
                staticClass: "uk-text-primary uk-text-small uk-text-uppercase"
              },
              [_vm._v(_vm._s(index))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "uk-flex uk-flex-wrap uk-child-width-1-2" },
            _vm._l(routes, function(name, index) {
              return _c(
                "label",
                {
                  key: index,
                  staticClass: "uk-checkbox-label uk-margin-small-bottom"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.role.route_names,
                        expression: "role.route_names"
                      }
                    ],
                    staticClass: "uk-checkbox",
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: index,
                      checked: Array.isArray(_vm.role.route_names)
                        ? _vm._i(_vm.role.route_names, index) > -1
                        : _vm.role.route_names
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.role.route_names,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = index,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.role,
                                "route_names",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.role,
                                "route_names",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.role, "route_names", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(_vm._s(name))
                ]
              )
            })
          )
        ])
      })
    ],
    2
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
var __vue_template__ = __webpack_require__(33)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            modules: this.Liro.data.get('modules'),
            role: this.Liro.data.get('role')
        };
    },


    methods: {

        updateRole: function updateRole() {

            var url = Liro.routes.get('liro-users.role.edit', {
                role: this.role.id
            });

            Axios.post(url, this.role).then(this.updateRoleResponse);
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
              attrs: { href: _vm.Liro.routes.get("liro-users.role.index") }
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
              on: { click: _vm.updateRole, shortkey: _vm.updateRole }
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
          _c("app-form-input", {
            attrs: {
              name: "title",
              label: _vm.Liro.messages.get("liro-users::form.role.title")
            },
            model: {
              value: _vm.role.title,
              callback: function($$v) {
                _vm.$set(_vm.role, "title", $$v)
              },
              expression: "role.title"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "description",
              label: _vm.Liro.messages.get("liro-users::form.role.description")
            },
            model: {
              value: _vm.role.description,
              callback: function($$v) {
                _vm.$set(_vm.role, "description", $$v)
              },
              expression: "role.description"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              name: "access",
              label: _vm.Liro.messages.get("liro-users::form.role.access")
            },
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
      ),
      _vm._v(" "),
      _vm._l(_vm.modules, function(routes, index) {
        return _c("div", { key: index, staticClass: "th-form" }, [
          _c("div", { staticClass: "uk-margin-bottom" }, [
            _c(
              "span",
              {
                staticClass: "uk-text-primary uk-text-small uk-text-uppercase"
              },
              [_vm._v(_vm._s(index))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "uk-flex uk-flex-wrap uk-child-width-1-2" },
            _vm._l(routes, function(name, index) {
              return _c(
                "label",
                {
                  key: index,
                  staticClass: "uk-checkbox-label uk-margin-small-bottom"
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.role.route_names,
                        expression: "role.route_names"
                      }
                    ],
                    staticClass: "uk-checkbox",
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: index,
                      checked: Array.isArray(_vm.role.route_names)
                        ? _vm._i(_vm.role.route_names, index) > -1
                        : _vm.role.route_names
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.role.route_names,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = index,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.role,
                                "route_names",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.role,
                                "route_names",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.role, "route_names", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(_vm._s(name))
                ]
              )
            })
          )
        ])
      })
    ],
    2
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