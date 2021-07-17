var iss, spacecraft , hasDocked;
var bg;
var issImage;
var craft1Img;
var craft2Img;
var craft3Img;
var craft4Img;
function preload(){
bg = loadImage("spacebg.jpg");
issImage = loadImage("iss.png");
craft1Img = loadImage("spacecraft1.png");
craft2Img = loadImage("spacecraft2.png");
craft3Img = loadImage("spacecraft3.png");
craft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(windowWidth , windowHeight);
iss = createSprite(windowWidth/2 , windowHeight/2);
iss.addImage("iss",issImage);
spacecraft = createSprite(windowWidth/2.1 , windowHeight/1.2);
spacecraft.addImage("spacecraft",craft1Img);
spacecraft.scale = 0.3

}

function draw() {
  background(bg);  
  spacecraft.addImage(craft1Img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(craft3Img);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(craft4Img);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(craft2Img);
  }
}
  if(spacecraft.y <= (iss.y+95) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}