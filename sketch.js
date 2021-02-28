var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var engine, world, backgroundIMG, boyIMG;

function preload(){
   backgroundIMG = loadImage("background.jpg");
}
function setup(){
	createCanvas(1000,500);
	engine = Matter.Engine.create();
	world = engine.world;

	boy = new Boy(155,405,50,50);
	stone = new Stone(70,325,20,20);
	bush = new Tree(775,182,250,120);
	mango1 = new Mango(790,150,25);
	mango2 = new Mango(705,250,25);
	mango3 = new Mango(605,200,25);
	mango4 = new Mango(675,140,25);
	mango5 = new Mango(755,100,25);
	mango6 = new Mango(855,200,25);
	mango7 = new Mango(905,120,25);
	mango8 = new Mango(955,170,25);
	ground = new Ground(width/2,495,width,15);

	connection = new Constraint22(stone.stone,boy.boy);
}
function draw(){
	imageMode(CENTER);
	image(backgroundIMG,width/2,height/2,width,height);
	Matter.Engine.update(engine);
	rectMode(CENTER);
	boy.display();
	stone.display();
	connection.display();
	bush.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	ground.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.stone,{x : mouseX, y : mouseY});
}
function mouseReleased(){
	connection.fly();
}