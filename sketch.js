var monkey,monkeyimg;
var ground;
var food,foodgrp,foodimg;
var stone,stonegrp,stoneimg;
var back,backimg;
var score=0,survivaltime=0;


function preload(){
  monkeyimg=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  foodimg=loadImage("banana.png");
  stoneimg=loadImage("obstacle.png");
  backimg=loadImage("forest.jpg");
}


function setup(){
  createCanvas(500,400);
 
  back=createSprite(0,100,500,400);
  back.addImage(backimg);
  back.scale=4;
  back.velocityX=-5;
  
  monkey=createSprite(100,370,20,20);
  monkey.addAnimation("move",monkeyimg);
  monkey.scale=0.14;
  
  ground=createSprite(250,370,1000,10);
  ground.velocityX=-4;
  ground.visible=false;
  
  foodgrp=new Group();
  stonegrp= new Group();
  
}

function draw(){
  background(0);
  
 
    
  
   
  
  if(keyDown("space") && monkey.y>299){
    monkey.velocityY=-15;
  }
   monkey.velocityY=monkey.velocityY+0.4;
   monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(back.x<0){
    back.x=back.width/2;
  }
  
  foodcome();
  stonecome();
  
  
    
  
  drawSprites();
  
  stroke("black");
  fill("black");
  textSize(16);
  text("Score : "+score,400,30);
  
   text("Survival Time : "+survivaltime,200,50);
  survivaltime=survivaltime+Math.round(getFrameRate()/60);
 
 
  
}
function foodcome(){
  if(frameCount%80===0){
    food=createSprite(400,190,20,20);
    food.addImage(foodimg);
    food.scale=0.1;
    food.velocityX=-5;
    food.y=Math.round(random(120,200));
    food.lifetime=101;
    foodgrp.add(food);
  }
}
function stonecome(){
  if(frameCount%300===0){
    stone=createSprite(300,310,30,30);
    stone.addImage(stoneimg);
    stone.scale=0.2;
    stone.velocityX=-4;
    stone.lifetime=150;
    stonegrp.add(stone);
  }
}

