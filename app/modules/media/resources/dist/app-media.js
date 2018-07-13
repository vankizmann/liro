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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_media_upload_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_media_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__app_media_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_media_directory_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_media_directory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_media_directory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_media_file_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_media_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__app_media_file_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_media_tree_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_media_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_media_tree_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        this.$liro.event.once('media:upload', function (name, files) {

            if (files.length == 0) {
                return;
            }

            var formData = new FormData();

            _.each(files, function (file, i) {
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

        this.$liro.event.watch('media:goto', function (name, event, directory) {
            _this.path = directory.path;
        });

        this.$liro.event.watch('media:drag', function (name, event, file) {
            _this.$liro.data.set('media:drag', [file.path]);
        });

        this.$liro.event.once('media:move', function (name, event, folder) {

            var req = _this.$http.post(_this.moveRoute, {
                sources: _this.$liro.data.get('media:drag'), target: folder.path
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
            "app-toolbar-button",
            {
              staticClass: "uk-success",
              attrs: {
                href: "#",
                icon: "cloud-upload",
                "uk-toggle": "target: #app-media-upload"
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-media.toolbar.upload")) +
                  "\n        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "app-toolbar-button",
            { attrs: { href: "#", "uk-toggle": "target: #app-module-help" } },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-media.toolbar.help")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "app-module-help" } }, [
        _c("h1", [_vm._v(_vm._s(_vm.$t("liro-media.toolbar.help")))])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "uk-margin-large" }, [
        _c("h1", { staticClass: "uk-heading-primary uk-margin-remove" }, [
          _vm._v(_vm._s(_vm.$t("liro-media.backend.media.index")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-media-breadcrumb uk-margin" }, [
        _c(
          "ul",
          { staticClass: "app-media-breadcrumb-list uk-flex" },
          _vm._l(_vm.breadcrumb, function(directory, index) {
            return _c("app-media-breadcrumb", {
              key: index,
              attrs: {
                directory: directory,
                disable: _vm.parent ? _vm.path == directory.path : true
              },
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
      _c("div", { staticClass: "app-media-browser uk-flex" }, [
        _c(
          "div",
          { staticClass: "app-media-browser-tree" },
          [_c("app-media-tree", { attrs: { directory: _vm.root } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "app-media-browser-body" },
          [
            _c("app-media-upload", {
              attrs: { id: "app-media-upload", hidden: "" }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "app-media-index uk-flex uk-flex-wrap" },
              [
                _vm.parent
                  ? _c("app-media-directory", {
                      attrs: { directory: _vm.parent, icon: "chevron-left" },
                      on: {
                        click: function($event) {
                          _vm.goto(_vm.parent.path)
                        }
                      }
                    })
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        icon: {
            default: function _default() {
                return 'folder';
            },

            type: String
        },
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    methods: {
        drop: function drop(event) {
            this.$liro.event.emit('media:move', event, this.directory);
        }
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
      staticClass:
        "app-media-index-folder uk-flex uk-flex-column uk-flex-middle uk-padding-small",
      on: {
        click: function(event) {
          return _vm.$emit("click", event)
        },
        drop: _vm.drop,
        dragover: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "app-media-index-folder-image uk-flex uk-flex-middle uk-flex-center"
        },
        [_c("span", { attrs: { "uk-icon": _vm.icon } })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-index-folder-name uk-text-center uk-text-truncate uk-margin-top"
        },
        [
          _vm._v(
            "\n        " +
              _vm._s(_vm.directory.name || _vm.$t("liro-media.form.root")) +
              "\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-index-folder-info uk-text-center uk-text-truncate uk-margin-small-bottom"
        },
        [
          _vm._v(
            "\n        " +
              _vm._s(
                _vm.$tc("liro-media.form.element_count", _vm.count, {
                  count: _vm.count
                })
              ) +
              "\n    "
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        file: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
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
    methods: {
        drag: function drag(event) {
            this.$liro.event.emit('media:drag', event, this.file);
        }
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
      staticClass:
        "app-media-index-file uk-flex uk-flex-column uk-flex-middle uk-padding-small",
      attrs: { draggable: "true" },
      on: {
        click: function(event) {
          return _vm.$emit("click", event)
        },
        drag: _vm.drag
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "app-media-index-file-image uk-flex uk-flex-middle uk-flex-center"
        },
        [
          ["image/jpeg", "image/png"].indexOf(_vm.file.type) != -1
            ? _c("img", {
                attrs: {
                  src: _vm.file.url,
                  alt: _vm.file.name,
                  title: _vm.file.name
                }
              })
            : _c("span", { attrs: { "uk-icon": "question" } })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-index-file-name uk-text-center uk-text-truncate uk-margin-top"
        },
        [
          _vm._v(
            "\n        " +
              _vm._s(_vm.file.name || _vm.$t("liro-media.form.root")) +
              "\n    "
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-index-file-info uk-text-center uk-text-truncate uk-margin-small-bottom"
        },
        [_vm._v("\n        " + _vm._s(_vm.size) + "\n    ")]
      )
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        disable: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    methods: {
        drop: function drop(event) {
            this.$liro.event.emit('media:move', event, this.directory);
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
      class: {
        "app-media-breadcrumb-item uk-flex uk-flex-middle": true,
        "app-media-breadcrumb-disable": _vm.disable
      },
      on: {
        click: function(event) {
          return _vm.$emit("click", event)
        },
        drop: _vm.drop,
        dragover: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _c("div", { staticClass: "uk-flex uk-flex-column" }, [
        _c(
          "div",
          { staticClass: "app-media-breadcrumb-name uk-text-truncate" },
          [
            _vm._v(
              "\n            " +
                _vm._s(_vm.directory.name || _vm.$t("liro-media.form.root")) +
                "\n        "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "app-media-breadcrumb-info uk-text-truncate" },
          [
            _vm._v(
              "\n            " +
                _vm._s(
                  _vm.$tc("liro-media.form.element_count", _vm.count, {
                    count: _vm.count
                  })
                ) +
                "\n        "
            )
          ]
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(18)
/* template */
var __vue_template__ = __webpack_require__(19)
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
Component.options.__file = "resources/src/app-media-upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d548db8e", Component.options)
  } else {
    hotAPI.reload("data-v-d548db8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 18 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        // count() {
        //     return this.directory.files.length + this.directory.directories.length;
        // }
    },
    props: {
        // directory: {
        //     default() {
        //         return {};
        //     },
        //     type: Object
        // }
    },
    data: function data() {
        return {
            files: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$liro.event.watch('media:update', function () {
            return _this.files = [];
        });
        // this.$refs.dropzone.setAttribute('ondrop', "event.preventDefault(); liro.event.emit('media:upload', event);");
        // this.$refs.dropzone.setAttribute('ondragover', "event.preventDefault();");
    },

    methods: {
        fileDrop: function fileDrop(event) {
            var _this2 = this;

            _.each(event.dataTransfer.files, function (file) {
                return _this2.files.push(file);
            });
        },
        fileSelect: function fileSelect() {
            var _this3 = this;

            _.each(this.$refs.input.files, function (file) {
                return _this3.files.push(file);
            });
        },
        filePreview: function filePreview(file) {
            return URL.createObjectURL(file);
        },
        fileRemove: function fileRemove(index) {
            this.files.splice(index, 1);
        },
        fileUpload: function fileUpload() {
            this.$liro.event.emit('media:upload', this.files);
        }
    }
});

if (window.liro) {
    liro.vue.$component('app-media-upload', this.default);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "app-media-upload" }, [
    _c(
      "div",
      {
        ref: "dropzone",
        staticClass:
          "app-media-upload-dropzone uk-padding uk-flex uk-flex-wrap",
        on: {
          drop: function($event) {
            $event.preventDefault()
            return _vm.fileDrop($event)
          },
          dragover: function($event) {
            $event.preventDefault()
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "app-media-upload-files uk-width-1-1 uk-flex uk-flex-wrap uk-flex-center"
          },
          [
            _vm.files.length == 0
              ? _c(
                  "div",
                  { staticClass: "app-media-upload-empty uk-text-center" },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.$t("liro-media.upload.empty")))
                    ])
                  ]
                )
              : _vm._l(_vm.files, function(file, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass:
                        "app-media-upload-file uk-flex uk-flex-column uk-padding-small"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "app-media-upload-file-image uk-flex uk-flex-middle uk-flex-center"
                        },
                        [
                          ["image/jpeg", "image/png"].indexOf(file.type) != -1
                            ? _c("img", {
                                attrs: {
                                  src: _vm.filePreview(file),
                                  alt: file.name
                                }
                              })
                            : _c("span", { attrs: { "uk-icon": "question" } })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "app-media-upload-file-name uk-text-center uk-text-truncate uk-margin-top"
                        },
                        [_c("span", [_vm._v(_vm._s(file.name))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "app-media-upload-file-remove uk-text-center uk-text-truncate uk-margin-small-bottom"
                        },
                        [
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  _vm.fileRemove(index)
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("liro-media.upload.remove")))]
                          )
                        ]
                      )
                    ]
                  )
                })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "app-media-upload-button uk-width-1-1 uk-margin-top uk-text-center"
          },
          [
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-primary",
                on: {
                  click: function($event) {
                    _vm.$refs.input.click()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.$t("liro-media.upload.select")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-success",
                on: { click: _vm.fileUpload }
              },
              [_vm._v(_vm._s(_vm.$t("liro-media.upload.start")))]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("input", {
      ref: "input",
      staticStyle: { display: "none" },
      attrs: { type: "file", multiple: "" },
      on: { change: _vm.fileSelect }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d548db8e", module.exports)
  }
}

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(24)
/* template */
var __vue_template__ = __webpack_require__(25)
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
Component.options.__file = "resources/src/app-media-tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03dfe956", Component.options)
  } else {
    hotAPI.reload("data-v-03dfe956", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
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
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }
    },
    computed: {
        count: function count() {
            return this.directory.directories.length + this.directory.files.length;
        }
    },
    methods: {
        click: function click(event) {
            this.$liro.event.$emit('media:goto', event, this.directory);
        },
        drop: function drop(event) {
            this.$liro.event.emit('media:move', event, this.directory);
        }
    }
});

if (window.liro) {
    liro.vue.$component('app-media-tree', this.default);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-media-tree-folder" },
    [
      _c(
        "div",
        {
          staticClass: "app-media-tree-item uk-flex uk-flex-middle",
          on: {
            click: _vm.click,
            drop: _vm.drop,
            dragover: function($event) {
              $event.preventDefault()
            }
          }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "app-media-tree-name" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.directory.name || _vm.$t("liro-media.form.root")) +
                "\n        "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "app-media-tree-count" }, [
            _vm._v("\n            " + _vm._s(_vm.count) + "\n        ")
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.directory.directories, function(item, index) {
        return _c("app-media-tree", { key: index, attrs: { directory: item } })
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-media-tree-icon" }, [
      _c("span", { attrs: { "uk-icon": "folder" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03dfe956", module.exports)
  }
}

/***/ })
/******/ ]);