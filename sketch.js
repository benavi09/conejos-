var garden,rabbit,apple,orange;
var gardenImg,rabbitImg,orangeImg,appleImg,redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}
// :D

function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x= World.mouseX;

var select_sprites = Math.round(random(1,3))
if(frameCount % 80 === 0){

if(select_sprites === 1){
createApples();
}
else if(select_sprites === 2){
  createOrange();
}
else{
  createRed();
}
}

  drawSprites();
}


function createApples(){
  apple = createSprite(random(50,350),40,10,10);

  apple.addImage(appleImg);
apple.velocityY = 2;
apple.scale = 0.1
apple.lifetime = 100
} 

function createOrange(){
  orange = createSprite(random(50,350),40,10,10);

  orange.addImage(orangeImg);
orange.velocityY = 2;
orange.scale = 0.1
orange.lifetime = 100
} 

function createRed(){
  red = createSprite(random(50,350),40,10,10);
  
  red.addImage(redImg);
red.velocityY = 2;
red.scale = 0.1
red.lifetime = 100
} 