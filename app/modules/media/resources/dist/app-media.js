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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
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
Component.options.__file = "resources/src/app-media-index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48b3a44a", Component.options)
  } else {
    hotAPI.reload("data-v-48b3a44a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_media_breadcrumb_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_media_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_media_breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_media_directory_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_media_directory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_media_directory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_media_file_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_media_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_media_file_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        moveRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        uploadRoute: {
            default: function _default() {
                return '';
            },

            type: String
        },

        media: {
            default: function _default() {
                return this.$liro.data.get('media', {});
            },

            type: Object
        }

    },

    computed: {
        breadcrumb: function breadcrumb() {
            return this.$liro.func.ladderRecursive(this.root, 'path', this.path, 'directories', []);
        },
        active: function active() {
            return _.nth(this.breadcrumb, -1);
        },
        parent: function parent() {
            return _.nth(this.breadcrumb, -2);
        }
    },

    data: function data() {

        return {
            path: '', root: this.media
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$liro.event.once('media:upload', function (name, event) {

            event.preventDefault();

            var formData = new FormData();

            _.each(event.dataTransfer.files, function (file, i) {
                formData.append('files[' + i + ']', file);
            });

            var res = _this.$http.post(_this.uploadRoute, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            res.then(function (res) {
                return _this.$liro.event.emit('media:update', res);
            });
        });

        this.$liro.event.watch('media:update', function (name, res) {
            _this.root = res.data.media;
        });

        this.$liro.event.watch('media:drag', function (name, event) {
            event.dataTransfer.setData('path', $(event.target).data('path') || $(event.target).parents('[data-path]').data('path'));
        });

        this.$liro.event.once('media:move', function (name, event) {

            var req = _this.$http.post(_this.moveRoute, {
                source: event.dataTransfer.getData('path'), target: $(event.target).data('path') || $(event.target).parents('[data-path]').data('path')
            });

            req.then(function (res) {
                return _this.$liro.event.emit('media:update', res);
            });
        });
    },


    methods: {
        goto: function goto(path) {
            this.path = path;
        },
        test: function test() {
            console.log('test');
        }
    }

});

