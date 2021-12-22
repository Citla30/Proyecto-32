const Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var Fondo,f;

var divisionHeight=300;
var score =0;
var count=0;
var gameState="play";
var score2;

function preload(){
  f=loadImage("fondo.png");
  f2=loadImage("fondo3.png");
  f3=loadImage("fondo2.png");
  f4=loadImage("fondo4.png");
  t=loadImage("tridente.png");
  M=loadImage("moneda.png");
  m2=loadImage("moneda2.png");
  Guardian=loadImage("pirata.png");
  S=loadImage("serpiente.png");
  dragonI=loadImage("dragonIz.png");
  dragond=loadImage("dragonD.png");
  dragond2=loadImage("dragond2.png");
  dragon2=loadImage("dragonIz2.png");
  e=loadImage("espada.png");
  Limg=loadImage("lava.png");
  timg=loadImage("tigre.png");
  mimg=loadImage("meteorito.png");
  aimg=loadImage("ades.png");
  gimg=loadImage("guardia.png");
  GO=loadImage("gameover.png");
  t1=loadImage("texto1.png");
  t2=loadImage("texto2.png");
  t3=loadImage("texto3.png");
  t4=loadImage("texto4.png");
  t5=loadImage("texto5.png");
  t6=loadImage("texto6.png");
  MS=loadImage("monedaS.png");
  P=loadImage("capitán.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }


    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
   
    d1=new Divisions(80,700,10,500);
    d2=new Divisions(210,700,10,500);
    d3=new Divisions(290,700,10,500);
    d4=new Divisions(400,700,10,500);
    d5=new Divisions(510,700,10,500);
    d6=new Divisions(680,700,10,500);
    d7=new Divisions(790,700,10,500);

    Fondo=createSprite(400,400);
    Fondo.addImage(f2);
    Fondo.scale=2.2;
    Fondo.visible=false;

    Fondo3=createSprite(400,400);
    Fondo3.addImage(f);
    Fondo3.scale=1.4;
    Fondo3.visible=false;

    Fondo2=createSprite(400,400);
    Fondo2.addImage(f4);
    Fondo2.scale=2.2;
    Fondo2.visible=false;

    G=createSprite(690,660);
    G.addImage(Guardian);
    G.scale=0.8;
    G.setCollider("rectangle",0,120,200,20);
    G.visible=false;

    M1=createSprite(200,530,20,20);
    M1.addImage(M);
    M1.scale=0.15;
    M1.visible=false;
    M2=createSprite(500,280,20,20);
    M2.addImage(M);
    M2.scale=0.15;
    M2.visible=false;
    M3=createSprite(110,110,20,20);
    M3.addImage(m2);
    M3.scale=0.35;
    M3.visible=false;
    M3.setCollider("circle",0,0,200)
    M4=createSprite(200,350,20,20);
    M4.addImage(S);
    M4.scale=0.15;
    M4.visible=false;

    M5=createSprite(680,40,20,20);
    M5.addImage(M);
    M5.scale=0.1;
    M5.visible=false;
    

    R1=createSprite(200,600,200,20);
    R1.addImage(e);
    R1.scale=0.5;
    R1.visible=false;
    R2=createSprite(690,790,200,20);
    R2.addImage(e);
    R2.scale=0.6;
    R2.visible=false;
    R3=createSprite(-250,450,100,20);
    R3.visible=false;
    R4=createSprite(500,350,200,20);
    R4.visible=false;
    R4.addImage(e);
    R4.scale=0.5;
    R5=createSprite(955,200,100,20);
    R5.addImage(dragond2);
    R5.visible=false;
    
    tigre=createSprite(200,700);
    tigre.addImage(timg);
    tigre.visible=false;

    lava=createSprite(700,700);
    lava.addImage(Limg);
    lava.visible=false;

    meteorito=createSprite(500,100);
    meteorito.addImage(mimg);
    meteorito.visible=false;

    ades=createSprite(400,600);
    ades.addImage(aimg);
    ades.scale=1.5;
    ades.visible=false;

    T1=createSprite(400,300);
    T1.addImage(t1);
    T1.scale=0.7;
    

    T2=createSprite(400,300);
    T2.addImage(t2);
    T2.scale=0.7;
    T2.visible=false;

    T3=createSprite(400,550);
    T3.addImage(t3);
    T3.scale=0.7;
    T3.visible=false;

    T4=createSprite(400,350);
    T4.addImage(t4);
    T4.scale=0.6;
    T4.visible=false;

    T5=createSprite(400,250);
    T5.addImage(t5);
    T5.scale=0.6;
    T5.visible=false;

    T6=createSprite(680,350);
    T6.addImage(t6);
    T6.scale=0.6;
    T6.visible=false;

    PIR=createSprite(150,650);
    PIR.addImage(MS);
    PIR.scale=0.8;
    PIR.visible=false;


    gameOver=createSprite(450,350);
    gameOver.addImage(GO);
    gameOver.visible=false;

    gameOver2=createSprite(450,350);
    gameOver2.addImage(GO);
    gameOver2.visible=false;

    gameOver3=createSprite(450,50);
    gameOver3.addImage(GO);
    gameOver3.visible=false;

    score2=0;

}
 
function draw() {
  background(f);
  textSize(35)
  fill("white");
  text("Puntuación : "+score,20,40);
  text(" "+score2,710,50);
  fill("white");

  textSize(30)
  text(" 500 ", 5, 650);
  text(" 500 ", 110, 550);
  text(" 500 ", 215, 650);
  text(" 100 ", 310, 550);
  text(" 100 ", 420, 650);
  text(" 200 ", 563, 550);
  text(" 200 ", 700, 650);
  Engine.update(engine);
  //ground.display();
  
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
  if(ball!=null)
  {
    ball.display();
  }

  if(count>5) {
    gameState="end";

    if(gameState="end"){
      gameOver.visible=true;
    }
  }

  if(keyDown("F")){
    T1.destroy();
  }

  if(keyDown("G")){
    T2.destroy();
  }

  if(keyDown("A")){
    T4.destroy();
  }

  if(keyDown("M")){
      if(gameState!=="end")
      {
         count++;
         ball=new Ball(mouseX, 10, 10, 10);  
      }
  }

  if(keyDown ("L")){
    G.velocityY=-10;
  }

  if(keyDown ("LEFT_ARROW")){
    G.x=G.x-9;
  }

  if(keyDown ("RIGHT_ARROW")){
    G.x=G.x+9;
  }
  
  G.velocityY=G.velocityY + 0.3;
  
  G.collide(R2);
  G.collide(R1);
  G.collide(R4);

  if(R3.x>1400){
    R3.addImage("dragon2",dragonI);
    R3.changeImage("dragon2");
    R3.velocityX=-7;
  }

  if(R3.x<-240){
    R3.velocityX=7;
    R3.addImage("dragon1",dragond);
    R3.changeImage("dragon1");
  }

  if(R5.x<-550){
    R5.velocityX=7;
    R5.addImage("DRAGON",dragon2);
    R5.changeImage("DRAGON");
  }

  if(R5.x>950){
    R5.velocityX=-7;
    R5.addImage("DRAGON1",dragond2);
    R5.changeImage("DRAGON1");
  }

  if(G.isTouching(M1)){
     score2=score2+100;
     M1.destroy();
  }

  if(G.isTouching(M2)){
     score2=score2+100;
     M2.destroy();
  }

  if(G.isTouching(M4)){
     score2=score2+100;
     M4.destroy();
  }

  if(G.isTouching(M3)){
     score2=score2+500;
     M3.destroy();
  }

  if(G.isTouching(R3)||G.isTouching(R5)||G.y>700||G.y<-10){
      G.destroy();
      R3.velocityX=0;
      R5.velocityX=0;
      gameOver2.visible=true;
      T3.visible=true;
  }

  if(mousePressedOver(meteorito)||mousePressedOver(lava)){
      Fondo2.visible=true;

      meteorito.destroy();
      lava.destroy();
      tigre.destroy();
      ades.visible=true;
      T5.visible=true;

      gameOver3.visible=true;
      T4.destroy();

  }
  
  if(mousePressedOver(tigre)){
      meteorito.destroy();
      lava.destroy();
      tigre.destroy();
    
      Fondo3.visible=true;
      Fondo.destroy();

      ades.addImage("guardia",gimg);
      ades.changeImage("guardia");
      ades.y=400;
      ades.scale=1.1;
      ades.visible=true;
      T6.visible=true;
      T4.destroy();
      PIR.visible=true;
  }

  if(score2>780){
      T4.visible=true;
      meteorito.visible=true;
      lava.visible=true;
      tigre.visible=true;

      Fondo.addImage("fondo3",f3);
      Fondo.changeImage("fondo3");

    R1.destroy();
      R2.destroy();
      R3.destroy();
      R4.destroy();
      R5.destroy();
      G.destroy();
      M1.destroy();
      M2.destroy();
      M3.destroy();
      M4.destroy();
      M5.destroy();

  }

  if(score>1500){
      G.visible=true;
      M1.visible=true;
      M2.visible=true;
      M3.visible=true;
      M4.visible=true;
      M5.visible=true;

      R1.visible=true;
      R2.visible=true;
      R3.visible=true;
      R4.visible=true;
      R5.visible=true;

      Fondo.visible=true;

      gameOver.visible=false;

      T2.visible=true;
    
  }
  drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {
     count++;
     ball=new Ball(mouseX, 10, 10, 10);  
  }

}
