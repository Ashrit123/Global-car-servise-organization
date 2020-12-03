var car
var wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1400,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");
  car.shapeColor="white";

  if(keyDown("space")){
    car.velocityX=speed
  }

if(wall.x - car.x<(car.width + wall.width)/2){
  car.velocityX=0
  var deformation=(0.5*speed*speed*weight)/22500;
  if( deformation<100){
    car.shapeColor=color(0,255,0);
    textSize(50)
    fill("green")
    text("Its a very low accident",500,200)
  }
  else if( deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
    textSize(50)
    fill("yellow")
    text("Its not a severe accident",500,200)
  }
  else if(deformation>180){
    car.shapeColor=color(255,0,0);
    textSize(50)
    fill("red")
    text("Its a very severy accident",500,200)
  }
}

  

  drawSprites();
}