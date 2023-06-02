function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  textSize(20)
  fill(0,0,0);
  text('Mouse X: '+ mouseX,0,20 );
  text('Mouse Y: '+ mouseY,0,40 );
  
  fill(252,226,164); 
  ellipse(200,200,200,250)
  fill('rgb(235,203,123)')
  rect(150,220,100,10)
  fill('rgb(248,98,124)')
  rect(189,230,20,30)
  fill('brown')
  rect(125,147,150,10)
  
  fill(255,255,255);
  ellipse(159,182,30,40)
  ellipse(236,182,30,40)
  
  fill(0,0,0);
  ellipse(158,182,8,8)
  ellipse(235,182,8,8)
}