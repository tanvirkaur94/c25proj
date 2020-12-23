
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImg,dustbinImg;
var box1,box2,box3,paper,groundObj,dustbinObj;

function setup() {
	createCanvas(1300,700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new ground(600,height-50,width,20);
	paper = new Paper(200,450,70);
 //	box1 = new Box(800,600,300,20);
 //	box2 = new Box(650,500,20,185);
 //	box3 = new Box(950,500,20,185);

	dustbinObj = new Box(1100,460,700,170);
}

function draw() {
  
 
  background("grey");
  Engine.update(engine);
  groundObj.display();
  //box1.display();
  //box2.display();
 // box3.display();
  dustbinObj.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-100});
  
	}

	if(keyWentUp(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});
	}
}

