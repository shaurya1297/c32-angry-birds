
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
 var GAMESTATE = "onSling"
 var bg
 var score = 0

function preload() {
    
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(100, 305, 300, 170);
    
 box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    slingshot= new Slingshot(bird.body,{x:200,y:50})
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    textSize(35)
    fill("white")
    text("score "+score,width-300,50)
pig1.score()
pig3.score()
    box3.display();
    box4.display();
    pig3.display();
    log3.display()
    bird.display();
    slingshot.display();
    box5.display();
    log4.display();
    log5.display();



    
    platform.display();
   
}
function mouseDragged(){
    if(GAMESTATE === "onSling"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){

    slingshot.fly();
    GAMESTATE = "launched"
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(bird.body)
    }
}
 async function getTime(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responsejson =  await response.json()
console.log(responsejson);
var dateTime = responsejson.datetime
console.log(dateTime)
var hour = dateTime.slice(11,13)
console.log(hour)

if(hour>=6&&hour<=19){
    bg = "sprites/bg.png"
}else{
    bg = "sprites/bg2.jpg"
}
backgroundImg= loadImage(bg)
}
