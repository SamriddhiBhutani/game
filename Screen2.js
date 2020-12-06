class Screen2{
    constructor(){
      this.inst = createElement("h2");
      this.waterButton = createButton("       ...........    WATER   ...........            ")
      this.airButton = createButton("    ........AIR  .........          ");
      this.landButton = createButton("   ......    LAND   ......       ");
        /*this.inst;
        this.landButton;
        this.waterButton;
        this.airButton;*/
        this.img1 = loadImage("images/waterImg.png");
        this.img2 = loadImage("images/airImg.png");
        this.img3 = loadImage("images/landImg.png");   
        this.Img1 = createSprite(displayWidth/2+480,displayHeight/2-20,100,100);
    this.Img1.addImage(this.img1);
    this.Img1.scale = 0.85;
    this.Img2 = createSprite(displayWidth/2-100,displayHeight/2+250,100,100);
    this.Img2.addImage(this.img2);
    this.Img3 = createSprite(displayWidth/2-400,displayHeight/2,100,100)
    this.Img3.addImage(this.img3);
    this.Img3.scale = 0.4;    
    }
    hide(){
        this.inst.hide();
        this.waterButton.hide();
        this.airButton.hide();
        this.landButton.hide();
    }
    
display(){ 
    
    this.inst.html("So now what do you wanna save first ?? AIR, WATER or LAND ?? Choose any one and start enjoying.")
    this.inst.position(200,displayHeight/2-300);
    
    this.waterButton.position(displayWidth/2,displayHeight/2);
    this.waterButton.style.background = "blue";
   // waterButton.style.width = "200";
    
    this.airButton.position(displayWidth/2,displayHeight/2-50);
    this.airButton.style.background = "red";
  
    this.landButton.position(displayWidth/2,displayHeight/2+50);
    this.landButton.style.background = "green";
    

    this.waterButton.mousePressed(()=>{
      gameState = 2;
      this.inst.hide();
        this.waterButton.hide();
        this.airButton.hide();
        this.landButton.hide();
       this.Img1.visible = false;
       this.Img2.visible = false;
       this.Img3.visible = false;      
    })

    this.airButton.mousePressed(()=>{
      gameState = 3;
      this.inst.hide();
        this.waterButton.hide();
        this.airButton.hide();
        this.landButton.hide();     
        this.Img1.visible = false;
        this.Img2.visible = false;
        this.Img3.visible = false;
    })

    this.landButton.mousePressed(()=>{
      gameState = 4;
      this.inst.hide();
        this.waterButton.hide();
        this.airButton.hide();
        this.landButton.hide();
        this.Img1.visible = false;
        this.Img2.visible = false;
        this.Img3.visible = false;
    })
    drawSprites();
}

}