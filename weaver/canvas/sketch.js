let fidelity = 10;

function setup() {
  createCanvas(800, 800);
}

function drawcurve1(centerX, centerY, radius) { 
  curve(centerX * 10 + 200, 800 +centerX, 0, 800, 800, 0, 800 + centerX, 0);
}

function drawcurve2(centerX, centerY, radius) { 
  curve(sin(centerX) * 1000 , sin(centerY) * 4000, 00, 0, 800, 800, cos(centerX * centerY), sin(centerX * centerY));
}
  
function draw() {
  background(251, 249, 240);
  noFill();
  stroke(0, 0, 0);

  for (let i = 0; i < 800; i += fidelity) {
    drawcurve1(i, 100 * i, 100 * i);
    drawcurve2(i, i, i);
  }

}
