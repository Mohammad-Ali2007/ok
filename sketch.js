const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var player,box1,box2,box3,box4,box5,box6;
var ground;
var slingshot;

function setup(){
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    player = new Player();
    ground = new Ground(600,380,400,5);
    stand = new Ground(70,220,30,5);
    stand2 = new Ground(140,220,30,5)
    box1 = new Box(130,215,5,5);
    box2 = new Box(140,215,5,5);
    box3 = new Box(150,215,5,5);
    box4 = new Box(135,205,5,5);
    box5 = new Box(145,205,5,5);
    box6 = new Box(140,195,5,5)
    slingshot = new SlingShot(player.body,stand.body)
}

function draw(){
  background(0);

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(player.body)
  }
}

function mouseDragged(){
  if (gameState=="launched"){
     Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
   }
  }

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
