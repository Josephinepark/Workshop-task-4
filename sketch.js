let x = 100;
let y = 0;
let z = 1;
let img;
let input;
let words;
let r = 255;
let g =255;
let b = 0;

let textPositions =[];
let texts = [];
let textPosition = 10;

function preload() {
  img = loadImage('star.png'); // Replace with your image path
}

function setup() {
  createCanvas(200, 500);
  input = createInput();
  input.position(width + 10, 20);  // Position to the right of the canvas
  input.size(150);
  input.attribute('placeholder', 'Type here...');
}

function draw() {
  background(0);
  
  stroke(255, 255, 255)
  fill(r,g,b);
  circle(100, y, z)
  
  y = y + 6;
  z = z + 4;
  
  if (y > 500){
    y = 500
    
  }
  
  else {y = y + 15;
  z = z - 2;  
       }
  
  {stroke(255, 255, 255)
  fill(0, 0, 0)
  triangle(20, 500, 180, 500, 100, 420);}
  star();
  for (let i=0;i<texts.length;i++) {
    text(texts[i],150, textPositions[i]);
  }
  
}

function star() {
  image(img, mouseX -img.width/2,mouseY-img.height/2);
  
}

// function mousePressed() {
//   // Place the image at the mouse position on click
//   // image(img, mouseX - img.width / 2, mouseY - img.height / 2);
//   image(img, 100,100,100,100);
// }

function keyPressed() {
  if (key === ' ') {
   r = random(255);
   g = random(255);
   b = random(255);
  }

  if (keyCode === ENTER) {
    texts.push(input.value());
    textPositions.push(textPosition);
    textPosition = textPosition + 10;
  }

  if (keyCode === SHIFT) {
    texts.pop();
    textPositions.pop();
    textPosition = textPosition - 10;
  }
}