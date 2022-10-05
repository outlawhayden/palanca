let angle = 0; 
let w = 30;
let ma;
let maxD;

function setup() {
  createCanvas(800, 800, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);

  colorMode(RGB);
}

function draw() {
  background(100);
  orbitControl();
  ortho(-700,700,-700,700, 0, 2000);
  
  
  rotateX(-QUARTER_PI)
  rotateY(ma);
  ambientLight(255,255,255);


  let offset = 0;
  for (let z = 0; z < width; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -5,5)
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 0, 100) + 1 ;
      translate(x - width / 2, 0, z - width / 2);
      ambientMaterial(h/4, 110 + h/4, 110 - h/4);
      box(w - 2, h + 50 - 0.1 * d, w-2);
      //rect(x - (width / 2) + (w/2), 0, w-2, h);
      pop();
    }
    offset -= 0.1
    angle -= 0.004
  }
}
