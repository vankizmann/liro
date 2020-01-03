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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WebLanguageEdit',
  computed: {
    updated: function updated() {
      return this.Now.make(this.entity.updated_at || 'now').get().fromNow();
    }
  },
  data: function data() {
    return {
      entity: {},
      errors: {},
      load: true
    };
  },
  mounted: function mounted() {
    this.fetchEntity();
  },
  methods: {
    closeEntity: function closeEntity() {
      this.$router.push({
        name: this.Obj.get(this.entity, 'connector.connect.index')
      });
    },
    doneEntity: function doneEntity(res) {
      if (!this.Any.isEmpty(this.entity)) {
        this.Event.fire('language.updated');
      }

      this.entity = this.Obj.get(res, 'data.data', {});
    },
    errorEntity: function errorEntity(res) {
      this.errors = this.Obj.get(res, 'data.errors', {});
    },
    fetchEntity: function fetchEntity() {
      var _this = this;

      var route = this.Route.get('module.web-language.language.edit', this.$route.params);
      var options = {
        onLoad: function onLoad() {
          return _this.load = true;
        },
        onDone: function onDone() {
          return _this.load = false;
        }
      };
      this.$http.get(route, options).then(this.doneEntity, this.errorEntity);
    },
    updateEntity: function updateEntity() {
      var _this2 = this;

      this.Data.unset('web-language-index');
      var route = this.Route.get('module.web-language.language.update', this.$route.params);
      var options = {
        onLoad: function onLoad() {
          return _this2.load = true;
        },
        onDone: function onDone() {
          return _this2.load = false;
        }
      };
      this.$http.post(route, this.entity, options).then(this.doneEntity, this.errorEntity);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'WebLanguageIndex',
  data: function data() {
    var request = {
      data: [],
      page: 1,
      limit: 50,
      total: 0
    };
    var filter = [// Default filters
    ];

    if (this.Cookie.get('web-language-index|filter')) {
      filter = this.Str.objectify(this.Cookie.get('web-language-index|filter'));
    }

    var sort = {
      prop: 'updated_at',
      dir: 'desc'
    };

    if (this.Cookie.get('web-language-index|sort')) {
      sort = this.Str.objectify(this.Cookie.get('web-language-index|sort'));
    }

    var states = [{
      value: '1',
      label: this.trans('Active')
    }, {
      value: '0',
      label: this.trans('Inactive')
    }, {
      value: '2',
      label: this.trans('Archived')
    }];
    var hides = [{
      value: '1',
      label: this.trans('Visible')
    }, {
      value: '0',
      label: this.trans('Invisible')
    }];
    return {
      request: request,
      sort: sort,
      filter: filter,
      states: states,
      hides: hides,
      selected: [],
      load: true
    };
  },
  mounted: function mounted() {
    this.$refs.table.$on('filter', this.Any.debounce(this.setFiltering, 600));

    if (this.Data.has('web-language-index')) {
      return this.Any.delay(this.preloadEntities);
    }

    this.fetchEntities();
  },
  watch: {
    request: function request() {
      this.Data.set('web-language-index', this.request);
    },
    sort: function sort() {
      this.Cookie.set('web-language-index|sort', this.Str.stringify(this.sort));
    },
    filter: function filter() {
      this.Cookie.set('web-language-index|filter', this.Str.stringify(this.filter));
    }
  },
  methods: {
    navigate: function navigate(_ref) {
      var row = _ref.row;
      var name = this.Obj.get(row, 'connector.connect.edit');
      this.$router.push({
        name: name,
        params: row
      });
    },
    setSorting: function setSorting(prop, dir) {
      this.$set(this, 'sort', {
        prop: prop,
        dir: dir
      });
      this.fetchEntities();
    },
    setFiltering: function setFiltering(filter) {
      var _this = this;

      this.$set(this, 'filter', this.Arr.filter(filter, function (val) {
        return !_this.Any.isEmpty(val.value);
      }));
      this.Any.debounce(function () {
        return _this.fetchEntities();
      }, 500)();
    },
    doneEntities: function doneEntities(res) {
      this.request = this.Obj.get(res, 'data', []);
    },
    errorEntities: function errorEntities(res) {
      this.errors = this.Obj.get(res, 'data.errors', {});
    },
    preloadEntities: function preloadEntities() {
      this.request = this.Data.get('web-language-index');
      this.load = false;
    },
    fetchEntities: function fetchEntities() {
      var _this2 = this;

      this.selected = [];
      var query = this.Obj.only(this.request, ['page', 'limit']);
      this.Obj.assign(query, this.sort, {
        filter: this.filter
      });
      var route = this.Route.get('module.web-language.language.index', this.$route.params, query);
      var options = {
        onLoad: function onLoad() {
          return _this2.load = true;
        },
        onDone: function onDone() {
          return _this2.load = false;
        }
      };
      this.$http.get(route, options).then(this.doneEntities)["catch"](this.errorEntities);
    },
    modifyEntities: function modifyEntities(type) {
      var _this3 = this;

      this.$refs.popover.close();
      var query = {
        ids: this.selected
      };
      var route = this.Route.get("module.web-language.language.".concat(type), this.$route.params);
      var options = {
        onLoad: function onLoad() {
          return _this3.load = true;
        },
        onDone: function onDone() {
          return _this3.load = false;
        }
      };
      this.$http.post(route, query, options).then(this.fetchEntities)["catch"](this.errorEntities);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "NLoader",
    { staticClass: "web-language-edit", attrs: { visible: _vm.load } },
    [
      _c(
        "div",
        { staticClass: "web-body-item" },
        [
          _c(
            "WebBackendTitle",
            {
              attrs: {
                info: _vm.trans("Last updated at :updated", {
                  updated: _vm.updated
                }),
                goto: _vm.closeEntity
              }
            },
            [
              _c("div", { staticClass: "grid grid--row grid--10" }, [
                _c(
                  "div",
                  { staticClass: "col--auto" },
                  [
                    _c(
                      "NButton",
                      {
                        attrs: { type: "primary", icon: _vm.icons.save },
                        on: { click: _vm.updateEntity }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.trans("Apply")) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "web-body-item" },
        [
          _c(
            "NForm",
            { attrs: { errors: _vm.errors } },
            [
              _c(
                "NFormItem",
                { attrs: { prop: "state", label: _vm.trans("Status") } },
                [
                  _c(
                    "NSelect",
                    {
                      model: {
                        value: _vm.entity.state,
                        callback: function($$v) {
                          _vm.$set(_vm.entity, "state", $$v)
                        },
                        expression: "entity.state"
                      }
                    },
                    [
                      _c("NSelectOption", { attrs: { value: 1 } }, [
                        _vm._v(_vm._s(_vm.trans("Active")))
                      ]),
                      _vm._v(" "),
                      _c("NSelectOption", { attrs: { value: 0 } }, [
                        _vm._v(_vm._s(_vm.trans("Inactive")))
                      ]),
                      _vm._v(" "),
                      _c("NSelectOption", { attrs: { value: 2 } }, [
                        _vm._v(_vm._s(_vm.trans("Archived")))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "NFormItem",
                { attrs: { prop: "hide", label: _vm.trans("Visibility") } },
                [
                  _c(
                    "NSelect",
                    {
                      model: {
                        value: _vm.entity.hide,
                        callback: function($$v) {
                          _vm.$set(_vm.entity, "hide", $$v)
                        },
                        expression: "entity.hide"
                      }
                    },
                    [
                      _c("NSelectOption", { attrs: { value: 0 } }, [
                        _vm._v(_vm._s(_vm.trans("Visible")))
                      ]),
                      _vm._v(" "),
                      _c("NSelectOption", { attrs: { value: 1 } }, [
                        _vm._v(_vm._s(_vm.trans("Invisible")))
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "NFormItem",
                { attrs: { prop: "layout", label: _vm.trans("Layout") } },
                [
                  _c("NInput", {
                    model: {
                      value: _vm.entity.layout,
                      callback: function($$v) {
                        _vm.$set(_vm.entity, "layout", $$v)
                      },
                      expression: "entity.layout"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "NFormItem",
                { attrs: { prop: "icon", label: _vm.trans("Icon") } },
                [
                  _c("NInput", {
                    model: {
                      value: _vm.entity.icon,
                      callback: function($$v) {
                        _vm.$set(_vm.entity, "icon", $$v)
                      },
                      expression: "entity.icon"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "NFormItem",
                { attrs: { prop: "title", label: _vm.trans("Title") } },
                [
                  _c("NInput", {
                    model: {
                      value: _vm.entity.title,
                      callback: function($$v) {
                        _vm.$set(_vm.entity, "title", $$v)
                      },
                      expression: "entity.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "NFormItem",
                { attrs: { prop: "slug", label: _vm.trans("Slug") } },
                [
                  _c("NInput", {
                    model: {
                      value: _vm.entity.slug,
                      callback: function($$v) {
                        _vm.$set(_vm.entity, "slug", $$v)
                      },
                      expression: "entity.slug"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "NLoader",
    {
      staticClass:
        "web-language-index full-height full-height--fixed auto-height-child",
      attrs: { visible: _vm.load }
    },
    [
      _c("div", { staticClass: "grid grid--col" }, [
        _c(
          "div",
          { staticClass: "web-body-item col--flex-none" },
          [
            _c(
              "WebBackendTitle",
              {
                attrs: {
                  info: _vm.trans(
                    "An overview of all language items registered in your webpage"
                  )
                }
              },
              [
                _c("div", { staticClass: "grid grid--row grid--10" }, [
                  _c(
                    "div",
                    { staticClass: "col--auto" },
                    [
                      _c(
                        "NButton",
                        {
                          attrs: { type: "primary", icon: _vm.icons.create },
                          on: { click: function($event) {} }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.trans("Create")) +
                              "\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col--auto" },
                    [
                      _c("NButton", {
                        attrs: {
                          type: "secondary",
                          square: true,
                          icon: _vm.icons.action,
                          disabled: !_vm.selected.length
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "NPopover",
                        {
                          ref: "popover",
                          attrs: {
                            type: "select",
                            trigger: "click",
                            position: "bottom-end",
                            width: 220,
                            disabled: !_vm.selected.length
                          }
                        },
                        [
                          _c(
                            "NButton",
                            {
                              staticClass: "n-popover-option",
                              attrs: {
                                type: "primary",
                                link: true,
                                icon: _vm.icons.activate
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.trans("Activate")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NConfirm",
                            {
                              attrs: { type: "primary" },
                              on: {
                                confirm: function($event) {
                                  return _vm.modifyEntities("activate")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.choice(
                                      "Do you want to activate :count items?",
                                      _vm.selected.length
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NButton",
                            {
                              staticClass: "n-popover-option",
                              attrs: {
                                type: "warning",
                                link: true,
                                icon: _vm.icons.deactivate
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.trans("Deactivate")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NConfirm",
                            {
                              attrs: { type: "warning" },
                              on: {
                                confirm: function($event) {
                                  return _vm.modifyEntities("deactivate")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.choice(
                                      "Do you want to deactivate :count items?",
                                      _vm.selected.length
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NButton",
                            {
                              staticClass: "n-popover-option",
                              attrs: {
                                type: "info",
                                link: true,
                                icon: _vm.icons.archive
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.trans("Archive")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NConfirm",
                            {
                              attrs: { type: "info" },
                              on: {
                                confirm: function($event) {
                                  return _vm.modifyEntities("archive")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.choice(
                                      "Do you want to archive :count items?",
                                      _vm.selected.length
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NButton",
                            {
                              staticClass: "n-popover-option",
                              attrs: {
                                type: "danger",
                                link: true,
                                icon: _vm.icons.delete
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.trans("Delete")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "NConfirm",
                            {
                              attrs: { type: "danger" },
                              on: {
                                confirm: function($event) {
                                  return _vm.modifyEntities("delete")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.choice(
                                      "Do you want to delete :count items?",
                                      _vm.selected.length
                                    )
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "web-body-item col--flex-fixed" },
          [
            _c(
              "NTable",
              {
                ref: "table",
                attrs: {
                  "unique-prop": "id",
                  "selected-keys": _vm.selected,
                  "sort-prop": _vm.sort.prop,
                  "sort-dir": _vm.sort.dir,
                  "filter-props": _vm.Obj.values(_vm.filter),
                  "adapt-height": true
                },
                on: {
                  "update:selectedKeys": function($event) {
                    _vm.selected = $event
                  },
                  "update:selected-keys": function($event) {
                    _vm.selected = $event
                  },
                  sort: _vm.setSorting,
                  "row-dblclick": _vm.navigate
                },
                model: {
                  value: _vm.request.data,
                  callback: function($$v) {
                    _vm.$set(_vm.request, "data", $$v)
                  },
                  expression: "request.data"
                }
              },
              [
                _c("NTableColumn", {
                  attrs: {
                    type: "selection",
                    "fixed-width": 45,
                    align: "center",
                    label: _vm.trans("Selection")
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "state",
                    type: "option",
                    "options-label": "$value.label",
                    "options-value": "$value.value",
                    options: _vm.states,
                    sort: true,
                    filter: true,
                    label: _vm.trans("State"),
                    "default-width": 75
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "hide",
                    type: "option",
                    "options-label": "$value.label",
                    "options-value": "$value.value",
                    options: _vm.hides,
                    sort: true,
                    filter: true,
                    label: _vm.trans("Visibility"),
                    "default-width": 75
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "title",
                    sort: true,
                    filter: true,
                    label: _vm.trans("Title"),
                    "default-width": 200
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "locale",
                    sort: true,
                    filter: true,
                    label: _vm.trans("Locale"),
                    "default-width": 75
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "updated_at",
                    type: "datetime",
                    sort: true,
                    filter: true,
                    label: _vm.trans("Updated"),
                    "default-width": 100
                  }
                }),
                _vm._v(" "),
                _c("NTableColumn", {
                  attrs: {
                    prop: "created_at",
                    type: "datetime",
                    sort: true,
                    filter: true,
                    label: _vm.trans("Created"),
                    "default-width": 100
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "web-body-item col--flex--none" },
          [
            _c("NPaginator", {
              attrs: {
                page: _vm.request.page,
                limit: _vm.request.limit,
                total: _vm.request.total,
                "limit-options": [50, 100, 500]
              },
              on: {
                "update:page": function($event) {
                  return _vm.$set(_vm.request, "page", $event)
                },
                "update:limit": function($event) {
                  return _vm.$set(_vm.request, "limit", $event)
                },
                paginate: _vm.fetchEntities
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./components/language/index */ "./resources/js/components/language/index.js");

__webpack_require__(/*! ./components/translation/index */ "./resources/js/components/translation/index.js");

if (console && console.log) {
  console.log('web-language ready.');
}

/***/ }),

/***/ "./resources/js/components/language/index.js":
/*!***************************************************!*\
  !*** ./resources/js/components/language/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_WebLanguageIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/WebLanguageIndex */ "./resources/js/components/language/src/WebLanguageIndex.vue");
/* harmony import */ var _src_WebLanguageEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/WebLanguageEdit */ "./resources/js/components/language/src/WebLanguageEdit.vue");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(_src_WebLanguageIndex__WEBPACK_IMPORTED_MODULE_1__["default"].name, _src_WebLanguageIndex__WEBPACK_IMPORTED_MODULE_1__["default"]);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(_src_WebLanguageEdit__WEBPACK_IMPORTED_MODULE_2__["default"].name, _src_WebLanguageEdit__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageEdit.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageEdit.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebLanguageEdit.vue?vue&type=template&id=7adbd182& */ "./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182&");
/* harmony import */ var _WebLanguageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebLanguageEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebLanguageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/language/src/WebLanguageEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebLanguageEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebLanguageEdit.vue?vue&type=template&id=7adbd182& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageEdit.vue?vue&type=template&id=7adbd182&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageEdit_vue_vue_type_template_id_7adbd182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageIndex.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageIndex.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebLanguageIndex.vue?vue&type=template&id=5d2eeb26& */ "./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26&");
/* harmony import */ var _WebLanguageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebLanguageIndex.vue?vue&type=script&lang=js& */ "./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebLanguageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/language/src/WebLanguageIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebLanguageIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WebLanguageIndex.vue?vue&type=template&id=5d2eeb26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/language/src/WebLanguageIndex.vue?vue&type=template&id=5d2eeb26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WebLanguageIndex_vue_vue_type_template_id_5d2eeb26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/translation/index.js":
/*!******************************************************!*\
  !*** ./resources/js/components/translation/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/sass/bootstrap.scss":
/*!***************************************!*\
  !*** ./resources/sass/bootstrap.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./resources/js/bootstrap.js ./resources/sass/bootstrap.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/eduardkizmann/Documents/GitHub/liro/storage/web/web-language/resources/js/bootstrap.js */"./resources/js/bootstrap.js");
module.exports = __webpack_require__(/*! /Users/eduardkizmann/Documents/GitHub/liro/storage/web/web-language/resources/sass/bootstrap.scss */"./resources/sass/bootstrap.scss");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });