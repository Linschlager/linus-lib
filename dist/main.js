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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"linus-lib","version":"0.1.0","description":"Simple to use JavaScript library containing miscellaneous tools and utilities","main":"main.js","scripts":{"test":"mocha --require babel-core/register","babel":"babel --presets es2015 src/**/*.js -o main.js","webpack":"webpack --mode production","watch":"webpack --watch --mode development"},"repository":{"type":"git","url":"git+https://github.com/Linschlager/linus-lib.git"},"keywords":["misc","util","tools"],"author":"Linus Vettiger","license":"MIT","bugs":{"url":"https://github.com/Linschlager/linus-lib/issues"},"homepage":"https://github.com/Linschlager/linus-lib#readme","devDependencies":{"babel-loader":"^7.1.4","babel-preset-env":"^1.6.1","babel-preset-es2017":"^6.24.1","babel-preset-stage-0":"^6.24.1","mocha":"^5.0.5","webpack":"^4.5.0","webpack-cli":"^2.0.14"}};

/***/ }),

/***/ "./src/getVersion.js":
/*!***************************!*\
  !*** ./src/getVersion.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getVersion;

var _package = __webpack_require__(/*! ../package.json */ "./package.json");

var config = _interopRequireWildcard(_package);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getVersion() {
    return config.version;
}

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getVersion = __webpack_require__(/*! ../getVersion */ "./src/getVersion.js");

var _getVersion2 = _interopRequireDefault(_getVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tools = {
    getVersion: _getVersion2.default
};

// TODO provide named exports
exports.default = tools; // Export tools as default export

/***/ })

/******/ });
//# sourceMappingURL=main.js.map