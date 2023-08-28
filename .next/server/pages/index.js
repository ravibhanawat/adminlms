module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "./app/components/CircularProgress/index.js":
/*!**************************************************!*\
  !*** ./app/components/CircularProgress/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst CircularProgress = ({\n  className\n}) => __jsx(\"div\", {\n  className: `loader ${className}`\n}, __jsx(\"img\", {\n  src: \"/images/loader.svg\",\n  alt: \"loader\",\n  style: {\n    height: 60\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (CircularProgress);\nCircularProgress.defaultProps = {\n  className: ''\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9DaXJjdWxhclByb2dyZXNzL2luZGV4LmpzP2RkZGQiXSwibmFtZXMiOlsiQ2lyY3VsYXJQcm9ncmVzcyIsImNsYXNzTmFtZSIsIl9fanN4Iiwic3JjIiwiYWx0Iiwic3R5bGUiLCJoZWlnaHQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBMEI7QUFFMUIsTUFBTUEsZ0JBQWdCLEdBQUdBLENBQUM7RUFBQ0M7QUFBUyxDQUFDLEtBQUtDLEtBQUE7RUFBS0QsU0FBUyxFQUFHLFVBQVNBLFNBQVU7QUFBRSxHQUM5RUMsS0FBQTtFQUFLQyxHQUFHLEVBQUMsb0JBQW9CO0VBQUNDLEdBQUcsRUFBQyxRQUFRO0VBQUNDLEtBQUssRUFBRTtJQUFDQyxNQUFNLEVBQUU7RUFBRTtBQUFFLENBQUMsQ0FDN0QsQ0FBQztBQUNTTiwrRUFBZ0IsRUFBQztBQUNoQ0EsZ0JBQWdCLENBQUNPLFlBQVksR0FBRztFQUM5Qk4sU0FBUyxFQUFFO0FBQ2IsQ0FBQyIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL0NpcmN1bGFyUHJvZ3Jlc3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaXJjdWxhclByb2dyZXNzID0gKHtjbGFzc05hbWV9KSA9PiA8ZGl2IGNsYXNzTmFtZT17YGxvYWRlciAke2NsYXNzTmFtZX1gfT5cclxuICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGVyLnN2Z1wiIGFsdD1cImxvYWRlclwiIHN0eWxlPXt7aGVpZ2h0OiA2MH19Lz5cclxuPC9kaXY+O1xyXG5leHBvcnQgZGVmYXVsdCBDaXJjdWxhclByb2dyZXNzO1xyXG5DaXJjdWxhclByb2dyZXNzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICcnXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/CircularProgress/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin */ \"./pages/signin.js\");\n/* harmony import */ var _util_use_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/use-auth */ \"./util/use-auth.js\");\n/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample */ \"./pages/sample/index.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst homePage = () => {\n  const {\n    authUser\n  } = Object(_util_use_auth__WEBPACK_IMPORTED_MODULE_2__[\"useAuth\"])();\n  return authUser ? __jsx(_sample__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : __jsx(_signin__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (homePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWVQYWdlIiwiYXV0aFVzZXIiLCJ1c2VBdXRoIiwiX19qc3giLCJTYW1wbGVQYWdlIiwiU2lnbkluUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNRO0FBQ087QUFDUDtBQUVsQyxNQUFNQSxRQUFRLEdBQUdBLENBQUEsS0FBTTtFQUNyQixNQUFNO0lBQUNDO0VBQVEsQ0FBQyxHQUFHQyw4REFBTyxDQUFDLENBQUM7RUFFNUIsT0FBT0QsUUFBUSxHQUFHRSxLQUFBLENBQUNDLCtDQUFVLE1BQUMsQ0FBQyxHQUFHRCxLQUFBLENBQUNFLCtDQUFVLE1BQUMsQ0FBQztBQUNqRCxDQUFDO0FBRWNMLHVFQUFRIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lnbkluUGFnZSBmcm9tIFwiLi9zaWduaW5cIjtcclxuaW1wb3J0IHt1c2VBdXRofSBmcm9tIFwiLi4vdXRpbC91c2UtYXV0aFwiO1xyXG5pbXBvcnQgU2FtcGxlUGFnZSBmcm9tIFwiLi9zYW1wbGVcIjtcclxuXHJcbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHthdXRoVXNlcn0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIHJldHVybiBhdXRoVXNlciA/IDxTYW1wbGVQYWdlLz4gOiA8U2lnbkluUGFnZS8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/sample/index.js":
