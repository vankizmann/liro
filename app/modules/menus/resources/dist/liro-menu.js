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
__webpack_require__(9);
module.exports = __webpack_require__(12);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
/* template */
var __vue_template__ = __webpack_require__(8)
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_collapsed__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_item__ = __webpack_require__(5);
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
            hides: this.Liro.data.get('hides'),
            types: this.Liro.data.get('types'),
            active: this.Liro.data.get('active'),
            menus: this.Liro.data.get('menus')
        };
    },

    /**
     * Create new collapsed instance on creation
     */
    created: function created() {
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0__index_collapsed__["a" /* default */]();
    },

    methods: {

        /**
         * Redirect to type on select change
         */
        redirectType: function redirectType(type) {
            Liro.routes.redirect('liro-menus.menu.index', { type: type });
        },

        /**
         * Submit ajax request and store order and routes
         */
        updateMenuOrder: function updateMenuOrder() {

            var url = Liro.routes.get('liro-menus.menu.index', {
                type: this.active.id
            });

            Axios.post(url, { menus: this.menus }).then(this.updateMenuOrderResponse);
        },

        /**
         * Show success message
         */
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
/* 4 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    props: {

        /**
         * Value property
         */
        value: {
            required: true,
            type: Object
        },

        /**
         * Collapsed helper
         */
        collapsed: {
            // required: true,
            type: Object
        }

    },

    /**
     * Apply styles when update is done
     */
    updated: function updated() {
        this.collapsed.styles();
    },

    methods: {

        /**
         * Toggle id in collaped and force view update
         */
        toggleCollapsed: function toggleCollapsed() {
            this.collapsed.toggle(this.value.id);
            this.$forceUpdate();
        },

        /**
         * Show prompt and handle input
         */
        updateMenuRoute: function updateMenuRoute() {
            UIkit.modal.prompt(Liro.messages.get('liro-menus::form.menu.route'), this.value.route).then(this.updateMenuRouteInput);
        },

        /**
         * Apply route to value or set default if given
         */
        updateMenuRouteInput: function updateMenuRouteInput(input) {
            if (input != null) {
                this.value.route = input || '/';
            }
        },

        /**
         * Submit ajax request with changed state
         */
        updateMenuState: function updateMenuState() {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                state: this.value.state ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed hide
         */
        updateMenuHide: function updateMenuHide() {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                hide: this.value.hide ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateMenuResponse);
        },

        /**
         * Submit ajax request with changed default
         */
        updateMenuDefault: function updateMenuDefault() {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.value.id
            });

            var menu = _.merge(this.value, {
                default: this.value.default ? 0 : 1
            });

            Axios.post(url, menu).then(this.updateMenuResponse);
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
/* 7 */
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
    _c("div", { staticClass: "uk-width-1-2" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.Liro.routes.get("liro-menus.menu.edit", {
              menu: _vm.value.id
            })
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.value.title) + "\n        ")]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "th-table-td-xl th-icon-hover uk-flex uk-flex-left uk-flex-middle"
      },
      [
        _c("span", { staticClass: "uk-margin-small-right" }, [
          _vm._v("\n            " + _vm._s(_vm.value.route) + "\n        ")
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: { href: "javascript:void(0)" },
            on: { click: _vm.updateMenuRoute }
          },
          [_c("i", { attrs: { "uk-icon": "pencil" } })]
        )
      ]
    ),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { ref: "el", staticClass: "liro-menu-index" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: _vm.Liro.routes.get("liro-menus.menu.create") }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(
                    _vm.Liro.messages.get("liro-menus::module.menu.create")
                  ) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "th-table-container" }, [
        _c("div", { staticClass: "th-table uk-margin-remove-bottom" }, [
          _c("div", { staticClass: "th-table-head" }, [
            _c("div", { staticClass: "th-table-tr uk-flex" }, [
              _c(
                "div",
                { staticClass: "uk-width-medium uk-margin-auto-left" },
                [
                  _c("app-form-select-single", {
                    staticClass: "uk-margin-remove-bottom",
                    attrs: {
                      value: _vm.active.id,
                      options: _vm.types,
                      "options-value": "id",
                      "options-label": "title"
                    },
                    on: { input: _vm.redirectType }
                  })
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
              _c("div", { staticClass: "th-table-td uk-width-1-2" }, [
                _c("span", [
                  _vm._v(
                    "\n                            " +
                      _vm._s(
                        _vm.Liro.messages.get("liro-menus::form.menu.title")
                      ) +
                      "\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "th-table-td th-table-td-xl" }, [
                _c("span", [
                  _vm._v(
                    "\n                            " +
                      _vm._s(
                        _vm.Liro.messages.get("liro-menus::form.menu.route")
                      ) +
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
                        _vm._s(
                          _vm.Liro.messages.get("liro-menus::form.menu.default")
                        ) +
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
                        _vm._s(
                          _vm.Liro.messages.get("liro-menus::form.menu.state")
                        ) +
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
                        _vm._s(
                          _vm.Liro.messages.get("liro-menus::form.menu.hide")
                        ) +
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
                        _vm._s(
                          _vm.Liro.messages.get("liro-menus::form.menu.id")
                        ) +
                        "\n                        "
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.menus.length != 0
            ? _c(
                "div",
                { staticClass: "th-table-body" },
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
                      value: _vm.menus,
                      callback: function($$v) {
                        _vm.menus = $$v
                      },
                      expression: "menus"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.menus.length == 0
            ? _c("div", { staticClass: "th-table-body" }, [
                _c("div", { staticClass: "th-table-tr" }, [
                  _c("div", { staticClass: "uk-text-center" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.Liro.messages.get("theme::form.list.empty")
                        ) +
                        "\n                    "
                    )
                  ])
                ])
              ])
            : _vm._e(),
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
                        _vm._s(
                          _vm.Liro.messages.get("theme::form.toolbar.save")
                        ) +
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
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
/* 10 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    /**
     * Get data from liro framework
     */
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            hides: this.Liro.data.get('hides'),
            defaults: this.Liro.data.get('defaults'),
            types: this.Liro.data.get('types'),
            modules: this.Liro.data.get('modules'),
            menu: this.Liro.data.get('menu')
        };
    },

    methods: {

        /**
         * Submit ajax request to create menu
         */
        storeMenu: function storeMenu() {
            var url = Liro.routes.get('liro-menus.menu.create');
            Axios.post(url, this.menu).then(this.storeMenuResponse);
        },

        /**
         * Redirect and show success message
         */
        storeMenuResponse: function storeMenuResponse(res) {

            var values = {
                menu: res.data.menu.id
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
/* 11 */
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
              on: { click: _vm.storeMenu, shortkey: _vm.storeMenu }
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
                label: _vm.Liro.messages.get("liro-menus::form.menu.state")
              },
              model: {
                value: _vm.menu.state,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "state", $$v)
                },
                expression: "menu.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-hide uk-width-1-1",
              attrs: {
                name: "hide",
                options: _vm.hides,
                label: _vm.Liro.messages.get("liro-menus::form.menu.hide")
              },
              model: {
                value: _vm.menu.hide,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "hide", $$v)
                },
                expression: "menu.hide"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-default uk-width-1-1",
              attrs: {
                name: "default",
                options: _vm.defaults,
                label: _vm.Liro.messages.get("liro-menus::form.menu.default")
              },
              model: {
                value: _vm.menu.default,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "default", $$v)
                },
                expression: "menu.default"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "menu_type_id",
                options: _vm.types,
                "options-value": "id",
                "options-label": "title",
                label: _vm.Liro.messages.get("liro-menus::form.menu.type"),
                placeholder: _vm.Liro.messages.get(
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
                label: _vm.Liro.messages.get("liro-menus::form.menu.title")
              },
              model: {
                value: _vm.menu.title,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "title", $$v)
                },
                expression: "menu.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "route",
                label: _vm.Liro.messages.get("liro-menus::form.menu.route")
              },
              model: {
                value: _vm.menu.route,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "route", $$v)
                },
                expression: "menu.route"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "module",
                options: _vm.modules,
                label: _vm.Liro.messages.get("liro-menus::form.menu.module"),
                placeholder: _vm.Liro.messages.get(
                  "liro-menus::form.menu.select_module"
                )
              },
              model: {
                value: _vm.menu.module,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "module", $$v)
                },
                expression: "menu.module"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "query",
                label: _vm.Liro.messages.get("liro-menus::form.menu.query")
              },
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
/* 13 */
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


/* harmony default export */ __webpack_exports__["default"] = ({

    /**
     * Get data from liro framework
     */
    data: function data() {
        return {
            states: this.Liro.data.get('states'),
            hides: this.Liro.data.get('hides'),
            defaults: this.Liro.data.get('defaults'),
            types: this.Liro.data.get('types'),
            modules: this.Liro.data.get('modules'),
            menu: this.Liro.data.get('menu')
        };
    },

    methods: {

        /**
         * Submit ajax request to save menu
         */
        updateMenu: function updateMenu() {

            var url = Liro.routes.get('liro-menus.menu.edit', {
                menu: this.menu.id
            });

            Axios.post(url, this.menu).then(this.updateMenuResponse);
        },

        /**
         * Show success message
         */
        updateMenuResponse: function updateMenuResponse(res) {
            var message = Liro.messages.get('liro-menus::message.menu.saved');
            UIkit.notification(message, 'success');
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-menu-edit', this.default);
}

/***/ }),
/* 14 */
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
                href: _vm.Liro.routes.get("liro-menus.menu.index", {
                  type: _vm.menu.menu_type_id
                })
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
              on: { click: _vm.updateMenu, shortkey: _vm.updateMenu }
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
                label: _vm.Liro.messages.get("liro-menus::form.menu.state")
              },
              model: {
                value: _vm.menu.state,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "state", $$v)
                },
                expression: "menu.state"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-hide uk-width-1-1",
              attrs: {
                name: "hide",
                options: _vm.hides,
                label: _vm.Liro.messages.get("liro-menus::form.menu.hide")
              },
              model: {
                value: _vm.menu.hide,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "hide", $$v)
                },
                expression: "menu.hide"
              }
            }),
            _vm._v(" "),
            _c("app-form-switch", {
              staticClass: "is-default uk-width-1-1",
              attrs: {
                name: "default",
                options: _vm.defaults,
                label: _vm.Liro.messages.get("liro-menus::form.menu.default")
              },
              model: {
                value: _vm.menu.default,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "default", $$v)
                },
                expression: "menu.default"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "menu_type_id",
                options: _vm.types,
                "options-value": "id",
                "options-label": "title",
                label: _vm.Liro.messages.get("liro-menus::form.menu.type"),
                placeholder: _vm.Liro.messages.get(
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
                label: _vm.Liro.messages.get("liro-menus::form.menu.title")
              },
              model: {
                value: _vm.menu.title,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "title", $$v)
                },
                expression: "menu.title"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "route",
                label: _vm.Liro.messages.get("liro-menus::form.menu.route")
              },
              model: {
                value: _vm.menu.route,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "route", $$v)
                },
                expression: "menu.route"
              }
            }),
            _vm._v(" "),
            _c("app-form-select-single", {
              attrs: {
                name: "module",
                options: _vm.modules,
                label: _vm.Liro.messages.get("liro-menus::form.menu.module"),
                placeholder: _vm.Liro.messages.get(
                  "liro-menus::form.menu.select_module"
                )
              },
              model: {
                value: _vm.menu.module,
                callback: function($$v) {
                  _vm.$set(_vm.menu, "module", $$v)
                },
                expression: "menu.module"
              }
            }),
            _vm._v(" "),
            _c("app-form-input", {
              attrs: {
                name: "query",
                label: _vm.Liro.messages.get("liro-menus::form.menu.query")
              },
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