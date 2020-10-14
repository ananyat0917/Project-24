const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,side1,side2,side3;

function preload(){
	
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,50);
	ground = new Ground(600,height,1200,20);
	
	side1=createSprite(250,height,10,100);
	side1.shapeColor="red";

	side2=createSprite(500,height,10,100);
	side2.shapeColor = "red";

	side3=createSprite(375,height,250,10);
	side3.shapeColor = "red";

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  paper.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.2,y:-5});
	}
	else{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});
	}
}