/*!*******************************!*\
  !*** ./pages/sample/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/asyncComponent */ \"./util/asyncComponent.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Sample = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../routes/Sample */ \"./routes/Sample/index.js\")));\nconst SamplePage = () => __jsx(Sample, null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (SamplePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zYW1wbGUvaW5kZXguanM/MmNlMyJdLCJuYW1lcyI6WyJTYW1wbGUiLCJhc3luY0NvbXBvbmVudCIsIlNhbXBsZVBhZ2UiLCJfX2pzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFDNEI7QUFFdEQsTUFBTUEsTUFBTSxHQUFHQyxvRUFBYyxDQUFDLE1BQU0sb0lBQTZCLENBQUM7QUFFbEUsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1DLEtBQUEsQ0FBQ0gsTUFBTSxNQUFDLENBQUM7QUFFbkJFLHlFQUFVIiwiZmlsZSI6Ii4vcGFnZXMvc2FtcGxlL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWwvYXN5bmNDb21wb25lbnQnXHJcblxyXG5jb25zdCBTYW1wbGUgPSBhc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4uLy4uL3JvdXRlcy9TYW1wbGUnKSk7XHJcblxyXG5jb25zdCBTYW1wbGVQYWdlID0gKCkgPT4gPFNhbXBsZS8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2FtcGxlUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sample/index.js\n");

/***/ }),

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/asyncComponent */ \"./util/asyncComponent.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SignIn = Object(_util_asyncComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../routes/userAuth/SignIn */ \"./routes/userAuth/SignIn/index.js\")));\nconst SignInPage = () => __jsx(SignIn, null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWduaW4uanM/MGMxZSJdLCJuYW1lcyI6WyJTaWduSW4iLCJhc3luY0NvbXBvbmVudCIsIlNpZ25JblBhZ2UiLCJfX2pzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFDeUI7QUFFbkQsTUFBTUEsTUFBTSxHQUFHQyxvRUFBYyxDQUFDLE1BQU0sbUpBQW1DLENBQUM7QUFFeEUsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU1DLEtBQUEsQ0FBQ0gsTUFBTSxNQUFDLENBQUM7QUFFbkJFLHlFQUFVIiwiZmlsZSI6Ii4vcGFnZXMvc2lnbmluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFzeW5jQ29tcG9uZW50IGZyb20gJy4uL3V0aWwvYXN5bmNDb21wb25lbnQnXHJcblxyXG5jb25zdCBTaWduSW4gPSBhc3luY0NvbXBvbmVudCgoKSA9PiBpbXBvcnQoJy4uL3JvdXRlcy91c2VyQXV0aC9TaWduSW4nKSk7XHJcblxyXG5jb25zdCBTaWduSW5QYWdlID0gKCkgPT4gPFNpZ25Jbi8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "./util/Api.js":
/*!*********************!*\
  !*** ./util/Api.js ***!
  \*********************/
/*! exports provided: httpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpClient\", function() { return httpClient; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: `http://localhost:5000/api`,\n  //YOUR_API_URL HERE\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL0FwaS5qcz9kNTRhIl0sIm5hbWVzIjpbImh0dHBDbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUVuQixNQUFNQSxVQUFVLEdBQUdDLDRDQUFLLENBQUNDLE1BQU0sQ0FBQztFQUNyQ0MsT0FBTyxFQUFHLDJCQUEwQjtFQUFFO0VBQ3RDQyxPQUFPLEVBQUU7SUFDUCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUMiLCJmaWxlIjoiLi91dGlsL0FwaS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgaHR0cENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlgLCAvL1lPVVJfQVBJX1VSTCBIRVJFXHJcbiAgaGVhZGVyczoge1xyXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/Api.js\n");

/***/ }),

