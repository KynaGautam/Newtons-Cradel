const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(300,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
		isStatic:false,
		 restitution:1,
		  friction:0,
		   density:0.8

	}
	bob1= Bodies.circle(320,380,20,bob_options);
	World.add(world,bob1)
    bob2= Bodies.circle(360,380,20,bob_options);
	World.add(world,bob2)
	bob3= Bodies.circle(400,380,20,bob_options);
	World.add(world,bob3)
	bob4= Bodies.circle(440,380,20,bob_options);
	World.add(world,bob4)
	bob5= Bodies.circle(480,380,20,bob_options);
	World.add(world,bob5)

    class rope{
		constructor(body1,body2, pointA, pointB)
		{
			this.pointA=pointA
			this.pointB=pointB
		
			var options={
				bodyA:body1,
				bodyB:body2,
				pointB:{x:this.pointA, y:this.pointB}
			}
			this.rope=Constraint.create(options)
			World.add(world,this.rope)
		}
	
		display()
		{
			var pointA=this.rope.bodyA.position;
			var pointB=this.rope.bodyB.position;
	
			strokeWeight(2);
			line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
		}
	
	}


	rope1=new rope(bob1,roof,-80, 0)
	rope2=new rope(bob2,roof,-40, 0)
	rope3=new rope(bob3,roof,0, 0)
	rope4=new rope(bob4,roof,40, 0)
	rope5=new rope(bob5,roof,80, 0)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,330,20);
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
 

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20)
  ellipse(bob2.position.x,bob2.position.y,20)
  ellipse(bob3.position.x,bob4.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20)
  ellipse(bob5.position.x,bob5.position.y,20)
 
  keyPressed()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
 function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
	}
 }
