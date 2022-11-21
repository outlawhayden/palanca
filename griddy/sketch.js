let fidelity = 4;
let ncolumns = width / fidelity;
let nrows = height / fidelity;

let t = 0;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);

  for (let i = 0; i < width; i += fidelity){
    for (let j = 0; j < width; j+= fidelity){
      push();
      translate(i * fidelity, j * fidelity);
      g1 = noise(i * fidelity * random(0,1), j * fidelity);
      g2 = noise(j * fidelity, 2 * i * fidelity * random(0,1));
      g3 = noise(random(0,0.25) * i * fidelity * random(0,1), i * fidelity);
      fill(g1 * i * fidelity * mouseX / 100, g2 * j * fidelity, g3 * j * fidelity);
      ellipse(0, 0, 50);
      pop();
    }
  }
}
