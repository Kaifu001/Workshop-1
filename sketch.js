function setup() {
  createCanvas(800, 600);
  noStroke(); 
  background(220, 200, 180); 
}

function draw() {
  drawRandomShapes(); 
}

function drawRandomShapes() {
  for (let i = 0; i < 10; i++) { 
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    let r = random(100, 255);
    let g = random(50, 200);
    let b = random(150, 255);

    fill(r, g, b);

    if (random() < 0.5) { 
      ellipse(x, y, size, size); 
    } else {
      rect(x, y, size, size); 
    }
  }
}
