class Screen5{
    constructor(){
        this.saw1 = createSprite(displayWidth/2 ,displayHeight/2-300);
        this.saw2 = createSprite(displayWidth/2 ,displayHeight/2-150);
        this.saw3 = createSprite(displayWidth/2 ,displayHeight/2);
        this.saw4 = createSprite(displayWidth/2 ,displayHeight/2+150);
        this.saw5 = createSprite(displayWidth/2 ,displayHeight/2+300);
        this.tree; 
        this.box = createSprite(200,200,30,30)
        this.text = createElement("h2");
        this.text2 = createElement("h2")
        this.treeImg = loadImage("images/tree.png");
        this.sawImg = loadImage("images/saw.png");
        this.saw1.visible = true;
        this.saw2.visible = true;
        this.saw3.visible = true;
        this.saw4.visible = true;
        this.saw5.visible = true;
    }
    hide(){
        this.tree.hide();
         this.saw1.hide();
         this.saw2.hide();
         this.saw3.hide();
         this.saw4.hide();
         this.saw5.hide();
         this.box.hide();
    }
    display (){
        this.text.html("Save the trees don't let them be cut by the saws. Hurry save them quick")
        this.text.position(100,50)
        this.box.shapeColor = "orange";
        this.saw1.addImage(this.sawImg);
        this.saw2.addImage(this.sawImg);
        this.saw3.addImage(this.sawImg);
        this.saw4.addImage(this.sawImg);
        this.saw5.addImage(this.sawImg);
        this.saw1.scale = 0.09;
        this.saw2.scale = 0.09;
        this.saw3.scale = 0.09;
        this.saw4.scale = 0.09;
        this.saw5.scale = 0.09;
        this.saw1.velocityX = 10;
        this.saw2.velocityX = -10;
        this.saw3.velocityX = 10;
        this.saw4.velocityX = -10;
        this.saw5.velocityX = 10;
        
        bounceoff(this.saw1,0);
        bounceoff(this.saw1,1);
        bounceoff(this.saw2,0);
        bounceoff(this.saw2,1);
        bounceoff(this.saw3,0);
        bounceoff(this.saw3,1);
        bounceoff(this.saw4,0);
        bounceoff(this.saw4,1);
        bounceoff(this.saw5,0);
        bounceoff(this.saw5,1);
        if(this.box && this.saw1 || this.box && this.saw2 || this.box && this.saw3 || this.box && this.saw4 || this.box && this.saw5 )
        if (isTouching(this.box,this.saw1)||isTouching(this.box,this.saw2)||isTouching(this.box,this.saw3)||isTouching(this.box,this.saw4)||isTouching(this.box,this.saw5)){
         text("YOU LOOSE",displayWidth/2,displayHeight/2);
         this.tree.hide();
         this.saw1.hide();
         this.saw2.hide();
         this.saw3.hide();
         this.saw4.hide();
         this.saw5.hide();
         this.box.hide();
        }
        if(this.box && this.tree){
        if (isTouching(this.box ,this.tree)){
            text("Great Work",displayWidth/2,displayHeight/2);
        }
    }
        if(frameCount % 500 === 0){
            this.tree = createSprite(random(displayWidth/2-300,displayWidth/2+300),random(displayHeigh/2-300,displayheight/2+300)); 
            this.tree.addImage(this.treeImg)
        }
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
    if(frameCount%10000){
        if(this.tree){
            this.tree.hide();
        }
            this.text.hide();
        this.text2.html("Wow , You saved all the trees. You Win !!! Plant A Tree Per Week And Keep Our Earth Green And Clean. Never cut any trees.")
        this.text2.position(100,50);
        }
        drawSprites();
}
}