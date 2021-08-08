var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg;
var bgsound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairy2Img = loadImage("fairy.png");
    fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgsound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
bgsound.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(95,595);
    fairy.addImage("ugly_fairy",fairy2Img);
	fairy.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.25;
    star.velocity.y = -0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(690 , 60 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  KeyPressed();

  //write code to stop star in the hand of fairy
 
	if(star.y > 550 && starBody.position.y > 550){
		Matter.Body.setStatic(starBody,true);
     fairy.addAnimation("flying",fairyImg);
	 fairy.changeAnimation("flying");
	}

  drawSprites();

}

function KeyPressed() {
	if (keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x +20;
}
if (keyDown(LEFT_ARROW)) {
	fairy.x = fairy.x -20;
}
if (keyDown(UP_ARROW)) {
	fairy.x = fairy.x +20;
}
if (keyDown(DOWN_ARROW)) {
	fairy.x = fairy.x -20;
}
}	
	

	

