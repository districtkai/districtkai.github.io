function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill('orange');
    ellipse(mouseX, mouseY, 50, 50);
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill('pink');
    rect(mouseX, mouseY, 20, 20);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill('green');
    ellipse(mouseX, mouseY, 50, 10);
  
  }  
    
  else if (mouseX > 300 && mouseX <= 400) {
    fill('blue');
    rect(mouseX, mouseY, 10, 20);
    
  }
}







