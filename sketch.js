const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var p1, p2, p3, p4, p5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(700, 500, 1500, 50);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  p1 = new Box(845, 150, 50, 50);
  p2 = new Box(895, 150, 50, 50);
  p3 = new Box(945, 150, 50, 50);
  p4 = new Box(870, 100, 50, 50);
  p5 = new Box(920, 100, 50, 50);
  p6 = new Box(895, 50, 50, 50);
  ball = new Polygon(10,10,30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red", "green");
  box2.display("red", "green");
  box3.display("red", "green");
  box4.display("red", "green");
  box5.display("red", "green");
  box6.display("red", "green");
  box7.display("red", "green");
  box8.display("red", "green");
  box9.display("red", "green");
  box10.display("red", "green");
  box11.display("red", "green");
  box12.display("red", "green");
  box13.display("red", "green");
  box14.display("red", "green");
  box15.display("red", "green");
  p1.display(rgb(229, 116, 117), "red")
  p2.display(rgb(229, 116, 117), "red")
  p3.display(rgb(229, 116, 117), "red")
  p4.display(rgb(110, 71, 102), "red")
  p5.display(rgb(110, 71, 102), "red")
  p6.display(rgb(251, 189, 76), "red")
  sling.display("red");
  stand1.display();
  stand2.display();
  ball.display("yellow", "red");
  }

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

