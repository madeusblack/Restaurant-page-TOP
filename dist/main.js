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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction elementCreator(type,inHtml,tof,name,appendtype,appendname){\r\n    let newelement=document.createElement(type);\r\n    if(tof==\"id\"){\r\n        console.log(\"setid\")\r\n        newelement.id=name;\r\n    }\r\n    if(tof==\"class\"){\r\n        console.log(\"setclass\")\r\n        newelement.classList.add(name);\r\n        }\r\n    if(inHtml!=null){\r\n        console.log(\"ihtml\")\r\n            if(type!=\"img\"){\r\n                newelement.innerHTML=inHtml;\r\n\r\n            }\r\n            if(type==\"img\"){\r\n                newelement.src=inHtml;\r\n            }\r\n        }\r\n    if(appendtype==\"id\"){\r\n        console.log(\"appendid\")\r\n        document.getElementById(appendname).appendChild(newelement)\r\n    }\r\n    if(appendtype==\"class\"){\r\n        console.log(\"appendclass\")\r\n        document.getElementsByClassName(appendname).appendChild(newelement)\r\n    }\r\n}\r\nlet img1=elementCreator(\"img\",\"rest.jpg\",\"id\",\"mainimg\",\"id\",\"content\")\r\nlet test=elementCreator(\"h1\",\"Townstorant\",\"id\",\"bigtxt\",\"id\",\"content\")\r\nlet divtest=elementCreator(\"div\",null,\"id\",\"divtest\",\"id\",\"content\")\r\nlet h2=elementCreator(\"p\",\"Hello dear customer and welcome to our iconic restorant, we are located at the center of our lovely town, and you should come to visit us because you will love our 'magic dishes'\",\"id\",\"bisgtxt\",\"id\",\"divtest\")\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });