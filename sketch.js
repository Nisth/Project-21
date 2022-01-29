const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function setup() {
	createCanvas(800,600);
	engine = Engine.create();
	world = engine.world;
	groundObj = new Ground(400,570,800,20);
	leftSide = new Ground(500,500,20,120);
	rightSide = new Ground(700,500,20,120);
	
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
	}
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
}


function draw() {
  background(51);
  fill("white");
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0, y:0},{x: 25, y : -15})
  }
} 
  