if (window.liro) {
    liro.vue.$component('app-media-index', this.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-media" },
    [
      _c(
        "portal",
        { attrs: { to: "app-infobar-right" } },
        [
          _c(
            "app-toolbar-link",
            { staticClass: "uk-success", attrs: { icon: "plus", href: "" } },
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
        "div",
        {
          staticClass: "app-media--dropzone",
          staticStyle: { "background-color": "red", height: "400px" },
          attrs: {
            ondrop: "liro.event.emit('media:upload', event)",
            ondragover: "event.preventDefault()"
          }
        },
        [
          _c("input", {
            ref: "files",
            attrs: { type: "file", id: "files", multiple: "" },
            on: {
              change: function($event) {
                _vm.test()
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "app-media--breadcrumb" }, [
        _c(
          "ul",
          { staticClass: "app-media--breadcrumb--list uk-flex" },
          _vm._l(_vm.breadcrumb, function(directory, index) {
            return _c("app-media-breadcrumb", {
              key: index,
              attrs: { directory: directory },
              on: {
                click: function($event) {
                  _vm.goto(directory.path)
                }
              }
            })
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-media--cards uk-flex uk-flex-wrap" },
        [
          _vm.parent
            ? _c(
                "div",
                {
                  staticClass: "app-media--card-blue",
                  attrs: {
                    "data-path": _vm.parent.path,
                    ondrop: "liro.event.emit('media:move', event)",
                    ondragover: "event.preventDefault()"
                  },
                  on: {
                    click: function($event) {
                      _vm.goto(_vm.parent.path)
                    }
                  }
                },
                [_vm._m(0)]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.active.directories, function(directory) {
            return _c("app-media-directory", {
              key: directory.path,
              attrs: { directory: directory },
              on: {
                click: function($event) {
                  _vm.goto(directory.path)
                }
              }
            })
          }),
          _vm._v(" "),
          _vm._l(_vm.active.files, function(file) {
            return _c("app-media-file", {
              key: file.path,
              attrs: { file: file }
            })
          })
        ],
        2
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
    return _c("div", { staticClass: "app-media--card-blue--body" }, [
      _c("div", { staticClass: "app-media--card-blue--icon" }, [
        _c("span", { attrs: { "uk-icon": "chevron-left" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48b3a44a", module.exports)
  }
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
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
Component.options.__file = "resources/src/app-media-directory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40eb3736", Component.options)
  } else {
    hotAPI.reload("data-v-40eb3736", Component.options)
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    props: {
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
    mounted: function mounted() {
        $(this.$refs.card).attr('ondrop', "liro.event.emit('media:move', event)");
        $(this.$refs.card).attr('ondragover', "event.preventDefault()");
    }
});

if (window.liro) {
    liro.vue.$component('app-media-directory', this.default);
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
    {
      ref: "card",
      staticClass: "app-media--card-blue",
      attrs: { "data-path": _vm.directory.path },
      on: {
        click: function($event) {
          _vm.$emit("click", _vm.directory)
        }
      }
    },
    [
      _c("div", { staticClass: "app-media--card-blue--body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "app-media--card-blue--title" }, [
          _vm._v("\n            " + _vm._s(_vm.directory.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "app-media--card-blue--info" }, [
          _vm._v(
            "\n            " +
              _vm._s(
                _vm.$tc("liro-media.form.element_count", _vm.count, {
                  count: _vm.count
                })
              ) +
              "\n        "
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-media--card-blue--icon" }, [
      _c("span", { attrs: { "uk-icon": "folder" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40eb3736", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
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
Component.options.__file = "resources/src/app-media-file.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f52d6798", Component.options)
  } else {
    hotAPI.reload("data-v-f52d6798", Component.options)
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        size: function size() {
            if (this.file.size > 1024 * 1024 * 1024) {
                return (this.file.size / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
            }

            if (this.file.size > 1024 * 1024) {
                return (this.file.size / (1024 * 1024)).toFixed(2) + ' MB';
            }

            return (this.file.size / 1024).toFixed(2) + ' KB';
        }
    },
    props: {
        file: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
    mounted: function mounted() {
        $(this.$refs.card).attr('ondragstart', "liro.event.emit('media:drag', event)");
        $(this.$refs.card).attr('draggable', "true");
    }
});

if (window.liro) {
    liro.vue.$component('app-media-file', this.default);
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
    {
      ref: "card",
      staticClass: "app-media--card-white",
      attrs: { "data-path": _vm.file.path },
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c("div", { staticClass: "app-media--card-white--body" }, [
        _c("div", { staticClass: "app-media--card-white--icon" }, [
          _vm.file.mime == "image/jpeg"
            ? _c("img", { attrs: { "data-src": _vm.file.url, "uk-img": "" } })
            : _vm.file.mime == "image/png"
              ? _c("img", { attrs: { "data-src": _vm.file.url, "uk-img": "" } })
              : _c("span", { attrs: { "uk-icon": "file" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "app-media--card-white--title" }, [
          _vm._v("\n            " + _vm._s(_vm.file.name) + "\n        ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "app-media--card-white--info" }, [
          _vm._v("\n            " + _vm._s(_vm.size) + "\n        ")
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
    require("vue-hot-reload-api")      .rerender("data-v-f52d6798", module.exports)
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(16)
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
Component.options.__file = "resources/src/app-media-breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d40598a", Component.options)
  } else {
    hotAPI.reload("data-v-4d40598a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    props: {
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    }
});

if (window.liro) {
    liro.vue.$component('app-media-breadcrumb', this.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "app-media--breadcrumb-item",
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c("div", { staticClass: "app-media--breadcrumb-item--title" }, [
        _vm._v(
          "\n        " +
            _vm._s(_vm.directory.name || _vm.$t("liro-media.form.root")) +
            "\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-media--breadcrumb-item--info" }, [
        _vm._v(
          "\n        " +
            _vm._s(
              _vm.$tc("liro-media.form.element_count", _vm.count, {
                count: _vm.count
              })
            ) +
            "\n    "
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4d40598a", module.exports)
  }
}

/***/ })
/******/ ]);