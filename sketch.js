var canvas,bg;
var together;
var tom;
var tomImage1;
var tomIamge2;
var jerry;
var jerryImage1;
var jerryImage2;

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    tomImage1= loadAnimation("tomOne.png");
    tomImage2=loadAnimation("tomTwo.png","tomThree.png");
    tomImage3= loadAnimation("tomFour.png");
    jerryImage1=loadAnimation("jerryOne.png");
    jerryImage2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImage3=loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.15;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImage3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImage3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();

}


function keyPressed(){
  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImage2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", jerryImage2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
