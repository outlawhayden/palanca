function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(256);
  fill(150, 150, 150);
  stroke(255, 255, 255);
  rotateX(millis() / 1000);
  
  torus(100, 40, 15, 8);
  
}
