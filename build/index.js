/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/healthcheck.ts":
/*!****************************!*\
  !*** ./src/healthcheck.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RpcHealthCheck\": () => (/* binding */ RpcHealthCheck)\n/* harmony export */ });\nfunction RpcHealthCheck(ctx, logger, nk, payload) {\r\n    logger.info(\"Healthcheck RPC called\");\r\n    return JSON.stringify({ success: true });\r\n}\r\n\n\n//# sourceURL=webpack://testnakama/./src/healthcheck.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _healthcheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthcheck */ \"./src/healthcheck.ts\");\n/* harmony import */ var _readfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readfile */ \"./src/readfile.ts\");\n/* harmony import */ var _servervalidate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servervalidate */ \"./src/servervalidate.ts\");\n\r\n\r\n\r\nfunction InitModule(ctx, logger, nk, initializer) {\r\n    initializer.registerRpc(\"healthcheck\", _healthcheck__WEBPACK_IMPORTED_MODULE_0__.RpcHealthCheck);\r\n    initializer.registerRpc(\"servervalidate\", _servervalidate__WEBPACK_IMPORTED_MODULE_2__.ServerValidate);\r\n    initializer.registerRpc(\"readfile\", _readfile__WEBPACK_IMPORTED_MODULE_1__.ReadFile);\r\n    logger.info(\"JavaScript module loaded\");\r\n}\r\n!InitModule && InitModule.bind(null);\r\n\n\n//# sourceURL=webpack://testnakama/./src/main.ts?");

/***/ }),

/***/ "./src/readfile.ts":
/*!*************************!*\
  !*** ./src/readfile.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ReadFile\": () => (/* binding */ ReadFile)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction ReadFile(ctx, logger, nk, path) {\r\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readFile(path, (err, data) => {\r\n        if (err) {\r\n            logger.error(err.message);\r\n            throw err;\r\n        }\r\n        logger.info(data.toString());\r\n        return JSON.stringify({ data });\r\n    });\r\n    return \"\";\r\n}\r\n\n\n//# sourceURL=webpack://testnakama/./src/readfile.ts?");

/***/ }),

/***/ "./src/servervalidate.ts":
/*!*******************************!*\
  !*** ./src/servervalidate.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ServerValidate\": () => (/* binding */ ServerValidate)\n/* harmony export */ });\nfunction ServerValidate(ctx, logger, nk, payload) {\r\n    logger.info(\"payload %q\", payload);\r\n    if (ctx.userId) {\r\n        throw Error(\"Cannot invoke this function from user session!\");\r\n    }\r\n    const request = JSON.parse(payload);\r\n    const collectionName = \"matchToken\";\r\n    let objectIds = [\r\n        {\r\n            collection: collectionName,\r\n            key: request.matchId,\r\n            userId: request.userId,\r\n        },\r\n    ];\r\n    let result = null;\r\n    try {\r\n        result = nk.storageRead(objectIds)[0];\r\n    }\r\n    catch (error) {\r\n        throw Error(error);\r\n    }\r\n    return JSON.stringify({ result });\r\n}\r\n\n\n//# sourceURL=webpack://testnakama/./src/servervalidate.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;