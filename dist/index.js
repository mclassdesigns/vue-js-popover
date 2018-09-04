(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-js-popover"] = factory(require("vue"));
	else
		root["vue-js-popover"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js___ = __webpack_require__(1);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bus__ = __webpack_require__(2);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var pointerSize = 6;
var directions = {
  left: [-1, 0],
  right: [1, 0],
  top: [0, 1],
  bottom: [0, -1]
};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Popover',
  render: function render(createElement) {
    if (!this.visible) {
      return;
    }

    return createElement('div', {
      class: this.className,
      style: this.style,
      attrs: {
        'data-popover': this.name
      },
      on: {
        click: function click(event) {
          event.stopPropagation();
        }
      },
      ref: 'dropdown'
    }, this.$slots.default);
  },
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 180
    },
    pointer: {
      type: Boolean,
      default: true
    },
    event: {
      type: String,
      default: 'click'
    },
    anchor: {
      type: Number,
      default: 0.5,
      validator: function validator(v) {
        return v >= 0 && v <= 1;
      }
    }
  },
  data: function data() {
    return {
      visible: false,
      positionClass: '',
      position: {
        left: 0,
        top: 0
      }
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* events */].$on(this.showEventName, this.showEventListener);
    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* events */].$on(this.hideEventName, this.hideEventListener);
  },
  beforeDestroy: function beforeDestroy() {
    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* events */].$off(this.showEventName, this.showEventListener);
    __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* events */].$off(this.hideEventName, this.hideEventListener);
  },
  computed: {
    showEventName: function showEventName() {
      return "show:".concat(this.event);
    },
    hideEventName: function hideEventName() {
      return "hide:".concat(this.event);
    },
    className: function className() {
      return ['vue-popover', this.pointer && this.positionClass];
    },
    style: function style() {
      return _objectSpread({
        width: "".concat(this.width, "px")
      }, this.position);
    }
  },
  methods: {
    showEventListener: function showEventListener(event) {
      var _this = this;

      if (this.visible) {
        __WEBPACK_IMPORTED_MODULE_0__bus__["a" /* events */].$emit(this.hideEventName);
        return;
      }

      this.$nextTick(function () {
        var target = event.target,
            name = event.name,
            position = event.position;

        if (name === _this.name) {
          var direction = directions[position];
          _this.positionClass = "dropdown-position-".concat(position);
          _this.visible = true;

          _this.$nextTick(function () {
            _this.$emit('show', event);

            _this.$nextTick(function () {
              var position = _this.getDropdownPosition(target, _this.$refs.dropdown, direction);

              _this.position = {
                left: "".concat(position.left, "px"),
                top: "".concat(position.top, "px")
              };
            });
          });
        }
      });
    },
    hideEventListener: function hideEventListener(event) {
      if (this.visible) {
        this.visible = false;
        this.$emit('hide', event);
      }
    },
    getDropdownPosition: function getDropdownPosition(target, dropdown, direction) {
      var trRect = target.getBoundingClientRect();
      var ddRect = dropdown.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
      var offsetLeft = trRect.left + scrollLeft;
      var offsetTop = trRect.top + scrollTop;
      var shiftY = 0.5 * (ddRect.height + trRect.height);
      var centerX = offsetLeft - 0.5 * (ddRect.width - trRect.width);
      var centerY = offsetTop + trRect.height - shiftY;
      var x = direction[0] * 0.5 * (ddRect.width + trRect.width);
      var y = direction[1] * shiftY;

      if (this.pointer) {
        x += direction[0] * pointerSize;
        y += direction[1] * pointerSize;
      }

      return {
        left: centerX + x,
        top: centerY - y
      };
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return events; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);

var events = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(undefined);
// imports


// module
exports.push([module.i, ".popover-button[data-v-be9562b2] .vue-popover{display:block;position:absolute;background:#fff;box-shadow:0 4px 20px 0 rgba(52,73,94,.2);padding:5px;border-radius:5px;z-index:998}.popover-button[data-v-be9562b2] .vue-popover:before{display:block;position:absolute;width:0;height:0;content:\"\"}.popover-button[data-v-be9562b2] .vue-popover.dropdown-position-bottom:before{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:calc(50% - 6px);filter:drop-shadow(0 -2px 2px rgba(52,73,94,.1))}.popover-button[data-v-be9562b2] .vue-popover.dropdown-position-top:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:calc(50% - 6px);filter:drop-shadow(0 2px 2px rgba(52,73,94,.1))}.popover-button[data-v-be9562b2] .vue-popover.dropdown-position-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid #fff;right:-6px;top:calc(50% - 6px);filter:drop-shadow(2px 0 2px rgba(52,73,94,.1))}.popover-button[data-v-be9562b2] .vue-popover.dropdown-position-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid #fff;left:-6px;top:calc(50% - 6px);filter:drop-shadow(-2px 0 2px rgba(52,73,94,.1))}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_script_lang_js___ = __webpack_require__(6);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Tooltip',
  props: {
    event: {
      type: String,
      default: 'hover'
    },
    pointer: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 160
    }
  },
  data: function data() {
    return {
      value: ''
    };
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Popover_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltip_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus__ = __webpack_require__(2);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var defaultPosition = 'bottom';

var prepareBinding = function prepareBinding(_ref) {
  var _ref$arg = _ref.arg,
      arg = _ref$arg === void 0 ? '' : _ref$arg,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? {} : _ref$modifiers,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value;
  var mods = Object.keys(modifiers);
  var name = _typeof(value) === 'object' && value.name ? value.name : arg;
  var position = mods[0] || value.position || defaultPosition;
  return {
    name: name,
    position: position,
    value: value
  };
};

var addClickEventListener = function addClickEventListener(target, params) {
  var click = function click(srcEvent) {
    __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* events */].$emit('show:click', _objectSpread({}, params, {
      target: target,
      srcEvent: srcEvent
    }));

    var handler = function handler(srcEvent) {
      __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* events */].$emit('hide:click', _objectSpread({}, params, {
        target: target,
        srcEvent: srcEvent
      }));
      document.removeEventListener('click', handler);
    };

    document.addEventListener('click', handler);
    srcEvent.stopPropagation();
  };

  target.addEventListener('click', click);

  target.$popoverRemoveClickHandlers = function () {
    target.removeEventListener('click', click);
  };
};

var addHoverEventListener = function addHoverEventListener(target, params) {
  var mouseenter = function mouseenter(srcEvent) {
    __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* events */].$emit('show:hover', _objectSpread({}, params, {
      target: target,
      srcEvent: srcEvent
    }));
  };

  var mouseleave = function mouseleave(srcEvent) {
    __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* events */].$emit('hide:hover', _objectSpread({}, params, {
      target: target,
      srcEvent: srcEvent
    }));
  };

  target.addEventListener('mouseenter', mouseenter);
  target.addEventListener('mouseleave', mouseleave);

  target.$popoverRemoveHoverHandlers = function () {
    target.removeEventListener('mouseenter', mouseenter);
    target.removeEventListener('mouseleave', mouseleave);
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    document.addEventListener('resize', function (event) {
      __WEBPACK_IMPORTED_MODULE_2__bus__["a" /* events */].$emit('hide', {
        srcEvent: event
      });
    });
    Vue.component('Popover', __WEBPACK_IMPORTED_MODULE_0__Popover_vue__["a" /* default */]);
    Vue.directive('popover', {
      bind: function bind(target, binding) {
        var params = prepareBinding(binding);
        addClickEventListener(target, params);
        addHoverEventListener(target, params);
      },
      unbind: function unbind(target, binding) {
        target.$popoverRemoveHoverHandlers();
        target.$popoverRemoveClickHandlers();
      }
    });

    if (params.tooltip) {
      if (params.debug) {
        console.log('vue-js-popover | tooltip active');
      }

      Vue.component('Tooltip', __WEBPACK_IMPORTED_MODULE_1__Tooltip_vue__["a" /* default */]);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Popover_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Popover_vue_vue_type_style_index_0_id_be9562b2_lang_scss_scoped_true___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(4);
var render, staticRenderFns





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__Popover_vue_vue_type_script_lang_js___["a" /* default */],
  render,
  staticRenderFns,
  false,
  null,
  "be9562b2",
  null
  
)

component.options.__file = "Popover.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_id_be9562b2_lang_scss_scoped_true___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_id_be9562b2_lang_scss_scoped_true____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_id_be9562b2_lang_scss_scoped_true___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popover_vue_vue_type_style_index_0_id_be9562b2_lang_scss_scoped_true____default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tooltip_vue_vue_type_template_id_3e1a62f4___ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tooltip_vue_vue_type_script_lang_js___ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(4);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Tooltip_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__Tooltip_vue_vue_type_template_id_3e1a62f4___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Tooltip_vue_vue_type_template_id_3e1a62f4___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

component.options.__file = "Tooltip.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_3e1a62f4___ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_3e1a62f4___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltip_vue_vue_type_template_id_3e1a62f4___["b"]; });


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('popover',{attrs:{"name":"tooltip","pointer":_vm.pointer,"width":_vm.width,"event":_vm.event},on:{"show":function($event){_vm.value = $event.value}}},[_vm._v("\n  "+_vm._s(_vm.value)+"\n")])}
var staticRenderFns = []



/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map