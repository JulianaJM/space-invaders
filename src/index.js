import CanvasInvaders from "./view/Canvas";

const canvas = new CanvasInvaders();
const UpdateGameArea = () => {
  window.requestAnimationFrame(UpdateGameArea);

  if (!canvas.isImgLoaded) {
    canvas.ctx.clearRect(
      0,
      0,
      canvas.canvasElem.width,
      canvas.canvasElem.height
    );
    canvas.draw();
  } else {
    render();
  }
};

const render = () => {
  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);
  for (var i = 0; i < canvas.stateOneImages.length; i++) {
    var entity = canvas.stateOneImages[i];
    canvas.ctx.drawImage(
      entity.image,
      entity.x,
      entity.y,
      entity.width,
      entity.height
    );
  }
  console.log("1");
  renderTwo();
};

const renderTwo = () => {
  canvas.ctx.clearRect(0, 0, canvas.canvasElem.width, canvas.canvasElem.height);
  for (var i = 0; i < canvas.stateTwoImages.length; i++) {
    // Draw the entity
    var entity = canvas.stateTwoImages[i];
    canvas.ctx.drawImage(
      entity.image,
      entity.x,
      entity.y,
      entity.width,
      entity.height
    );
  }
  console.log("2");
};

UpdateGameArea();
