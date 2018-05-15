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
module.exports = __webpack_require__(22);


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
    name: 'app-menu-index-list',
    props: {
        value: {
            type: Array
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
//

module.exports = {
    name: 'app-menu-index-item',
    props: {
        value: {
            type: Object
        }
    },
    data: function data() {
        return {
            collapse: true
        };
    }
};
liro.component(module.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { attrs: { id: "menuItem_" + _vm.value.id } },
    [
      _c("div", { staticClass: "uk-table-list-row" }, [
        _c(
          "div",
          {
            staticClass: "uk-table-list-td uk-table-list-td-xs uk-text-center"
          },
          [
            _c("app-list-collapse", {
              attrs: {
                disabled: _vm.value.children && _vm.value.children.length == 0,
                active: !_vm.collapse
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
          { staticClass: "uk-table-list-td uk-table-list-td-s uk-text-center" },
          [
            _c("app-list-hidden", {
              attrs: {
                active: _vm.value.hidden == 1,
                href:
                  _vm.value.hidden == 1
                    ? _vm.value.show_route
                    : _vm.value.hide_route
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
              attrs: {
                active: _vm.value.state == 1,
                href:
                  _vm.value.state == 1
                    ? _vm.value.disable_route
                    : _vm.value.enable_route
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-table-list-td uk-table-list-td-s uk-text-center" },
          [_c("span", [_vm._v(_vm._s(_vm.value.id))])]
        )
      ]),
      _vm._v(" "),
      _c("app-menu-index-list", {
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

module.exports = {
    name: 'app-menus-index',
    computed: {
        active: function active() {
            return _.find(this.types, { id: this.tab });
        }
    },
    props: {
        createRoute: {
            default: '',
            type: String
        },
        orderRoute: {
            default: '',
            type: String
        },
        menus: {
            default: function _default() {
                return [];
            },

            type: Array
        },
        types: {
            default: function _default() {
                return [];
            },

            type: Array
        }
    },
    data: function data() {
        return {
            tab: 1
        };
    },
    mounted: function mounted() {

        // $(this.$refs.sortable.$el).nestedSortable({
        //     handle:             'div',
        //     items:              'li',
        //     toleranceElement:   '> div',
        //     relocate:           this.relocate
        // });

    },

    methods: {
        relocate: function relocate() {
            this.$http.post(this.orderRoute, { order: $(this.$refs.sortable.$el).nestedSortable('toArray') });
        }
    }
};
liro.component(module.exports);

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
                  _vm._s(_vm.$t("liro-menus.toolbar.create")) +
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
      _c("div", { staticClass: "uk-flex uk-flex-middle uk-margin-bottom" }, [
        _c("div", [
          _c("h1", { staticClass: "uk-text-lead uk-margin-remove" }, [
            _vm._v(_vm._s(_vm.$t("liro-menus.backend.menus.index")))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { width: "300px", "margin-left": "auto" } },
          [
            _c("app-form-select", {
              attrs: {
                options: _vm.types,
                "option-label": "title",
                "option-value": "id"
              },
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
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
                ref: "sortable",
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

var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = null
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

module.exports = Component.exports


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
//
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

    name: 'app-menus-edit',

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
        menu: {
            default: function _default() {
                return {};
            },

            type: Object
        },
        types: {
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
        },
        states: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.enabled'), css: 'uk-success' }, { value: 0, label: this.$t('liro-users.form.disabled'), css: 'uk-danger' }];
            },

            type: Array
        },
        hiddens: {
            default: function _default() {
                return [{ value: 1, label: this.$t('liro-users.form.hidden'), css: 'uk-danger' }, { value: 0, label: this.$t('liro-users.form.visible'), css: 'uk-success' }];
            },

            type: Array
        }
    },

    data: function data() {
        return {
            disabled: false,
            item: this.menu
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.commit('history/init', this.item);

        this.$watch('item', _.debounce(this.create, 600), {
            deep: true
        });

        this.$liro.listen('menu.undo', function () {
            _this.item = _this.$store.state.history.undo();
        });

        this.$liro.listen('menu.redo', function () {
            _this.item = _this.$store.state.history.redo();
        });

        this.$liro.listen('menu.reset', function () {
            _this.item = _this.$store.state.history.reset();
        });

        this.$liro.listen('menu.save', function () {
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
        create: function create() {
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
                event: "menu.save",
                disabled: _vm.disabled
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.save")) +
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
                  _vm._s(_vm.$t("liro-menus.toolbar.close")) +
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
                event: "menu.undo",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.undo")) +
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
                event: "menu.redo",
                disabled: !_vm.canRedo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.redo")) +
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
                event: "menu.reset",
                disabled: !_vm.canUndo
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-menus.toolbar.discard")) +
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
                  _vm._s(_vm.$t("liro-menus.toolbar.delete")) +
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
        _c("h1", [_vm._v("Help")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-margin-bottom" }, [
        _c("h1", { staticClass: "uk-text-lead uk-margin-remove" }, [
          _vm._v(_vm._s(_vm.$t("liro-menus.backend.menus.create")))
        ])
      ]),
      _vm._v(" "),
      _c(
        "fieldset",
        { staticClass: "uk-fieldset" },
        [
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-menus.form.title"),
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
          _c("app-form-select", {
            attrs: {
              label: _vm.$t("liro-users.form.hidden"),
              id: "hidden",
              name: "hidden",
              options: _vm.hiddens,
              placeholder: _vm.$t("liro-users.placeholder.state")
            },
            model: {
              value: _vm.item.hidden,
              callback: function($$v) {
                _vm.$set(_vm.item, "hidden", $$v)
              },
              expression: "item.hidden"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              label: _vm.$t("liro-users.form.type"),
              id: "menu_type_id",
              name: "menu_type_id",
              options: _vm.types,
              "option-label": "title",
              "option-value": "id",
              placeholder: _vm.$t("liro-users.placeholder.state")
            },
            model: {
              value: _vm.item.menu_type_id,
              callback: function($$v) {
                _vm.$set(_vm.item, "menu_type_id", $$v)
              },
              expression: "item.menu_type_id"
            }
          }),
          _vm._v(" "),
          _c("app-form-input", {
            attrs: {
              label: _vm.$t("liro-menus.form.route"),
              type: "route",
              id: "route",
              name: "route"
            },
            model: {
              value: _vm.item.route,
              callback: function($$v) {
                _vm.$set(_vm.item, "route", $$v)
              },
              expression: "item.route"
            }
          }),
          _vm._v(" "),
          _c("app-form-select", {
            attrs: {
              label: _vm.$t("liro-users.form.package"),
              id: "module",
              name: "module",
              options: _vm.routes,
              placeholder: _vm.$t("liro-users.placeholder.module")
            },
            model: {
              value: _vm.item.package,
              callback: function($$v) {
                _vm.$set(_vm.item, "package", $$v)
              },
              expression: "item.package"
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
    require("vue-hot-reload-api")      .rerender("data-v-f4dece9c", module.exports)
  }
}

/***/ })
/******/ ]);