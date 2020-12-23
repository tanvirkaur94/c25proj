class Paper {
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.paperImg = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
       push();
       // fill("white");
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.diameter,this.diameter);
        imageMode(CENTER);
        image(this.paperImg ,pos.x,pos.y, this.diameter, this.diameter);
        pop();
    }
    
}