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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/Canvas */ \"./src/view/Canvas.js\");\n\n\nconst canvas = new _view_Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//we are having one rows and 2 cols in the current sprite sheet\nconst rows = 1;\nconst cols = 2;\n\n//Each row contains 2 frame and at start we will display the first frame (assuming the index from 0)\nlet curFrame = 0;\n\n//The total frame is 2\nconst frameCount = 2;\n\n//x and y coordinates of the canvas to get the single frame\nlet srcX = 0;\nlet srcY = 0;\n\n//Speed of the movement\nconst speed = 60;\n\nconst UpdateGameArea = () => {\n  window.requestAnimationFrame(UpdateGameArea);\n\n  if (!canvas.isImgLoaded) {\n    canvas.ctx.clearRect(\n      0,\n      0,\n      canvas.canvasElem.width,\n      canvas.canvasElem.height\n    );\n    canvas.loadInvaders();\n  } else {\n    updateFrame();\n    render();\n  }\n};\n\nconst updateFrame = (width, height, x, y) => {\n  //Updating the frame index\n  curFrame = ++curFrame % frameCount;\n\n  //Calculating the x coordinate for spritesheet\n  srcX = curFrame * width;\n\n  //Clearing the drawn frame\n  canvas.ctx.clearRect(x, y, width, height);\n};\n\nconst render = () => {\n  for (let i = 0; i < canvas.images.length; i++) {\n    const img = canvas.images[i];\n\n    //To get the width of a single sprite we divided the width of sprite with the number of cols\n    //because all the sprites are of equal width and height\n    const width = img.spriteWidth / cols;\n    //Same for the height we divided the height with number of rows\n    const height = img.spriteHeigth / rows;\n\n    //Updating the frame\n    updateFrame(width, height, img.x, img.y);\n    //Drawing the image\n    //x and y coordinates to render the sprite\n    canvas.ctx.drawImage(\n      img.image,\n      srcX,\n      srcY,\n      width,\n      height,\n      img.x,\n      img.y,\n      img.width,\n      img.height\n    );\n  }\n};\n\nUpdateGameArea();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FudmFzSW52YWRlcnMgZnJvbSBcIi4vdmlldy9DYW52YXNcIjtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhc0ludmFkZXJzKCk7XG5cbi8vd2UgYXJlIGhhdmluZyBvbmUgcm93cyBhbmQgMiBjb2xzIGluIHRoZSBjdXJyZW50IHNwcml0ZSBzaGVldFxuY29uc3Qgcm93cyA9IDE7XG5jb25zdCBjb2xzID0gMjtcblxuLy9FYWNoIHJvdyBjb250YWlucyAyIGZyYW1lIGFuZCBhdCBzdGFydCB3ZSB3aWxsIGRpc3BsYXkgdGhlIGZpcnN0IGZyYW1lIChhc3N1bWluZyB0aGUgaW5kZXggZnJvbSAwKVxubGV0IGN1ckZyYW1lID0gMDtcblxuLy9UaGUgdG90YWwgZnJhbWUgaXMgMlxuY29uc3QgZnJhbWVDb3VudCA9IDI7XG5cbi8veCBhbmQgeSBjb29yZGluYXRlcyBvZiB0aGUgY2FudmFzIHRvIGdldCB0aGUgc2luZ2xlIGZyYW1lXG5sZXQgc3JjWCA9IDA7XG5sZXQgc3JjWSA9IDA7XG5cbi8vU3BlZWQgb2YgdGhlIG1vdmVtZW50XG5jb25zdCBzcGVlZCA9IDYwO1xuXG5jb25zdCBVcGRhdGVHYW1lQXJlYSA9ICgpID0+IHtcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShVcGRhdGVHYW1lQXJlYSk7XG5cbiAgaWYgKCFjYW52YXMuaXNJbWdMb2FkZWQpIHtcbiAgICBjYW52YXMuY3R4LmNsZWFyUmVjdChcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgY2FudmFzLmNhbnZhc0VsZW0ud2lkdGgsXG4gICAgICBjYW52YXMuY2FudmFzRWxlbS5oZWlnaHRcbiAgICApO1xuICAgIGNhbnZhcy5sb2FkSW52YWRlcnMoKTtcbiAgfSBlbHNlIHtcbiAgICB1cGRhdGVGcmFtZSgpO1xuICAgIHJlbmRlcigpO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVGcmFtZSA9ICh3aWR0aCwgaGVpZ2h0LCB4LCB5KSA9PiB7XG4gIC8vVXBkYXRpbmcgdGhlIGZyYW1lIGluZGV4XG4gIGN1ckZyYW1lID0gKytjdXJGcmFtZSAlIGZyYW1lQ291bnQ7XG5cbiAgLy9DYWxjdWxhdGluZyB0aGUgeCBjb29yZGluYXRlIGZvciBzcHJpdGVzaGVldFxuICBzcmNYID0gY3VyRnJhbWUgKiB3aWR0aDtcblxuICAvL0NsZWFyaW5nIHRoZSBkcmF3biBmcmFtZVxuICBjYW52YXMuY3R4LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbn07XG5cbmNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXMuaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaW1nID0gY2FudmFzLmltYWdlc1tpXTtcblxuICAgIC8vVG8gZ2V0IHRoZSB3aWR0aCBvZiBhIHNpbmdsZSBzcHJpdGUgd2UgZGl2aWRlZCB0aGUgd2lkdGggb2Ygc3ByaXRlIHdpdGggdGhlIG51bWJlciBvZiBjb2xzXG4gICAgLy9iZWNhdXNlIGFsbCB0aGUgc3ByaXRlcyBhcmUgb2YgZXF1YWwgd2lkdGggYW5kIGhlaWdodFxuICAgIGNvbnN0IHdpZHRoID0gaW1nLnNwcml0ZVdpZHRoIC8gY29scztcbiAgICAvL1NhbWUgZm9yIHRoZSBoZWlnaHQgd2UgZGl2aWRlZCB0aGUgaGVpZ2h0IHdpdGggbnVtYmVyIG9mIHJvd3NcbiAgICBjb25zdCBoZWlnaHQgPSBpbWcuc3ByaXRlSGVpZ3RoIC8gcm93cztcblxuICAgIC8vVXBkYXRpbmcgdGhlIGZyYW1lXG4gICAgdXBkYXRlRnJhbWUod2lkdGgsIGhlaWdodCwgaW1nLngsIGltZy55KTtcbiAgICAvL0RyYXdpbmcgdGhlIGltYWdlXG4gICAgLy94IGFuZCB5IGNvb3JkaW5hdGVzIHRvIHJlbmRlciB0aGUgc3ByaXRlXG4gICAgY2FudmFzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICBpbWcuaW1hZ2UsXG4gICAgICBzcmNYLFxuICAgICAgc3JjWSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaW1nLngsXG4gICAgICBpbWcueSxcbiAgICAgIGltZy53aWR0aCxcbiAgICAgIGltZy5oZWlnaHRcbiAgICApO1xuICB9XG59O1xuXG5VcGRhdGVHYW1lQXJlYSgpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/view/Canvas.js":
/*!****************************!*\
  !*** ./src/view/Canvas.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasElemInvaders; });\nlet loadtotal = 110;\nlet loadcount = 0;\nclass CanvasElemInvaders {\n  constructor() {\n    this.canvasElem = document.createElement(\"canvas\");\n    this.canvasElem.width = screen.width - screen.width * 0.75;\n    this.canvasElem.height = screen.height - screen.height * 0.55;\n    this.ctx = this.canvasElem.getContext(\"2d\");\n    this.images = [];\n    this.isImgLoaded = false;\n\n    document.getElementById(\"canvas-invaders\").append(this.canvasElem);\n  }\n\n  loadImage(pathToImage, x, y, spriteWidth, spriteHeigth) {\n    const img = new Image(); // Create new img element\n    img.onload = () => {\n      //this.ctx.drawImage(img, x, y, 30, 30);\n      loadcount++;\n      if (loadcount == loadtotal) {\n        // Done loading\n        this.isImgLoaded = true;\n        console.log(\"done loaded\");\n      }\n    };\n    img.src = pathToImage; // Set source path\n    this.images.push({\n      image: img,\n      x,\n      y,\n      width: 30,\n      height: 30,\n      spriteWidth,\n      spriteHeigth\n    });\n  }\n\n  loadInvaders() {\n    let x = 0;\n    for (let i = 0; i < 11; i++) {\n      // the top row scores 30 points\n      this.loadImage(\"./public/assets/images/sprite3.png\", x, 0, 120, 61);\n\n      // the middle 2 rows 20 points for each medium invader\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 30, 148, 58);\n      this.loadImage(\"./public/assets/images/sprite2.png\", x, 60, 148, 58);\n\n      // the bottom 2 rows score 10 points per large invader\n      this.loadImage(\"./public/assets/images/sprite1.png\", x, 90, 154, 53);\n      this.loadImage(\"./public/assets/images/sprite1.png\", x, 120, 154, 53);\n      x += 30;\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlldy9DYW52YXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9DYW52YXMuanM/MmJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbG9hZHRvdGFsID0gMTEwO1xubGV0IGxvYWRjb3VudCA9IDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtSW52YWRlcnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzRWxlbS53aWR0aCA9IHNjcmVlbi53aWR0aCAtIHNjcmVlbi53aWR0aCAqIDAuNzU7XG4gICAgdGhpcy5jYW52YXNFbGVtLmhlaWdodCA9IHNjcmVlbi5oZWlnaHQgLSBzY3JlZW4uaGVpZ2h0ICogMC41NTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICB0aGlzLmlzSW1nTG9hZGVkID0gZmFsc2U7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1pbnZhZGVyc1wiKS5hcHBlbmQodGhpcy5jYW52YXNFbGVtKTtcbiAgfVxuXG4gIGxvYWRJbWFnZShwYXRoVG9JbWFnZSwgeCwgeSwgc3ByaXRlV2lkdGgsIHNwcml0ZUhlaWd0aCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpOyAvLyBDcmVhdGUgbmV3IGltZyBlbGVtZW50XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIC8vdGhpcy5jdHguZHJhd0ltYWdlKGltZywgeCwgeSwgMzAsIDMwKTtcbiAgICAgIGxvYWRjb3VudCsrO1xuICAgICAgaWYgKGxvYWRjb3VudCA9PSBsb2FkdG90YWwpIHtcbiAgICAgICAgLy8gRG9uZSBsb2FkaW5nXG4gICAgICAgIHRoaXMuaXNJbWdMb2FkZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRvbmUgbG9hZGVkXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgaW1nLnNyYyA9IHBhdGhUb0ltYWdlOyAvLyBTZXQgc291cmNlIHBhdGhcbiAgICB0aGlzLmltYWdlcy5wdXNoKHtcbiAgICAgIGltYWdlOiBpbWcsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICBzcHJpdGVXaWR0aCxcbiAgICAgIHNwcml0ZUhlaWd0aFxuICAgIH0pO1xuICB9XG5cbiAgbG9hZEludmFkZXJzKCkge1xuICAgIGxldCB4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgIC8vIHRoZSB0b3Agcm93IHNjb3JlcyAzMCBwb2ludHNcbiAgICAgIHRoaXMubG9hZEltYWdlKFwiLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy9zcHJpdGUzLnBuZ1wiLCB4LCAwLCAxMjAsIDYxKTtcblxuICAgICAgLy8gdGhlIG1pZGRsZSAyIHJvd3MgMjAgcG9pbnRzIGZvciBlYWNoIG1lZGl1bSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMi5wbmdcIiwgeCwgMzAsIDE0OCwgNTgpO1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZTIucG5nXCIsIHgsIDYwLCAxNDgsIDU4KTtcblxuICAgICAgLy8gdGhlIGJvdHRvbSAyIHJvd3Mgc2NvcmUgMTAgcG9pbnRzIHBlciBsYXJnZSBpbnZhZGVyXG4gICAgICB0aGlzLmxvYWRJbWFnZShcIi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvc3ByaXRlMS5wbmdcIiwgeCwgOTAsIDE1NCwgNTMpO1xuICAgICAgdGhpcy5sb2FkSW1hZ2UoXCIuL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3Nwcml0ZTEucG5nXCIsIHgsIDEyMCwgMTU0LCA1Myk7XG4gICAgICB4ICs9IDMwO1xuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/view/Canvas.js\n");

/***/ })

/******/ });