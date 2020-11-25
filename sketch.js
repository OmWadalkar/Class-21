var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  gameobject1= createSprite(200,340,40,30);
  gameobject1.shapeColor="blue";

  gameobject2= createSprite(250,340,40,30);
  gameobject2.shapeColor="blue";

  gameobject3= createSprite(300,340,40,30);
  gameobject3.shapeColor="blue";

  gameobject4= createSprite(350,340,40,30);
  gameobject4.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  drawSprites();
}
