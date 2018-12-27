import CanvasInvaders from "./view/Canvas";

const canvas = new CanvasInvaders();

//Speed of the movement
const speed = 100;
const cycleLoop = [0, 1];
let currentLoopIndex = 0;
let frameCount = 0;
const updateFrame = () => {
  frameCount++;
  if (frameCount < speed) {
    requestAnimationFrame(updateFrame);
    return;
  }
  frameCount = 0;
  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);
  canvas.drawFrame(cycleLoop[currentLoopIndex]);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }

  requestAnimationFrame(updateFrame);
};

const updateGameArea = () => {
  requestAnimationFrame(updateFrame);
};

canvas.loadInvaders(updateFrame);
updateGameArea();
