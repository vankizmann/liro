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

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(3)
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
Component.options.__file = "resources/src/folder/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6395a1f4", Component.options)
  } else {
    hotAPI.reload("data-v-6395a1f4", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_folder__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_file__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_file__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_upload__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_upload__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

        folder: function folder() {
            return this.$root.folder;
        }

    },

    methods: {

        fetchFolder: function fetchFolder(path) {

            var url = this.route('liro-media.ajax.folder.index', null, {
                path: path != null ? path : this.folder.path
            });

            this.http.get(url).then(this.fetchFolderResponse);
        },

        fetchFolderResponse: function fetchFolderResponse(res) {
            this.$root.folder = res.data;
        },

        createFolderPrompt: function createFolderPrompt() {
            var message = this.trans('liro-media::form.folder.name');
            UIkit.modal.prompt(message, '').then(this.createFolder);
        },

        createFolder: function createFolder(name) {

            if (name == null || name == '') {
                return;
            }

            var url = this.route('liro-media.ajax.folder.create');

            var folder = {
                path: this.folder.path, name: name
            };

            this.http.post(url, folder).then(this.createFolderResponse);
        },

        createFolderResponse: function createFolderResponse(res) {
            var message = this.trans('liro-media::message.folder.created');
            UIkit.notification(message, 'success');
        }

    },

    provide: function provide() {
        return {
            folder: this
        };
    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index', this.default);
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
Component.options.__file = "resources/src/folder/index/folder.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05230a99", Component.options)
  } else {
    hotAPI.reload("data-v-05230a99", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({

    inject: ['folder'],

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    methods: {

        renameFolderPrompt: function renameFolderPrompt() {

            UIkit.toggle(this.$refs.dropdown);

            var message = this.trans('liro-media::form.folder.name');
            UIkit.modal.prompt(message, this.value.name).then(this.renameFolder);
        },

        renameFolder: function renameFolder(dest) {

            if (dest == null || dest == '') {
                return;
            }

            var url = this.route('liro-media.ajax.folder.rename');

            var folder = {
                path: this.value.path, dest: dest
            };

            this.http.post(url, folder).then(this.renameFolderResponse);
        },

        renameFolderResponse: function renameFolderResponse(res) {

            UIkit.toggle(this.$refs.dropdown);

            var message = Liro.messages.get('liro-media::message.folder.renamed');
            UIkit.notification(message, 'success');
        },

        deleteFolderConfirm: function deleteFolderConfirm() {

            var message = this.trans('liro-media::message.folder.delete', {
                name: this.value.name
            });

            UIkit.modal.confirm(message).then(this.deleteFolder, function () {
                return null;
            });
        },

        deleteFolder: function deleteFolder() {

            var url = this.route('liro-media.ajax.folder.delete');

            var folder = {
                path: this.value.path
            };

            this.http.post(url, folder).then(this.deleteFolderResponse);
        },

        deleteFolderResponse: function deleteFolderResponse(res) {
            var message = Liro.messages.get('liro-media::message.folder.deleted');
            UIkit.notification(message, 'success');
        },

        dropFile: function dropFile(event) {

            var file = event.dataTransfer.getData('file');

            if (!file) {
                return;
            }

            var url = this.route('liro-media.ajax.file.move');

            var folder = {
                source: file, destination: this.value.path
            };

            this.http.post(url, folder).then(this.moveFileResponse);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index-folder', this.default);
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
      staticClass:
        "liro-media-item is-folder uk-flex uk-flex-column uk-position-relative",
      on: {
        dblclick: function($event) {
          _vm.folder.fetchFolder(_vm.value.path)
        },
        drop: _vm.dropFile
      }
    },
    [
      _c("div", { staticClass: "liro-media-options uk-position-top-right" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "dropdown",
            attrs: { "uk-dropdown": "mode: click; pos: bottom-center;" }
          },
          [
            _c("ul", { staticClass: "uk-nav" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm.renameFolderPrompt }
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.trans("theme::form.toolbar.rename")))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      "!click": function($event) {
                        return _vm.deleteFolderConfirm($event)
                      }
                    }
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.trans("theme::form.toolbar.delete")))
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "liro-media-name uk-margin-auto-top uk-text-center" },
        [
          _c(
            "div",
            { staticClass: "uk-margin-top uk-text-center uk-text-truncate" },
            [
              _c("div", { attrs: { "uk-tooltip": _vm.value.name } }, [
                _c("span", [_vm._v(_vm._s(_vm.value.name))])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "uk-text-center uk-text-muted uk-text-small" },
            [
              _c("span", [
                _vm._v(
                  _vm._s(
                    _vm.choice("liro-media::form.folder.count", _vm.value.count)
                  )
                )
              ])
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "uk-icon-small",
        attrs: { "uk-icon": "chevron-down" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "liro-media-icon uk-margin-auto-top" }, [
      _c("div", { staticClass: "uk-text-center" }, [
        _c("img", {
          attrs: {
            src: "/app/system/modules/theme/resources/dist/images/folder.svg",
            width: "80",
            height: "80",
            "uk-svg": ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05230a99", module.exports)
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
Component.options.__file = "resources/src/folder/index/file.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9b79532", Component.options)
  } else {
    hotAPI.reload("data-v-c9b79532", Component.options)
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
//
//
//
//
//
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

    inject: ['folder'],

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    computed: {

        image: function image(type) {
            return _.includes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif'], this.value.type);
        }

    },

    methods: {

        renameFilePrompt: function renameFilePrompt() {
            var message = this.trans('liro-media::form.file.name');
            UIkit.modal.prompt(message, this.value.name).then(this.renameFile);
        },

        renameFile: function renameFile(dest) {

            if (dest == null || dest == '') {
                return;
            }

            var url = this.route('liro-media.ajax.file.rename');

            var file = {
                source: this.value.path, destination: dest
            };

            this.http.post(url, file).then(this.renameFileResponse);
        },

        renameFileResponse: function renameFileResponse(res) {

            UIkit.toggle(this.$refs.dropdown);

            var message = Liro.messages.get('liro-media::message.file.renamed');
            UIkit.notification(message, 'success');
        },

        deleteFileConfirm: function deleteFileConfirm() {

            var message = this.trans('liro-media::message.file.delete', {
                name: this.value.name
            });

            UIkit.modal.confirm(message).then(this.deleteFile, function () {
                return null;
            });
        },

        deleteFile: function deleteFile() {

            var url = this.route('liro-media.ajax.file.delete');

            var file = {
                source: this.value.path
            };

            this.http.post(url, file).then(this.deleteFileResponse);
        },

        deleteFileResponse: function deleteFileResponse(res) {
            var message = Liro.messages.get('liro-media::message.file.deleted');
            UIkit.notification(message, 'success');
        },

        dragFile: function dragFile() {
            event.dataTransfer.setData('file', this.value.path);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index-file', this.default);
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
    {
      staticClass:
        "liro-media-item is-file uk-flex uk-flex-column uk-position-relative",
      attrs: { draggable: "true" },
      on: { dragstart: _vm.dragFile }
    },
    [
      _c("div", { staticClass: "liro-media-options uk-position-top-right" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "dropdown",
            attrs: { "uk-dropdown": "mode: click; pos: bottom-center;" }
          },
          [
            _c("ul", { staticClass: "uk-nav" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:void(0)" },
                    on: { click: _vm.renameFilePrompt }
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.trans("theme::form.toolbar.rename")))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      "!click": function($event) {
                        return _vm.deleteFileConfirm($event)
                      }
                    }
                  },
                  [
                    _c("span", [
                      _vm._v(_vm._s(_vm.trans("theme::form.toolbar.delete")))
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "liro-media-icon uk-margin-auto-top" }, [
        _vm.image
          ? _c("div", { staticClass: "uk-text-center" }, [
              _c("img", {
                attrs: {
                  src: _vm.value.url,
                  width: "120",
                  height: "120",
                  draggable: "false"
                }
              })
            ])
          : _c("div", { staticClass: "uk-text-center" }, [
              _c("img", {
                attrs: {
                  src:
                    "/app/system/modules/theme/resources/dist/images/file.svg",
                  width: "80",
                  height: "80",
                  "uk-svg": ""
                }
              })
            ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "liro-media-name uk-margin-auto-top " }, [
        _c("div", { staticClass: "uk-margin-top uk-text-center" }, [
          _c(
            "div",
            {
              staticClass: "uk-text-truncate",
              staticStyle: { overflow: "hidden" },
              attrs: { "uk-tooltip": _vm.value.name }
            },
            [_c("span", [_vm._v(_vm._s(_vm.value.name))])]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "uk-text-center uk-text-muted uk-text-small" },
          [_c("span", [_vm._v(_vm._s(_vm.value.human))])]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "javascript:void(0)" } }, [
      _c("i", {
        staticClass: "uk-icon-small",
        attrs: { "uk-icon": "chevron-down" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c9b79532", module.exports)
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
Component.options.__file = "resources/src/folder/index/upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2800faac", Component.options)
  } else {
    hotAPI.reload("data-v-2800faac", Component.options)
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
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

    inject: ['folder'],

    data: function data() {
        return {
            files: []
        };
    },

    methods: {

        clearFiles: function clearFiles() {
            this.files = [];
        },

        clearFile: function clearFile(index) {
            this.files.splice(index, 1);
        },

        onDragover: function onDragover(event) {
            event.preventDefault();
        },

        onDrop: function onDrop(event) {

            event.preventDefault();

            var files = _.filter(event.originalEvent.dataTransfer.files, function (file) {
                return file.type != '';
            });

            _.each(files, this.uploadFile);
        },

        calcProgress: function calcProgress(index) {
            var _this = this;

            return _.debounce(function (event) {
                _this.files[index].progress = Math.floor(event.loaded * 100 / event.total);
            }, 100);
        },

        uploadFile: function uploadFile(file) {

            var index = this.files.length;

            this.files.push({
                name: file.name, size: file.size, progress: 0
            });

            var form = new FormData();

            form.set('path', this.folder.folder.path);
            form.append('file', file);

            var url = this.route('liro-media.ajax.file.upload');

            var config = {
                spinner: false, onUploadProgress: this.calcProgress(index)
            };

            this.http.post(url, form, config).then(this.uploadFileResponse);
        },

        uploadFileResponse: function uploadFileResponse() {
            var message = Liro.messages.get('liro-media::message.file.uploaded');
            UIkit.notification(message, 'success');
        }

    },

    created: function created() {
        $(document.body).on('dragover', this.onDragover);
        $(document.body).on('drop', this.onDrop);
    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index-upload', this.default);
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.files.length,
          expression: "files.length"
        }
      ],
      staticClass: "liro-folder-index-upload"
    },
    [
      _c(
        "div",
        { staticClass: "liro-media-upload-title uk-flex uk-flex-middle" },
        [
          _c("div", { staticClass: "uk-flex-1" }, [
            _c("span", [
              _vm._v(_vm._s(_vm.trans("liro-media::form.file.upload")))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "uk-flex-none uk-margin-left" }, [
            _c(
              "a",
              {
                staticClass: "uk-button uk-button-small uk-button-danger",
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.clearFiles }
              },
              [_vm._v(_vm._s(_vm.trans("liro-media::form.toolbar.clear")))]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.files, function(file, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "liro-media-upload-item uk-flex uk-flex-middle"
          },
          [
            _c("div", { staticClass: "liro-media-name uk-flex-auto" }, [
              _c("span", [_vm._v(_vm._s(file.name))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "liro-media-progress uk-width-small uk-width-1-2@m uk-margin-left"
              },
              [
                _c("progress", {
                  staticClass: "uk-progress uk-margin-remove",
                  attrs: { max: "100" },
                  domProps: { value: file.progress }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "liro-media-options uk-flex-none uk-margin-left" },
              [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:void(0)" },
                    on: {
                      click: function($event) {
                        _vm.clearFile(index)
                      }
                    }
                  },
                  [_c("i", { attrs: { "uk-icon": "times" } })]
                )
              ]
            )
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-2800faac", module.exports)
  }
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
    { staticClass: "liro-folder-index" },
    [
      _c("portal", { attrs: { to: "app-toolbar" } }, [
        _c("div", { staticClass: "uk-navbar-item" }, [
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-primary uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.createFolderPrompt }
            },
            [
              _c("i", {
                staticClass: "uk-margin-small-right",
                attrs: { "uk-icon": "folder" }
              }),
              _vm._v(
                " " +
                  _vm._s(_vm.trans("liro-media::admin.folder.create")) +
                  "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "uk-button uk-button-success uk-margin-small-left",
              attrs: { href: "javascript:void(0)" },
              on: {
                click: function($event) {
                  _vm.fetchFolder(_vm.folder.path)
                }
              }
            },
            [
              _c("i", {
                staticClass: "uk-margin-small-right",
                attrs: { "uk-icon": "sync" }
              }),
              _vm._v(
                " " +
                  _vm._s(_vm.trans("theme::form.toolbar.sync")) +
                  "\n            "
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-margin-bottom" },
        [_c("liro-folder-index-upload")],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "uk-margin-bottom" }, [
        _c(
          "ul",
          { staticClass: "uk-breadcrumb" },
          _vm._l(_vm.folder.ladder, function(path, index) {
            return _c("li", { key: index }, [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      _vm.fetchFolder(path)
                    }
                  }
                },
                [_vm._v(_vm._s(index))]
              )
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
        [
          _vm._l(_vm.folder.dirs, function(dir, index) {
            return [
              _c(
                "div",
                { key: index },
                [
                  _c("liro-folder-index-folder", {
                    model: {
                      value: _vm.folder.dirs[index],
                      callback: function($$v) {
                        _vm.$set(_vm.folder.dirs, index, $$v)
                      },
                      expression: "folder.dirs[index]"
                    }
                  })
                ],
                1
              )
            ]
          }),
          _vm._v(" "),
          _vm._l(_vm.folder.files, function(file, index) {
            return [
              _c(
                "div",
                { key: index },
                [
                  _c("liro-folder-index-file", {
                    model: {
                      value: _vm.folder.files[index],
                      callback: function($$v) {
                        _vm.$set(_vm.folder.files, index, $$v)
                      },
                      expression: "folder.files[index]"
                    }
                  })
                ],
                1
              )
            ]
          })
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-6395a1f4", module.exports)
  }
}

/***/ })
/******/ ]);