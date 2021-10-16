const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var canvas;

var bgColor;

var ground;
var boxes = [];
var boxesPosY = 50;

var ball;

var band;
function setup() {
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(window.innerWidth - 50, window.innerHeight - 50);
    bgColor = color(random(0, 255), random(0, 255), random(0, 255));
    ground = new Ground(50);
    while (boxesPosY < 500) {
    for (var i = 800; i < 1100; i += 50) {
        boxes.push(new Box(i, boxesPosY, 50));
    }
    boxesPosY += 50;
}
    ball = new Ball(canvas.width * 0.5, canvas.height / 2, 40);
    band = new Band(ball.body, {x: ball.body.position.x, y: ball.body.position.y});
}
function draw() {
    Engine.update(engine);
    background(bgColor);
    fill("black");
    ground.display();
    for (let i = 0; i < boxes.length; i++) {
        fill("blue");
        boxes[i].display();
    }
    fill("red");
    ball.display();
    band.display();
}
function mouseDragged() {
    ball.body.position = {x: mouseX, y: mouseY};
}