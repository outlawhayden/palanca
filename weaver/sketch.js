let x = 0;
function setup() {
  createCanvas(400,400)
  background(100)
}

function draw() {
  
  ellipse(x, ((mouseY-200) * Math.sin(x) + 200), 10, 10);
  fill(100 + (mouseX - 200), 50-mouseY, 200);
  ellipse(x, (1.3 * (mouseY-100) * Math.sin(x) + 200) , 10, 10);
  fill(100 + (mouseX - 200), 60 - mouseY, 100);
  ellipse(x, (1.6 * (mouseY - 100) * Math.sin(x) + 200), 10, 10);
  fill(100 + (mouseX - 200), 70 - mouseY, 100);
  if (x > 410) {
    x = 0;
  }
  else {
    x = x + 1;
  }
    
  
}
