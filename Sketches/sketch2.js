

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  bgImg = loadImage("neighborhood.jpeg");
}

function draw() {
  image(bgImg, 0, 0, width, height);

  //The Ground
  noStroke();
  fill('green');
  rect(0, 400, windowWidth, 100);


  //The House
  fill('beige');
  stroke('grey');
  rect(50, 200, 220, 200);

  //Windows
  fill('white');
  strokeWeight(10);
  stroke('black');
  rect(80, 250, 50, 50);
  rect(180, 250, 50, 50);

  //Triangle
  fill('brown');
  triangle(50, 200, 100, 100, 270, 200);

  //The Door
  fill('brown')
  rect(130, 315, 50, 80)

  //The Door Handle
  fill('brown')
  ellipse(170, 350, 5, 5)

  //The Sun
  fill('orange')
  ellipse(1080, 100, 200, 200)


}