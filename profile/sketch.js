function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(256);
  ambientMaterial(256, 256, 256);
  stroke(255, 255, 255);
  rotateY(millis()/ 230);
  rotateX(mouseY / 100);
  
  torus(100, 40, 20, 8);
  
}
