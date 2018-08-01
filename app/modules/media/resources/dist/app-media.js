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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
Component.options.__file = "resources/src/media/components/upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-902fe808", Component.options)
  } else {
    hotAPI.reload("data-v-902fe808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(11)
/* template */
var __vue_template__ = __webpack_require__(12)
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
Component.options.__file = "resources/src/media/components/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1801a977", Component.options)
  } else {
    hotAPI.reload("data-v-1801a977", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
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
Component.options.__file = "resources/src/media/components/breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec789904", Component.options)
  } else {
    hotAPI.reload("data-v-ec789904", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
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
Component.options.__file = "resources/src/media/components/directory.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58d7efc2", Component.options)
  } else {
    hotAPI.reload("data-v-58d7efc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(17)
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
Component.options.__file = "resources/src/media/components/file.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-453f5ab7", Component.options)
  } else {
    hotAPI.reload("data-v-453f5ab7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(23);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(8)
/* template */
var __vue_template__ = __webpack_require__(22)
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
Component.options.__file = "resources/src/media/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4285e98", Component.options)
  } else {
    hotAPI.reload("data-v-a4285e98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_directory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_file_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tree_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_tree_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        browser: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },

        multiple: {
            default: function _default() {
                return true;
            },

            type: Boolean
        },

        media: {
            default: function _default() {
                return this.$liro.data.get("media", {});
            },

            type: Object
        }

    },

    computed: {
        breadcrumb: function breadcrumb() {
            return this.$liro.func.ladderRecursive(this.root, "path", this.path, "directories", []);
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
            path: "", selected: [], root: this.media
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$on('media.goto', function (event, directory) {
            _this.path = directory.path;_this.selected = [];
        });

        this.$on('media.select', function (event, item) {

            if (_this.multiple == false) {
                return _this.selected = [item];
            }

            var index = _.findIndex(_this.selected, ['path', item.path]);

            if (index == -1) {
                return _this.selected.push(item);
            }

            return _this.selected.splice(index, 1);
        });

        this.$on("media.upload", function (files) {

            if (files.length == 0) {
                return;
            }

            var formData = new FormData();

            formData.append("path", _this.path);

            _.each(files, function (file, i) {
                formData.append("files[" + i + "]", file);
            });

            var res = _this.$http.post(_this.$liro.routes.get('media-upload'), formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            res.then(function (res) {
                return _this.$liro.event.emit("media.update", res);
            });
        });

        this.$liro.event.watch("media.update", function (name, res) {

            _this.root = res.data.media;
            _this.selected = [];

            if (window.UIkit.modal('#app-media-upload')) {
                window.UIkit.modal('#app-media-upload').hide();
            }

            if (window.UIkit.modal('#app-media-create')) {
                window.UIkit.modal('#app-media-create').hide();
            }
        });

        this.$on("media.folder", this.folderEvent);
        this.$on("media.move", this.moveEvent);

        this.$on("media.delete", function () {

            var req = _this.$http.post(_this.$liro.routes.get('media-delete'), {
                files: _.map(_this.selected, function (item) {
                    return item.path;
                }), path: _this.path
            });

            req.then(function (res) {
                return _this.$liro.event.emit("media.update", res);
            });
        });
    },


    methods: {
        isActive: function isActive(path) {
            return _.findIndex(this.selected, ['path', path]) != -1;
        },
        gotoEvent: function gotoEvent(event, directory) {
            this.path = directory.path;this.selected = [];
        },
        folderEvent: function folderEvent(event, folders) {
            var _this2 = this;

            var req = this.$http.post(this.$liro.routes.get('media-create'), {
                folders: folders, path: this.path
            });

            req.then(function (res) {
                return _this2.$liro.event.emit("media.update", res);
            });
        },
        moveEvent: function moveEvent(event, folder) {
            var _this3 = this;

            var req = this.$http.post(this.$liro.routes.get('media-move'), {
                files: _.map(this.selected, function (item) {
                    return item.path;
                }), path: folder.path
            });

            req.then(function (res) {
                return _this3.$liro.event.emit("media.update", res);
            });
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-index", this.default);
}

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
//
//
//
//
//
//
//
//
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
            files: []
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$liro.event.watch("media.update", function () {
            return _this.files = [];
        });
    },

    methods: {
        fileDrop: function fileDrop(event) {
            var _this2 = this;

            _.each(event.dataTransfer.files, function (file) {
                return file.type != '' ? _this2.files.push(file) : null;
            });
        },
        fileSelect: function fileSelect(event) {
            var _this3 = this;

            _.each(this.$refs.input.files, function (file) {
                return _this3.files.push(file);
            });
        },
        filePreview: function filePreview(file) {
            return URL.createObjectURL(file);
        },
        fileRemove: function fileRemove(index) {
            isNaN(index) ? this.files = [] : this.files.splice(index, 1);
        },
        fileUpload: function fileUpload(event) {
            this.$parent.$emit("media.upload", this.files);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-upload", this.default);
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
      ref: "dropzone",
      staticClass: "app-media-upload uk-modal-container",
      attrs: { "uk-modal": "" },
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
      _c("button", {
        staticClass: "uk-modal-close-default uk-close-large",
        attrs: { type: "button", "uk-close": "" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-upload uk-modal-dialog uk-margin-auto-vertical"
        },
        [
          _c("div", { staticClass: "uk-modal-body" }, [
            _c("div", { staticClass: "app-media-upload-dropzone uk-padding" }, [
              _c(
                "div",
                {
                  staticClass:
                    "app-media-upload-files uk-flex uk-flex-wrap uk-flex-center"
                },
                [
                  _vm.files.length == 0
                    ? _c(
                        "div",
                        {
                          staticClass: "app-media-upload-empty uk-text-center"
                        },
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
                                ["image/jpeg", "image/png"].indexOf(
                                  file.type
                                ) != -1
                                  ? _c("img", {
                                      attrs: {
                                        src: _vm.filePreview(file),
                                        alt: file.name
                                      }
                                    })
                                  : _c("span", {
                                      attrs: { "uk-icon": "question" }
                                    })
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
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("liro-media.upload.remove"))
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      }),
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
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.$t("liro-media.upload.select")) +
                              "\n                        "
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
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "app-media-upload-button uk-modal-footer uk-flex uk-flex-middle"
            },
            [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-danger",
                  staticStyle: { "margin-right": "auto" },
                  attrs: { disabled: _vm.files.length == 0 },
                  on: { click: _vm.fileRemove }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("liro-media.upload.remove_all")) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-success",
                  staticStyle: { "margin-left": "auto" },
                  attrs: { disabled: _vm.files.length == 0 },
                  on: { click: _vm.fileUpload }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("liro-media.upload.start")) +
                      "\n            "
                  )
                ]
              )
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-902fe808", module.exports)
  }
}

/***/ }),
/* 11 */
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
    data: function data() {
        return {
            folder: ''
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$liro.event.watch("media.update", function () {
            return _this.folder = '';
        });
    },

    methods: {
        createFolder: function createFolder(event) {
            this.$parent.$emit('media.folder', event, [this.folder]);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-create", this.default);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-media-create", attrs: { "uk-modal": "" } },
    [
      _c("button", {
        staticClass: "uk-modal-close-default uk-close-large",
        attrs: { type: "button", "uk-close": "" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "app-media-create uk-modal-dialog uk-modal-body uk-margin-auto-vertical"
        },
        [
          _c("div", { staticClass: "uk-flex uk-flex-center uk-flex-middle" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.folder,
                  expression: "folder"
                }
              ],
              staticClass: "uk-input uk-margin-small-right",
              attrs: {
                type: "text",
                placeholder: _vm.$t("liro-media.placeholder.folder"),
                autofocus: "true"
              },
              domProps: { value: _vm.folder },
              on: {
                keyup: function($event) {
                  if (
                    !("button" in $event) &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.createFolder($event)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.folder = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-primary",
                attrs: { disabled: _vm.folder == "" },
                on: { click: _vm.createFolder }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("liro-media.form.create")) +
                    "\n            "
                )
              ]
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1801a977", module.exports)
  }
}

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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        disabled: {
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
        goto: function goto(event) {
            this.$parent.$emit('media.goto', event, this.directory);
        },
        drop: function drop(event) {
            this.$parent.$emit("media.move", event, this.directory);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-breadcrumb", this.default);
}

/***/ }),
/* 14 */
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
        "app-media-breadcrumb-disable": _vm.disabled
      },
      on: {
        click: _vm.goto,
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
    require("vue-hot-reload-api")      .rerender("data-v-ec789904", module.exports)
  }
}

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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        icon: {
            default: function _default() {
                return "folder";
            },

            type: String
        },
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        },
        selected: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },
        disabled: {
            default: function _default() {
                return false;
            },

            type: Boolean
        }
    },
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    methods: {
        clickEvent: function clickEvent(event) {
            if (!this.disabled) {
                this.$parent.$emit("media.select", event, this.directory);
            }
        },
        dblclickEvent: function dblclickEvent(event) {
            this.$parent.$emit("media.goto", event, this.directory);
        },
        dropEvent: function dropEvent(event) {
            // this.$parent.$emit("media.move", this.directory);
            this.$parent.$emit("media.move", event, this.directory);
        },
        dragEvent: function dragEvent(event) {
            if (!this.disabled) {
                this.$parent.$emit("media.drag", event, this.directory);
            }
        },
        dragoverEvent: function dragoverEvent(event) {
            if (this.selected == false) {
                event.preventDefault();
            }
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-directory", this.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: {
        "app-media-index-folder uk-flex uk-flex-column uk-flex-middle uk-padding-small": true,
        "uk-selected": _vm.selected
      },
      attrs: { draggable: _vm.selected },
      on: {
        dblclick: _vm.dblclickEvent,
        click: _vm.clickEvent,
        drag: _vm.dragEvent,
        drop: _vm.dropEvent,
        dragover: _vm.dragoverEvent
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
    require("vue-hot-reload-api")      .rerender("data-v-58d7efc2", module.exports)
  }
}

