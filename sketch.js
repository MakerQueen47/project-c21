var bullet, wall, thickness;
var speed, weight;

var damage = 0;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random (223, 321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200, thickness, height/2);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background("black");
  
  if((wall.x-bullet.x) < (wall.width/2 + bullet.width/2) && (bullet.x-wall.x) < (wall.width/2 + bullet.width/2)
  && (wall.y-bullet.y) < (wall.height/2 + bullet.height/2) && (bullet.y-wall.y) < (wall.height/2 + bullet.height/2)) {

      bullet.velocityX = 0;

      damage = ( 0.5 * weight * speed * speed ) / (thickness * thickness * thickness);
      
      fill("red");
      text("damage: " + damage, 1000,20);

      //deformation = 200;

      if(damage < 10 ){

         wall.shapeColor = "green";
      } 
      else if (damage > 10) {

         wall.shapeColor = "red";
      }
    
  }

  drawSprites();
}

