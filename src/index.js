import CanvasInvaders from "./view/Canvas";

const canvas = new CanvasInvaders();

//we are having one rows and 2 cols in the current sprite sheet
const rows = 1;
const cols = 2;

//Each row contains 2 frame and at start we will display the first frame (assuming the index from 0)
let curFrame = 0;

//The total frame is 2
const frameCount = 2;

//x and y coordinates of the canvas to get the single frame
let srcX = 0;
let srcY = 0;

//Speed of the movement
const speed = 60;

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
    updateFrame();
    render();
  }
};

const updateFrame = (width, height, x, y) => {
  //Updating the frame index
  curFrame = ++curFrame % frameCount;

  //Calculating the x coordinate for spritesheet
  srcX = curFrame * width;

  //Clearing the drawn frame
  canvas.ctx.clearRect(x, y, width, height);
};

const render = () => {
  for (let i = 0; i < canvas.images.length; i++) {
    const img = canvas.images[i];

    //To get the width of a single sprite we divided the width of sprite with the number of cols
    //because all the sprites are of equal width and height
    const width = img.spriteWidth / cols;
    //Same for the height we divided the height with number of rows
    const height = img.spriteHeigth / rows;

    //Updating the frame
    updateFrame(width, height, img.x, img.y);
    //Drawing the image
    //x and y coordinates to render the sprite
    canvas.ctx.drawImage(
      img.image,
      srcX,
      srcY,
      width,
      height,
      img.x,
      img.y,
      img.width,
      img.height
    );
  }
};

UpdateGameArea();