/***/ "./util/asyncComponent.js":
/*!********************************!*\
  !*** ./util/asyncComponent.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return asyncComponent; });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/CircularProgress */ \"./app/components/CircularProgress/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction asyncComponent(importComponent) {\n  return next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(importComponent, {\n    loading: () => __jsx(_app_components_CircularProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL2FzeW5jQ29tcG9uZW50LmpzPzU4YWYiXSwibmFtZXMiOlsiYXN5bmNDb21wb25lbnQiLCJpbXBvcnRDb21wb25lbnQiLCJkeW5hbWljIiwibG9hZGluZyIsIl9fanN4IiwiQ2lyY3VsYXJQcm9ncmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUM7QUFDK0I7QUFDeEM7QUFFWCxTQUFTQSxjQUFjQSxDQUFDQyxlQUFlLEVBQUU7RUFFdEQsT0FBT0MsbURBQU8sQ0FBQ0QsZUFBZSxFQUM1QjtJQUNFRSxPQUFPLEVBQUVBLENBQUEsS0FBTUMsS0FBQSxDQUFDQyx3RUFBZ0IsTUFBQztFQUNuQyxDQUFDLENBQUM7QUFDTiIsImZpbGUiOiIuL3V0aWwvYXN5bmNDb21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvQ2lyY3VsYXJQcm9ncmVzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3luY0NvbXBvbmVudChpbXBvcnRDb21wb25lbnQpIHtcclxuXHJcbiAgcmV0dXJuIGR5bmFtaWMoaW1wb3J0Q29tcG9uZW50LFxyXG4gICAge1xyXG4gICAgICBsb2FkaW5nOiAoKSA9PiA8Q2lyY3VsYXJQcm9ncmVzcy8+XHJcbiAgICB9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/asyncComponent.js\n");

/***/ }),

