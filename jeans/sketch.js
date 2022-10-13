var inc = 0.01;
var scl = 4;
var cols, rows;

var fr;

var zoff = 0;


var flowfield;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);
}  

function draw() {
  background(0,94,184);

  var yoff = 0;
  for (var y = 0; y < rows; y++){
    var xoff = 0;
    for (var x = 0; x < cols; x++){
      var index = (x + y * cols);
      var angle = tan(zoff * (xoff * yoff));
      //var angle = tan(zoff * yoff);
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(255,255,255,120);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      strokeWeight(1, 0.1);
      line(0, 0, scl, 0);
      pop();
    }
   yoff += inc;
   zoff += 0.01;
  }

  fr.html(floor(frameRate()))
}