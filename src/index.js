import CanvasInvaders from "./view/Canvas";

const canvas = new CanvasInvaders();
let frameIndex = 0,
  tickCount = 0,
  ticksPerFrame = 60,
  numberOfFrames = 2,
  loop = 60;

const UpdateGameArea = () => {
  window.requestAnimationFrame(UpdateGameArea);

  if (!canvas.isImgLoaded) {
    canvas.ctx.clearRect(
      0,
      0,
      canvas.canvasElem.width,
      canvas.canvasElem.height
    );
    canvas.loadInvaders();
  } else {
    update();
    render();
  }
};

const update = () => {
  tickCount += 1;

  if (tickCount > ticksPerFrame) {
    tickCount = 0;

    // If the current frame index is in range
    if (frameIndex < numberOfFrames - 1) {
      // Go to the next frame
      frameIndex += 1;
    } else if (loop) {
      frameIndex = 0;
    }
  }
};

const render = () => {
  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);
  for (var i = 0; i < canvas.images.length; i++) {
    var entity = canvas.images[i];
    canvas.ctx.drawImage(
      entity.image,
      (frameIndex * entity.spriteWidth) / numberOfFrames,
      0,
      canvas.canvasElem.width / numberOfFrames,
      canvas.canvasElem.height,
      entity.x,
      entity.y,
      entity.width / numberOfFrames,
      entity.height
    );
  }
};

UpdateGameArea();
