var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 gameobject1 = createSprite(100, 100, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  gameobject2 = createSprite(200, 100, 50, 80);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;
  gameobject3 = createSprite(300, 100, 50, 80);
  gameobject3.shapeColor = "green";
  gameobject3.debug = true;
  gameobject4 = createSprite(400, 100, 50, 80);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x = World.mouseX
movingRect.y = World.mouseY
if (isTouching(movingRect,gameobject1)){
  gameobject1.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}
else {
  gameobject1.shapeColor = "green"
  movingRect.shapeColor = "green"
}
// bounceoff(movingRect,fixedRect)
  drawSprites();
}
