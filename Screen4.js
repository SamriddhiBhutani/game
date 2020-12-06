class Screen4{
    constructor(){
        this.leaveImg = loadImage("images/leaves.png")
        this.background = createSprite(displayWidth, displayHeight, displayWidth+50, displayHeight,displayWidth,displayHeight);
        this.waterSplashImg = loadImage("images/waterslpash.png")
        this.watergunImg = loadImage("images/watergun.png"); 
        this.point = 0;
        this.text= createElement("h2");
        this.text2 = createElement("h2");
        this.point = createElement("h1")
        this.bgImg = loadImage("images/bg.jpg")
        this.watergun = createSprite(displayWidth/2 + 100,displayHeight/2)
    }
    hide(){
        this.watersplash.hide();
        this.watergun.hide();
        this.leaves.hide();
        this.text.hide();
        
    }
    display(){
        this.text.html("Use the Watergun, Click on the space button and shoot waterslapshes on the leaves and collect points.")
        this.text.position(100,50)
        this.background.addImage(this.bgImg);
        this.background.velocityX = 5;
        if(this.background.x > displayWidth-100){
            this.background.x = displayWidth/2;
        }
        
        //this.watersplash.visible = false;
        if(frameCount % 100 === 0){
            this.leaves = createSprite(50,random(50,500));
            this.leaves.addImage(this.leaveImg)
            this.leaves.scale = 0.2;
        }
        if(keyCode === 32){
            this.watersplash = createSprite(this.watergun.position.x,this.watergun.position.y)
            this.watersplash.addImage(this.waterSplashImg);
            this.watersplash.velocityX = -4;
            this.watersplash.scale = 0.4;
        }
        if(this.leaves && this.watersplah){
        if (isTouching(this.leaves,this.watersplash)){
            this.point += 1;
            this.watersplash.destroy();
            this.leaves.destroy();
        }
    }

        if(this.leaves && this.watergun){
            if (isTouching(this.leaves,this.watergun)){
                text("YOU LOOSE , TRY AGAIN")
                this.wate;rgun.destroy();
                this.leaves.destroy();
            }
    }
        if(frameCount % 1000 === 0){
            this.leaves.hide();
            this.watergun.hide();
            this.watersplash.hide();
            this.text2.html("Great, You saved all the trees from burning and creating pollution. Dont burn any leaves, Intead plant a tree everyday.")
            this.text2.position(100,50);
            this.text.hide();
        }
        drawSprites();
    
}
}
