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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Canvas */ \"./src/view/Canvas.js\");\n\n\nconst canvas = new _view_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst UpdateGameArea = () => {\n  window.requestAnimationFrame(UpdateGameArea);\n\n  if (!canvas.isImgLoaded) {\n    canvas.ctx.clearRect(\n      0,\n      0,\n      canvas.canvasElem.width,\n      canvas.canvasElem.height\n    );\n    canvas.draw();\n  } else {\n    render();\n  }\n};\n\nconst render = () => {\n  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);\n  for (var i = 0; i < canvas.stateOneImages.length; i++) {\n    var entity = canvas.stateOneImages[i];\n    canvas.ctx.drawImage(\n      entity.image,\n      entity.x,\n      entity.y,\n      entity.width,\n      entity.height\n    );\n  }\n  console.log(\"1\");\n  renderTwo();\n};\n\nconst renderTwo = () => {\n  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);\n  for (var i = 0; i < canvas.stateTwoImages.length; i++) {\n    // Draw the entity\n    var entity = canvas.stateTwoImages[i];\n    canvas.ctx.drawImage(\n      entity.image,\n      entity.x,\n      entity.y,\n      entity.width,\n      entity.height\n    );\n  }\n  console.log(\"2\");\n};\n\nUpdateGameArea();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSW52YWRlcnMgZnJvbSBcIi4vdmlldy9DYW52YXNcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhc0ludmFkZXJzKCk7XG5jb25zdCBVcGRhdGVHYW1lQXJlYSA9ICgpID0+IHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGVHYW1lQXJlYSk7XG5cbiAgaWYgKCFjYW52YXMuaXNJbWdMb2FkZWQpIHtcbiAgICBjYW52YXMuY3R4LmNsZWFyUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY2FudmFzLmNhbnZhc0VsZW0ud2lkdGgsXG4gICAgICBjYW52YXMuY2FudmFzRWxlbS5oZWlnaHRcbiAgICApO1xuICAgIGNhbnZhcy5kcmF3KCk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLmNhbnZhc0VsZW0ud2lkdGgsIGNhbnZhcy5jYW52YXNFbGVtLmhlaWdodCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FudmFzLnN0YXRlT25lSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVudGl0eSA9IGNhbnZhcy5zdGF0ZU9uZUltYWdlc1tpXTtcbiAgICBjYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgIGVudGl0eS5pbWFnZSxcbiAgICAgIGVudGl0eS54LFxuICAgICAgZW50aXR5LnksXG4gICAgICBlbnRpdHkud2lkdGgsXG4gICAgICBlbnRpdHkuaGVpZ2h0XG4gICAgKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcIjFcIik7XG4gIHJlbmRlclR3bygpO1xufTtcblxuY29uc3QgcmVuZGVyVHdvID0gKCkgPT4ge1xuICBjYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMuY2FudmFzRWxlbS53aWR0aCwgY2FudmFzLmNhbnZhc0VsZW0uaGVpZ2h0KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYW52YXMuc3RhdGVUd29JbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBEcmF3IHRoZSBlbnRpdHlcbiAgICB2YXIgZW50aXR5ID0gY2FudmFzLnN0YXRlVHdvSW1hZ2VzW2ldO1xuICAgIGNhbnZhcy5jdHguZHJhd0ltYWdlKFxuICAgICAgZW50aXR5LmltYWdlLFxuICAgICAgZW50aXR5LngsXG4gICAgICBlbnRpdHkueSxcbiAgICAgIGVudGl0eS53aWR0aCxcbiAgICAgIGVudGl0eS5oZWlnaHRcbiAgICApO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiMlwiKTtcbn07XG5cblVwZGF0ZUdhbWVBcmVhKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/view/Canvas.js":
/*!****************************!*\
  !*** ./src/view/Canvas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasElemInvaders; });\nlet loadtotal = 110;\nlet loadcount = 0;\nclass CanvasElemInvaders {\n  constructor() {\n    this.canvasElem = document.createElement(\"canvas\");\n    this.canvasElem.width = screen.width - screen.width * 0.75;\n    this.canvasElem.height = screen.height - screen.height * 0.55;\n    this.ctx = this.canvasElem.getContext(\"2d\");\n    this.stateOneImages = [];\n    this.stateTwoImages = [];\n    this.isImgLoaded = false;\n\n    document.getElementById(\"canvas-invaders\").append(this.canvasElem);\n  }\n\n  loadImage(pathToImage, x, y, state) {\n    const img = new Image(); // Create new img element\n    img.onload = () => {\n      //this.ctx.drawImage(img, x, y, 30, 30);\n      loadcount++;\n      if (loadcount == loadtotal) {\n        // Done loading\n        this.isImgLoaded = true;\n        console.log(\"done loaded\");\n      }\n    };\n    img.src = pathToImage; // Set source path\n\n    if (state === 1) {\n      this.stateOneImages.push({ image: img, x, y, width: 30, height: 30 });\n    } else {\n      this.stateTwoImages.push({ image: img, x, y, width: 30, height: 30 });\n    }\n  }\n\n  drawInvadersStateOne() {\n    let x = 0;\n    for (let i = 0; i < 11; i++) {\n      // the top row scores 30 points\n      this.loadImage(\"./public/assets/images/saucer3a.png\", x, 0, 1);\n\n      // the middle 2 rows 20 points for each medium invader\n      this.loadImage(\"./public/assets/images/saucer2a.png\", x, 30, 1);\n      this.loadImage(\"./public/assets/images/saucer2a.png\", x, 60, 1);\n\n      // the bottom 2 rows score 10 points per large invader\n      this.loadImage(\"./public/assets/images/saucer1a.png\", x, 90, 1);\n      this.loadImage(\"./public/assets/images/saucer1a.png\", x, 120, 1);\n      x += 30;\n    }\n  }\n\n  drawInvadersStateTwo() {\n    let x = 0;\n    for (let i = 0; i < 11; i++) {\n      // the top row scores 30 points\n      this.loadImage(\"./public/assets/images/saucer3b.png\", x, 0, 2);\n\n      // the middle 2 rows 20 points for each medium invader\n      this.loadImage(\"./public/assets/images/saucer2b.png\", x, 30, 2);\n      this.loadImage(\"./public/assets/images/saucer2b.png\", x, 60, 2);\n\n      // the bottom 2 rows score 10 points per large invader\n      this.loadImage(\"./public/assets/images/saucer1b.png\", x, 90, 2);\n      this.loadImage(\"./public/assets/images/saucer1b.png\", x, 120, 2);\n      x += 30;\n    }\n  }\n\n  draw() {\n    this.drawInvadersStateOne();\n    this.drawInvadersStateTwo();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlldy9DYW52YXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DYW52YXMuanM/MmJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9hZHRvdGFsID0gMTEwO1xubGV0IGxvYWRjb3VudCA9IDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtSW52YWRlcnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzRWxlbS53aWR0aCA9IHNjcmVlbi53aWR0aCAtIHNjcmVlbi53aWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXNFbGVtLmhlaWdodCA9IHNjcmVlbi5oZWlnaHQgLSBzY3JlZW4uaGVpZ2h0ICogMC41NTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5zdGF0ZU9uZUltYWdlcyA9IFtdO1xuICAgIHRoaXMuc3RhdGVUd29JbWFnZXMgPSBbXTtcbiAgICB0aGlzLmlzSW1nTG9hZGVkID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1pbnZhZGVyc1wiKS5hcHBlbmQodGhpcy5jYW52YXNFbGVtKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShwYXRoVG9JbWFnZSwgeCwgeSwgc3RhdGUpIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTsgLy8gQ3JlYXRlIG5ldyBpbWcgZWxlbWVudFxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAvL3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIDMwLCAzMCk7XG4gICAgICBsb2FkY291bnQrKztcbiAgICAgIGlmIChsb2FkY291bnQgPT0gbG9hZHRvdGFsKSB7XG4gICAgICAgIC8vIERvbmUgbG9hZGluZ1xuICAgICAgICB0aGlzLmlzSW1nTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lIGxvYWRlZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGltZy5zcmMgPSBwYXRoVG9JbWFnZTsgLy8gU2V0IHNvdXJjZSBwYXRoXG5cbiAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgIHRoaXMuc3RhdGVPbmVJbWFnZXMucHVzaCh7IGltYWdlOiBpbWcsIHgsIHksIHdpZHRoOiAzMCwgaGVpZ2h0OiAzMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZVR3b0ltYWdlcy5wdXNoKHsgaW1hZ2U6IGltZywgeCwgeSwgd2lkdGg6IDMwLCBoZWlnaHQ6IDMwIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdJbnZhZGVyc1N0YXRlT25lKCkge1xuICAgIGxldCB4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgIC8vIHRoZSB0b3Agcm93IHNjb3JlcyAzMCBwb2ludHNcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zYXVjZXIzYS5wbmdcIiwgeCwgMCwgMSk7XG5cbiAgICAgIC8vIHRoZSBtaWRkbGUgMiByb3dzIDIwIHBvaW50cyBmb3IgZWFjaCBtZWRpdW0gaW52YWRlclxuICAgICAgdGhpcy5sb2FkSW1hZ2UoXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NhdWNlcjJhLnBuZ1wiLCB4LCAzMCwgMSk7XG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyMmEucG5nXCIsIHgsIDYwLCAxKTtcblxuICAgICAgLy8gdGhlIGJvdHRvbSAyIHJvd3Mgc2NvcmUgMTAgcG9pbnRzIHBlciBsYXJnZSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyMWEucG5nXCIsIHgsIDkwLCAxKTtcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zYXVjZXIxYS5wbmdcIiwgeCwgMTIwLCAxKTtcbiAgICAgIHggKz0gMzA7XG4gICAgfVxuICB9XG5cbiAgZHJhd0ludmFkZXJzU3RhdGVUd28oKSB7XG4gICAgbGV0IHggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTE7IGkrKykge1xuICAgICAgLy8gdGhlIHRvcCByb3cgc2NvcmVzIDMwIHBvaW50c1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NhdWNlcjNiLnBuZ1wiLCB4LCAwLCAyKTtcblxuICAgICAgLy8gdGhlIG1pZGRsZSAyIHJvd3MgMjAgcG9pbnRzIGZvciBlYWNoIG1lZGl1bSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc2F1Y2VyMmIucG5nXCIsIHgsIDMwLCAyKTtcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zYXVjZXIyYi5wbmdcIiwgeCwgNjAsIDIpO1xuXG4gICAgICAvLyB0aGUgYm90dG9tIDIgcm93cyBzY29yZSAxMCBwb2ludHMgcGVyIGxhcmdlIGludmFkZXJcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zYXVjZXIxYi5wbmdcIiwgeCwgOTAsIDIpO1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3NhdWNlcjFiLnBuZ1wiLCB4LCAxMjAsIDIpO1xuICAgICAgeCArPSAzMDtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuZHJhd0ludmFkZXJzU3RhdGVPbmUoKTtcbiAgICB0aGlzLmRyYXdJbnZhZGVyc1N0YXRlVHdvKCk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/view/Canvas.js\n");

/***/ })

/******/ });