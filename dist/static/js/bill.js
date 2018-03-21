global.webpackJsonp([3],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(7);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      show: {
        input: true,
        itemList: false,
        resList: false
      },
      inputContent: '',
      personsName: ['AA', '付力', '苏迪', '龚芹'],
      persons: [],
      itemList: [],
      resList: []
    };
  },


  methods: {
    getItem: function getItem() {
      var _this = this;
      this.inputContent = this.inputContent.trim();
      if (this.inputContent === '') return;

      var itemArr = this.inputContent.split(/[,，\n]/g);

      itemArr.forEach(function (item) {
        var price = item.match(/[¥￥]*[0-9.]+[元块¥￥]*/g).join(''),
            name = item.replace(price, '');

        _this.itemList.push({
          name: name,
          price: parseFloat(price.replace(/[元块¥￥]*/g, '')),
          type: 'AA',
          typeIndex: 0
        });
      });

      this.show.itemList = true;
      this.clearInput();
    },
    deleteItem: function deleteItem(item) {
      this.itemList.splice(this.itemList.indexOf(item), 1);
    },
    clearInput: function clearInput() {
      this.inputContent = '';
    },
    setItemType: function setItemType(e) {
      console.log(e.currentTarget.dataset.eventid);
      var _ref = [e.currentTarget.dataset.eventid.split('-')[1], e.mp.detail.value],
          i = _ref[0],
          j = _ref[1];

      this.itemList[i].typeIndex = e.mp.detail.value;
      this.itemList[i].type = this.personsName[j];
    },
    getResult: function getResult() {
      var _this = this,
          personNum = this.persons.length - 1;

      this.persons.forEach(function (person) {
        person.item = [];
        if (person.name !== 'AA') {
          _this.itemList.forEach(function (item) {
            var price = item.type === person.name ? item.price : item.type === 'AA' ? item.price / personNum : 0;
            if (price !== 0) {
              person.item.push({
                name: item.name,
                price: price
              });
            }
          });
        }
      });

      this.persons.forEach(function (person) {
        var sum = 0;
        person.item.forEach(function (item) {
          sum += item.price;
        });
        person.sum = Math.round(sum * 100) / 100;
      });

      this.show.resList = true;
    },
    clearItem: function clearItem() {
      this.show.itemList = false;
      this.itemList = [];
      this.clearResult();
    },
    clearResult: function clearResult() {
      this.persons.forEach(function (person) {
        person.sum = 0;
        person.item = [];
      });
      this.show.resList = false;
    }
  },

  mounted: function mounted() {
    var _this = this;
    this.persons = [];
    this.personsName.forEach(function (name) {
      _this.persons.push({
        name: name,
        sum: 0,
        item: []
      });
    });
  }
});

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "container"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.input),
      expression: "show.input"
    }],
    attrs: {
      "id": "inputBox"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputContent),
      expression: "inputContent"
    }],
    attrs: {
      "name": "",
      "id": "",
      "cols": "30",
      "rows": "10",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputContent)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputContent = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "btnBox"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.getItem()
      }
    }
  }, [_vm._v("add")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.clearInput()
      }
    }
  }, [_vm._v("clear")])], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.itemList),
      expression: "show.itemList"
    }],
    attrs: {
      "id": "itemListBox"
    }
  }, [_c('h5', [_vm._v("清单")]), _vm._v(" "), _c('ul', _vm._l((_vm.itemList), function(item, i) {
    return _c('li', [_vm._v("\n        " + _vm._s(item.name) + "--" + _vm._s(item.price) + "\n          "), _c('button', {
      staticClass: "btn",
      attrs: {
        "eventid": '3-' + i
      },
      on: {
        "click": function($event) {
          _vm.deleteItem(i)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('div', {
      staticClass: "btn typeBtn"
    }, [_c('picker', {
      attrs: {
        "value": item.typeIndex,
        "range": _vm.personsName,
        "eventid": '4-' + i
      },
      on: {
        "change": _vm.setItemType
      }
    }, [_c('view', {
      staticClass: "picker"
    }, [_vm._v("\n                " + _vm._s(_vm.personsName[item.typeIndex]) + "\n              ")])])], 1)], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "btnBox"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.getResult()
      }
    }
  }, [_vm._v("ok")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.clearItem()
      }
    }
  }, [_vm._v("clear")])], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show.resList),
      expression: "show.resList"
    }],
    attrs: {
      "id": "resListBox"
    }
  }, [_c('h5', [_vm._v("结果")]), _vm._v(" "), _c('ul', _vm._l((_vm.persons), function(person, n) {
    return (person.name !== 'AA') ? _c('li', [_vm._v(_vm._s(person.name) + "--" + _vm._s(person.sum))]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "btnBox"
  }, [_c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.clearResult()
      }
    }
  }, [_vm._v("clear")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-376a0100", esExports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_376a0100_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_376a0100_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bill\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-376a0100", Component.options)
  } else {
    hotAPI.reload("data-v-376a0100", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[11]);
//# sourceMappingURL=bill.js.map