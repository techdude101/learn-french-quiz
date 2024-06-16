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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz */ \"./src/js/quiz.js\");\n\n\nconst numberOfQuestions = 10;\nconst numberRange = [1, 100];\nconst quiz = new _quiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"](numberRange[0], numberRange[1], numberOfQuestions);\nlet scoreUpdated = false;\n\n// Elements\nconst questionFormElement = document.querySelector(\"#question-form\");\nconst questionLabelElement = document.querySelector(\"#question-label\");\nconst answerInputElement = document.querySelector(\"#answer-input\");\nconst submitButtonElement = document.querySelector(\"#submit-button\");\nconst nextButtonElement = document.querySelector(\"#next-button\");\n\nconst infoScreen = document.querySelector(\"#info-screen\");\nconst infoScreenCorrectAnswer = document.querySelector(\"#info-correct-answer\");\n\nconst resultsScreen = document.querySelector(\"#results-screen\");\nconst resultsScoreElement = document.querySelector(\"#results-score\");\n\n// Event listeners\nquestionFormElement.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  \n  const answer = answerInputElement.value;\n  const result = quiz.checkAnswer(quiz.randomNumber, answer.toLowerCase());\n  \n  if (result) {\n    quiz.score += 1;\n    scoreUpdated = true;\n    infoScreen.style.visibility = \"visible\";\n    infoScreenCorrectAnswer.textContent = `Correct! :)`;\n  } else {\n    const correctAnswer = quiz.getCorrectAnswer(quiz.randomNumber);\n    resultsScreen.style.visibility = \"hidden\";\n    infoScreen.style.visibility = \"visible\";\n    infoScreenCorrectAnswer.textContent = `Correct answer: ${correctAnswer}`;\n  }\n  \n  if (quiz.questionIndex >= numberOfQuestions) {\n\n    submitButtonElement.setAttribute(\"disabled\", \"disabled\");\n    nextButtonElement.setAttribute(\"disabled\", \"disabled\");\n    resultsScoreElement.textContent = `Total score: ${quiz.score} / ${numberOfQuestions}`;\n    resultsScreen.style.visibility = \"visible\";\n  }\n});\n\nnextButtonElement.addEventListener(\"click\", (e) => {\n\n  resultsScreen.style.visibility = \"hidden\";\n  infoScreen.style.visibility = \"hidden\";\n\n  const answer = answerInputElement.value;\n  const result = quiz.checkAnswer(quiz.randomNumber, answer);\n  \n  if (result && scoreUpdated == false) {\n    quiz.score += 1;\n  }\n\n  scoreUpdated = false;\n\n  if (quiz.questionIndex < numberOfQuestions) {\n    quiz.questionIndex += 1;\n\n    const question = quiz.generateQuestion();\n\n    questionLabelElement.textContent = question;\n    answerInputElement.value = \"\";\n  } else {\n    nextButtonElement.setAttribute(\"disabled\", \"disabled\");\n    submitButtonElement.setAttribute(\"disabled\", \"disabled\");\n    resultsScoreElement.textContent = `Total score: ${quiz.score} / ${numberOfQuestions}`;\n    resultsScreen.style.visibility = \"visible\";\n  }\n});\n\nresultsScreen.style.visibility = \"hidden\";\ninfoScreen.style.visibility = \"hidden\";\n\nconst question = quiz.generateQuestion();\n\nquestionLabelElement.textContent = question;\n\n//# sourceURL=webpack://quiz/./src/js/index.js?");

/***/ }),

