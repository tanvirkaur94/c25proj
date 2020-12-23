class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            friction: 1,
            density: 0.8
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.width = height;
        this.dustbinImg = loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        push();
       // translate(pos.x, pos.y);
        //rectMode(CENTER)
       // stroke("green")
        //strokeWeight(4);
       
      //  rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.dustbinImg, pos.x, pos.y, this.width, this.height);

        pop();
    }
}