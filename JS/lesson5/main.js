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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lesson5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lesson5/Shop.js":
/*!*************************!*\
  !*** ./lesson5/Shop.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (17:13)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }\\n| \\n>     addGoods = (item, count = 1) => {\\n|         for (let i = 1; i <= count; i++) {\\n|             this.goods.push(item);\");\n\n//# sourceURL=webpack:///./lesson5/Shop.js?");

/***/ }),

/***/ "./lesson5/index.js":
/*!**************************!*\
  !*** ./lesson5/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Goods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _Shop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shop.js */ \"./lesson5/Shop.js\");\n/* harmony import */ var _Shop_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Shop_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n// import {History} from './lesson5/Objects.js/index.js'\r\n\r\nlet myFirstShop = new _Shop_js__WEBPACK_IMPORTED_MODULE_1__[\"Shop\"](1);\r\n\r\nlet dress = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Goods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Dress', 'clothes', 100);\r\nlet coat = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Goods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Coat', 'clothes', 200);\r\nlet car = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Goods.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Car', 'vehicle transport', 3100);\r\n\r\nlet ekonomik = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Anastasiia', 'Andreeva', 3000);\r\nlet eleks = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Irina', 'Popovich', 2000);\r\nlet employment = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './lesson5/Client.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Victoriia', 'Kshenina', 1000);\r\n\r\nmyFirstShop.addGoods(dress, 20);\r\nmyFirstShop.addGoods(coat, 10);\r\nmyFirstShop.addGoods(car, 5);\r\n\r\nmyFirstShop.addClients(ekonomik);\r\nmyFirstShop.addClients(eleks);\r\nmyFirstShop.addClients(employment);\r\n\r\nmyFirstShop.deleteGoods(1, 1);\r\n\r\nmyFirstShop.sell(eleks, 'clothes', 2, dress);\r\nmyFirstShop.sell(ekonomik, 'vehicle transport', 1, car);\r\nmyFirstShop.sell(employment, 'clothes', 2, coat);\r\n\r\nconsole.log(myFirstShop);\r\n\r\nconsole.log(myFirstShop.sumSell());\r\n\r\nconsole.log(myFirstShop.countSell());\r\n\r\nconsole.log(myFirstShop.countGoods());\r\n\r\nconsole.log(myFirstShop.countTypeGoods('clothes'));\r\n\r\nconsole.log(myFirstShop.countTypeGoods('vehicle transport'));\r\n\r\nconsole.log(myFirstShop.countSellTypeGoods('vehicle transport'));\r\n\r\nconsole.log(myFirstShop.countSellTypeGoods('clothes'));\r\n\r\n\n\n//# sourceURL=webpack:///./lesson5/index.js?");

/***/ })

/******/ });