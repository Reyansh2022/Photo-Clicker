function setup() {
    createCanvas(400, 400);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    background(220);
    image(Video, 230, 150, 220, 200);
    
    fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(50, 50, 80);
  circle(550, 50, 80);
  circle(50, 550, 80);
  circle(550, 550, 80);
    
  fill(0, 255, 0);
  stroke(0, 255, 0);
  rect(90, 40, 400, 20);
  rect(90, 550, 400, 20);
  rect(90, 40, 20, 400);
  rect(550, 40, 20, 400);
   
    
  }