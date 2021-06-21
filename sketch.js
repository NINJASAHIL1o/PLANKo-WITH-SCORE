var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var particle;
var count = 0;
var gameState = "0";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
    
}
 

function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

  

  if(particle!=null){

    particle.display();

    if (particle.body.position.y>500){

      if (particle.body.position.x < 400){

        score=score+500;
        particle=null;
        console.log("!yas!")
      }

      else{

        particle=null;
        score=score+1000;

      }

    }

  }



  

  text("ScOrE : " + score , 600 , 50)

  text("500",020,550)
  text("500",100,550)
  text("500",180,550)
  text("500",260,550)
  text("500",340,550)
  text("1000",420,550)
  text("1000",500,550)
  text("1000",580,550)
  text("1000",660,550)
  text("1000",740,550)

}

function mousePressed(){

  if(gameState!=="end"){

    count++;
    particle=new Particle(mouseX,10,10,10)

  }

}












