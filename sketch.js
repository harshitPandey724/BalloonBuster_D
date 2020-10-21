//Dipti
var score;
var backGround, arrow, bow;
var backgroundI, arrowI, bowI, redI, blueI, greenI, pinkI;
var redG, blueG, greenG, pinkG, arrowG;
var blue, pink, red, green;
var toggle;

function preload(){
 //load your images here 
  backgroundI = loadImage("background0.png");
  
  bowI = loadImage("bow0.png");
  arrowI = loadImage("arrow0.png");
  
  blueI = loadImage("blue_balloon0.png");
  redI = loadImage("red_balloon0.png");
  pinkI = loadImage("pink_balloon0.png");
  greenI = loadImage("green_balloon0.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);//600,400
  
  score = 0;
  
  backGround = createSprite(width/2,height/2,width,height);
  backGround.addImage(backgroundI);
  backGround.scale = 3;
  backGround.velocityX = -3;
  
  bow = createSprite(width-100, height/2, 20,40);
  bow.addImage(bowI);
  bow.scale = 1;
  //bow.debug = true;
  
  redG = new Group();
  blueG = new Group();
  greenG = new Group();
  pinkG = new Group();
  arrowG = new Group();
  
  /*
  for(var i=120; i<390; i=i+50){
    red = createSprite(50, i, 1, 1);
    red.addImage(redI);
    red.scale = 0.08;
  }
  for(var i=130; i<350; i=i+50){
    blue = createSprite(120, i, 1, 1);
    blue.addImage(blueI);
    blue.scale = 0.09;
  }
  for(var i=170; i<340; i=i+50){
    pink = createSprite(190, i, 1, 1);
    pink.addImage(pinkI);
    pink.scale = 1.1;
  }
  for(var i=200; i<310; i=i+50){
    green = createSprite(260, i, 1, 1);
    green.addImage(greenI);
    green.scale = 0.08;
  }
  */
  
  
  
}


 
function draw() {
  //background("green");
  
    if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  
  
  bow.y = mouseY;
  
  var rand = round(random(1,4));
  //console.log(rand);
  if(frameCount % 90 ===0){
    switch(rand){
      case 1: redBalloon(); break;
      case 2: blueBalloon(); break;
      case 3: greenBalloon(); break;
      case 4: pinkBalloon(); break;
      default: break;
      
      }
    }
    
  if(mouseIsPressed || keyDown('space') || touches.length>0){
      drawArrow();
      touches = [];
    }
   
  drawSprites();
  
  destroyBalloons();
  
  fill(0);
  text("Score: "+score, width-100, 20);
  
  
}// draw()

function drawArrow(){
  arrow = createSprite(width-120, height/2, 10,2);
  arrow.addImage(arrowI);
  arrow.scale = 0.4;
  arrow.velocityX = -6;
  arrow.lifetime = 150;
  arrow.y = bow.y;
  //arrow.debug = true;
  arrow.setCollider("rectangle",0,0,260,100)
  arrowG.add(arrow);   
  toggle = 1;
  
  //return arrow;
}


function redBalloon() {
  red = createSprite(-5, round(random(40, height-30)), 10, 10);
  red.addImage(redI);
  red.setVelocity(random(0,5), random(-5,5));
  red.scale = 0.1
  red.lifetime = 200;
  //red.debug = true;
  red.setCollider("circle", 0,0, 120);
  redG.add(red);
}

function blueBalloon() {
  blue = createSprite(-5, round(random(40, height-30)), 10, 10 );
  blue.addImage(blueI);
  blue.setVelocity(random(0,7), random(-5,5));
  blue.scale = 0.1;
  blue.lifetime = 200;
  //blue.debug = true;
  blue.setCollider("circle", 0,0, 120);
  blueG.add(blue);
}

function greenBalloon() {
  green = createSprite(-5,round(random(40, height-30)), 10, 10);
  green.addImage(greenI);
  green.setVelocity(random(0,9), random(-5,5));
  green.scale = 0.1;
  green.lifetime = 200;
  //green.debug = true;
  green.setCollider("circle", 0,-5, 120);
  greenG.add(green);
}

function pinkBalloon() {
  pink = createSprite(-5,round(random(40, height-30)), 10, 10);
  pink.addImage(pinkI);
  pink.setVelocity(random(0,3), random(-5,5));
  pink.lifetime = 200;
  pink.scale = 1.1;
  //pink.debug = true;
  pink.setCollider("circle", 0, -1, 10);
  
  pinkG.add(pink);
}

function destroyBalloons(){
  
  if (arrowG.isTouching(redG)){
    redG.destroyEach();
    arrowG.destroyEach();
    score += 2;
  }
  
  
  if (arrowG.isTouching(greenG)){
    greenG.destroyEach();
    arrowG.destroyEach();
    score +=4;
  }
  
  
  if (arrowG.isTouching(blueG)){
    blueG.destroyEach();
    arrowG.destroyEach();
    score += 6;
  }
  
  
  if (arrowG.isTouching(pinkG)){
    pinkG.destroyEach();
    arrowG.destroyEach();
    score++;
  }
  
}

