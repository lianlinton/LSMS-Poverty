var mainPlayer, edges, leftEdge, rightEdge, topEdge, bottomEdge;
var poor1, poor2, poor3, poor4, poo5, poor6, poor7, poor8, poorPeople;
var stats = [0, 0 , 0, 0, 0, 0, 0, 0];
let timer = 8;
var gameState = 1;
function preload(){
  //backImage=loadImage("background.jpg");
  
}

function setup() {
  createCanvas(500,500);
  fill(0,0,0);

  mainPlayer=createSprite(250, 250, 25, 25);
  mainPlayer.shapeColor = "blue";
  
  edges = new Group();

  leftEdge=createSprite(0,250, 2.5, 500);
  edges.add(leftEdge);
  rightEdge=createSprite(500,250, 2.5, 500);
  edges.add(rightEdge);
  topEdge=createSprite(250,0, 500, 2.5);
  edges.add(topEdge);
  bottomEdge=createSprite(250,500, 500, 2.5);
  edges.add(bottomEdge);

  poor1 = createSprite(150, 250, 25, 25);
  poor2 = createSprite(75, 50, 25, 25);
  poor3 = createSprite(125, 150, 25, 25);
  poor4 = createSprite(175, 25, 25, 25);
  poor5 = createSprite(225, 375, 25, 25);
  poor6 = createSprite(25, 125, 25, 25);
  poor7 = createSprite(125, 325, 25, 25);
  poor8 = createSprite(350, 200, 25, 25);
}

function draw() {
  background(255,255,255);
  createEdgeSprites();
  mainPlayer.bounce(edges);

  textAlign(RIGHT);
  textSize(16);
  fill(0,0,0);
  text("Seconds Left: "+timer, 450, 25);

  if (gameState == 1){
    if(keyDown(UP_ARROW)) {
      mainPlayer.y = mainPlayer.y-5;
    }
    if(keyDown(DOWN_ARROW)) {
      mainPlayer.y = mainPlayer.y+5;
    }
    if(keyDown(LEFT_ARROW)) {
      mainPlayer.x = mainPlayer.x-5;
    }
    if(keyDown(RIGHT_ARROW)) {
      mainPlayer.x = mainPlayer.x+5;
    }
  
    //poor1.debug = true;
  
    if (mainPlayer.isTouching(poor1) && keyDown("space")){
      poor1.shapeColor = "green";
      stats[0] = 1; 
    }
    if (mainPlayer.isTouching(poor2) && keyDown("space")){
      poor2.shapeColor = "green";
      stats[1] = 1; 
    }
    if (mainPlayer.isTouching(poor3) && keyDown("space")){
      poor3.shapeColor = "green";
      stats[2] = 1; 
    }
    if (mainPlayer.isTouching(poor4) && keyDown("space")){
      poor4.shapeColor = "green"; 
      stats[3] = 1; 
    }
    if (mainPlayer.isTouching(poor5) && keyDown("space")){
      poor5.shapeColor = "green"; 
      statusbar[4] = 1; 
    }
    if (mainPlayer.isTouching(poor6) && keyDown("space")){
      poor6.shapeColor = "green"; 
      stats[5] = 1; 
    }
    if (mainPlayer.isTouching(poor7) && keyDown("space")){
      poor7.shapeColor = "green"; 
      stats[6] = 1; 
    }
    if (mainPlayer.isTouching(poor8) && keyDown("space")){
      poor8.shapeColor = "green"; 
      stats[7] = 1; 
    }
  
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }
    if (timer == 0) {
      gameState = 0;
    }
    //console.log(stats);
    drawSprites();
  } else if (gameState == 0){
    textSize(50);
    text("TIMES UP!", 300, 250);
    textSize(18);
    text("You gave money to "+statusUpdater()+" people. Good Job!", 350, 350);
  }
}

function statusUpdater(){
  var sum = 0;
  for (var i = 0; i < stats.length; i++){
    if (stats[i]== 1){
      sum++;
    }
  }
  return sum;
}
