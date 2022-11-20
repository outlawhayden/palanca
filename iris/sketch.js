function setup() {
  createCanvas(1000, 1000);
  circle(width / 2, height / 2, rad);
}

rad = 700;
numLines = 180;
initialOffset = 360 / numLines;
trailingOffset = 40
t = 0;

function draw() {
  initialOffset = 360 / numLines;
  trailingOffset = 150 * sin(t);
  background(200, 200, 180);
  fill(200, 200, 180);
  translate(width / 2, height / 2);
  strokeWeight(0);
  circle(0, 0, rad);
  fill(100, 100, 100);
  strokeWeight(2);
  for (let k = 0; k < 360; k += initialOffset){
    let x0 = rad / 2 * cos(k * PI / 180);
    let y0 = rad / 2 * sin(k * PI / 180);
    let x1 = rad / 2 * cos((k+trailingOffset) * PI / 180);
    let y1 = rad / 2 * sin((k+ trailingOffset) * PI / 180);
    ellipse(x0, y0, 10);
    ellipse(x1, y1, 10);
    line(x0, y0, x1, y1);
    t += 0.00008;
    
  }
}
