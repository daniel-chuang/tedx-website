var angle = 0;
var angleDirection = -1;
var speed = 0.1;
var totalIters = 200;
var cnv;

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.class('backgroundsketch');
    myCanvas.style("z-index", "1");
    myCanvas.position(0, 0);
  noCursor();
}

function draw() {
  clear();
  background(0);
  ellipse(50, 50, 50, 50)
  /*
  //text(angle, 5, 20); // prints the current angle of rotation
  
  translate(mouseX, mouseY);

  push();

  erase();
  for (var iters = 0; iters < totalIters; iters++) {
    stroke(iters * 1, 255 - (iters * 1), 100);
    translate(1.5 * iters, 0);
    rotate(angle);
    strokeWeight(12 - ((12 / totalIters) * iters));
    line(0, 0, 40 - ((40 / totalIters) * iters), 0);
  }
  noErase();

  angle += speed * angleDirection;
  if ((angle > 360) || (angle < 0)) {
    angleDirection *= -1;
  }

  pop();
  */
}