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
    window.requestAnimationFrame(updateFrame);
    return;
  }
  frameCount = 0;
  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);
  render(cycleLoop[currentLoopIndex]);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(updateFrame);
};

const updateGameArea = () => {
  window.requestAnimationFrame(updateFrame);
};

const render = srcX => {
  //srcX = x and srcY = y coordinates of the canvas to get the single frame
  const srcY = 0;

  for (let i = 0; i < canvas.images.length; i++) {
    const img = canvas.images[i];
    canvas.ctx.drawImage(
      img.image,
      srcX * img.spriteWidth,
      srcY * img.spriteHeigth,
      img.spriteWidth,
      img.spriteHeigth,
      img.x,
      img.y,
      img.width,
      img.height
    );
  }
};

canvas.loadInvaders(updateFrame);
updateGameArea();
