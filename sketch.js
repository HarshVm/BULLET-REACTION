var car,wall,speed,weight,thickness;

function setup() {
  createCanvas(1700,600);
  car=createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);


  
  //fixedRect = createSprite(400, 100, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  //movingRect = createSprite(400, 800,80,30);
  //movingRect.shapeColor = "green";
  //movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +3;
}

function draw() {
  background(0,0,0); 
  
   if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
     if(deformation>10){
       car.shapeColor="red";
     }
     //if(deformation<180 && deformation>100){
      // car.shapeColor="yellow";
     //}
     if(deformation<10){
       car.shapeColor="green";
     }
   }

  //bounceOff(fixedRect,movingRect);
  drawSprites();
}
