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
__webpack_require__(12);
__webpack_require__(19);
module.exports = __webpack_require__(22);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
/* template */
var __vue_template__ = __webpack_require__(11)
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
Component.options.__file = "resources/src/menu/tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30e33ddb", Component.options)
  } else {
    hotAPI.reload("data-v-30e33ddb", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_item__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tree_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_modal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tree_modal__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    components: {
        'liro-menu-tree-item': __WEBPACK_IMPORTED_MODULE_0__tree_item___default.a,
        'liro-menu-tree-modal': __WEBPACK_IMPORTED_MODULE_1__tree_modal___default.a
    },

    computed: {

        type: function type() {
            return this.$root.type;
        },

        types: function types() {
            return this.$root.types;
        }

    },

    data: function data() {
        return {
            menu: {}
        };
    },

    methods: {

        redirectType: function redirectType(type) {
            Liro.routes.redirect('liro-menus.admin.menu.index', { type: type });
        },

        updateMenuOrder: function updateMenuOrder() {

            var url = Liro.routes.get('liro-menus.ajax.menu.order', {
                type: this.type.id
            });

            Axios.post(url, this.type).then(this.updateMenuOrderResponse);
        },

        updateMenuOrderResponse: function updateMenuOrderResponse(res) {
            var message = Liro.messages.get('liro-menus::message.menu.ordered');
            UIkit.notification(message, 'success');
        },

        openModal: function openModal() {
            this.$refs.modal.$emit('open');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-tree', this.default);
}

/***/ }),
/* 4 */,
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
Component.options.__file = "resources/src/menu/tree/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd545812", Component.options)
  } else {
    hotAPI.reload("data-v-dd545812", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        /**
         * Show prompt and handle input
         */
        updateMenuRoute: function updateMenuRoute() {
            var message = Liro.messages.get('liro-menus::form.menu.route');
            UIkit.modal.prompt(message, this.value.route).then(this.updateMenuRouteInput);
        },

        /**
         * Apply route to value or set default if given
         */
        updateMenuRouteInput: function updateMenuRouteInput(input) {
            if (input != null) this.value.route = input || '/';
        },

        /**
         * Submit ajax request with changed state
         */
        updateMenuState: function updateMenuState() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed hide
         */
        updateMenuHide: function updateMenuHide() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                hide: this.value.hide ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed default
         */
        updateMenuDefault: function updateMenuDefault() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Show success message and save value
         */
        updateMenuResponse: function updateMenuResponse(res) {

            var message = Liro.messages.get('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "liro-menu-tree-item": true,
        "is-hidden": _vm.value.hide == 1,
        "is-disabled": _vm.value.state == 0
      }
    },
    [
      _c("div", { staticClass: "uk-flex uk-flex-middle" }, [
        _vm.value.children.length != 0
          ? _c("div", { staticClass: "uk-flex-none uk-margin-small-right" }, [
              _c("div", { staticClass: "liro-menu-tree-item-icon" }, [
                _c(
                  "a",
                  {
                    staticClass: "is-folder",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        _vm.value.collapsed = !_vm.value.collapsed
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "uk-icon-small",
                      attrs: {
                        "uk-icon": _vm.value.collapsed
                          ? "chevron-right"
                          : "chevron-down"
                      }
                    })
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "uk-flex-none uk-margin-small-right" }, [
          _c("div", { staticClass: "liro-menu-tree-item-icon" }, [
            _vm.value.children.length == 0
              ? _c(
                  "a",
                  {
                    staticClass: "is-file",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          "/app/system/modules/theme/resources/dist/images/file.svg",
                        width: "20",
                        height: "20",
                        "uk-svg": ""
                      }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.value.children.length != 0
              ? _c(
                  "a",
                  {
                    staticClass: "is-folder",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src:
                          "/app/system/modules/theme/resources/dist/images/folder.svg",
                        width: "20",
                        height: "20",
                        "uk-svg": ""
                      }
                    })
                  ]
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-flex-auto" }, [
          _c("div", { staticClass: "liro-menu-tree-item-title" }, [
            _c(
              "a",
              {
                attrs: {
                  href: _vm.route("liro-menus.admin.menu.edit", {
                    menu: _vm.value.id
                  })
                }
              },
              [_c("span", [_vm._v(_vm._s(_vm.value.trans_title))])]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-flex-none uk-margin-small-left" }, [
          _c("div", { staticClass: "liro-menu-tree-item-count uk-flex-none" }, [
            _c("span", { staticClass: "uk-text-truncate" }, [
              _vm._v(_vm._s(_vm.value.children.length || "-"))
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dd545812", module.exports)
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
Component.options.__file = "resources/src/menu/tree/modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c60dbf0e", Component.options)
  } else {
    hotAPI.reload("data-v-c60dbf0e", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({

    model: {
        prop: 'model',
        event: 'input'
    },

    computed: {

        ghost: {
            get: function get() {
                return this.model;
            },
            set: function set(value) {
                this.$emit('input', value);
            }
        },

        states: function states() {
            return this.$root.states;
        },

        hides: function hides() {
            return this.$root.hides;
        },

        defaults: function defaults() {
            return this.$root.defaults;
        },

        types: function types() {
            return this.$root.types;
        },

        modules: function modules() {
            return this.$root.modules;
        },

        menu: function menu() {
            return this.$root.menu;
        }

    },

    props: {

        model: {
            required: true
        }

    },

    mounted: function mounted() {
        var _this = this;

        this.$on('open', function () {
            return UIkit.modal(_this.$refs.modal).show();
        });
    },

    methods: {

        updateMenu: function updateMenu() {

            var url = this.route('liro-menus.ajax.menu.update', {
                menu: this.menu.id
            });

            this.http.put(url, this.menu).then(this.updateMenuResponse);
        },

        updateMenuResponse: function updateMenuResponse(res) {
            var message = this.trans('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');
        }

    }

});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "modal",
      staticClass: "liro-tree-modal",
      attrs: { "uk-modal": "esc-close: false; container: false;" }
    },
    [
      _c("div", { staticClass: "uk-modal-dialog uk-margin-auto-vertical" }, [
        _c("div", { staticClass: "uk-modal-header" }, [
          _c("h2", { staticClass: "uk-modal-title" }, [
            _vm._v(
              _vm._s(
                _vm.model.title_trans ||
                  _vm.trans("liro-menus::admin.menu.edit")
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-modal-body" },
          [
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.state") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-state",
                    model: {
                      value: _vm.model.state,
                      callback: function($$v) {
                        _vm.$set(_vm.model, "state", $$v)
                      },
                      expression: "model.state"
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
              { attrs: { label: _vm.trans("liro-menus::form.menu.hide") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-hide",
                    model: {
                      value: _vm.model.hide,
                      callback: function($$v) {
                        _vm.$set(_vm.model, "hide", $$v)
                      },
                      expression: "model.hide"
                    }
                  },
                  _vm._l(_vm.hides, function(item) {
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
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-modal-footer uk-text-right" }, [
      _c(
        "button",
        {
          staticClass: "uk-button uk-button-default uk-modal-close",
          attrs: { type: "button" }
        },
        [_vm._v("Cancel")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "uk-button uk-button-primary",
          attrs: { type: "button" }
        },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c60dbf0e", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-menu-tree" },
    [
      _c("div", { staticClass: "uk-margin-bottom uk-flex uk-flex-middle" }, [
        _c("div", { staticClass: "uk-flex-auto uk-margin-small-right" }, [
          _c("input", {
            staticClass: "uk-input uk-form-small",
            attrs: {
              type: "search",
              placeholder: _vm.trans("theme::form.search.placeholder")
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-flex-none" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-small uk-button-primary",
              attrs: { href: "javascript:void(0);" },
              on: { click: _vm.openModal }
            },
            [
              _c("span", {
                staticClass: "uk-icon-small",
                attrs: { "uk-icon": "search" }
              }),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.trans("theme::form.search.label")))
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("liro-menu-tree-modal", {
        ref: "modal",
        model: {
          value: _vm.menu,
          callback: function($$v) {
            _vm.menu = $$v
          },
          expression: "menu"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "uk-flex uk-flex-middle" }, [
        _c("div", { staticClass: "uk-flex-auto uk-margin-small-right" }, [
          _c("span", { staticClass: "uk-text-small uk-text-muted" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.trans("liro-menus::form.legend.tree")) +
                "\n            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "uk-flex-none" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-small uk-button-success",
              attrs: { href: "javascript:void(0);" },
              on: { click: _vm.openModal }
            },
            [
              _c("span", {
                staticClass: "uk-icon-small",
                attrs: { "uk-icon": "plus" }
              }),
              _vm._v(" "),
              _c("span", [
                _vm._v(_vm._s(_vm.trans("theme::form.toolbar.create")))
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("vue-nestable", {
        attrs: { threshold: 50, maxDepth: 5, collapsed: true },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(ref) {
              var item = ref.item
              return _c(
                "vue-nestable-handle",
                { attrs: { item: item, "data-id": item.id } },
                [
                  _c("liro-menu-tree-item", {
                    model: {
                      value: item,
                      callback: function($$v) {
                        item = $$v
                      },
                      expression: "item"
                    }
                  })
                ],
                1
              )
            }
          }
        ]),
        model: {
          value: _vm.type.menus,
          callback: function($$v) {
            _vm.$set(_vm.type, "menus", $$v)
          },
          expression: "type.menus"
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
    require("vue-hot-reload-api")      .rerender("data-v-30e33ddb", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(13)
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
Component.options.__file = "resources/src/menu/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-87ca3f36", Component.options)
  } else {
    hotAPI.reload("data-v-87ca3f36", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_collapsed__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_item__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_item__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        type: function type() {
            return this.$root.type;
        },

        types: function types() {
            return this.$root.types;
        }

    },

    created: function created() {
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__index_collapsed__["a" /* default */]();
    },

    methods: {

        redirectType: function redirectType(type) {
            Liro.routes.redirect('liro-menus.admin.menu.index', { type: type });
        },

        updateMenuOrder: function updateMenuOrder() {

            var url = Liro.routes.get('liro-menus.ajax.menu.order', {
                type: this.type.id
            });

            Axios.post(url, this.type).then(this.updateMenuOrderResponse);
        },

        updateMenuOrderResponse: function updateMenuOrderResponse(res) {
            var message = Liro.messages.get('liro-menus::message.menu.ordered');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-index', this.default);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {

    /**
     * Show storage
     */
    this.show = [];

    /**
     * Return true if id is in show storage
     */
    this.active = function (id) {
        var intID = _.toInteger(id);
        return _.indexOf(this.show, intID) == -1;
    }.bind(this);

    /**
     * Toggle id in show storage
     */
    this.toggle = function (id) {
        var intID = _.toInteger(id);
        this.show = _.xor(this.show, [intID]);
    }.bind(this);

    /**
     * Apply styles to nestable items
     */
    this.styles = function () {
        var _this = this;

        $('.nestable-item [data-id]').each(function (index, el) {
            if (!_this.active(el.dataset.id)) {
                $(el).parents('.nestable-item').eq(0).addClass('nestable-show');
            }
            if (_this.active(el.dataset.id)) {
                $(el).parents('.nestable-item').eq(0).removeClass('nestable-show');
            }
        });
    }.bind(this);

    /**
     * Bind style changes on mouse move
     */
    $(document).mousemove(this.styles);
});

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
Component.options.__file = "resources/src/menu/index/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65df90a6", Component.options)
  } else {
    hotAPI.reload("data-v-65df90a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        value: {
            required: true,
            type: Object
        },

        collapsed: {
            required: true,
            type: Object
        }

    },

    updated: function updated() {
        this.collapsed.styles();
    },

    methods: {

        toggleCollapsed: function toggleCollapsed() {
            this.collapsed.toggle(this.value.id);this.$forceUpdate();
        },

        /**
         * Show prompt and handle input
         */
        updateMenuRoute: function updateMenuRoute() {
            var message = Liro.messages.get('liro-menus::form.menu.route');
            UIkit.modal.prompt(message, this.value.route).then(this.updateMenuRouteInput);
        },

        /**
         * Apply route to value or set default if given
         */
        updateMenuRouteInput: function updateMenuRouteInput(input) {
            if (input != null) this.value.route = input || '/';
        },

        /**
         * Submit ajax request with changed state
         */
        updateMenuState: function updateMenuState() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed hide
         */
        updateMenuHide: function updateMenuHide() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                hide: this.value.hide ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed default
         */
        updateMenuDefault: function updateMenuDefault() {

            var url = Liro.routes.get('liro-menus.ajax.menu.update', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.put(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Show success message and save value
         */
        updateMenuResponse: function updateMenuResponse(res) {

            var message = Liro.messages.get('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');

            this.$emit('input', res.data.user);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-index-item', this.default);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "th-table-tr uk-flex uk-flex-middle" }, [
    _c("div", { staticClass: "th-table-td-xs" }, [
      _c(
        "a",
        {
          class: { "uk-disabled": _vm.value.children.length == 0 },
          attrs: { href: "javascript:void(0)" },
          on: { click: _vm.toggleCollapsed }
        },
        [
          _c("i", {
            staticClass: "uk-icon-small",
            attrs: {
              "uk-icon":
                _vm.collapsed.active(_vm.value.id) ||
                _vm.value.children.length == 0
                  ? "chevron-right"
                  : "chevron-down"
            }
          })
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "uk-width-1-1 uk-flex uk-flex-middle" }, [
      _c(
        "a",
        {
          staticClass: "uk-margin-right",
          attrs: {
            href: _vm.route("liro-menus.admin.menu.edit", {
              menu: _vm.value.id
            })
          }
        },
        [
          _vm._v(
            "\n            " + _vm._s(_vm.value.trans_title) + "\n        "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "uk-label",
          attrs: { href: "javascript:void(0)" },
          on: { click: _vm.updateMenuRoute }
        },
        [_c("span", [_vm._v(_vm._s(_vm.value.route))])]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "th-table-td-m uk-text-center" },
      [
        _c("app-list-switch", {
          staticClass: "is-default",
          attrs: { active: _vm.value.default },
          on: { click: _vm.updateMenuDefault }
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
          on: { click: _vm.updateMenuState }
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
          staticClass: "is-hide",
          attrs: { active: _vm.value.hide },
          on: { click: _vm.updateMenuHide }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "th-table-td-m uk-text-center" }, [
      _c("span", [_vm._v(_vm._s(_vm.value.id))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-65df90a6", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-menu-index" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.route("liro-menus.admin.menu.create") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.trans("liro-menus::admin.menu.create")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th-form is-reset" }, [
        _c("div", { staticClass: "th-table uk-margin-remove-bottom" }, [
          _c("div", { staticClass: "th-table-head" }, [
            _c("div", { staticClass: "th-table-tr uk-flex" }, [
              _c(
                "div",
                { staticClass: "uk-width-medium uk-margin-auto-left" },
                [
                  _c(
                    "app-select",
                    {
                      attrs: {
                        model: _vm.type.id,
                        placeholder: _vm.trans(
                          "liro-menus::form.menu.select_type"
                        )
                      },
                      on: { input: _vm.redirectType }
                    },
                    _vm._l(_vm.types, function(type) {
                      return _c("app-select-option", {
                        key: type.id,
                        attrs: { value: type.id, label: type.title }
                      })
                    })
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "th-table-filter" }, [
            _c("div", { staticClass: "th-table-tr uk-flex" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "th-table-td uk-width-1-1" }, [
                _c("span", [
                  _vm._v(
                    "\n                            " +
                      _vm._s(_vm.trans("liro-menus::form.menu.title")) +
                      "\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "th-table-td th-table-td-m uk-text-center" },
                [
                  _c("span", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.trans("liro-menus::form.menu.default")) +
                        "\n                        "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "th-table-td th-table-td-m uk-text-center" },
                [
                  _c("span", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.trans("liro-menus::form.menu.state")) +
                        "\n                        "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "th-table-td th-table-td-m uk-text-center" },
                [
                  _c("span", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.trans("liro-menus::form.menu.hide")) +
                        "\n                        "
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "th-table-td th-table-td-m uk-text-center" },
                [
                  _c("span", [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.trans("liro-menus::form.menu.id")) +
                        "\n                        "
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.type.menus.length != 0,
                  expression: "type.menus.length != 0"
                }
              ],
              staticClass: "th-table-body"
            },
            [
              _c("vue-nestable", {
                attrs: { threshold: 50, maxDepth: 5 },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      return _c(
                        "vue-nestable-handle",
                        { attrs: { item: item, "data-id": item.id } },
                        [
                          _c("liro-menu-index-item", {
                            attrs: { collapsed: _vm.collapsed },
                            model: {
                              value: item,
                              callback: function($$v) {
                                item = $$v
                              },
                              expression: "item"
                            }
                          })
                        ],
                        1
                      )
                    }
                  }
                ]),
                model: {
                  value: _vm.type.menus,
                  callback: function($$v) {
                    _vm.$set(_vm.type, "menus", $$v)
                  },
                  expression: "type.menus"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.type.menus.length == 0,
                  expression: "type.menus.length == 0"
                }
              ],
              staticClass: "th-table-body"
            },
            [
              _c("div", { staticClass: "th-table-tr" }, [
                _c("div", { staticClass: "uk-text-center" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.trans("theme::form.list.empty")) +
                      "\n                    "
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "th-table-footer" }, [
            _c("div", { staticClass: "th-table-tr uk-flex" }, [
              _c("div", { staticClass: "uk-margin-auto-left" }, [
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
                    staticClass: "uk-button uk-button-small uk-button-success",
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: _vm.updateMenuOrder,
                      shortkey: _vm.updateMenuOrder
                    }
                  },
                  [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.trans("theme::form.toolbar.save")) +
                        "\n                        "
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "th-table-td th-table-td-xs" }, [
      _c("span")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-87ca3f36", module.exports)
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
Component.options.__file = "resources/src/menu/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2215120e", Component.options)
  } else {
    hotAPI.reload("data-v-2215120e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    computed: {

        states: function states() {
            return this.$root.states;
        },

        hides: function hides() {
            return this.$root.hides;
        },

        defaults: function defaults() {
            return this.$root.defaults;
        },

        types: function types() {
            return this.$root.types;
        },

        modules: function modules() {
            return this.$root.modules;
        },

        menu: function menu() {
            return this.$root.menu;
        }

    },

    methods: {

        storeMenu: function storeMenu() {
            var url = Liro.routes.get('liro-menus.ajax.menu.store');
            Axios.post(url, this.menu).then(this.storeMenuResponse);
        },

        storeMenuResponse: function storeMenuResponse(res) {

            var values = {
                menu: res.data.id
            };

            var query = {
                success: 'liro-menus::message.menu.created'
            };

            Liro.routes.redirect('liro-menus.menu.edit', values, query);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-create', this.default);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-menu-create uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: "javascript:window.history.back()" }
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
              on: { click: _vm.storeMenu, shortkey: _vm.storeMenu }
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
                _vm._v(_vm._s(_vm.trans("liro-menus::form.legend.general")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.state") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-state",
                    model: {
                      value: _vm.menu.state,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "state", $$v)
                      },
                      expression: "menu.state"
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
              { attrs: { label: _vm.trans("liro-menus::form.menu.hide") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-hide",
                    model: {
                      value: _vm.menu.hide,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "hide", $$v)
                      },
                      expression: "menu.hide"
                    }
                  },
                  _vm._l(_vm.hides, function(item) {
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
              { attrs: { label: _vm.trans("liro-menus::form.menu.default") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-default",
                    model: {
                      value: _vm.menu.default,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "default", $$v)
                      },
                      expression: "menu.default"
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
            ),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.type") } },
              [
                _c(
                  "app-select",
                  {
                    attrs: {
                      placeholder: _vm.trans(
                        "liro-menus::form.menu.select_type"
                      )
                    },
                    model: {
                      value: _vm.menu.menu_type_id,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "menu_type_id", $$v)
                      },
                      expression: "menu.menu_type_id"
                    }
                  },
                  _vm._l(_vm.types, function(type) {
                    return _c("app-select-option", {
                      key: type.id,
                      attrs: { value: type.id, label: type.title }
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
                _vm._v(_vm._s(_vm.trans("liro-menus::form.legend.info")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-menus::form.menu.title"),
                  required: true
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.title,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "title", $$v)
                    },
                    expression: "menu.title"
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
                  label: _vm.trans("liro-menus::form.menu.route"),
                  required: true
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.route,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "route", $$v)
                    },
                    expression: "menu.route"
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
                  label: _vm.trans("liro-menus::form.menu.module"),
                  required: true
                }
              },
              [
                _c(
                  "app-select",
                  {
                    attrs: {
                      placeholder: _vm.trans(
                        "liro-menus::form.menu.select_module"
                      ),
                      disabled: _vm.menu.lock
                    },
                    model: {
                      value: _vm.menu.module,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "module", $$v)
                      },
                      expression: "menu.module"
                    }
                  },
                  [
                    _vm._l(_vm.modules, function(items, group) {
                      return _vm._l(items, function(routes, index) {
                        return _c(
                          "app-select-group",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: group == "user",
                                expression: "group == 'user'"
                              }
                            ],
                            key: group + "-" + index,
                            attrs: { label: index }
                          },
                          _vm._l(routes, function(label, value) {
                            return _c("app-select-option", {
                              key: value,
                              attrs: { value: value, label: label }
                            })
                          })
                        )
                      })
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.query") } },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.query,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "query", $$v)
                    },
                    expression: "menu.query"
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
    require("vue-hot-reload-api")      .rerender("data-v-2215120e", module.exports)
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
Component.options.__file = "resources/src/menu/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dc12247", Component.options)
  } else {
    hotAPI.reload("data-v-3dc12247", Component.options)
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
//
//
//
//
//
//
//
//
//
//
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

        states: function states() {
            return this.$root.states;
        },

        hides: function hides() {
            return this.$root.hides;
        },

        defaults: function defaults() {
            return this.$root.defaults;
        },

        types: function types() {
            return this.$root.types;
        },

        modules: function modules() {
            return this.$root.modules;
        },

        menu: function menu() {
            return this.$root.menu;
        }

    },

    methods: {

        updateMenu: function updateMenu() {

            var url = this.route('liro-menus.ajax.menu.update', {
                menu: this.menu.id
            });

            this.http.put(url, this.menu).then(this.updateMenuResponse);
        },

        updateMenuResponse: function updateMenuResponse(res) {
            var message = this.trans('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-edit', this.default);
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
    { staticClass: "liro-menu-edit uk-flex", attrs: { "uk-grid": "" } },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: {
                href: _vm.route("liro-menus.admin.menu.index", {
                  type: _vm.menu.menu_type_id
                })
              }
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
              on: { click: _vm.updateMenu, shortkey: _vm.updateMenu }
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
                _vm._v(_vm._s(_vm.trans("liro-menus::form.legend.general")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.state") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-state",
                    model: {
                      value: _vm.menu.state,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "state", $$v)
                      },
                      expression: "menu.state"
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
              { attrs: { label: _vm.trans("liro-menus::form.menu.hide") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-hide",
                    model: {
                      value: _vm.menu.hide,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "hide", $$v)
                      },
                      expression: "menu.hide"
                    }
                  },
                  _vm._l(_vm.hides, function(item) {
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
              { attrs: { label: _vm.trans("liro-menus::form.menu.default") } },
              [
                _c(
                  "app-switch",
                  {
                    staticClass: "is-default",
                    model: {
                      value: _vm.menu.default,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "default", $$v)
                      },
                      expression: "menu.default"
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
            ),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.type") } },
              [
                _c(
                  "app-select",
                  {
                    attrs: {
                      placeholder: _vm.trans(
                        "liro-menus::form.menu.select_type"
                      )
                    },
                    model: {
                      value: _vm.menu.menu_type_id,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "menu_type_id", $$v)
                      },
                      expression: "menu.menu_type_id"
                    }
                  },
                  _vm._l(_vm.types, function(type) {
                    return _c("app-select-option", {
                      key: type.id,
                      attrs: { value: type.id, label: type.title }
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
                _vm._v(_vm._s(_vm.trans("liro-menus::form.legend.info")))
              ])
            ]),
            _vm._v(" "),
            _c(
              "app-label",
              {
                attrs: {
                  label: _vm.trans("liro-menus::form.menu.title"),
                  required: true
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.title,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "title", $$v)
                    },
                    expression: "menu.title"
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
                  label: _vm.trans("liro-menus::form.menu.route"),
                  required: true
                }
              },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.route,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "route", $$v)
                    },
                    expression: "menu.route"
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
                  label: _vm.trans("liro-menus::form.menu.module"),
                  required: true
                }
              },
              [
                _c(
                  "app-select",
                  {
                    attrs: {
                      placeholder: _vm.trans(
                        "liro-menus::form.menu.select_module"
                      ),
                      disabled: _vm.menu.lock
                    },
                    model: {
                      value: _vm.menu.module,
                      callback: function($$v) {
                        _vm.$set(_vm.menu, "module", $$v)
                      },
                      expression: "menu.module"
                    }
                  },
                  [
                    _vm._l(_vm.modules, function(items, group) {
                      return _vm._l(items, function(routes, index) {
                        return _c(
                          "app-select-group",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: group == "user",
                                expression: "group == 'user'"
                              }
                            ],
                            key: group + "-" + index,
                            attrs: { label: index }
                          },
                          _vm._l(routes, function(label, value) {
                            return _c("app-select-option", {
                              key: value,
                              attrs: { value: value, label: label }
                            })
                          })
                        )
                      })
                    })
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "app-label",
              { attrs: { label: _vm.trans("liro-menus::form.menu.query") } },
              [
                _c("app-input", {
                  model: {
                    value: _vm.menu.query,
                    callback: function($$v) {
                      _vm.$set(_vm.menu, "query", $$v)
                    },
                    expression: "menu.query"
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
    require("vue-hot-reload-api")      .rerender("data-v-3dc12247", module.exports)
  }
}

/***/ })
/******/ ]);