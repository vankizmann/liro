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
Component.options.__file = "resources/src/app-menu-index-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4379a908", Component.options)
  } else {
    hotAPI.reload("data-v-4379a908", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

//
//
//
//
//

module.exports = {
    name: 'app-menu-index-list',
    props: {
        value: {
            type: Array
        }
    }
};
liro.component(module.exports);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "uk-list" },
    _vm._l(_vm.value, function(menu, index) {
      return _c("app-menu-index-item", {
        key: index,
        model: {
          value: _vm.value[index],
          callback: function($$v) {
            _vm.$set(_vm.value, index, $$v)
          },
          expression: "value[index]"
        }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4379a908", module.exports)
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
Component.options.__file = "resources/src/app-menu-index-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-397430fd", Component.options)
  } else {
    hotAPI.reload("data-v-397430fd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
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

module.exports = {
    name: 'app-menu-index-item',
    props: {
        value: {
            type: Object
        },
        collapse: {
            default: false,
            type: Boolean
        }
    }
};
liro.component(module.exports);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { attrs: { id: "menuItem_" + _vm.value.id } },
    [
      _c("div", { staticClass: "uk-menu-item uk-flex uk-flex-middle" }, [
        _c(
          "a",
          {
            class: {
              "uk-menu-item-collapse": true,
              "uk-disabled": !_vm.value.children.length
            },
            attrs: { href: "#" },
            on: {
              click: function($event) {
                _vm.collapse = !_vm.collapse
              }
            }
          },
          [
            _c("span", {
              class: {
                fa: true,
                "fa-angle-right": _vm.collapse,
                "fa-angle-down": !_vm.collapse
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "uk-menu-item-title uk-flex-1" }, [
          _c("a", { attrs: { href: _vm.value.edit_route } }, [
            _vm._v(_vm._s(_vm.value.title_fix))
          ]),
          _c("br"),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.value.package))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            class: {
              "uk-menu-item-hidden": true,
              "uk-active": _vm.value.hidden == 1
            }
          },
          [_c("span", { staticClass: "fa fa-eye-slash" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: {
              "uk-menu-item-state": true,
              "uk-active": _vm.value.state == 1
            }
          },
          [_c("span")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "uk-menu-item-id uk-width-auto" }, [
          _c("span", [_vm._v(_vm._s(_vm.value.id))])
        ])
      ]),
      _vm._v(" "),
      _c("app-menu-index-item", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.collapse == false,
            expression: "collapse == false"
          }
        ],
        model: {
          value: _vm.value.children,
          callback: function($$v) {
            _vm.$set(_vm.value, "children", $$v)
          },
          expression: "value.children"
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-397430fd", module.exports)
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
Component.options.__file = "resources/src/app-menu-index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19d53dd3", Component.options)
  } else {
    hotAPI.reload("data-v-19d53dd3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 9 */
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

module.exports = {
    name: 'app-menu-index',
    props: {
        baseRoute: {
            default: '',
            type: String
        },
        createRoute: {
            default: '',
            type: String
        },
        orderRoute: {
            default: '',
            type: String
        },
        value: {
            default: [],
            type: Array
        }
    },
    mounted: function mounted() {

        $(this.$refs.sortable.$el).nestedSortable({
            handle: 'div',
            items: 'li',
            toleranceElement: '> div',
            relocate: this.relocate
        });
    },

    methods: {
        relocate: function relocate() {
            this.$http.post(this.orderRoute, { order: $(this.$refs.sortable.$el).nestedSortable('toArray') });
        }
    }
};
liro.component(module.exports);

/***/ }),
/* 10 */
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
                  _vm._s(_vm.$t("menus.module.menus-create")) +
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
                "uk-toggle": "target: #offcanvas-slide"
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.$t("theme.help")) + "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-menu-index" },
        [
          _c("div", { staticClass: "uk-menu-title uk-flex uk-flex-middle" }, [
            _c("div", { staticClass: "uk-menu-title-collapse" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("theme.hash")) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-menu-title-title uk-flex-1" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("theme.title")) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-menu-title-hidden" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("theme.hidden")) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-menu-title-state" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("theme.state")) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-menu-title-id uk-width-auto" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("theme.id")) +
                  "\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("app-menu-index-list", {
            ref: "sortable",
            model: {
              value: _vm.value,
              callback: function($$v) {
                _vm.value = $$v
              },
              expression: "value"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        attrs: {
          id: "offcanvas-slide",
          "uk-offcanvas": "overlay: true; mode: push;"
        }
      },
      [
        _c("div", { staticClass: "uk-offcanvas-bar" }, [
          _c("h3", { staticClass: "uk-text-primary" }, [_vm._v("Title")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            )
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19d53dd3", module.exports)
  }
}

/***/ })
/******/ ]);