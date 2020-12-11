
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,polygon;
var sling ;
var stand1,stand2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var score = 0;

function preload()
{
	polygonimage = loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1 = new Ground(600,790,1250,20);
    
   var options = {
     'density':20,
     'friction':2,
   }
   
   ellipseMode(CENTER);
   polygon = Bodies.circle(50,200,5,options);
   World.add(world,polygon);
   sling = new slingShot(polygon,{x:100,y:300})

   stand1 = new Stand(550,660,270,30)

   stand2 = new Stand(980,460,270,30)

   box1 = new Box(435,200,40,50);
   box2 = new Box(475,200,40,50);
   box3 = new Box(515,200,40,50);
   box4 = new Box(555,200,40,50);
   box5 = new Box(595,200,40,50);
   box6 = new Box(475,100,40,50);
   box7 = new Box(515,100,40,50);
   box8 = new Box(555,100,40,50);
   box9 = new Box(515,50,40,50);
   box10 = new Box(890,200,40,50);
   box11 = new Box(930,200,40,50);
   box12 = new Box(970,200,40,50);
   box13 = new Box(1010,200,40,50);
   box14 = new Box(1050,200,40,50);
   box15 = new Box(930,100,40,50);
   box16 = new Box(970,100,40,50);
   box17 = new Box(1010,100,40,50);
   box18 = new Box(970,50,40,50);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  background(56, 44, 44);
  imageMode(CENTER);
  image(polygonimage,polygon.position.x,polygon.position.y,40,40)

  ground1.display();
  sling.display();
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

  drawSprites();
  textSize(20)
 text("Score :"+score,1050,50);
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){ 
  sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(this.polygon);
  }
}


