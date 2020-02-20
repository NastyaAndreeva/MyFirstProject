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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lesson5/css/myIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lesson5/css/myIndex.js":
/*!********************************!*\
  !*** ./lesson5/css/myIndex.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let body = document.createElement('body');\r\ndocument.lastChild.appendChild(body);\r\n\r\n//------------------------------ Main-------------------------------\r\n\r\nlet main = document.createElement('main');\r\nmain.className = \"profile\";\r\nbody.appendChild(main);\r\n\r\nlet section = document.createElement('section');\r\nsection.className = \"section main-section section_black\";\r\nmain.appendChild(section);\r\n\r\nlet article = document.createElement('article');\r\narticle.className = 'main-article main-article_white';\r\nsection.appendChild(article);\r\n\r\nlet h1 = document.createElement('h1');\r\nh1.className = 'main-article__title';\r\nh1.innerHTML = \"Andreeva Anastasiia\";\r\narticle.appendChild(h1);\r\n\r\nlet ul = document.createElement('ul');\r\nul.className = 'main-article__list';\r\narticle.appendChild(ul);\r\n\r\nlet li = document.createElement('li');\r\nli.innerHTML = 'I am 29 and am working at IT company';\r\nul.appendChild(li);\r\n\r\nlet img = document.createElement('img');\r\nimg.className = 'section__img';\r\nimg.src = \"assets/picture.jpg\";\r\nsection.appendChild(img);\r\n\r\n// -----------------------------------------About-section\r\nlet aboutSection = document.createElement('section');\r\naboutSection.className = \"section about-section\";\r\nmain.appendChild(aboutSection);\r\n\r\nlet aboutArticle = document.createElement('article');\r\naboutArticle.className = 'article-about';\r\naboutSection.appendChild(aboutArticle);\r\n\r\nlet h1About = document.createElement('h1');\r\nh1About.className = 'article-about__title article-about__title_grey';\r\nh1About.innerHTML = \"About me\";\r\naboutArticle.appendChild(h1About);\r\n\r\nlet p = document.createElement('p');\r\np.className = 'article-about__item';\r\np.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nobis facilis fuga, illo at. Natus eos, eligendi illum rerum omnis porro ex, magni, explicabo veniamincidunt in quam sapiente ut ipsum.';\r\naboutArticle.appendChild(p);\r\n\r\nlet aboutImg = document.createElement('img');\r\naboutImg.className = 'about-section__img';\r\naboutImg.src = \"assets/aboutme.jpg\";\r\naboutSection.appendChild(aboutImg);\r\n// -----------------------------------------------------\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./lesson5/css/myIndex.js?");

/***/ })

/******/ });