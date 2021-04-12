function setup() {
  createCanvas(800,400);
  ob1 = createSprite(400, 200, 50, 50);
  ob2 = createSprite(500, 200, 50, 50);
  ob1.shapeColor = "red";
  ob2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  ob1.x = mouseX;
  ob1.y = mouseY;
  if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
      ob1.shapeColor = "blue";
      ob2.shapeColor = "yellow";
    }
    else{
      ob1.shapeColor = "red";
      ob2.shapeColor = "green";
    }
  drawSprites();
}