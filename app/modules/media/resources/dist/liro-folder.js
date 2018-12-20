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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_folder__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_folder___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_folder__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_file__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_file___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_file__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_upload__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_tree__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__index_tree__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    methods: _extends({}, __WEBPACK_IMPORTED_MODULE_0__ajax__["a" /* default */], {

        createFolderPrompt: function createFolderPrompt() {
            var _this = this;

            var msg = this.trans('liro-media::form.folder.name');

            var response = function response(res) {
                _this.createFolder(_this.folder.path, res);
            };

            UIkit.modal.prompt(msg, '').then(response);
        }

    }),

    provide: function provide() {
        return {
            folder: this
        };
    },

    mounted: function mounted() {

        Liro.events.watch('liro-media.folder@fetch', this.fetchFolder);

        Liro.events.watch('liro-media.folder@rename', this.renameFolder);

        Liro.events.watch('liro-media.folder@move', this.moveFolder);

        Liro.events.watch('liro-media.folder@delete', this.deleteFolder);

        Liro.events.watch('liro-media.file@rename', this.renameFile);

        Liro.events.watch('liro-media.file@move', this.moveFile);

        Liro.events.watch('liro-media.file@delete', this.deleteFile);
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

        dropFolder: function dropFolder(event) {

            var input = event.dataTransfer.getData('file');

            if (input) {
                Liro.events.emit('liro-media.file@move', input, this.value.path);
            }

            var input = event.dataTransfer.getData('folder');

            if (input && input != this.value.path) {
                Liro.events.emit('liro-media.folder@move', input, this.value.path);
            }

            $(this.$refs.folder).removeClass('is-dragover');
        },

        dragFolder: function dragFolder(event) {
            $(this.$refs.folder).addClass('is-ghost');
            event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function dragFolderEnd() {
            $(this.$refs.folder).removeClass('is-ghost');
        },

        dragFolderOver: function dragFolderOver(event) {
            $(this.$refs.folder).addClass('is-dragover');
        },

        dragFolderLeave: function dragFolderLeave(event) {
            $(this.$refs.folder).removeClass('is-dragover');
        },

        fetchFolder: function fetchFolder() {
            Liro.events.emit('liro-media.folder@fetch', this.value.path);
        },

        renameFolderPrompt: function renameFolderPrompt() {
            var _this = this;

            var message = this.trans('liro-media::form.folder.name');

            var response = function response(input) {
                Liro.events.emit('liro-media.folder@rename', _this.value.path, input);
            };

            UIkit.modal.prompt(message, this.value.name).then(response);
        },

        deleteFolderConfirm: function deleteFolderConfirm() {
            var _this2 = this;

            var message = this.trans('liro-media::message.folder.delete', {
                name: this.value.name
            });

            var response = function response() {
                Liro.events.emit('liro-media.folder@delete', _this2.value.path);
            };

            UIkit.modal.confirm(message).then(response, function () {
                return null;
            });
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
      ref: "folder",
      staticClass:
        "liro-media-item is-folder uk-flex uk-flex-column uk-position-relative",
      attrs: { draggable: "true" },
      on: {
        dblclick: _vm.fetchFolder,
        drop: _vm.dropFolder,
        dragstart: _vm.dragFolder,
        dragend: _vm.dragFolderEnd,
        dragover: _vm.dragFolderOver,
        dragleave: _vm.dragFolderLeave
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
var _computed$props$compu;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_computed$props$compu = {

    computed: {

        folder: function folder() {
            return this.$root.folder;
        }

    },

    props: {

        value: {
            required: true,
            type: Object
        }

    }

}, _defineProperty(_computed$props$compu, 'computed', {

    image: function image(type) {
        return _.includes(['image/jpg', 'image/jpeg', 'image/png', 'image/gif'], this.value.type);
    }

}), _defineProperty(_computed$props$compu, 'methods', {

    renameFilePrompt: function renameFilePrompt() {
        var _this = this;

        var message = this.trans('liro-media::form.file.name');

        var response = function response(input) {
            Liro.events.emit('liro-media.file@rename', _this.value.path, input);
        };

        UIkit.modal.prompt(message, this.value.name).then(response);
    },

    deleteFileConfirm: function deleteFileConfirm() {
        var _this2 = this;

        var message = this.trans('liro-media::message.file.delete', {
            name: this.value.name
        });

        var response = function response() {
            Liro.events.emit('liro-media.file@delete', _this2.value.path);
        };

        UIkit.modal.confirm(message).then(response, function () {
            return null;
        });
    },

    dragFile: function dragFile(event) {
        $(this.$refs.file).addClass('is-ghost');
        event.dataTransfer.setData('file', this.value.path);
    },

    dragFileEnd: function dragFileEnd() {
        $(this.$refs.file).removeClass('is-ghost');
    }

}), _computed$props$compu);

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
      ref: "file",
      staticClass:
        "liro-media-item is-file uk-flex uk-flex-column uk-position-relative",
      attrs: { draggable: "true" },
      on: { dragstart: _vm.dragFile, dragend: _vm.dragFileEnd }
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
        _vm.image && true == false
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

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(14)
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
Component.options.__file = "resources/src/folder/index/tree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-199ad289", Component.options)
  } else {
    hotAPI.reload("data-v-199ad289", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_item__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tree_item__);
//
//
//
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
        },

        tree: function tree() {
            return this.$root.tree;
        }

    },

    provide: function provide() {
        return {
            tree: this
        };
    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index-tree', this.default);
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
Component.options.__file = "resources/src/folder/index/tree-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-109d1e07", Component.options)
  } else {
    hotAPI.reload("data-v-109d1e07", Component.options)
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


/* harmony default export */ __webpack_exports__["default"] = ({

    inject: ['tree'],

    props: {

        value: {
            required: true,
            type: Object
        }

    },

    data: function data() {
        return {
            open: false
        };
    },

    watch: {

        open: function open() {
            $(this.$refs.list).slideToggle(150);
        }

    },

    methods: {

        dropFolder: function dropFolder(event) {

            var input = event.dataTransfer.getData('file');

            if (input) {
                Liro.events.emit('liro-media.file@move', input, this.value.path);
            }

            var input = event.dataTransfer.getData('folder');

            if (input && input != this.value.path) {
                Liro.events.emit('liro-media.folder@move', input, this.value.path);
            }

            $(this.$refs.folder).removeClass('is-dragover');
        },

        dragFolder: function dragFolder() {
            $(this.$refs.folder).addClass('is-ghost');
            event.dataTransfer.setData('folder', this.value.path);
        },

        dragFolderEnd: function dragFolderEnd() {
            $(this.$refs.folder).removeClass('is-ghost');
        },

        dragFolderOver: function dragFolderOver() {
            $(this.$refs.folder).addClass('is-dragover');
        },

        dragFolderLeave: function dragFolderLeave() {
            $(this.$refs.folder).removeClass('is-dragover');
        },

        fetchFolder: function fetchFolder() {
            Liro.events.emit('liro-media.folder@fetch', this.value.path);
        }

    }

});

if (window.Liro) {
    Liro.vue.component('liro-folder-index-tree-item', this.default);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      ref: "folder",
      class: {
        "liro-media-tree-item": true,
        "is-active": _vm.value.path == _vm.tree.folder.path
      }
    },
    [
      _c(
        "a",
        {
          attrs: { href: "javascript:void(0)", draggable: "true" },
          on: {
            click: _vm.fetchFolder,
            drop: _vm.dropFolder,
            dragstart: _vm.dragFolder,
            dragend: _vm.dragFolderEnd,
            dragover: _vm.dragFolderOver,
            dragleave: _vm.dragFolderLeave
          }
        },
        [
          _vm.value.dirs.length != 0
            ? _c(
                "div",
                {
                  staticClass: "liro-media-tree-collapse uk-flex-none",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.open = !_vm.open
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "uk-icon-small",
                    attrs: {
                      "uk-icon": !_vm.open ? "chevron-right" : "chevron-down"
                    }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "liro-media-tree-name uk-flex-1 uk-text-truncate" },
            [_c("span", [_vm._v(_vm._s(_vm.value.name))])]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "liro-media-tree-count uk-flex-none" }, [
            _c("span", [_vm._v(_vm._s(_vm.value.count))])
          ])
        ]
      ),
      _vm._v(" "),
      _vm.value.dirs.length != 0
        ? _c(
            "ul",
            { ref: "list", staticClass: "liro-media-tree-list uk-nav" },
            _vm._l(_vm.value.dirs, function(dir, index) {
              return _c("liro-folder-index-tree-item", {
                key: index,
                attrs: { value: dir }
              })
            }),
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "liro-media-tree-icon uk-flex-none" }, [
      _c("img", {
        attrs: {
          src: "/app/system/modules/theme/resources/dist/images/folder.svg",
          width: "18",
          height: "18",
          "uk-svg": ""
        }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-109d1e07", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "liro-media-tree" }, [
    _c("legend", { staticClass: "liro-media-tree-legend" }, [
      _c("span", [_vm._v(_vm._s(_vm.trans("liro-media::form.folder.root")))])
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "liro-media-tree-list uk-nav" },
      _vm._l(_vm.tree, function(dir, index) {
        return _c("liro-folder-index-tree-item", {
          key: index,
          attrs: { value: dir }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-199ad289", module.exports)
  }
}

/***/ }),
/* 19 */
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
        "portal",
        { attrs: { to: "app-sidebar", "target-class": "is-active" } },
        [_c("liro-folder-index-tree")],
        1
      ),
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
          _vm._l(_vm.folder.ladder, function(item) {
            return _c("li", { key: item.path }, [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      _vm.fetchFolder(item.path)
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
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
          _vm._l(_vm.folder.dirs, function(dir) {
            return [
              _c(
                "div",
                { key: dir.path },
                [_c("liro-folder-index-folder", { attrs: { value: dir } })],
                1
              )
            ]
          }),
          _vm._v(" "),
          _vm._l(_vm.folder.files, function(file) {
            return [
              _c(
                "div",
                { key: file.path },
                [_c("liro-folder-index-file", { attrs: { value: file } })],
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

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({

    fetchFolder: function fetchFolder(source) {
        var _this = this;

        var url = this.route('liro-media.ajax.folder.index');

        var request = {
            source: source || this.folder.path
        };

        var response = function response(res) {
            _this.$root.folder = res.data.folder;_this.$root.tree = res.data.tree;
        };

        this.http.post(url, request).then(response);
    },

    createFolder: function createFolder(source, destination) {
        var _this2 = this;

        if (destination == null || destination == '') {
            return;
        }

        var url = this.route('liro-media.ajax.folder.create');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.created');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this2.fetchFolder(source);
        };

        this.http.post(url, request).then(response);
    },

    renameFolder: function renameFolder(source, destination) {
        var _this3 = this;

        if (destination == null || destination == '') {
            return;
        }

        var url = this.route('liro-media.ajax.folder.rename');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.renamed');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this3.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    moveFolder: function moveFolder(source, destination) {
        var _this4 = this;

        if (destination == null || destination == '') {
            return;
        }

        var url = this.route('liro-media.ajax.folder.move');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.moved');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this4.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    deleteFolder: function deleteFolder(source) {
        var _this5 = this;

        var url = this.route('liro-media.ajax.folder.delete');

        var request = {
            source: source || ''
        };

        var msg = this.trans('liro-media::message.folder.deleted');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this5.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    renameFile: function renameFile(source, destination) {
        var _this6 = this;

        if (destination == null || destination == '') {
            return;
        }

        var url = this.route('liro-media.ajax.file.rename');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.file.renamed');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this6.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    moveFile: function moveFile(source, destination) {
        var _this7 = this;

        if (destination == null || destination == '') {
            return;
        }

        var url = this.route('liro-media.ajax.file.move');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.file.moved');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this7.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    deleteFile: function deleteFile(source) {
        var _this8 = this;

        var url = this.route('liro-media.ajax.file.delete');

        var request = {
            source: source || ''
        };

        var msg = this.trans('liro-media::message.file.deleted');

        var response = function response(res) {
            UIkit.notification(msg, 'success');_this8.fetchFolder();
        };

        this.http.post(url, request).then(response);
    }

});

/***/ })
/******/ ]);