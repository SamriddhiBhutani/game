class Screen1{
    constructor(){
        this.title = createElement("h1");
        this.instruction = createElement("h2")
        this.start = createButton("Let's Start");
       
        this.image = loadImage("images/logo.png");
     
    }
    display(){
        
        this.title.html("WELCOME")
        this.title.position(displayWidth/2-100,20);
        this.instruction.html("Hello and welcome to It's Our Earth !! Here you will find miny fun games which will show you what all measures you can take to keep your earth clean. You must have watched the movie FROZEN 2, there Elsa had saved her palace by saving the powers of the world. Now it's your time to be the Elsa for you Palace(Earth). So here you have to save the powerful resources WATER, AIR and OUR EARTH(land). So best of Luck and Enjoy Playing !!")
        this.instruction.position(50,displayHeight/2-300);
        this.start.position(displayWidth/2-50,displayHeight/2-100);
       // image(this.image,displayWidth/2-250,displayHeight/2-50,500,400);
        this.start.mousePressed(()=>{
            gameState = 1,
          // this.image.visibility(0);
            this.title.hide();
            this.start.hide();
            this.instruction.hide();
        })
    }
}