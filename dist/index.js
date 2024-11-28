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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_landingpages_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/landingpages.css */ \"./src/css/landingpages.css\");\n\nconst button = document.getElementById('start-button');\nlet continueIDOK = false;\n\n// FOR NEW VERSIONS: notify users\n// Check if the user has already seen the notification\nconst currentVersion = '1.0.2'; // Replace this with your current version\n\nif (localStorage.getItem('website-version') !== currentVersion) {\n  // Show the pop-up and update the version in localStorage\n  const popup = document.getElementById('version-popup');\n  const closeButton = document.getElementById('close-popup');\n\n  popup.style.display = 'flex';\n\n  closeButton.addEventListener('click', () => {\n    popup.style.display = 'none';\n    localStorage.setItem('website-version', currentVersion);\n  });\n}\n\n// FOR INPUT FORM\nconst textField = document.getElementById('participant-id');\n\n// define what happens on input\nconst handleInput = (event) => {\n  event.preventDefault();\n  // to get most recent value, get element fresh\n  // count number of characters and display the count\n  document.getElementById('id-counter').innerHTML = `${\n    document.getElementById('participant-id').value.length\n  } / 8`;\n\n  continueIDOK = document.getElementById('participant-id').value.length > 0;\n  // enable button when eight characters are entered\n  button.disabled = !continueIDOK;\n};\n\ntextField.addEventListener('keyup', handleInput, { capture: false });\n\n// FOR WEBCAM RECORIDING\n// get both radio buttons\nconst webcamOptions = document.getElementsByName('webcam-options');\nlet webcam = 'false'; // no as default\n\nfor (const option of webcamOptions) {\n  option.onclick = () => {\n    if (option.checked) {\n      webcam = option.value;\n    }\n  };\n}\n\n// FOR CONTINUE BUTTON\n// define what happens on button click\nconst handleContinueClick = (event) => {\n  event.preventDefault();\n  const subjID = document.getElementById('participant-id').value;\n  window.location.href = `./instructions.html?ID=${subjID}&webcam=${webcam}`;\n};\n\nbutton.addEventListener('click', handleContinueClick);\n\n\n//# sourceURL=webpack://orev-demo/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;