/***/ "./src/js/numbers_translations.js":
/*!****************************************!*\
  !*** ./src/js/numbers_translations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst numbers_fr = [\n  \"zéro\",\n  \"un\",\n  \"deux\",\n  \"trois\",\n  \"quatre\",\n  \"cinq\",\n  \"six\",\n  \"sept\",\n  \"huit\",\n  \"neuf\",\n  \"dix\",\n  \"onze\",\n  \"douze\",\n  \"treize\",\n  \"quatorze\",\n  \"quinze\",\n  \"seize\",\n  \"dix-sept\",\n  \"dix-huit\",\n  \"dix-neuf\",\n  \"vingt\",\n  \"vingt-et-un\",\n  \"vingt-deux\",\n  \"vingt-trois\",\n  \"vingt-quatre\",\n  \"vingt-cinq\",\n  \"vingt-six\",\n  \"vingt-sept\",\n  \"vingt-huit\",\n  \"vingt-neuf\",\n  \"trente\",\n  \"trente-et-un\",\n  \"trente-deux\",\n  \"trente-trois\",\n  \"trente-quatre\",\n  \"trente-cinq\",\n  \"trente-six\",\n  \"trente-sept\",\n  \"trente-huit\",\n  \"trente-neuf\",\n  \"quarante\",\n  \"quarante-et-un\",\n  \"quarante-deux\",\n  \"quarante-trois\",\n  \"quarante-quatre\",\n  \"quarante-cinq\",\n  \"quarante-six\",\n  \"quarante-sept\",\n  \"quarante-huit\",\n  \"quarante-neuf\",\n  \"cinquante\",\n  \"cinquante-et-un\",\n  \"cinquante-deux\",\n  \"cinquante-trois\",\n  \"cinquante-quatre\",\n  \"cinquante-cinq\",\n  \"cinquante-six\",\n  \"cinquante-sept\",\n  \"cinquante-huit\",\n  \"cinquante-neuf\",\n  \"soixante\",\n  \"soixante-et-un\",\n  \"soixante-deux\",\n  \"soixante-trois\",\n  \"soixante-quatre\",\n  \"soixante-cinq\",\n  \"soixante-six\",\n  \"soixante-sept\",\n  \"soixante-huit\",\n  \"soixante-neuf\",\n  \"soixante-dix\",\n  \"soixante-et-onze\",\n  \"soixante-douze\",\n  \"soixante-treize\",\n  \"soixante-quatorze\",\n  \"soixante-quinze\",\n  \"soixante-seize\",\n  \"soixante-dix-sept\",\n  \"soixante-dix-huit\",\n  \"soixante-dix-neuf\",\n  \"quatre-vingts\",\n  \"quatre-vingt-un\",\n  \"quatre-vingt-deux\",\n  \"quatre-vingt-trois\",\n  \"quatre-vingt-quatre\",\n  \"quatre-vingt-cinq\",\n  \"quatre-vingt-six\",\n  \"quatre-vingt-sept\",\n  \"quatre-vingt-huit\",\n  \"quatre-vingt-neuf\",\n  \"quatre-vingt-dix\",\n  \"quatre-vingt-onze\",\n  \"quatre-vingt-douze\",\n  \"quatre-vingt-treize\",\n  \"quatre-vingt-quatorze\",\n  \"quatre-vingt-quinze\",\n  \"quatre-vingt-seize\",\n  \"quatre-vingt-dix-sept\",\n  \"quatre-vingt-dix-huit\",\n  \"quatre-vingt-dix-neuf\",\n  \"cent\",\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numbers_fr);\n\n//# sourceURL=webpack://quiz/./src/js/numbers_translations.js?");

/***/ }),

/***/ "./src/js/quiz.js":
/*!************************!*\
  !*** ./src/js/quiz.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quiz)\n/* harmony export */ });\n/* harmony import */ var _numbers_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbers_translations */ \"./src/js/numbers_translations.js\");\n\n\nclass Quiz {\n\n  QUESTION_TEXT = \"What is the number x in French?\";\n\n  /**\n   * Create a new numbers quiz\n   * \n   * Generate questions with a random number\n   * between {startNumber} and {endNumber}\n   * \n   * @param {Number} startNumber - minimum number\n   * @param {Number} endNumber - maximum number\n   * @param {Number} numberOfQuestions - \n   */\n  constructor(startNumber = 1, endNumber = 10, numberOfQuestions = 10) {\n    this.newQuiz(numberOfQuestions)\n    this.startNumber = startNumber;\n    this.endNumber = endNumber;\n    this.randomNumber = -1;\n  }\n\n  newQuiz(numberOfQuestions) {\n    this.score = 0;\n    this.questionIndex = 1;\n    this.numberOfQuestions = numberOfQuestions;\n  }\n\n  generateQuestion() {\n    const randomNumber = this.generateRandomInteger(this.startNumber, this.endNumber);\n    const text = this.QUESTION_TEXT.replace(\"x\", randomNumber);\n    this.randomNumber = randomNumber;\n    \n    return `${this.questionIndex}. ${text}`;\n  }\n\n  checkAnswer(randomNumber, answer) {\n    const result = _numbers_translations__WEBPACK_IMPORTED_MODULE_0__[\"default\"][randomNumber] === answer;\n    \n    return result;\n  }\n\n  getCorrectAnswer(randomNumber) {\n    return _numbers_translations__WEBPACK_IMPORTED_MODULE_0__[\"default\"][randomNumber];\n  }\n\n  generateRandomInteger(min, max) {\n    return Math.floor(Math.random() * (max - min) ) + min;\n  }\n}\n\n//# sourceURL=webpack://quiz/./src/js/quiz.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;