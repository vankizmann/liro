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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_login__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__auth_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__user_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_create__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_create___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_create__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_edit__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_edit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__user_edit__);


liro.modules.export('liro-auth-login', __WEBPACK_IMPORTED_MODULE_0__auth_login___default.a);


liro.modules.export('liro-user-index', __WEBPACK_IMPORTED_MODULE_1__user_index___default.a);


liro.modules.export('liro-user-create', __WEBPACK_IMPORTED_MODULE_2__user_create___default.a);


liro.modules.export('liro-user-edit', __WEBPACK_IMPORTED_MODULE_3__user_edit___default.a);

liro.ajax.bind('user-index', function (query) {

    var route = liro.routes.get('liro-users.ajax.user.index', null, query);

    return axios.get(route);
});

liro.ajax.bind('user-show', function (user) {

    var route = liro.routes.get('liro-users.ajax.user.show', {
        user: user.id
    });

    return axios.get(route);
});

liro.ajax.bind('user-store', function (user) {

    var route = liro.routes.get('liro-users.ajax.user.store');

    return axios.post(route, user);
});

liro.ajax.bind('user-update', function (user) {

    var route = liro.routes.get('liro-users.ajax.user.update', {
        user: user.id
    });

    return axios.post(route, user);
});

liro.ajax.bind('role-index', function () {

    var route = liro.routes.get('liro-users.ajax.role.index');

    return axios.get(route);
});

liro.ajax.bind('role-show', function () {

    var route = liro.routes.get('liro-users.ajax.role.show');

    return axios.get(route);
});

liro.ajax.bind('role-store', function (role) {

    var route = liro.routes.get('liro-users.ajax.role.store');

    return axios.post(route, role);
});

