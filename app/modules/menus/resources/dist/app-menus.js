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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
__webpack_require__(15);
__webpack_require__(18);
__webpack_require__(21);
module.exports = __webpack_require__(24);


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
Component.options.__file = "resources/src/app-menus-index-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ab2e83e", Component.options)
  } else {
    hotAPI.reload("data-v-4ab2e83e", Component.options)
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

module.exports = {

    props: {
        value: {
            default: function _default() {
                return [];
            },

            type: [Array, Object]
        }
    },
    data: function data() {
        return {
            menus: this.value
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$watch('menus', function (value) {
            _this.$emit('input', value);
        }, { deep: true });

        this.$watch('value', function (value) {
            _this.menus = value;
        });

        var interval = null;

        $('body').on('start', function (event) {

            if (_this.$refs.dropzone && !$(_this.$refs.dropzone.$el).parent().hasClass('sortable-chosen')) {
                interval = setInterval(function () {

                    if (_this.$refs.dropzone && $(_this.$refs.dropzone.$el).children('li').length != 0) {
                        $('> .app-menu-ignore', _this.$refs.dropzone.$el).remove();
                    }

                    if (_this.$refs.dropzone && $(_this.$refs.dropzone.$el).children('li').length == 0) {
                        $(_this.$refs.dropzone.$el).append('<li class="app-menu-ignore"></li>');
                    }
                }, 50);
            }
        });

        $('body').on('end', function (event) {

            if (interval) {
                clearInterval(interval);
            }

            if (_this.$refs.dropzone && $(_this.$refs.dropzone.$el).children('li').length != 0) {
                $('> .app-menu-ignore', _this.$refs.dropzone.$el).remove();
            }
        });
    }
};
liro.vue.$component('app-menu-index-list', module.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "app-drag",
    {
      ref: "dropzone",
      staticClass: "uk-list",
      attrs: {
        element: "ul",
        list: _vm.menus,
        options: { group: "menu", filter: ".app-menu-ignore" }
      }
    },
    _vm._l(_vm.menus, function(menu, index) {
      return _c("app-menu-index-item", {
        key: menu.id,
        model: {
          value: _vm.menus[index],
          callback: function($$v) {
            _vm.$set(_vm.menus, index, $$v)
          },
          expression: "menus[index]"
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
    require("vue-hot-reload-api")      .rerender("data-v-4ab2e83e", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
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
Component.options.__file = "resources/src/app-menus-index-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ebdd854", Component.options)
  } else {
    hotAPI.reload("data-v-5ebdd854", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
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

module.exports = {

    computed: {
        children: function children() {
            return this.item.children || [];
        }
    },

    props: {
        value: {
            type: Object
        }
    },

    data: function data() {
        return {
            collapse: true,
            item: this.value
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$watch('item', function () {
            _this.$emit('input', _this.item);
        });

        this.$watch('value', function () {
            _this.item = _this.value;
        });
    },


    methods: {
        enable: function enable() {
            var _this2 = this;

            this.$http.post(this.item.enable_route, {}).then(function () {
                _this2.item.state = 1;
            });
        },
        disable: function disable() {
            var _this3 = this;

            this.$http.post(this.item.disable_route, {}).then(function () {
                _this3.item.state = 0;
            });
        },
        visible: function visible() {
            var _this4 = this;

            this.$http.post(this.item.visible_route, {}).then(function () {
                _this4.item.hidden = 0;
            });
        },
        hidden: function hidden() {
            var _this5 = this;

            this.$http.post(this.item.hidden_route, {}).then(function () {
                _this5.item.hidden = 1;
            });
        }
    }

};
liro.vue.$component('app-menu-index-item', module.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "app-menu-item" },
    [
      _c("div", { staticClass: "app-menu-display uk-table-list-row" }, [
        _c(
          "div",
          {
            staticClass: "uk-table-list-td uk-table-list-td-xs uk-text-center"
          },
          [
            _c("app-list-collapse", {
              attrs: {
                disabled: _vm.item.children.length == 0,
                active: !_vm.collapse && _vm.item.children.length != 0
              },
              on: {
                click: function($event) {
                  _vm.collapse = !_vm.collapse
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "uk-table-list-td uk-table-list-td-auto" }, [
          _c("a", { attrs: { href: _vm.item.edit_route } }, [
            _vm._v(_vm._s(_vm.item.title_fix))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-table-list-td uk-table-list-td-s uk-text-center" },
          [
            _c("app-list-hidden", {
              attrs: { active: _vm.item.hidden == 1, href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.item.hidden == 1 ? _vm.visible() : _vm.hidden()
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-table-list-td uk-table-list-td-s uk-text-center" },
          [
            _c("app-list-state", {
              attrs: { active: _vm.item.state == 1, href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.item.state == 1 ? _vm.disable() : _vm.enable()
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-table-list-td uk-table-list-td-s uk-text-center" },
          [_c("span", [_vm._v(_vm._s(_vm.item.id))])]
        )
      ]),
      _vm._v(" "),
      _c("app-menu-index-list", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.collapse || _vm.item.children.length == 0,
            expression: "! collapse || item.children.length == 0"
          }
        ],
        model: {
          value: _vm.item.children,
          callback: function($$v) {
            _vm.$set(_vm.item, "children", $$v)
          },
          expression: "item.children"
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
    require("vue-hot-reload-api")      .rerender("data-v-5ebdd854", module.exports)
  }
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
Component.options.__file = "resources/src/app-menus-index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e3a375a", Component.options)
  } else {
    hotAPI.reload("data-v-6e3a375a", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        active: function active() {
            return _.find(this.types, { id: this.tab });
        },
        activeIndex: function activeIndex() {
            return _.findIndex(this.types, { id: this.tab });
        }
    },
    props: {

        createRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        orderRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        menus: {
            default: function _default() {
                return this.$liro.data.get('menus', []);
            },

            type: [Array, Object]
        },

        types: {
            default: function _default() {
                return this.$liro.data.get('types', []);
            },

            type: [Array, Object]
        }

    },

    data: function data() {

        return {
            tab: 1
        };
    },
    mounted: function mounted() {
        var _this = this;

        $(this.$refs.dropzone.$el).on('end', function () {
            _this.$http.post(_this.orderRoute, { type: _this.active.id, menus: _this.active.menu_tree });
        });
    }
});
liro.vue.$component('app-menus-index', this.default);

/***/ }),
/* 20 */
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
        { attrs: { to: "app-infobar-right" } },
        [
          _c(
            "app-toolbar-link",
            {
              staticClass: "uk-success",
              attrs: { icon: "plus", href: _vm.createRoute }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.create")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-link",
            { attrs: { "uk-toggle": "target: #app-module-help" } },
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
        _c("h1", [_vm._v(_vm._s(_vm.$t("liro-menus.toolbar.help")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-margin-large" }, [
        _c("h1", { staticClass: "uk-heading-primary uk-margin-remove" }, [
          _vm._v(_vm._s(_vm.$t("liro-menus.backend.menus.index")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { attrs: { "uk-tab": "" } },
        _vm._l(_vm.types, function(type, index) {
          return _c("li", { key: index }, [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.tab = type.id
                  }
                }
              },
              [_vm._v(_vm._s(type.title))]
            )
          ])
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-table-list" },
        [
          _c("div", { staticClass: "uk-table-list-head" }, [
            _c(
              "div",
              {
                staticClass:
                  "uk-table-list-td uk-table-list-td-xs uk-text-center"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-menus.form.hash")) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "uk-table-list-td uk-table-list-td-auto" },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-menus.form.title")) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "uk-table-list-td uk-table-list-td-s uk-text-center"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-menus.form.hidden")) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "uk-table-list-td uk-table-list-td-s uk-text-center"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-menus.form.state")) +
                    "\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "uk-table-list-td uk-table-list-td-s uk-text-center"
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-menus.form.id")) +
                    "\n            "
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm.active
            ? _c("app-menu-index-list", {
                ref: "dropzone",
                model: {
                  value: _vm.active.menu_tree,
                  callback: function($$v) {
                    _vm.$set(_vm.active, "menu_tree", $$v)
                  },
                  expression: "active.menu_tree"
                }
              })
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-6e3a375a", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(22)
/* template */
var __vue_template__ = __webpack_require__(23)
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
Component.options.__file = "resources/src/app-menus-create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe7e02b8", Component.options)
  } else {
    hotAPI.reload("data-v-fe7e02b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
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

/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        indexRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        createRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        menu: {
            default: function _default() {
                return this.$liro.data.get('menu', {});
            },

            type: Object
        },

        modules: {
            default: function _default() {
                return this.$liro.data.get('modules', []);
            },

            type: [Array, Object]
        },

        types: {
            default: function _default() {
                return this.$liro.data.get('types', []);
            },

            type: [Array, Object]
        },

        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        },

        visibility: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.hidden'), css: 'uk-danger' }, { value: 0, label: this.$t('liro-users.form.visible'), css: 'uk-success' }];
            },

            type: Array
        }

    },

    data: function data() {

        return {
            MenuModel: this.menu
        };
    },


    methods: {
        create: function create() {
            this.$http.post(this.item.edit_route, this.MenuModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-menus-create', this.default);
}

/***/ }),
/* 23 */
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
            { staticClass: "uk-form uk-form-stacked" },
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
                  [_vm._v(_vm._s(_vm.$t("liro-menus.backend.menus.create")))]
                )
              ]),
              _vm._v(" "),
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
                  _c("app-form-select", {
                    attrs: {
                      name: "state",
                      options: _vm.states,
                      label: _vm.$t("liro-menus.form.state"),
                      placeholder: _vm.$t("liro-menus.placeholder.state")
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
                  _c("app-form-select", {
                    attrs: {
                      name: "hidden",
                      options: _vm.visibility,
                      label: _vm.$t("liro-menus.form.visibility"),
                      placeholder: _vm.$t("liro-menus.placeholder.visibility")
                    },
                    model: {
                      value: item.hidden,
                      callback: function($$v) {
                        _vm.$set(item, "hidden", $$v)
                      },
                      expression: "item.hidden"
                    }
                  }),
                  _vm._v(" "),
                  _c("app-form-select", {
                    attrs: {
                      name: "menu_type_id",
                      options: _vm.types,
                      "option-label": "title",
                      "option-value": "id",
                      label: _vm.$t("liro-menus.form.type"),
                      placeholder: _vm.$t("liro-menus.placeholder.type")
                    },
                    model: {
                      value: item.menu_type_id,
                      callback: function($$v) {
                        _vm.$set(item, "menu_type_id", $$v)
                      },
                      expression: "item.menu_type_id"
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
                      name: "module",
                      options: _vm.modules,
                      label: _vm.$t("liro-menus.form.module"),
                      placeholder: _vm.$t("liro-menus.placeholder.module")
                    },
                    model: {
                      value: item.module,
                      callback: function($$v) {
                        _vm.$set(item, "module", $$v)
                      },
                      expression: "item.module"
                    }
                  }),
                  _vm._v(" "),
                  _c("app-form-input", {
                    attrs: {
                      name: "query",
                      label: _vm.$t("liro-menus.form.query")
                    },
                    model: {
                      value: item.query,
                      callback: function($$v) {
                        _vm.$set(item, "query", $$v)
                      },
                      expression: "item.query"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.MenuModel,
      callback: function($$v) {
        _vm.MenuModel = $$v
      },
      expression: "MenuModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fe7e02b8", module.exports)
  }
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
Component.options.__file = "resources/src/app-menus-edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4dece9c", Component.options)
  } else {
    hotAPI.reload("data-v-f4dece9c", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        menu: {
            default: function _default() {
                return this.$liro.data.get('menu', {});
            },

            type: Object
        },

        modules: {
            default: function _default() {
                return this.$liro.data.get('modules', []);
            },

            type: [Array, Object]
        },

        types: {
            default: function _default() {
                return this.$liro.data.get('types', []);
            },

            type: [Array, Object]
        },

        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-menus.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-menus.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        },

        visibility: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-menus.form.hidden'), css: 'uk-danger' }, { value: 0, label: this.$t('liro-menus.form.visible'), css: 'uk-success' }];
            },

            type: Array
        }

    },

    data: function data() {

        return {
            MenuModel: this.menu
        };
    },


    methods: {
        edit: function edit() {
            this.$http.post(this.item.edit_route, this.MenuModel);
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-menus-edit', this.default);
}

/***/ }),
/* 26 */
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
            { staticClass: "uk-form uk-form-stacked" },
            [
              _c(
                "portal",
                { attrs: { to: "app-infobar-right" } },
                [
                  _c("li", { staticClass: "uk-margin-right" }, [
                    _c("span", { staticClass: "uk-text-small" }, [
                      _vm._v("Last save under a minute ago.")
                    ])
                  ]),
                  _vm._v(" "),
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
                  ),
                  _vm._v(" "),
                  _c(
                    "app-toolbar-button",
                    { attrs: { icon: "trash", href: item.delete_route } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("liro-menus.toolbar.delete")) +
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
                  [_vm._v(_vm._s(_vm.$t("liro-menus.backend.menus.edit")))]
                )
              ]),
              _vm._v(" "),
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
                  _c("app-form-select", {
                    attrs: {
                      name: "state",
                      options: _vm.states,
                      label: _vm.$t("liro-menus.form.state"),
                      placeholder: _vm.$t("liro-menus.placeholder.state")
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
                  _c("app-form-select", {
                    attrs: {
                      name: "hidden",
                      options: _vm.visibility,
                      label: _vm.$t("liro-menus.form.visibility"),
                      placeholder: _vm.$t("liro-menus.placeholder.visibility")
                    },
                    model: {
                      value: item.hidden,
                      callback: function($$v) {
                        _vm.$set(item, "hidden", $$v)
                      },
                      expression: "item.hidden"
                    }
                  }),
                  _vm._v(" "),
                  _c("app-form-select", {
                    attrs: {
                      name: "menu_type_id",
                      options: _vm.types,
                      "option-label": "title",
                      "option-value": "id",
                      label: _vm.$t("liro-menus.form.type"),
                      placeholder: _vm.$t("liro-menus.placeholder.type")
                    },
                    model: {
                      value: item.menu_type_id,
                      callback: function($$v) {
                        _vm.$set(item, "menu_type_id", $$v)
                      },
                      expression: "item.menu_type_id"
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
                      name: "module",
                      options: _vm.modules,
                      label: _vm.$t("liro-menus.form.module"),
                      placeholder: _vm.$t("liro-menus.placeholder.module")
                    },
                    model: {
                      value: item.module,
                      callback: function($$v) {
                        _vm.$set(item, "module", $$v)
                      },
                      expression: "item.module"
                    }
                  }),
                  _vm._v(" "),
                  _c("app-form-input", {
                    attrs: {
                      name: "query",
                      label: _vm.$t("liro-menus.form.query")
                    },
                    model: {
                      value: item.query,
                      callback: function($$v) {
                        _vm.$set(item, "query", $$v)
                      },
                      expression: "item.query"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        }
      }
    ]),
    model: {
      value: _vm.MenuModel,
      callback: function($$v) {
        _vm.MenuModel = $$v
      },
      expression: "MenuModel"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f4dece9c", module.exports)
  }
}

/***/ })
/******/ ]);