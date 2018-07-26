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
module.exports = __webpack_require__(23);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_directory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_directory_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_file_vue__ = __webpack_require__(16);
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

        moveRoute: {
            default: function _default() {
                return "";
            },

            type: String
        },

        uploadRoute: {
            default: function _default() {
                return "";
            },

            type: String
        },

        createRoute: {
            default: function _default() {
                return "";
            },

            type: String
        },

        browser: {
            default: function _default() {
                return false;
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
        var _this = this;

        setTimeout(function () {
            return _this.test = false;
        }, 3000);
        return {
            path: "", files: [], root: this.media, test: true
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$liro.event.once("media:upload", function (name, files) {

            if (files.length == 0) {
                return;
            }

            var formData = new FormData();

            formData.append("path", _this2.path);

            _.each(files, function (file, i) {
                formData.append("files[" + i + "]", file);
            });

            var res = _this2.$http.post(_this2.uploadRoute, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            res.then(function (res) {
                return _this2.$liro.event.emit("media:update", res);
            });
        });

        this.$liro.event.watch("media:update", function (name, res) {

            _this2.root = res.data.media;
            _this2.files = [];

            if (window.UIkit.modal('#app-media-upload')) {
                window.UIkit.modal('#app-media-upload').hide();
            }

            if (window.UIkit.modal('#app-media-create')) {
                window.UIkit.modal('#app-media-create').hide();
            }
        });

        this.$liro.event.watch("media:drag", this.dragEvent);

        this.$liro.event.watch("media:goto", this.gotoEvent);
        this.$liro.event.watch("media:select", this.selectEvent);

        this.$liro.event.once("media:folder", this.folderEvent);
        this.$liro.event.once("media:move", this.moveEvent);
    },


    methods: {
        dragEvent: function dragEvent(name, event, file) {
            this.files = [file.path];
        },
        gotoEvent: function gotoEvent(name, event, directory) {
            this.path = directory.path;
        },
        selectEvent: function selectEvent(name, event, file) {
            this.files = _.xor(this.files, [file.path]);
        },
        folderEvent: function folderEvent(name, event, folders) {
            var _this3 = this;

            var req = this.$http.post(this.createRoute, {
                folders: folders, path: this.path
            });

            req.then(function (res) {
                return _this3.$liro.event.emit("media:update", res);
            });
        },
        moveEvent: function moveEvent(name, event, folder) {
            var _this4 = this;

            var req = this.$http.post(this.moveRoute, {
                files: this.files, path: folder.path
            });

            req.then(function (res) {
                return _this4.$liro.event.emit("media:update", res);
            });
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-index", this.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(5)
/* template */
var __vue_template__ = __webpack_require__(6)
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
/* 5 */
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

        this.$liro.event.watch("media:update", function () {
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
            this.$liro.event.emit("media:upload", this.files);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-upload", this.default);
}

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(8)
/* template */
var __vue_template__ = __webpack_require__(9)
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
/* 8 */
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

        this.$liro.event.watch("media:update", function () {
            return _this.folder = '';
        });
    },

    methods: {
        createFolder: function createFolder(event) {
            this.$liro.event.emit('media:folder', event, [this.folder]);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-create", this.default);
}

/***/ }),
/* 9 */
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
/* 10 */
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
        goto: function goto(event) {
            this.$liro.event.emit("media:goto", event, this.directory);
        },
        drop: function drop(event) {
            this.$liro.event.emit("media:move", event, this.directory);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-breadcrumb", this.default);
}

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(14)
/* template */
var __vue_template__ = __webpack_require__(15)
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
/* 14 */
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
        }
    },
    computed: {
        count: function count() {
            return this.directory.files.length + this.directory.directories.length;
        }
    },
    methods: {
        gotoEvent: function gotoEvent(event) {
            this.$liro.event.emit("media:goto", event, this.directory);
        },
        dropEvent: function dropEvent(event) {
            this.$liro.event.emit("media:move", event, this.directory);
        },
        dragEvent: function dragEvent(event) {
            this.$liro.event.emit("media:drag", event, this.directory);
        }
    }
});

if (window.liro) {
    liro.vue.$component("app-media-directory", this.default);
}

/***/ }),
/* 15 */
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
      attrs: { draggable: "true" },
      on: {
        click: _vm.gotoEvent,
        drag: _vm.dragEvent,
        drop: _vm.dropEvent,
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
    require("vue-hot-reload-api")      .rerender("data-v-58d7efc2", module.exports)
  }
}

/***/ }),
/* 16 */
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
            this.$liro.event.emit("media:drag", event, this.file);
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
      staticClass:
        "app-media-index-file uk-flex uk-flex-column uk-flex-middle uk-padding-small",
      attrs: { draggable: "true" },
      on: { drag: _vm.dragEvent }
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
        goto: function goto(event) {
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
            click: _vm.goto,
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
                disabled: _vm.files.length == 0
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
                disable: _vm.parent ? _vm.path == directory.path : true
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
                    attrs: { directory: _vm.parent, icon: "chevron-left" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.active.directories, function(directory) {
                return _c("app-media-directory", {
                  key: directory.path,
                  attrs: { directory: directory }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                return "";
            },

            type: String
        },
        uploadRoute: {
            default: function _default() {
                return "";
            },

            type: String
        },
        createRoute: {
            default: function _default() {
                return "";
            },

            type: String
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
    _c(
      "button",
      {
        staticClass: "uk-button uk-button-primary",
        attrs: { "uk-toggle": "#app-media-browser" }
      },
      [_vm._v("Browser")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
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
          _c(
            "div",
            { staticClass: "uk-modal-body" },
            [
              _c("app-media-index", {
                attrs: {
                  "move-route": _vm.moveRoute,
                  "upload-route": _vm.uploadRoute,
                  "create-route": _vm.createRoute,
                  browser: true
                }
              })
            ],
            1
          ),
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
                  staticClass: "uk-button uk-button-success",
                  staticStyle: { "margin-left": "auto" },
                  attrs: { disabled: true }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("liro-media.upload.start")) +
                      "\n                "
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
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