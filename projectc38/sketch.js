var monkey, monkey_running, monkey_collided;
var ground, invisibleGround, groundImage;
var bananasGroup,bananaimg;
var stoneGroup,stone,stoneimg;
var score;



function preload(){
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  //monkey_collided = loadImage("monkey.png");
  
  groundImage = loadImage("jungle2.jpg");
  stoneimg = loadImage("stone.png");
  bananaimg = loadImage("Banana.png");
  
}


function setup() {
  createCanvas(600,300);
  
  score=0;
   ground = createSprite(200,200,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  monkey = createSprite(50,280,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.3;
  
 
  
  invisibleGround = createSprite(200,290,400,10);
  invisibleGround.visible = false;
  
  bananasGroup=new Group();
  stoneGroup=new Group();
  
}


function draw(){
 background(255); 
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  if(monkey.score===200){
    clear();
    fill(0);
  textSize(20);
  text("finish",200,250)
  
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  spawnBananas();
  spawnStone();
  
  if(frameCount % 3 === 0){
    score++
  }
   
  
  monkey.collide(invisibleGround);
  drawSprites();
  text("score "+ score,500,50);

}
function spawnBananas() {
 
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,220,40,10);
    banana.y = Math.round(random(180,220));
    banana.addImage(bananaimg);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    bananasGroup.add(banana);
  }
}
function spawnStone() {
  if(frameCount % 60 === 0) {
    var stone = createSprite(600,265,10,40);
    stone.velocityX = -6;
    var rand = Math.round(random(1,6));
    stone.addImage(stoneimg);
    stone.scale = 0.1;
    stone.lifetime = 200;
    stoneGroup.add(stone);
  }
}