/***/ "./util/use-auth.js":
/*!**************************!*\
  !*** ./util/use-auth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth, isUnRestrictedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUnRestrictedRoute\", function() { return isUnRestrictedRoute; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ \"./util/Api.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\n\n// Provider component that wraps app and makes auth object ..\n// ... available to any child component that calls useAuth().\n\nfunction AuthProvider({\n  children\n}) {\n  const auth = useProvideAuth();\n  return __jsx(authContext.Provider, {\n    value: auth\n  }, children);\n}\n\n// Hook for child components to get the auth object ...\n// ... and re-render when it changes.\n\nconst useAuth = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(authContext);\n};\nconst useProvideAuth = () => {\n  const {\n    0: authUser,\n    1: setAuthUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: isLoadingUser,\n    1: setLoadingUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(true);\n  const {\n    0: isLoading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const fetchStart = () => {\n    setLoading(true);\n    setError('');\n  };\n  const fetchSuccess = () => {\n    setLoading(false);\n    setError('');\n  };\n  const fetchError = error => {\n    setLoading(false);\n    setError(error);\n  };\n  const userLogin = (data, callbackFun) => {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post('auth/login', data).then(({\n      data\n    }) => {\n      if (data.result) {\n        fetchSuccess();\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;\n        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n        cookies.set('token', data.token.access_token);\n        getAuthUser();\n        if (callbackFun) callbackFun();\n      } else {\n        fetchError(data.error);\n      }\n    }).catch(function (error) {\n      fetchError(error.message);\n    });\n  };\n  const userSignup = (data, callbackFun) => {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post('auth/register', data).then(({\n      data\n    }) => {\n      if (data.result) {\n        fetchSuccess();\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;\n        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n        cookies.set('token', data.token.access_token);\n        if (callbackFun) callbackFun();\n      } else {\n        fetchError(data.error);\n      }\n    }).catch(function (error) {\n      fetchError(error.message);\n    });\n  };\n  const userSignOut = callbackFun => {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post('auth/logout').then(({\n      data\n    }) => {\n      if (data.result) {\n        fetchSuccess();\n        setAuthUser(false);\n        _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n        const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n        cookies.remove('token');\n        if (callbackFun) callbackFun();\n      } else {\n        fetchError(data.error);\n      }\n    }).catch(function (error) {\n      fetchError(error.message);\n    });\n  };\n  const getAuthUser = () => {\n    fetchStart();\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post(\"auth/me\").then(({\n      data\n    }) => {\n      if (data.user) {\n        fetchSuccess();\n        setAuthUser(data.user);\n      } else {\n        fetchError(data.error);\n      }\n    }).catch(function (error) {\n      _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n      fetchError(error.message);\n    });\n  };\n\n  // Subscribe to user on mount\n  // Because this sets state in the callback it will cause any ...\n  // ... component that utilizes this hook to re-render with the ...\n  // ... latest auth object.\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\n    const token = cookies.get(\"token\");\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = 'Bearer ' + token;\n    _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].post(\"auth/me\").then(({\n      data\n    }) => {\n      if (data.user) {\n        setAuthUser(data.user);\n      }\n      setLoadingUser(false);\n    }).catch(function (error) {\n      cookies.remove('token');\n      _Api__WEBPACK_IMPORTED_MODULE_1__[\"httpClient\"].defaults.headers.common['Authorization'] = '';\n      setLoadingUser(false);\n    });\n  }, []);\n\n  // Return the user object and auth methods\n  return {\n    isLoadingUser,\n    isLoading,\n    authUser,\n    error,\n    setAuthUser,\n    getAuthUser,\n    userLogin,\n    userSignup,\n    userSignOut\n  };\n};\nconst isUnRestrictedRoute = pathname => {\n  return pathname === '/signin' || pathname === '/signup' || pathname === '/forgot-password' || pathname === '/reset-password';\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsL3VzZS1hdXRoLmpzPzRiZmEiXSwibmFtZXMiOlsiYXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlUHJvdmlkZUF1dGgiLCJfX2pzeCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsImF1dGhVc2VyIiwic2V0QXV0aFVzZXIiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZ1VzZXIiLCJzZXRMb2FkaW5nVXNlciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hTdGFydCIsImZldGNoU3VjY2VzcyIsImZldGNoRXJyb3IiLCJ1c2VyTG9naW4iLCJkYXRhIiwiY2FsbGJhY2tGdW4iLCJodHRwQ2xpZW50IiwicG9zdCIsInRoZW4iLCJyZXN1bHQiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImFjY2Vzc190b2tlbiIsImNvb2tpZXMiLCJDb29raWVzIiwic2V0IiwiZ2V0QXV0aFVzZXIiLCJjYXRjaCIsIm1lc3NhZ2UiLCJ1c2VyU2lnbnVwIiwidXNlclNpZ25PdXQiLCJyZW1vdmUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiZ2V0IiwiaXNVblJlc3RyaWN0ZWRSb3V0ZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRFO0FBQzNDO0FBQ0k7QUFFckMsTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFckM7QUFDQTs7QUFFTyxTQUFTQyxZQUFZQSxDQUFDO0VBQUNDO0FBQVEsQ0FBQyxFQUFFO0VBQ3ZDLE1BQU1DLElBQUksR0FBR0MsY0FBYyxDQUFDLENBQUM7RUFDN0IsT0FBT0MsS0FBQSxDQUFDTixXQUFXLENBQUNPLFFBQVE7SUFBQ0MsS0FBSyxFQUFFSjtFQUFLLEdBQUVELFFBQStCLENBQUM7QUFDN0U7O0FB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QUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO01BQ3hEakIsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDLENBQUM7RUFDSixDQUFDLEVBQUUsRUFDTCxDQUFDOztFQUVEO0VBQ0EsT0FBTztJQUNMRCxhQUFhO0lBQ2JFLFNBQVM7SUFDVEwsUUFBUTtJQUNSTyxLQUFLO0lBQ0xOLFdBQVc7SUFDWDBCLFdBQVc7SUFDWGYsU0FBUztJQUNUa0IsVUFBVTtJQUNWQztFQUNGLENBQUM7QUFDSCxDQUFDO0FBRU0sTUFBTUssbUJBQW1CLEdBQUlDLFFBQVEsSUFBSztFQUMvQyxPQUFPQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssU0FBUyxJQUFJQSxRQUFRLEtBQUssa0JBQWtCLElBQUlBLFFBQVEsS0FBSyxpQkFBaUI7QUFDOUgsQ0FBQyIsImZpbGUiOiIuL3V0aWwvdXNlLWF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7aHR0cENsaWVudH0gZnJvbSBcIi4vQXBpXCI7XG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuLy8gUHJvdmlkZXIgY29tcG9uZW50IHRoYXQgd3JhcHMgYXBwIGFuZCBtYWtlcyBhdXRoIG9iamVjdCAuLlxuLy8gLi4uIGF2YWlsYWJsZSB0byBhbnkgY2hpbGQgY29tcG9uZW50IHRoYXQgY2FsbHMgdXNlQXV0aCgpLlxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcbiAgY29uc3QgYXV0aCA9IHVzZVByb3ZpZGVBdXRoKCk7XG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L2F1dGhDb250ZXh0LlByb3ZpZGVyPjtcbn1cblxuLy8gSG9vayBmb3IgY2hpbGQgY29tcG9uZW50cyB0byBnZXQgdGhlIGF1dGggb2JqZWN0IC4uLlxuLy8gLi4uIGFuZCByZS1yZW5kZXIgd2hlbiBpdCBjaGFuZ2VzLlxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlUHJvdmlkZUF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoVXNlciwgc2V0QXV0aFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmdVc2VyLCBzZXRMb2FkaW5nVXNlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGZldGNoU3RhcnQgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcignJyk7XG4gIH1cblxuICBjb25zdCBmZXRjaFN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgc2V0RXJyb3IoJycpO1xuICB9XG5cbiAgY29uc3QgZmV0Y2hFcnJvciA9IChlcnJvcikgPT4ge1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIHNldEVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IChkYXRhLCBjYWxsYmFja0Z1bikgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoJ2F1dGgvbG9naW4nLCBkYXRhKVxuICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcgKyBkYXRhLnRva2VuLmFjY2Vzc190b2tlbjtcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgZ2V0QXV0aFVzZXIoKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVzZXJTaWdudXAgPSAoZGF0YSwgY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdhdXRoL3JlZ2lzdGVyJywgZGF0YSlcbiAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgZmV0Y2hTdWNjZXNzKCk7XG4gICAgICAgICAgaHR0cENsaWVudC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIGlmIChjYWxsYmFja0Z1bikgY2FsbGJhY2tGdW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmZXRjaEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBmZXRjaEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXNlclNpZ25PdXQgPSAoY2FsbGJhY2tGdW4pID0+IHtcbiAgICBmZXRjaFN0YXJ0KCk7XG4gICAgaHR0cENsaWVudC5wb3N0KCdhdXRoL2xvZ291dCcpXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICAgIGZldGNoU3VjY2VzcygpO1xuICAgICAgICAgIHNldEF1dGhVc2VyKGZhbHNlKTtcbiAgICAgICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgICAgICBjb29raWVzLnJlbW92ZSgndG9rZW4nKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2tGdW4pIGNhbGxiYWNrRnVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmV0Y2hFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZmV0Y2hFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldEF1dGhVc2VyID0gKCkgPT4ge1xuICAgIGZldGNoU3RhcnQoKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoXCJhdXRoL21lXCIpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgaWYgKGRhdGEudXNlcikge1xuICAgICAgICBmZXRjaFN1Y2Nlc3MoKTtcbiAgICAgICAgc2V0QXV0aFVzZXIoZGF0YS51c2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZldGNoRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBodHRwQ2xpZW50LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnJztcbiAgICAgIGZldGNoRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTdWJzY3JpYmUgdG8gdXNlciBvbiBtb3VudFxuICAvLyBCZWNhdXNlIHRoaXMgc2V0cyBzdGF0ZSBpbiB0aGUgY2FsbGJhY2sgaXQgd2lsbCBjYXVzZSBhbnkgLi4uXG4gIC8vIC4uLiBjb21wb25lbnQgdGhhdCB1dGlsaXplcyB0aGlzIGhvb2sgdG8gcmUtcmVuZGVyIHdpdGggdGhlIC4uLlxuICAvLyAuLi4gbGF0ZXN0IGF1dGggb2JqZWN0LlxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcbiAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRva2VuO1xuXG4gICAgICBodHRwQ2xpZW50LnBvc3QoXCJhdXRoL21lXCIpLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICAgICAgc2V0QXV0aFVzZXIoZGF0YS51c2VyKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRMb2FkaW5nVXNlcihmYWxzZSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgICAgIGh0dHBDbGllbnQuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICcnO1xuICAgICAgICBzZXRMb2FkaW5nVXNlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LCBbXVxuICApO1xuXG4gIC8vIFJldHVybiB0aGUgdXNlciBvYmplY3QgYW5kIGF1dGggbWV0aG9kc1xuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZ1VzZXIsXG4gICAgaXNMb2FkaW5nLFxuICAgIGF1dGhVc2VyLFxuICAgIGVycm9yLFxuICAgIHNldEF1dGhVc2VyLFxuICAgIGdldEF1dGhVc2VyLFxuICAgIHVzZXJMb2dpbixcbiAgICB1c2VyU2lnbnVwLFxuICAgIHVzZXJTaWduT3V0LFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgaXNVblJlc3RyaWN0ZWRSb3V0ZSA9IChwYXRobmFtZSkgPT4ge1xuICByZXR1cm4gcGF0aG5hbWUgPT09ICcvc2lnbmluJyB8fCBwYXRobmFtZSA9PT0gJy9zaWdudXAnIHx8IHBhdGhuYW1lID09PSAnL2ZvcmdvdC1wYXNzd29yZCcgfHwgcGF0aG5hbWUgPT09ICcvcmVzZXQtcGFzc3dvcmQnO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/use-auth.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIj9lMjliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-cookie\n");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCI/ODYwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intl\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ })

/******/ });