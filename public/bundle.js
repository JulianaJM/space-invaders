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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Canvas */ \"./src/view/Canvas.js\");\n\n\nconst canvas = new _view_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//Speed of the movement\nconst speed = 100;\nconst cycleLoop = [0, 1];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\nconst updateFrame = () => {\n  frameCount++;\n  if (frameCount < speed) {\n    window.requestAnimationFrame(updateFrame);\n    return;\n  }\n  frameCount = 0;\n  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);\n  render(cycleLoop[currentLoopIndex]);\n  currentLoopIndex++;\n  if (currentLoopIndex >= cycleLoop.length) {\n    currentLoopIndex = 0;\n  }\n  window.requestAnimationFrame(updateFrame);\n};\n\nconst updateGameArea = () => {\n  window.requestAnimationFrame(updateFrame);\n};\n\nconst render = srcX => {\n  //srcX = x and srcY = y coordinates of the canvas to get the single frame\n  const srcY = 0;\n\n  for (let i = 0; i < canvas.images.length; i++) {\n    const img = canvas.images[i];\n    canvas.ctx.drawImage(\n      img.image,\n      srcX * img.spriteWidth,\n      srcY * img.spriteHeigth,\n      img.spriteWidth,\n      img.spriteHeigth,\n      img.x,\n      img.y,\n      img.width,\n      img.height\n    );\n  }\n};\n\ncanvas.loadInvaders(updateFrame);\nupdateGameArea();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSW52YWRlcnMgZnJvbSBcIi4vdmlldy9DYW52YXNcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhc0ludmFkZXJzKCk7XG5cbi8vU3BlZWQgb2YgdGhlIG1vdmVtZW50XG5jb25zdCBzcGVlZCA9IDEwMDtcbmNvbnN0IGN5Y2xlTG9vcCA9IFswLCAxXTtcbmxldCBjdXJyZW50TG9vcEluZGV4ID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmNvbnN0IHVwZGF0ZUZyYW1lID0gKCkgPT4ge1xuICBmcmFtZUNvdW50Kys7XG4gIGlmIChmcmFtZUNvdW50IDwgc3BlZWQpIHtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUZyYW1lKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZnJhbWVDb3VudCA9IDA7XG4gIGNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy5jYW52YXNFbGVtLndpZHRoLCBjYW52YXMuY2FudmFzRWxlbS5oZWlnaHQpO1xuICByZW5kZXIoY3ljbGVMb29wW2N1cnJlbnRMb29wSW5kZXhdKTtcbiAgY3VycmVudExvb3BJbmRleCsrO1xuICBpZiAoY3VycmVudExvb3BJbmRleCA+PSBjeWNsZUxvb3AubGVuZ3RoKSB7XG4gICAgY3VycmVudExvb3BJbmRleCA9IDA7XG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG59O1xuXG5jb25zdCB1cGRhdGVHYW1lQXJlYSA9ICgpID0+IHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZSk7XG59O1xuXG5jb25zdCByZW5kZXIgPSBzcmNYID0+IHtcbiAgLy9zcmNYID0geCBhbmQgc3JjWSA9IHkgY29vcmRpbmF0ZXMgb2YgdGhlIGNhbnZhcyB0byBnZXQgdGhlIHNpbmdsZSBmcmFtZVxuICBjb25zdCBzcmNZID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhcy5pbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpbWcgPSBjYW52YXMuaW1hZ2VzW2ldO1xuICAgIGNhbnZhcy5jdHguZHJhd0ltYWdlKFxuICAgICAgaW1nLmltYWdlLFxuICAgICAgc3JjWCAqIGltZy5zcHJpdGVXaWR0aCxcbiAgICAgIHNyY1kgKiBpbWcuc3ByaXRlSGVpZ3RoLFxuICAgICAgaW1nLnNwcml0ZVdpZHRoLFxuICAgICAgaW1nLnNwcml0ZUhlaWd0aCxcbiAgICAgIGltZy54LFxuICAgICAgaW1nLnksXG4gICAgICBpbWcud2lkdGgsXG4gICAgICBpbWcuaGVpZ2h0XG4gICAgKTtcbiAgfVxufTtcblxuY2FudmFzLmxvYWRJbnZhZGVycyh1cGRhdGVGcmFtZSk7XG51cGRhdGVHYW1lQXJlYSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/view/Canvas.js":
/*!****************************!*\
  !*** ./src/view/Canvas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasElemInvaders; });\nlet loadtotal = 55;\nlet loadcount = 0;\nclass CanvasElemInvaders {\n  constructor() {\n    this.canvasElem = document.createElement(\"canvas\");\n    this.canvasElem.width = screen.width - screen.width * 0.75;\n    this.canvasElem.height = screen.height - screen.height * 0.55;\n    this.ctx = this.canvasElem.getContext(\"2d\");\n    this.images = [];\n\n    document.getElementById(\"canvas-invaders\").append(this.canvasElem);\n  }\n\n  loadImage(pathToImage, x, y, spriteWidth, spriteHeigth, updateFrame) {\n    const img = new Image(); // Create new img element\n    img.src = pathToImage; // Set source path\n\n    img.onload = () => {\n      loadcount++;\n      console.log(loadcount);\n      if (loadcount === loadtotal) {\n        // Done loading\n        console.log(\"done loaded\");\n        updateFrame && updateFrame();\n      }\n    };\n\n    this.images.push({\n      image: img,\n      x,\n      y,\n      width: 20,\n      height: 20,\n      spriteWidth,\n      spriteHeigth\n    });\n  }\n\n  loadInvaders(updateFrame) {\n    let x = 0;\n    for (let i = 0; i < 11; i++) {\n      // the top row scores 30 points\n      this.loadImage(\"./public/assets/images/sprite3.png\", x, 0, 60, 61);\n\n      // the middle 2 rows 20 points for each medium invader\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 30, 74, 58);\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 60, 74, 58);\n\n      // the bottom 2 rows score 10 points per large invader\n      this.loadImage(\"./public/assets/images/sprite1.png\", x, 90, 80, 53);\n\n      this.loadImage(\n        \"./public/assets/images/sprite1.png\",\n        x,\n        120,\n        80,\n        53,\n        updateFrame // call on the last load to draw\n      );\n      x += 30;\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlldy9DYW52YXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DYW52YXMuanM/MmJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9hZHRvdGFsID0gNTU7XG5sZXQgbG9hZGNvdW50ID0gMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1JbnZhZGVycyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jYW52YXNFbGVtLndpZHRoID0gc2NyZWVuLndpZHRoIC0gc2NyZWVuLndpZHRoICogMC43NTtcbiAgICB0aGlzLmNhbnZhc0VsZW0uaGVpZ2h0ID0gc2NyZWVuLmhlaWdodCAtIHNjcmVlbi5oZWlnaHQgKiAwLjU1O1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmltYWdlcyA9IFtdO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtaW52YWRlcnNcIikuYXBwZW5kKHRoaXMuY2FudmFzRWxlbSk7XG4gIH1cblxuICBsb2FkSW1hZ2UocGF0aFRvSW1hZ2UsIHgsIHksIHNwcml0ZVdpZHRoLCBzcHJpdGVIZWlndGgsIHVwZGF0ZUZyYW1lKSB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7IC8vIENyZWF0ZSBuZXcgaW1nIGVsZW1lbnRcbiAgICBpbWcuc3JjID0gcGF0aFRvSW1hZ2U7IC8vIFNldCBzb3VyY2UgcGF0aFxuXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxvYWRjb3VudCsrO1xuICAgICAgY29uc29sZS5sb2cobG9hZGNvdW50KTtcbiAgICAgIGlmIChsb2FkY291bnQgPT09IGxvYWR0b3RhbCkge1xuICAgICAgICAvLyBEb25lIGxvYWRpbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lIGxvYWRlZFwiKTtcbiAgICAgICAgdXBkYXRlRnJhbWUgJiYgdXBkYXRlRnJhbWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5pbWFnZXMucHVzaCh7XG4gICAgICBpbWFnZTogaW1nLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBoZWlnaHQ6IDIwLFxuICAgICAgc3ByaXRlV2lkdGgsXG4gICAgICBzcHJpdGVIZWlndGhcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRJbnZhZGVycyh1cGRhdGVGcmFtZSkge1xuICAgIGxldCB4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgIC8vIHRoZSB0b3Agcm93IHNjb3JlcyAzMCBwb2ludHNcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUzLnBuZ1wiLCB4LCAwLCA2MCwgNjEpO1xuXG4gICAgICAvLyB0aGUgbWlkZGxlIDIgcm93cyAyMCBwb2ludHMgZm9yIGVhY2ggbWVkaXVtIGludmFkZXJcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUyLnBuZ1wiLCB4LCAzMCwgNzQsIDU4KTtcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUyLnBuZ1wiLCB4LCA2MCwgNzQsIDU4KTtcblxuICAgICAgLy8gdGhlIGJvdHRvbSAyIHJvd3Mgc2NvcmUgMTAgcG9pbnRzIHBlciBsYXJnZSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMS5wbmdcIiwgeCwgOTAsIDgwLCA1Myk7XG5cbiAgICAgIHRoaXMubG9hZEltYWdlKFxuICAgICAgICBcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMS5wbmdcIixcbiAgICAgICAgeCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIHVwZGF0ZUZyYW1lIC8vIGNhbGwgb24gdGhlIGxhc3QgbG9hZCB0byBkcmF3XG4gICAgICApO1xuICAgICAgeCArPSAzMDtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/view/Canvas.js\n");

/***/ })

/******/ });