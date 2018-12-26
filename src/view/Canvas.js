let loadtotal = 55;
let loadcount = 0;
export default class CanvasElemInvaders {
  constructor() {
    this.canvasElem = document.createElement("canvas");
    this.canvasElem.width = screen.width - screen.width * 0.75;
    this.canvasElem.height = screen.height - screen.height * 0.55;
    this.ctx = this.canvasElem.getContext("2d");
    this.images = [];

    document.getElementById("canvas-invaders").append(this.canvasElem);
  }

  loadImage(pathToImage, x, y, spriteWidth, spriteHeigth, updateFrame) {
    const img = new Image(); // Create new img element
    img.src = pathToImage; // Set source path

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
      width: 20,
      height: 20,
      spriteWidth,
      spriteHeigth
    });
  }

  loadInvaders(updateFrame) {
    let x = 0;
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
      x += 30;
    }
  }
}
