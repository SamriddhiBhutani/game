class Screen3{
    constructor(){
        this.text = createElement("h2");
        this.text2 = createElement("h2")
        this.tap = createSprite(displayWidth/2+400, displayHeight/2+200);
        this.box = createSprite(200,200,20,20);
        this.dropImg = loadImage("images/water_drop.png")
        this.maze1Img = loadImage("images/maze3.png");
        this.tap.visible = true;
        this.tapImg = loadImage("images/tap.png");
    }
    hide(){
        this.text.hide();
        this.text2.hide();
    }
    display(){
        
        this.text.html("Move the box using arrow keys and save water by crossing this maze. This maze is a path which leads you to a tap ofleaking water.Touch and Close it")
        this.text.position(100,50);
        this.box.shapeColor = "red"
        this.maze= createSprite(displayWidth/2,displayHeight/2)
        this.maze.addImage(this.maze1Img);
    this.maze.scale = 0.7;
    
    this.tap.addImage(this.tapImg);
    this.tap.scale = 0.2;
    
    if(frameCount%50 === 0){
        this.drop = createSprite(displayWidth/2+380, displayHeight/2+200);
    this.drop.velocityY = 5;
    if(this.drop.y > displayHeight/2+250){
        this.drop.y = displayHeight/2+200
    }
    if (isTouching(this.tap , this.box)){
        this.drop.visible = false;
       this.text.hide();
        this.text2.html("Great Work !! Saving Water Is a Nice Activity. Never Waste Any Drop Of Water , As Water Is Precious !!",200,100);
        this.text2.position(100,50)
        this.box.velocityX = 0;  
        this.box.velocityY = 0;    
    }
    this.drop.addImage(this.dropImg);
    this.drop.scale = 0.06;

    }
      this.box.velocityY =0;
      this.box.velocityX =0;
    if(keyDown(UP_ARROW)){
        this.box.velocityY = -10;
        this.box.velocityX = 0;
    }    
    else if(keyDown(DOWN_ARROW)){
        this.box.velocityY = 10;
        this.box.velocityX = 0;
    }
    else if(keyDown(LEFT_ARROW)){
        this.box.velocityX = -10;
        this.box.velocityY = 0;
    }
    else if(keyDown(RIGHT_ARROW)){
        this.box.velocityX = 10;
        this.box.velocityY = 0;
    }
  drawSprites();
    }
}
