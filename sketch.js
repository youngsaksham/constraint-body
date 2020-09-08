
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rect1, rect2;
var ball1, ball2, ball3, ball4, ball5;
var chain1,chain2,chain3,chain4,chain5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = new Box(400,50,600,10);
	rect2 = new Box(400,650,600,10);

	ball1 = new Ball(100,200,50);
	ball2 = new Ball(150,200,50);
	ball3 = new Ball(200,200,50);
	ball4 = new Ball(250,200,50);
	ball5 = new Ball(300,200,50);

	chain1 = new Chain(ball1,rect1);

	Engine.run(engine);
  
}


function draw() {
   background(0);
  
  rect1.display();
  rect2.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  chain1.display();
}



