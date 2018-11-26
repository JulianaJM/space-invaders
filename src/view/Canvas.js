let loadtotal = 110;
let loadcount = 0;
export default class CanvasElemInvaders {
  constructor() {
    this.canvasElem = document.createElement("canvas");
    this.canvasElem.width = screen.width - screen.width * 0.75;
    this.canvasElem.height = screen.height - screen.height * 0.55;
    this.ctx = this.canvasElem.getContext("2d");
    this.images = [];
    this.isImgLoaded = false;

    document.getElementById("canvas-invaders").append(this.canvasElem);
  }

  loadImage(pathToImage, x, y, spriteWidth) {
    const img = new Image(); // Create new img element
    img.onload = () => {
      //this.ctx.drawImage(img, x, y, 30, 30);
      loadcount++;
      if (loadcount == loadtotal) {
        // Done loading
        this.isImgLoaded = true;
        console.log("done loaded");
      }
    };
    img.src = pathToImage; // Set source path
    this.images.push({
      image: img,
      x,
      y,
      width: 250,
      height: 250,
      spriteWidth
    });
  }

  loadInvaders() {
    let x = 0;
    for (let i = 0; i < 11; i++) {
      // the top row scores 30 points
      this.loadImage("./public/assets/images/sprite3.png", x, 0, 120);

      // the middle 2 rows 20 points for each medium invader
      this.loadImage("./public/assets/images/sprite2.png", x, 30, 144);
      this.loadImage("./public/assets/images/sprite2.png", x, 60, 144);

      // the bottom 2 rows score 10 points per large invader
      this.loadImage("./public/assets/images/sprite1.png", x, 90, 154);
      this.loadImage("./public/assets/images/sprite1.png", x, 120, 154);
      x += 30;
    }
  }
}
