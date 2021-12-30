var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameState="play"

function preload(){
bgImg = loadImage("assets/bg.png")
jump = loadSound("assets/jump.mp3")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
bulidling1IMG = loadImage("assets/obsBottom1.png")
streetLightIMG = loadImage("assets/obsBottom2.png")
bulidling2IMG = loadImage("assets/obsBottom3.png")
birdIMg = loadImage("assets/obsTop1.png")
hotAirBallonIMG= loadImage("assets/obstop2.png")
}

function setup(){
//obstecal

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

bulidling1= createSprite(200,300,10,10)
bulidling1.addImage(bulidling1IMG)
bulidling1.scale=0.1
bulidling2= createSprite(400,300,10,10)
bulidling2.addImage(bulidling2IMG)
bulidling2.scale=0.1
streetLight= createSprite(280,300,10,10)
streetLight.addImage(streetLightIMG)
streetLight.scale=0.090
bird=createSprite(160,50,10,10)
bird.addImage(birdIMg)
bird.scale=0.050
hotAirBallon=createSprite(180,50,10,10)
hotAirBallon.addImage(hotAirBallonIMG)
hotAirBallon.scale=0.050
}

function draw() {

  background("black");
        if(gameState=== "play"){
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            jump.play()
          }
          balloon.velocityY = balloon.velocityY+0.1;
bulidling1.velocityX=-2
           
           if(bulidling1.x<0){
             bulidling1.x=400
             bulidling1.y=300
           }
           bulidling2.velocityX=-2
           
           if(bulidling2.x<0){
             bulidling2.x=400
             bulidling2.y=300
           }
               streetLight.velocityX=-2
           
           if(streetLight.x<0){
             streetLight.x=400
             streetLight.y=300
           }
                hotAirBallon.velocityX=-2
           
           if(hotAirBallon.x<0){
             hotAirBallon=410
             bir.y=50
           }
           if(balloon.isTouching(bulidling1) || 
           balloon.isTouching(bulidling2)||
           balloon.isTouching(streetLight)||
           balloon.isTouching(hotAirBallon)){
             gameState="END"
          
           }
        }
        
           if(gameState==="END"){
           balloon.velocityX=0
           balloon.velocityY=0
           bulidling1.velocityX=0
           bulidling1.velocityY=0
           bulidling2.velocityX=0
           bulidling2.velocityY=0
           streetLight.velocityX=0
           streetLight.velocityY=0
           bird.velocityX=0
           bird.velocityY=0
           hotAirBallon.velocityX=0
           hotAirBallon.velocityY=0
           }
        drawSprites();
        
}



