/***/ }),
/* 17 */
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
        file: {
            default: function _default() {
                return {};
            },

            type: Object
        },
        selected: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },
        disabled: {
            default: function _default() {
                return false;
            },

            type: Boolean
        }
    },
    computed: {
        size: function size() {
            if (this.file.size > 1024 * 1024 * 1024) {
                return (this.file.size / (1024 * 1024 * 1024)).toFixed(2) + " GB";
            }

            if (this.file.size > 1024 * 1024) {
                return (this.file.size / (1024 * 1024)).toFixed(2) + " MB";
            }

            return (this.file.size / 1024).toFixed(2) + " KB";
        }
    },
    methods: {
        dragEvent: function dragEvent(event) {
            if (!this.disabled) {
                this.$parent.$emit("media.drag", event, this.file);
            }
        },
        clickEvent: function clickEvent(event) {
            if (!this.disabled) {
                this.$parent.$emit("media.select", event, this.file);
            }
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-file", this.default);
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
    {
      class: {
        "app-media-index-file uk-flex uk-flex-column uk-flex-middle uk-padding-small": true,
        "uk-selected": _vm.selected
      },
      attrs: { draggable: _vm.selected },
      on: { drag: _vm.dragEvent, click: _vm.clickEvent }
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
    require("vue-hot-reload-api")      .rerender("data-v-453f5ab7", module.exports)
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
Component.options.__file = "resources/src/media/components/tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7894104e", Component.options)
  } else {
    hotAPI.reload("data-v-7894104e", Component.options)
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {

        /**
         * Current directory
         */
        directory: {
            default: function _default() {
                return {};
            },

            type: Object
        }

    },
    computed: {

        /**
         * Item count
         */
        count: function count() {
            return this.directory.directories.length + this.directory.files.length;
        }
    },
    methods: {

        /**
         * Trigger media goto event
         */
        gotoEvent: function gotoEvent(event) {
            this.$parent.$emit('media.goto', event, this.directory);
        },


        /**
         * Trigger media move event
         */
        moveEvent: function moveEvent(event) {
            this.$parent.$emit('media.move', event, this.directory);
        }
    },
    mounted: function mounted() {
        var _this = this;

        /**
         * Pass goto event to parent
         */
        this.$on('media.goto', function (event, directory) {
            return _this.$parent.$emit('media.goto', event, directory);
        });

        /**
         * Pass move event to parent
         */
        this.$on('media.move', function (event, directory) {
            return _this.$parent.$emit('media.move', event, directory);
        });
    }
});

