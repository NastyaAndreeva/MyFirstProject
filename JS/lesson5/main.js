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

/***/ "./lesson5/Client.js":
/*!***************************!*\
  !*** ./lesson5/Client.js ***!
  \***************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Client\", function() { return Client; });\nclass Client {\r\n    constructor(name, surName, purchase = 0) {\r\n        this.name = name;\r\n        this.surName = surName;\r\n        this.purchase = purchase;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./lesson5/Client.js?");

/***/ }),

/***/ "./lesson5/Goods.js":
/*!**************************!*\
  !*** ./lesson5/Goods.js ***!
  \**************************/
/*! exports provided: Goods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Goods\", function() { return Goods; });\nclass Goods {\r\n    constructor(title, type, value) {\r\n        this.title = title;\r\n        this.type = type;\r\n        this.value = value;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./lesson5/Goods.js?");

/***/ }),

/***/ "./lesson5/Purchase.js":
/*!*****************************!*\
  !*** ./lesson5/Purchase.js ***!
  \*****************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Purchase\", function() { return Purchase; });\nclass Purchase {\r\n    constructor(name, type, count, sum, date = new Date()){\r\n        historyPurchase.date = date;\r\n        historyPurchase.name = name;\r\n        historyPurchase.type = type;\r\n        historyPurchase.count = count;\r\n        historyPurchase.sum = sum;\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack:///./lesson5/Purchase.js?");

/***/ }),

/***/ "./lesson5/Shop.js":
/*!*************************!*\
  !*** ./lesson5/Shop.js ***!
  \*************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shop\", function() { return Shop; });\nclass Shop {\r\n    constructor(id) {\r\n        this.id = id;\r\n        this.goods = [];\r\n        this.clients = [];\r\n        this.purchases = [];\r\n    }\r\n\r\n    addPurchases(purchase){\r\n        this.purchases.push(purchase);\r\n    }\r\n    addGoods(item, count = 1){\r\n        for (let i = 1; i <= count; i++) {\r\n            this.goods.push(item);\r\n        }\r\n    }\r\n\r\n    deleteGoods(item, count = 1){\r\n        this.goods.splice(this.goods.indexOf(item), count);\r\n    }\r\n\r\n    addClients(item) {\r\n        this.clients.push(item);\r\n    }\r\n\r\n    deleteClient(index, count = 1){\r\n        this.clients.splice(index, count);\r\n    }\r\n\r\n    sell(client, type, count, item){     \r\n        this.goods.splice(this.goods.indexOf(item), count);\r\n        this.clients[this.clients.indexOf(client)].purchase += count * item.value;\r\n        // this.addPurchases(new Purchase(client, type, count, item));\r\n    }\r\n\r\n    // countSell(){\r\n    //     let count = 0;\r\n    \r\n    //     this.History.map((element) => {\r\n    //         count += element.count;\r\n    //     })\r\n    \r\n    //     return `Количество проданного товара: ${count}`;\r\n    // }\r\n\r\n    // sumSell(){\r\n    //     let sum = 0;\r\n    \r\n    //     this.History.map((element) => {\r\n    //         sum += element.sum;\r\n    //     })\r\n    \r\n    //     return `Сумма заработанных денег: ${sum}`;\r\n    // }\r\n\r\n    // countGoods(){\r\n    //     return `Количество товара на складе: ${this.goods.length}`;\r\n    // }\r\n    \r\n    // countSellTypeGoods(type){\r\n    //     let count = 0;\r\n    //     for (let key in this.History) {\r\n    //         if (this.History[key].type == type) {\r\n    //             count += this.History[key].count;\r\n    //         }\r\n    //     }\r\n    //     return `Количество проданного товара типа ${type}: ${count}`;\r\n    // }\r\n    \r\n    countTypeGoods(type){\r\n        let count = 0;\r\n        for (let key in this.goods) {\r\n            if (this.goods[key].type == type) {\r\n                count++;\r\n            }\r\n        }\r\n        return `Количество товара на складе типа ${type}: ${count}`;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./lesson5/Shop.js?");

/***/ }),

/***/ "./lesson5/index.js":
/*!**************************!*\
  !*** ./lesson5/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Goods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goods.js */ \"./lesson5/Goods.js\");\n/* harmony import */ var _Client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client.js */ \"./lesson5/Client.js\");\n/* harmony import */ var _Shop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shop.js */ \"./lesson5/Shop.js\");\n/* harmony import */ var _Purchase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Purchase.js */ \"./lesson5/Purchase.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet myFirstShop = new _Shop_js__WEBPACK_IMPORTED_MODULE_2__[\"Shop\"](1);\r\n\r\nlet dress = new _Goods_js__WEBPACK_IMPORTED_MODULE_0__[\"Goods\"]('Dress', 'clothes', 100);\r\nlet coat = new _Goods_js__WEBPACK_IMPORTED_MODULE_0__[\"Goods\"]('Coat', 'clothes', 200);\r\nlet car = new _Goods_js__WEBPACK_IMPORTED_MODULE_0__[\"Goods\"]('Car', 'vehicle transport', 3100);\r\n\r\nlet ekonomik = new _Client_js__WEBPACK_IMPORTED_MODULE_1__[\"Client\"]('Anastasiia', 'Andreeva', 3000);\r\nlet eleks = new _Client_js__WEBPACK_IMPORTED_MODULE_1__[\"Client\"]('Irina', 'Popovich', 2000);\r\nlet employment = new _Client_js__WEBPACK_IMPORTED_MODULE_1__[\"Client\"]('Victoriia', 'Kshenina', 1000);\r\n\r\nmyFirstShop.addGoods(dress, 20);\r\nmyFirstShop.addGoods(coat, 10);\r\nmyFirstShop.addGoods(car, 5);\r\n\r\nmyFirstShop.addClients(ekonomik);\r\nmyFirstShop.addClients(eleks);\r\nmyFirstShop.addClients(employment);\r\n\r\nmyFirstShop.deleteGoods(1, 1);\r\n\r\nmyFirstShop.sell(eleks, 'clothes', 2, dress);\r\n// myFirstShop.sell(ekonomik, 'vehicle transport', 1, car);\r\n// myFirstShop.sell(employment, 'clothes', 2, coat);\r\n\r\nconsole.log(myFirstShop);\r\n\r\n// console.log(myFirstShop.sumSell());\r\n\r\n// console.log(myFirstShop.countSell());\r\n\r\n// console.log(myFirstShop.countGoods());\r\n\r\nconsole.log(myFirstShop.countTypeGoods('clothes'));\r\n\r\nconsole.log(myFirstShop.countTypeGoods('vehicle transport'));\r\n\r\n// console.log(myFirstShop.countSellTypeGoods('vehicle transport'));\r\n\r\n// console.log(myFirstShop.countSellTypeGoods('clothes'));\r\n\r\n\n\n//# sourceURL=webpack:///./lesson5/index.js?");

/***/ })

/******/ });