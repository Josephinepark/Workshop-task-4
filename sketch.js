let x = 100;
let y = 0;
let z = 1;

function setup() {
  createCanvas(200, 500);
}

function draw() {
  background(0);
  
  stroke(255, 255, 255)
  fill(255, 255, 0)
  circle(100, y, z)
  
  y = y + 6;
  z = z + 4;
  
  if (y > 500){
    y = height
    
  }
  
  else {y = y + 15;
  z = z - 2;  
       }
  
  {stroke(255, 255, 255)
  fill(0, 0, 0)
  triangle(20, 500, 180, 500, 100, 420);}
}

