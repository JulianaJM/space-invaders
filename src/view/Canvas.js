let loadtotal = 110;
let loadcount = 0;
export default class CanvasElemInvaders {
  constructor() {
    this.canvasElem = document.createElement("canvas");
    this.canvasElem.width = screen.width - screen.width * 0.75;
    this.canvasElem.height = screen.height - screen.height * 0.55;
    this.ctx = this.canvasElem.getContext("2d");
    this.stateOneImages = [];
    this.stateTwoImages = [];
    this.isImgLoaded = false;

    document.getElementById("canvas-invaders").append(this.canvasElem);
  }

  loadImage(pathToImage, x, y, state) {
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

    if (state === 1) {
      this.stateOneImages.push({ image: img, x, y, width: 30, height: 30 });
    } else {
      this.stateTwoImages.push({ image: img, x, y, width: 30, height: 30 });
    }
  }

  drawInvadersStateOne() {
    let x = 0;
    for (let i = 0; i < 11; i++) {
      // the top row scores 30 points
      this.loadImage("./public/assets/images/saucer3a.png", x, 0, 1);

      // the middle 2 rows 20 points for each medium invader
      this.loadImage("./public/assets/images/saucer2a.png", x, 30, 1);
      this.loadImage("./public/assets/images/saucer2a.png", x, 60, 1);

      // the bottom 2 rows score 10 points per large invader
      this.loadImage("./public/assets/images/saucer1a.png", x, 90, 1);
      this.loadImage("./public/assets/images/saucer1a.png", x, 120, 1);
      x += 30;
    }
  }

  drawInvadersStateTwo() {
    let x = 0;
    for (let i = 0; i < 11; i++) {
      // the top row scores 30 points
      this.loadImage("./public/assets/images/saucer3b.png", x, 0, 2);

      // the middle 2 rows 20 points for each medium invader
      this.loadImage("./public/assets/images/saucer2b.png", x, 30, 2);
      this.loadImage("./public/assets/images/saucer2b.png", x, 60, 2);

      // the bottom 2 rows score 10 points per large invader
      this.loadImage("./public/assets/images/saucer1b.png", x, 90, 2);
      this.loadImage("./public/assets/images/saucer1b.png", x, 120, 2);
      x += 30;
    }
  }

  draw() {
    this.drawInvadersStateOne();
    this.drawInvadersStateTwo();
  }
}
