let img;
let cnv;
let newCanvasX;
let newCanvasY;

// let video;
// let vScale = 16;

// var particles = [];
//
// var slider;

function preload() {
  img = loadImage("assets/photo.jpg");
}

function centerCanvas() {
  var x = (windowWidth - img.width) / 2;
  var y = (windowHeight - img.height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.parent("#canvasDiv");
  // imageMode(CENTER);
  // pixelDensity(1);
  // video = createCapture(VIDEO);
  // video.size(width / vScale, height / vScale);
  //
  // for (var i = 0; i < 200; i++) {
  //   particles[i] = new Particle(random(width), random(height));
  // }
  //
  // slider = createSlider(0, 255, 127);
  // background(51);
  // image(img, 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width);
  centerCanvas();

  for (let col = 0; col < img.width; col += 2) {
    for (let row = 0; row < img.height; row += 2) {
      let xPos = col;
      let yPos = row;
      let c = img.get(col, row);

      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      stroke(color(c));
      strokeWeight(random(5));
      // point(xPos, yPos);
      // fill(color(c));
      strokeWeight(random(2));
      curve(xPos, yPos, sin(xPos) * 60, cos(xPos) * sin(xPos) * 40, 0, 0,
            cos(yPos) * sin(xPos) * random(140), cos(xPos) * sin(xPos) * 50);
      // point(col,row);
      // rect(col, row, 10, 5);
      pop();

    }
  }

}

function draw() {


}

// background(51);
// video.loadPixels();
// for (var i = 0; i < particles.length; i++) {
//   particles[i].update();
//   particles[i].show();
// }

function windowResized() {
  centerCanvas();
}
