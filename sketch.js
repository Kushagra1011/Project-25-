
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(1000,550);
	paper = new Paper(200,550,25)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-115});

	}
}

