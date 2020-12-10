
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof = new Roof(330,50,350,20);
	bob1 = new Bob(210,200,40);
	string1 = new String(bob1.body,{x:175,y:50})
	bob2 = new Bob(270,200,40);
	string2 = new String(bob2.body,{x:250,y:50})
	bob3 = new Bob(330,200,40);
	string3 = new String(bob3.body,{x:325,y:50})
	bob4 = new Bob(390,200,40);
	string4 = new String(bob4.body,{x:400,y:50})
	bob5 = new Bob(450,200,40);
 	string5 = new String(bob5.body,{x:475,y:50})
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  string1.display();
  bob1.display();
  string2.display();
  bob2.display();
  string3.display();
  bob3.display();
  string4.display();
  bob4.display();
  string5.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:200,y:-100})
	}
}



