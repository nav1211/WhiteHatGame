// use animated images
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var fatigue = 10;
var storyObjectl, gameObject;

var player, rocks, bison, ravine, cactii, fruits, veggies, gate, backgroundSprite, track, rightBoundary, leftBoundary,title;
var playerImg, rockImg, bisonImg, ravineImg, cactiiImg, fruitImg, veggieImg, gateImg, backgroundImg, titleImg;
var obstacleGroup, fruitGroup, veggieGroup, completeGame, gameOver, restart, restartImg, win, winImg;
var placeHolder;
var score = 0;

function preload(){
	//playerImage = loadImage("images/player.jpg");
	//trackImage = loadImage("images/track.jpg");
	rockImg = loadImage("images/rocks.png");
	bisonImg = loadImage("images/bison.png");
	ravineImg = loadImage("images/ravine.jpg");
	cactiiImg = loadImage("images/cactus.png");
	fruitImg = loadImage("images/apple.png");
	veggieImg = loadImage("images/carrot.png");
	gateImg = loadImage("images/gates.jpg");
	backgroundImg = loadImage("images/background.jpg");
	titleImg = loadImage("images/image.png");
	playerImg = loadImage("images/player.png");
	gameOver = loadImage("images/gameOver.jpg");
	restartImg = loadImage("images/restart.png");
	winImg = loadImage("images/win.jpg");
	//playerImg = loadImage("images/player.jpg");
}

function setup(){
	createCanvas(displayWidth, displayHeight);

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	storyObject = new Story();
	gameObject = new Game();
	//backgroundSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth*2, displayHeight*5);
	//backgroundSprite.addImage("background", backgroundImg);

	//backgroundSprite.velocityX = -10;
	player = createSprite(displayWidth-1400, displayHeight-170, 10, 10);
	player.addImage("player", playerImg);
	track = createSprite(displayWidth/2, displayHeight-50, displayWidth, 30);
	track.visible = false;
	obstacleGroup = createGroup();
	fruitGroup = createGroup();
	veggieGroup = createGroup();
	title = createSprite(displayWidth/2, 50);
	title.addImage(titleImg);
	completeGame = true;
	placeHolder = true;
	restart = createSprite(displayWidth-800, displayHeight-200);
	restart.addImage(restartImg);
	restart.visible = false;
	//rightBoundary = createSprite(displayWidth-1530, displayHeight/2, 10, displayHeight);
	//leftBoundary

	//Engine.run(engine);
  
}


function draw() {
	background(backgroundImg);
	//image(titleImg, displayWidth - 1000, 50);
	//if(backgroundSprite.x < 0){
		//backgroundSprite.x = backgroundSprite.width/2;
	//}
	player.collide(track);
  if(gameState === 0){
	  //background(backgroundImg);
	  storyObject.displayStory();
	  title.visible = true;
	  player.visible = false;
  }

  else if(gameState === 1){
	  background(backgroundImg);
	  player.visible = true;
	  title.visible = true;
	  //backgroundSprite.velocityX = -10;
	  //score = Math.round(score+0.5);
	  while(placeHolder){
		score = 0;
		fatigue = 20;
		placeHolder = false;
		player.x = displayWidth-1400;
		player.y = displayHeight-170;
		restart.visible = false;
	  }
	  textSize(20);
	  fill("blue");	
	  text("Score:" + score, displayWidth-150,50);
	  textSize(20);
	  fill("blue");
	  text("Fatigue: " + fatigue, displayWidth-150, 80);
	  score = Math.round(score+0.5)
	  gameObject.play();
	  //gameObject.spriteCreation();
  }
  else if(gameState === 2 && completeGame === false){
	  background(gameOver);
	  title.visible = false;
	  player.visible = false;
	  restart.visible = true;
	  placeHolder = true;
	  obstacleGroup.destroyEach();
	  veggieGroup.destroyEach();
	  fruitGroup.destroyEach();
	  keyPressed();
  }
  else if(gameState === 2 && completeGame === true){
	  background(winImg);
	  title.visible = false;
	  player.visible = false;
	  restart.visible = true;
	  placeHolder = true
	  obstacleGroup.destroyEach();
	  veggieGroup.destroyEach();
	  fruitGroup.destroyEach();
	  keyPressed();
  }
  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		gameState = 1;
	}
}