liro.ajax.bind('role-update', function (role) {

    var route = liro.routes.get('liro-users.ajax.role.update', {
        role: role.id
    });

    return axios.post(route, role);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
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
Component.options.__file = "resources/src/js/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30c4bcd5", Component.options)
  } else {
    hotAPI.reload("data-v-30c4bcd5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
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


var user = {
    email: '', password: '', remember: false
};

var errors = {
    email: null, password: null
};

window.liro.modules.export('liro-auth-login', this.default = {

    data: function data() {
        return {
            load: false, user: user, error: errors
        };
    },

    methods: {

        authUser: function authUser() {

            var url = this.routes.get('liro-users.ajax.auth.login');

            this.http.post(url, this.user).then(this.authUserResponse, this.authUserError);

            this.load = true;
        },

        authUserResponse: function authUserResponse(res) {
            this.routes.goto(res.data.redirect, null, null);
        },

        authUserError: function authUserError(res) {

            this.error = $.extend({}, errors, res.data.errors);

            this.load = false;
        }

    }

});

/***/ }),
/* 5 */
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
          name: "loading",
          rawName: "v-loading",
          value: _vm.load,
          expression: "load"
        }
      ],
      staticClass: "liro-auth-login"
    },
    [
      _c(
        "el-form",
        {
          staticClass: "liro-auth-login__form",
          attrs: { "label-position": "top", model: _vm.user },
          nativeOn: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.authUser($event)
            }
          }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "email",
                label: _vm.trans("liro-users::form.auth.email"),
                error: _vm.error.email
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.user.email,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "email", $$v)
                  },
                  expression: "user.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "password",
                label: _vm.trans("liro-users::form.auth.password"),
                error: _vm.error.password
              }
            },
            [
              _c("el-input", {
                attrs: { type: "password" },
                model: {
                  value: _vm.user.password,
                  callback: function($$v) {
                    _vm.$set(_vm.user, "password", $$v)
                  },
                  expression: "user.password"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-checkbox",
                {
                  model: {
                    value: _vm.user.remember,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "remember", $$v)
                    },
                    expression: "user.remember"
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("liro-users::form.auth.remember_me")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  staticClass: "liro-auth-login__button",
                  attrs: { type: "primary", "native-type": "submit" }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("liro-users::form.auth.login")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-form-item", [
            _c("ul", { staticClass: "list grid grid--row grid--center" }, [
              _c("li", { staticClass: "col--flex-none" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(
                        _vm.trans("liro-users::form.auth.password_forget")
                      ) +
                      "\n                    "
                  )
                ])
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-30c4bcd5", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
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
Component.options.__file = "resources/src/js/user/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e61dcfbe", Component.options)
  } else {
    hotAPI.reload("data-v-e61dcfbe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        var _this = this;

        var columns = [{
            type: 'checkbox',
            prop: 'id',
            class: 'table__td--xs text--center'
        }, {
            type: 'order',
            prop: 'name',
            label: this.trans('Name'),
            class: 'col--1-3'
        }, {
            type: 'order',
            prop: 'email',
            label: this.trans('Email'),
            class: 'col--1-3'
        }, {
            type: 'filter',
            prop: 'role_ids',
            label: this.trans('Roles'),
            class: 'col--1-3',
            filter: {
                data: function data() {
                    return _this.roles;
                }, label: 'title', value: 'id'
            }
        }, {
            type: 'order',
            label: this.trans('Id'),
            prop: 'id',
            class: 'table__td--sm text--center'
        }];

        return _extends({
            loadUsers: false, loadRoles: false,
            action: '', selected: [], columns: columns
        }, this.liro.vue.bind(['state-index', 'states'], this), this.liro.vue.bind(['user-index', 'users'], this), this.liro.vue.bind(['role-index', 'roles'], this));
    },

    beforeCreate: function beforeCreate() {
        var _this2 = this;

        if (!this.liro.storage.has('user-index')) {

            this.$on('hook:created', function () {
                _this2.loadUsers = true;
            });

            this.liro.ajax.call('user-index').then(function () {
                return _this2.loadUsers = false;
            });
        }

        if (!this.liro.storage.has('role-index')) {

            this.$on('hook:created', function () {
                _this2.loadRoles = true;
            });

            this.liro.ajax.call('role-index').then(function () {
                return _this2.loadRoles = false;
            });
        }
    }

});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "app-loader",
    { attrs: { load: _vm.loadUsers === true && _vm.loadRoles === true } },
    [
      _c("app-list-builder", {
        attrs: {
          list: this.users,
          columns: this.columns,
          search: ["name", "email"],
          selected: _vm.selected
        },
        on: {
          "update:selected": function($event) {
            _vm.selected = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "column.name",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.routes.get("liro-users.admin.user.edit", {
                        user: item.id
                      })
                    }
                  },
                  [_c("span", [_vm._v(_vm._s(item.name))])]
                )
              ]
            }
          }
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-e61dcfbe", module.exports)
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
Component.options.__file = "resources/src/js/user/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38e636bd", Component.options)
  } else {
    hotAPI.reload("data-v-38e636bd", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//


var errors = {
    state: null, name: null, email: null, password: null, password_confirm: null
};

/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        return _extends({
            load: false, error: errors
        }, this.liro.vue.bind('states', this), this.liro.vue.bind(['user-edit', 'user'], this), this.liro.vue.bind(['role-index', 'roles'], this));
    },

    methods: {

        storeUser: function storeUser() {

            var url = this.routes.get('liro-users.ajax.user.store', {
                user: this.user.id
            });

            this.http.post(url, this.user).then(this.storeUserResponse, this.storeUserError);

            this.error = errors;
            this.load = true;
        },

        storeUserResponse: function storeUserResponse(res) {
            this.routes.goto('liro-users.admin.user.edit', {
                user: res.data.id
            }, {
                success: 'liro-users::message.user.created'
            });
        },

        storeUserError: function storeUserError(res) {

            this.error = $.extend({}, errors, res.data.errors);

            this.load = false;
        }

    }

});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "liro-user-create" },
    [
      _c(
        "portal",
        { attrs: { to: "toolbar-right" } },
        [
          _c(
            "app-nav-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.storeUser } },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("form.toolbar.save")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form",
        {
          directives: [
            {
              name: "shortkey",
              rawName: "v-shortkey",
              value: ["meta", "s"],
              expression: "['meta', 's']"
            }
          ],
          attrs: { model: _vm.user, "label-position": "top" },
          nativeOn: {
            shortkey: function($event) {
              return _vm.storeUser($event)
            }
          }
        },
        [
          _c("div", { staticClass: "grid grid--wrap grid--row grid--20" }, [
            _c("div", { staticClass: "col--3-12@md col--order-2" }, [
              _c(
                "div",
                { staticClass: "form" },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "state",
                        label: _vm.trans("form.state.label"),
                        error: _vm.error.state
                      }
                    },
                    [
                      _c(
                        "el-radio-group",
                        {
                          model: {
                            value: _vm.user.state,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "state", $$v)
                            },
                            expression: "user.state"
                          }
                        },
                        _vm._l(_vm.states, function(state) {
                          return _c(
                            "el-radio-button",
                            { key: state.label, attrs: { label: state.value } },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.trans(state.label)) +
                                  "\n                            "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "state",
                        label: _vm.trans("liro-users::form.user.roles"),
                        error: _vm.error.state
                      }
                    },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: {
                            multiple: true,
                            placeholder: _vm.trans(
                              "liro-users::form.user.select_roles"
                            )
                          },
                          model: {
                            value: _vm.user.role_ids,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "role_ids", $$v)
                            },
                            expression: "user.role_ids"
                          }
                        },
                        _vm._l(_vm.roles, function(role) {
                          return _c("el-option", {
                            key: role.id,
                            attrs: { value: role.id, label: role.title }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col--9-12@md col--order-1" }, [
              _c(
                "div",
                { staticClass: "form" },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "name",
                        label: _vm.trans("liro-users::form.user.name"),
                        error: _vm.error.name
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.user.name,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "name", $$v)
                          },
                          expression: "user.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "email",
                        label: _vm.trans("liro-users::form.user.email"),
                        error: _vm.error.email
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.user.email,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "email", $$v)
                          },
                          expression: "user.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "password",
                        label: _vm.trans("liro-users::form.user.password"),
                        error: _vm.error.password
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: { type: "password" },
                        model: {
                          value: _vm.user.password,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "password", $$v)
                          },
                          expression: "user.password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        prop: "password_confirm",
                        label: _vm.trans(
                          "liro-users::form.user.password_confirm"
                        ),
                        error: _vm.error.password_confirm
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: { type: "password" },
                        model: {
                          value: _vm.user.password_confirm,
                          callback: function($$v) {
                            _vm.$set(_vm.user, "password_confirm", $$v)
                          },
                          expression: "user.password_confirm"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-38e636bd", module.exports)
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
Component.options.__file = "resources/src/js/user/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cb1f9ea", Component.options)
  } else {
    hotAPI.reload("data-v-2cb1f9ea", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var errors = {
    state: null, name: null, email: null, password: null, password_confirm: null
};

/* harmony default export */ __webpack_exports__["default"] = ({

    data: function data() {
        return _extends({
            load: false, error: errors
        }, this.liro.vue.bind('states', this), this.liro.vue.bind(['user-edit', 'user'], this), this.liro.vue.bind(['role-index', 'roles'], this));
    },

    methods: {

        updateUser: function updateUser() {

            var url = this.routes.get('liro-users.ajax.user.update', {
                user: this.user.id
            });

            this.http.put(url, this.user).then(this.updateUserResponse, this.updateUserError);

            this.error = errors;
            this.load = true;
        },

        updateUserResponse: function updateUserResponse(res) {
            this.$message.success(this.trans('liro-users::message.user.saved'));
            this.load = false;
        },

        updateUserError: function updateUserError(res) {

            this.error = $.extend({}, errors, res.data.errors);

            this.load = false;
        }

    }

});

/***/ }),
/* 14 */
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
          name: "loading",
          rawName: "v-loading",
          value: _vm.load,
          expression: "load"
        }
      ],
      staticClass: "liro-user-edit"
    },
    [
      _c(
        "portal",
        { attrs: { to: "toolbar-right" } },
        [
          _c("app-nav-item", [
            _c(
              "a",
              {
                attrs: { href: _vm.routes.get("liro-users.admin.user.index") }
              },
              [
                _c("el-button", { attrs: { type: "primary" } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.trans("form.toolbar.close")) +
                      "\n                "
                  )
                ])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "app-nav-item",
            [
              _c(
                "el-button",
                { attrs: { type: "success" }, on: { click: _vm.updateUser } },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.trans("form.toolbar.save")) +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form",
        {
          directives: [
            {
              name: "shortkey",
              rawName: "v-shortkey",
              value: ["meta", "s"],
              expression: "['meta', 's']"
            }
          ],
          attrs: { model: _vm.user, "label-position": "top" },
          nativeOn: {
            shortkey: function($event) {
              return _vm.updateUser($event)
            }
          }
        },
        [
          _c("div", { staticClass: "grid grid--wrap grid--row" }, [
            _c(
              "div",
              { staticClass: "form form__title col--1-1 col--order-0" },
              [
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.routes.get("liro-users.admin.user.index")
                    }
                  },
                  [
                    _c("el-button", { attrs: { type: "primary" } }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.trans("form.toolbar.close")) +
                          "\n                    "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  { attrs: { type: "success" }, on: { click: _vm.updateUser } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.trans("form.toolbar.save")) +
                        "\n                "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "form__sidebar col--1-1 col--4-10@lg col--order-2@lg col--4-12@xl"
              },
              [
                _c(
                  "div",
                  { staticClass: "form" },
                  [
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "state",
                          label: _vm.trans("form.state.label"),
                          error: _vm.error.state
                        }
                      },
                      [
                        _c(
                          "el-radio-group",
                          {
                            model: {
                              value: _vm.user.state,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "state", $$v)
                              },
                              expression: "user.state"
                            }
                          },
                          _vm._l(_vm.states, function(state) {
                            return _c(
                              "el-radio-button",
                              {
                                key: state.label,
                                attrs: { label: state.value }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.trans(state.label)) +
                                    "\n                            "
                                )
                              ]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "state",
                          label: _vm.trans("liro-users::form.user.roles"),
                          error: _vm.error.state
                        }
                      },
                      [
                        _c(
                          "el-select",
                          {
                            attrs: {
                              multiple: true,
                              placeholder: _vm.trans(
                                "liro-users::form.user.select_roles"
                              )
                            },
                            model: {
                              value: _vm.user.role_ids,
                              callback: function($$v) {
                                _vm.$set(_vm.user, "role_ids", $$v)
                              },
                              expression: "user.role_ids"
                            }
                          },
                          _vm._l(_vm.roles, function(role) {
                            return _c("el-option", {
                              key: role.id,
                              attrs: { value: role.id, label: role.title }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "form__body col--1-1 col--6-10@lg col--order-1@lg col--8-12@xl"
              },
              [
                _c(
                  "div",
                  { staticClass: "form" },
                  [
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "name",
                          label: _vm.trans("liro-users::form.user.name"),
                          error: _vm.error.name
                        }
                      },
                      [
                        _c("el-input", {
                          model: {
                            value: _vm.user.name,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "name", $$v)
                            },
                            expression: "user.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "email",
                          label: _vm.trans("liro-users::form.user.email"),
                          error: _vm.error.email
                        }
                      },
                      [
                        _c("el-input", {
                          model: {
                            value: _vm.user.email,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "email", $$v)
                            },
                            expression: "user.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "password",
                          label: _vm.trans("liro-users::form.user.password"),
                          error: _vm.error.password
                        }
                      },
                      [
                        _c("el-input", {
                          attrs: { "show-password": "" },
                          model: {
                            value: _vm.user.password,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "password", $$v)
                            },
                            expression: "user.password"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "password_confirm",
                          label: _vm.trans(
                            "liro-users::form.user.password_confirm"
                          ),
                          error: _vm.error.password_confirm
                        }
                      },
                      [
                        _c("el-input", {
                          attrs: { "show-password": "" },
                          model: {
                            value: _vm.user.password_confirm,
                            callback: function($$v) {
                              _vm.$set(_vm.user, "password_confirm", $$v)
                            },
                            expression: "user.password_confirm"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-2cb1f9ea", module.exports)
  }
}

/***/ })
/******/ ]);