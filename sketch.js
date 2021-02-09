var path,mainCyclist;

var obstacle1, obstacle2, obstacle3;

var obstacle1Img, obstacle2Img, obstacle3Img;

var opponent1, opponent2, opponent3;

var opponent1Img, opponent2Img, opponent3Img;

var opponent1G, opponent2G, opponent3G;
var obstacle1G, obstacle2G, obstacle3G;

var pathImg,mainRacerImg1,mainRacerImg2;

var END =0;
var PLAY =1;
var gameState = PLAY;
var gameoverImg,gameover;
var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");

  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");

  obstacle1Img = loadImage("obstacle1.png");

  obstacle2Img = loadImage("obstacle2.png");

  obstacle3Img = loadImage("obstacle3.png");

  opponent1Img = loadAnimation("opponent1.png","opponent2.png");
  opponent3Img = loadAnimation("opponent3.png");

  opponent4Img = loadAnimation("opponent4.png","opponent5.png");
  opponent6Img = loadAnimation("opponent6.png");

  opponent7Img = loadAnimation("opponent7.png","opponent8.png");
  opponent9Img = loadAnimation("opponent9.png");

gameoverImg = loadImage("gameOver.png")
}

function setup(){
  
createCanvas(800,400);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;

gameover = createSprite(450,150);
gameover.addImage("gameOver",gameoverImg)
gameover.visible = false;
  
  opponent1G = new Group();
  opponent2G = new Group();
  opponent3G = new Group();

  obstacle1G = new Group();
  obstacle2G = new Group();
  obstacle3G = new Group();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;

   path.velocityX = -5;
    
   distance = distance + Math.round(getFrameRate()/60);
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }

   var rand = Math.round(random(1,3));

    if(frameCount % 100 ===0){
      if(rand === 1){
        Obstacle1();
      }
      if(rand === 2){
        Obstacle2();
      }
      if(rand === 3){
        Obstacle3();
      }
    }

    var rand1 = Math.round(random(1,3));

    if(frameCount % 180 ===0){
      if(rand1 === 1){
        Opponent1();
      }
      if(rand1 === 2){
        Opponent2();
      }
      if(rand1 === 3){
        Opponent3();
      }
      console.log(rand1)
    }
if(opponent1G.isTouching(mainCyclist)){
  gameState = END
  opponent1.addAnimation("opponent1",opponent3Img)
 }

 if(opponent2G.isTouching(mainCyclist)){
  gameState = END
  opponent2.addAnimation("opponent2",opponent6Img)
 }

 if(opponent3G.isTouching(mainCyclist)){
  gameState = END
  opponent3.addAnimation("opponent1",opponent9Img)
 }

 if(obstacle1G.isTouching(mainCyclist)){
  gameState = END
 
 }

 if(obstacle2G.isTouching(mainCyclist)){
  gameState = END
 
 }
 
 if(obstacle3G.isTouching(mainCyclist)){
  gameState = END
 
 }
 
}
if(gameState === END){
  path.velocityX = 0
  mainCyclist.velocityY = 0
  mainCyclist.addAnimation("SahilRunning",mainRacerImg2);
  
  opponent1G.setVelocityXEach(0);
  opponent1G.setLifetimeEach(-1);

  opponent2G.setVelocityXEach(0);
  opponent2G.setLifetimeEach(-1);
  
  opponent3G.setVelocityXEach(0);
  opponent3G.setLifetimeEach(-1);

  obstacle1G.setVelocityXEach(0);
  obstacle1G.setLifetimeEach(-1);

  obstacle2G.setVelocityXEach(0);
  obstacle2G.setLifetimeEach(-1);

  obstacle3G.setVelocityXEach(0);
  obstacle3G.setLifetimeEach(-1);

  gameover.visible = true;
}
if(keyDown(UP_ARROW)&&gameState === END){
  Reset();
}
}

function Reset(){
  gameState = PLAY;
  gameover.visible = false;
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  opponent1G.destroyEach();
  opponent2G.destroyEach();
  opponent3G.destroyEach();

  obstacle1G.destroyEach();
  obstacle2G.destroyEach();
  obstacle3G.destroyEach();
  
}

function Obstacle1(){
 obstacle1 = createSprite(770,Math.round(random(100,390)),2,20);
 obstacle1.addAnimation("cone",obstacle1Img);
 obstacle1.scale = 0.05 ;
  obstacle1.velocityX = -6;
  obstacle1.lifetime = 300
  obstacle1G.add(obstacle1);
 
}

function Obstacle2(){

  obstacle2 = createSprite(770,Math.round(random(110,380)),2,20);
  obstacle2.addAnimation("obstacle2",obstacle2Img);
  obstacle2.scale = 0.05 ;
   obstacle2.velocityX = -6;
   obstacle2.lifetime = 300
   obstacle2G.add(obstacle2);
   
 }
 
 function Obstacle3(){
  obstacle3 = createSprite(770,Math.round(random(90,370)),2,20);
  obstacle3.addAnimation("obstacle3",obstacle3Img);
  obstacle3.scale = 0.05 ;
   obstacle3.velocityX = -6;
   obstacle3.lifetime = 300
   obstacle3G.add(obstacle3);
   
 }

 function Opponent1(){
  opponent1 = createSprite(770,Math.round(random(100,390)),2,20);
  opponent1.addAnimation("opponent1",opponent1Img);
  opponent1.scale = 0.05 ;
   opponent1.velocityX = -6;
   opponent1.lifetime = 300;
   opponent1G.add(opponent1);
 }
 
 function Opponent2(){
 
   opponent2 = createSprite(770,Math.round(random(110,380)),2,20);
   opponent2.addAnimation("opponent2",opponent4Img);
   opponent2.scale = 0.05 ;
    opponent2.velocityX = -6;
    opponent2.lifetime = 300;
    opponent2G.add(opponent2);
  }
  
  function Opponent3(){
   opponent3 = createSprite(770,Math.round(random(90,370)),2,20);
   opponent3.addAnimation("opponent3",opponent7Img);
   opponent3.scale = 0.05 ;
    opponent3.velocityX = -6;
    opponent3.lifetime = 300;
    opponent3G.add(opponent3);
  }
