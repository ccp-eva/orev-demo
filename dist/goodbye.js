/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/landingpages.css":
/*!**********************************!*\
  !*** ./src/css/landingpages.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://orev-demo/./src/css/landingpages.css?");

/***/ }),

/***/ "./src/goodbye.js":
/*!************************!*\
  !*** ./src/goodbye.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_landingpages_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/landingpages.css */ \"./src/css/landingpages.css\");\n\n\nconst button = document.getElementById('confirm-btn');\nconst checkbox = document.getElementById('confirm-checkbox');\nconst pDelete = document.getElementById('p-delete');\nconst aDownload = document.getElementById('a-download');\nconst subjID = new URL(document.location.href).searchParams.get('ID');\n\nconst handleChecked = () => {\n  button.disabled = !checkbox.checked;\n};\n\ndocument\n  .querySelector('.mdc-checkbox')\n  .addEventListener('click', handleChecked);\n\n// function for response logging, creating json file on server\nfunction downloadData(safe, ID) {\n  fetch('data/data.php', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ data: JSON.stringify(safe), fname: ID }),\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      console.log('Success:', data);\n    })\n    .catch((error) => {\n      console.error('Error:', error);\n    });\n}\n\nconst handleConfirmClick = (event) => {\n  event.preventDefault();\n\n  pDelete.innerHTML = '<strong>Wir werden Ihre Daten löschen. Danke!</strong>';\n\n  const date = new Date();\n\n  const toSave = {\n    // get ID out of URL parameter\n    subjID: new URL(document.location.href).searchParams.get('ID'),\n    deleteData: true,\n    timestamp: date.toISOString(),\n    epoch: date.getTime(),\n  };\n  const toSaveID = `DELETE${subjID}`;\n  downloadData(toSave, toSaveID);\n};\n\nbutton.addEventListener('click', handleConfirmClick, {\n  capture: false,\n  once: true,\n});\n\n// define what happens on button click\nconst handleDownloadClick = () => {\n  window.open('images/thanks.pdf');\n};\n\naDownload.addEventListener('click', handleDownloadClick, { capture: false });\n\n\n//# sourceURL=webpack://orev-demo/./src/goodbye.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/goodbye.js");
/******/ 	
/******/ })()
;