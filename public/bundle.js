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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Canvas */ \"./src/view/Canvas.js\");\n\n\nconst canvas = new _view_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet frameIndex = 0,\n  tickCount = 0,\n  ticksPerFrame = 60,\n  numberOfFrames = 2,\n  loop = 60;\n\nconst UpdateGameArea = () => {\n  window.requestAnimationFrame(UpdateGameArea);\n\n  if (!canvas.isImgLoaded) {\n    canvas.ctx.clearRect(\n      0,\n      0,\n      canvas.canvasElem.width,\n      canvas.canvasElem.height\n    );\n    canvas.loadInvaders();\n  } else {\n    update();\n    render();\n  }\n};\n\nconst update = () => {\n  tickCount += 1;\n\n  if (tickCount > ticksPerFrame) {\n    tickCount = 0;\n\n    // If the current frame index is in range\n    if (frameIndex < numberOfFrames - 1) {\n      // Go to the next frame\n      frameIndex += 1;\n    } else if (loop) {\n      frameIndex = 0;\n    }\n  }\n};\n\nconst render = () => {\n  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);\n  for (var i = 0; i < canvas.images.length; i++) {\n    var entity = canvas.images[i];\n    canvas.ctx.drawImage(\n      entity.image,\n      (frameIndex * entity.spriteWidth) / numberOfFrames,\n      0,\n      canvas.canvasElem.width / numberOfFrames,\n      canvas.canvasElem.height,\n      entity.x,\n      entity.y,\n      entity.width / numberOfFrames,\n      entity.height\n    );\n  }\n};\n\nUpdateGameArea();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSW52YWRlcnMgZnJvbSBcIi4vdmlldy9DYW52YXNcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhc0ludmFkZXJzKCk7XG5sZXQgZnJhbWVJbmRleCA9IDAsXG4gIHRpY2tDb3VudCA9IDAsXG4gIHRpY2tzUGVyRnJhbWUgPSA2MCxcbiAgbnVtYmVyT2ZGcmFtZXMgPSAyLFxuICBsb29wID0gNjA7XG5cbmNvbnN0IFVwZGF0ZUdhbWVBcmVhID0gKCkgPT4ge1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFVwZGF0ZUdhbWVBcmVhKTtcblxuICBpZiAoIWNhbnZhcy5pc0ltZ0xvYWRlZCkge1xuICAgIGNhbnZhcy5jdHguY2xlYXJSZWN0KFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICBjYW52YXMuY2FudmFzRWxlbS53aWR0aCxcbiAgICAgIGNhbnZhcy5jYW52YXNFbGVtLmhlaWdodFxuICAgICk7XG4gICAgY2FudmFzLmxvYWRJbnZhZGVycygpO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZSgpO1xuICAgIHJlbmRlcigpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gIHRpY2tDb3VudCArPSAxO1xuXG4gIGlmICh0aWNrQ291bnQgPiB0aWNrc1BlckZyYW1lKSB7XG4gICAgdGlja0NvdW50ID0gMDtcblxuICAgIC8vIElmIHRoZSBjdXJyZW50IGZyYW1lIGluZGV4IGlzIGluIHJhbmdlXG4gICAgaWYgKGZyYW1lSW5kZXggPCBudW1iZXJPZkZyYW1lcyAtIDEpIHtcbiAgICAgIC8vIEdvIHRvIHRoZSBuZXh0IGZyYW1lXG4gICAgICBmcmFtZUluZGV4ICs9IDE7XG4gICAgfSBlbHNlIGlmIChsb29wKSB7XG4gICAgICBmcmFtZUluZGV4ID0gMDtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLmNhbnZhc0VsZW0ud2lkdGgsIGNhbnZhcy5jYW52YXNFbGVtLmhlaWdodCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FudmFzLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlbnRpdHkgPSBjYW52YXMuaW1hZ2VzW2ldO1xuICAgIGNhbnZhcy5jdHguZHJhd0ltYWdlKFxuICAgICAgZW50aXR5LmltYWdlLFxuICAgICAgKGZyYW1lSW5kZXggKiBlbnRpdHkuc3ByaXRlV2lkdGgpIC8gbnVtYmVyT2ZGcmFtZXMsXG4gICAgICAwLFxuICAgICAgY2FudmFzLmNhbnZhc0VsZW0ud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcbiAgICAgIGNhbnZhcy5jYW52YXNFbGVtLmhlaWdodCxcbiAgICAgIGVudGl0eS54LFxuICAgICAgZW50aXR5LnksXG4gICAgICBlbnRpdHkud2lkdGggLyBudW1iZXJPZkZyYW1lcyxcbiAgICAgIGVudGl0eS5oZWlnaHRcbiAgICApO1xuICB9XG59O1xuXG5VcGRhdGVHYW1lQXJlYSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/view/Canvas.js":
/*!****************************!*\
  !*** ./src/view/Canvas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasElemInvaders; });\nlet loadtotal = 110;\nlet loadcount = 0;\nclass CanvasElemInvaders {\n  constructor() {\n    this.canvasElem = document.createElement(\"canvas\");\n    this.canvasElem.width = screen.width - screen.width * 0.75;\n    this.canvasElem.height = screen.height - screen.height * 0.55;\n    this.ctx = this.canvasElem.getContext(\"2d\");\n    this.images = [];\n    this.isImgLoaded = false;\n\n    document.getElementById(\"canvas-invaders\").append(this.canvasElem);\n  }\n\n  loadImage(pathToImage, x, y, spriteWidth) {\n    const img = new Image(); // Create new img element\n    img.onload = () => {\n      //this.ctx.drawImage(img, x, y, 30, 30);\n      loadcount++;\n      if (loadcount == loadtotal) {\n        // Done loading\n        this.isImgLoaded = true;\n        console.log(\"done loaded\");\n      }\n    };\n    img.src = pathToImage; // Set source path\n    this.images.push({\n      image: img,\n      x,\n      y,\n      width: 250,\n      height: 250,\n      spriteWidth\n    });\n  }\n\n  loadInvaders() {\n    let x = 0;\n    for (let i = 0; i < 11; i++) {\n      // the top row scores 30 points\n      this.loadImage(\"./public/assets/images/sprite3.png\", x, 0, 120);\n\n      // the middle 2 rows 20 points for each medium invader\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 30, 144);\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 60, 144);\n\n      // the bottom 2 rows score 10 points per large invader\n      this.loadImage(\"./public/assets/images/sprite1.png\", x, 90, 154);\n      this.loadImage(\"./public/assets/images/sprite1.png\", x, 120, 154);\n      x += 30;\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlldy9DYW52YXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DYW52YXMuanM/MmJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9hZHRvdGFsID0gMTEwO1xubGV0IGxvYWRjb3VudCA9IDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtSW52YWRlcnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzRWxlbS53aWR0aCA9IHNjcmVlbi53aWR0aCAtIHNjcmVlbi53aWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXNFbGVtLmhlaWdodCA9IHNjcmVlbi5oZWlnaHQgLSBzY3JlZW4uaGVpZ2h0ICogMC41NTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICB0aGlzLmlzSW1nTG9hZGVkID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1pbnZhZGVyc1wiKS5hcHBlbmQodGhpcy5jYW52YXNFbGVtKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShwYXRoVG9JbWFnZSwgeCwgeSwgc3ByaXRlV2lkdGgpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTsgLy8gQ3JlYXRlIG5ldyBpbWcgZWxlbWVudFxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvL3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIDMwLCAzMCk7XG4gICAgICBsb2FkY291bnQrKztcbiAgICAgIGlmIChsb2FkY291bnQgPT0gbG9hZHRvdGFsKSB7XG4gICAgICAgIC8vIERvbmUgbG9hZGluZ1xuICAgICAgICB0aGlzLmlzSW1nTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lIGxvYWRlZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGltZy5zcmMgPSBwYXRoVG9JbWFnZTsgLy8gU2V0IHNvdXJjZSBwYXRoXG4gICAgdGhpcy5pbWFnZXMucHVzaCh7XG4gICAgICBpbWFnZTogaW1nLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aDogMjUwLFxuICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICBzcHJpdGVXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgbG9hZEludmFkZXJzKCkge1xuICAgIGxldCB4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgIC8vIHRoZSB0b3Agcm93IHNjb3JlcyAzMCBwb2ludHNcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUzLnBuZ1wiLCB4LCAwLCAxMjApO1xuXG4gICAgICAvLyB0aGUgbWlkZGxlIDIgcm93cyAyMCBwb2ludHMgZm9yIGVhY2ggbWVkaXVtIGludmFkZXJcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUyLnBuZ1wiLCB4LCAzMCwgMTQ0KTtcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUyLnBuZ1wiLCB4LCA2MCwgMTQ0KTtcblxuICAgICAgLy8gdGhlIGJvdHRvbSAyIHJvd3Mgc2NvcmUgMTAgcG9pbnRzIHBlciBsYXJnZSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMS5wbmdcIiwgeCwgOTAsIDE1NCk7XG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMS5wbmdcIiwgeCwgMTIwLCAxNTQpO1xuICAgICAgeCArPSAzMDtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/view/Canvas.js\n");

/***/ })

/******/ });