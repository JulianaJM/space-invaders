let loadtotal = 55;
let loadcount = 0;
export default class CanvasElemInvaders {
  constructor() {
    this.canvasElem = document.createElement("canvas");
    // this.canvasElem.width = screen.width * 0.35;
    this.canvasElem.height = screen.height * 0.25;
    this.ctx = this.canvasElem.getContext("2d");
    this.images = [];

    document.getElementById("canvas-invaders").append(this.canvasElem);
  }

  loadImage(pathToImage, x, y, spriteWidth, spriteHeigth, updateFrame) {
    const img = new Image(); // Create new img element
    img.src = pathToImage; // Set source path
    const imageElem = document.getElementById("img");
    img.onload = () => {
      loadcount++;
      console.log(loadcount);
      if (loadcount === loadtotal) {
        // Done loading
        console.log("done loaded");
        updateFrame && updateFrame();
      }
    };

    this.images.push({
      image: img,
      x,
      y,
      width: imageElem.width,
      height: imageElem.height,
      spriteWidth,
      spriteHeigth
    });
  }

  loadInvaders(updateFrame) {
    let x = this.canvasElem.width / 7;
    for (let i = 0; i < 11; i++) {
      // the top row scores 30 points
      this.loadImage("./public/assets/images/sprite3.png", x, 0, 60, 61);

      // the middle 2 rows 20 points for each medium invader
      this.loadImage("./public/assets/images/sprite2.png", x, 30, 74, 58);
      this.loadImage("./public/assets/images/sprite2.png", x, 60, 74, 58);

      // the bottom 2 rows score 10 points per large invader
      this.loadImage("./public/assets/images/sprite1.png", x, 90, 80, 53);

      this.loadImage(
        "./public/assets/images/sprite1.png",
        x,
        120,
        80,
        53,
        updateFrame // call on the last load to draw
      );
      x += 20;
    }
  }

  drawFrame(srcX) {
    //srcX = x and srcY = y coordinates of the canvas to get the single frame
    const srcY = 0;
    for (let i = 0; i < this.images.length; i++) {
      const img = this.images[i];
      this.ctx.drawImage(
        img.image,
        srcX * img.spriteWidth,
        srcY * img.spriteHeigth,
        img.spriteWidth, //single img width
        img.spriteHeigth, //single img heigth
        img.x,
        img.y,
        img.width,
        img.height
      );
    }
  }
}