if (window.liro) {
    liro.vue.$component('app-media-tree', this.default);
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
    { staticClass: "app-media-tree-folder" },
    [
      _c(
        "div",
        {
          staticClass: "app-media-tree-item uk-flex uk-flex-middle",
          on: {
            click: _vm.gotoEvent,
            drop: _vm.moveEvent,
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
    require("vue-hot-reload-api")      .rerender("data-v-7894104e", module.exports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app-media" },
    [
      _vm.browser == false
        ? _c(
            "portal",
            { attrs: { to: "app-infobar-right" } },
            [
              _c(
                "app-toolbar-button",
                {
                  attrs: {
                    href: "#",
                    disabled: true,
                    "uk-toggle": "target: #app-module-help"
                  }
                },
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
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.browser == false
        ? _c(
            "portal",
            { attrs: { to: "app-toolbar-left" } },
            [
              _c(
                "app-toolbar-button",
                {
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
                {
                  attrs: {
                    href: "#",
                    icon: "folder",
                    "uk-toggle": "target: #app-media-create"
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("liro-media.toolbar.folder")) +
                      "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "app-toolbar-right" } },
        [
          _c(
            "app-toolbar-button",
            {
              attrs: {
                href: "#",
                icon: "trash",
                disabled: _vm.selected.length == 0
              },
              on: {
                click: function($event) {
                  _vm.$emit("media.delete")
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.$t("liro-media.toolbar.delete")) +
                  "\n        "
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.browser == false
        ? _c("portal", { attrs: { to: "app-module-help" } }, [
            _c("h1", [_vm._v(_vm._s(_vm.$t("liro-media.toolbar.help")))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.browser == false
        ? _c("div", { staticClass: "uk-margin-large" }, [
            _c("h1", { staticClass: "uk-heading-primary uk-margin-remove" }, [
              _vm._v(_vm._s(_vm.$t("liro-media.backend.media.index")))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.browser == false
        ? _c("app-media-upload", { attrs: { id: "app-media-upload" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.browser == false
        ? _c("app-media-create", { attrs: { id: "app-media-create" } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "app-media-breadcrumb" }, [
        _c(
          "ul",
          { staticClass: "app-media-breadcrumb-list uk-flex" },
          _vm._l(_vm.breadcrumb, function(directory, index) {
            return _c("app-media-breadcrumb", {
              key: index,
              attrs: {
                directory: directory,
                disabled: _vm.parent ? _vm.path == directory.path : true
              }
            })
          })
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-media-browser uk-flex" }, [
        _vm.browser == false
          ? _c(
              "div",
              { staticClass: "app-media-browser-tree" },
              [_c("app-media-tree", { attrs: { directory: _vm.root } })],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "app-media-browser-body" }, [
          _c(
            "div",
            { staticClass: "app-media-index uk-flex uk-flex-wrap" },
            [
              _vm.parent
                ? _c("app-media-directory", {
                    attrs: {
                      directory: _vm.parent,
                      icon: "chevron-left",
                      disabled: true
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.active.directories, function(directory) {
                return _c("app-media-directory", {
                  key: directory.path,
                  attrs: {
                    directory: directory,
                    selected: _vm.isActive(directory.path)
                  }
                })
              }),
              _vm._v(" "),
              _vm._l(_vm.active.files, function(file) {
                return _c("app-media-file", {
                  key: file.path,
                  attrs: { file: file, selected: _vm.isActive(file.path) }
                })
              })
            ],
            2
          )
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-a4285e98", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
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
Component.options.__file = "resources/src/media/browser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba2f64ec", Component.options)
  } else {
    hotAPI.reload("data-v-ba2f64ec", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_directory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_file_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            default: function _default() {
                return [];
            },

            type: Array
        },
        label: {
            default: function _default() {
                return '';
            },

            type: String
        },
        multiple: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },
        browser: {
            default: function _default() {
                return false;
            },

            type: Boolean
        },
        files: {
            default: function _default() {
                return true;
            },

            type: Boolean
        },
        mimes: {
            default: function _default() {
                return ['image/jpeg', 'image/png'];
            },

            type: Array
        }
    },
    computed: {
        breadcrumb: function breadcrumb() {
            return this.liro.func.ladderRecursive(this.media, "path", this.path, "directories", []);
        },
        active: function active() {
            return _.nth(this.breadcrumb, -1);
        },
        parent: function parent() {
            return _.nth(this.breadcrumb, -2);
        },
        values: function values() {
            var _this = this;

            return _.reduce(this.value, function (result, path) {

                var fullPath = path;

                if (path.match(/\/+/)) {
                    path = path.substr(0, path.lastIndexOf("/"));
                }

                var directory = _this.liro.func.findRecursive(_this.media, 'path', path, 'directories');

                if (!directory) {
                    return result;
                }

                var file = _.find(directory.files, ['path', fullPath]);

                if (file) {
                    return _.concat(result, [file]);
                }

                return result;
            }, []);
        }
    },
    data: function data() {
        return {
            path: this.value, selected: [],
            media: this.liro.data.get("media", {})
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        this.selected = this.values;

        this.$on('media.goto', function (event, directory) {
            _this2.path = directory.path;
        });

        this.$on("media.select", function (event, item) {

            if (_this2.multiple == false) {
                return _this2.selected = [item];
            }

            var index = _.findIndex(_this2.selected, ['path', item.path]);

            if (index == -1) {
                return _this2.selected.push(item);
            }

            return _this2.selected.splice(index, 1);
        });
    },


    methods: {
        setImage: function setImage() {
            this.$emit("input", _.map(this.selected, function (item) {
                return item.path;
            }));
            window.UIkit.modal(this.$refs.modal).hide();
        },
        removeImage: function removeImage() {
            this.$emit("input", []);
            window.UIkit.modal(this.$refs.modal).hide();
        },
        isActive: function isActive(path) {
            return _.findIndex(this.selected, ['path', path]) != -1;
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-browser", this.default);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "uk-flex uk-flex-wrap" }, [
      _vm.label != ""
        ? _c("div", { staticClass: "uk-width-1-1" }, [
            _c("label", { staticClass: "uk-form-label" }, [
              _vm._v(_vm._s(_vm.label))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-media-preview uk-flex uk-flex-wrap uk-width-1-1" },
        [
          _vm._l(_vm.values, function(item, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "app-media-preview-item uk-flex uk-flex-middle uk-flex-center"
              },
              [
                ["image/jpeg", "image/png"].indexOf(item.type) != -1
                  ? _c("img", {
                      attrs: {
                        src: item.url,
                        alt: item.name,
                        title: item.name,
                        "uk-cover": ""
                      }
                    })
                  : _c("span", { attrs: { "uk-icon": "question" } })
              ]
            )
          }),
          _vm._v(" "),
          _vm._m(0)
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "modal",
        staticClass: "app-media-browser uk-modal-container",
        attrs: { id: "app-media-browser", "uk-modal": "" }
      },
      [
        _c("button", {
          staticClass: "uk-modal-close-default uk-close-large",
          attrs: { type: "button", "uk-close": "" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "uk-modal-dialog uk-margin-auto-vertical" }, [
          _c("div", { staticClass: "uk-modal-body" }, [
            _c("div", { staticClass: "app-media-breadcrumb" }, [
              _c(
                "ul",
                { staticClass: "app-media-breadcrumb-list uk-flex" },
                _vm._l(_vm.breadcrumb, function(directory, index) {
                  return _c("app-media-breadcrumb", {
                    key: index,
                    attrs: {
                      directory: directory,
                      disabled: _vm.parent ? _vm.path == directory.path : true
                    }
                  })
                })
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "app-media-index uk-flex uk-flex-wrap" },
              [
                _vm.parent
                  ? _c("app-media-directory", {
                      attrs: {
                        directory: _vm.parent,
                        disabled: true,
                        icon: "chevron-left"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.active.directories, function(directory) {
                  return _c("app-media-directory", {
                    key: directory.path,
                    attrs: {
                      directory: directory,
                      disabled: _vm.files,
                      selected: _vm.isActive(directory.path)
                    }
                  })
                }),
                _vm._v(" "),
                _vm._l(_vm.active.files, function(file) {
                  return _c("app-media-file", {
                    key: file.path,
                    attrs: {
                      file: file,
                      disabled:
                        !_vm.files || _vm.mimes.indexOf(file.type) == -1,
                      selected: _vm.isActive(file.path)
                    }
                  })
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-modal-footer uk-flex" }, [
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-danger uk-margin-auto-right",
                attrs: { type: "button", disabled: _vm.value.length == 0 },
                on: { click: _vm.removeImage }
              },
              [_vm._v(_vm._s(_vm.$t("liro-media.browser.remove")))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "uk-button uk-button-success uk-margin-auto-left",
                attrs: { type: "button", disabled: _vm.selected.length == 0 },
                on: { click: _vm.setImage }
              },
              [_vm._v(_vm._s(_vm.$t("liro-media.browser.select")))]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-media-preview-button" }, [
      _c(
        "button",
        {
          staticClass: "uk-button uk-button-primary",
          attrs: { "uk-toggle": "#app-media-browser" }
        },
        [_c("span", { attrs: { "uk-icon": "pencil" } })]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ba2f64ec", module.exports)
  }
}

/***/ })
/******/ ]);