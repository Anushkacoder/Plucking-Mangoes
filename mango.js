class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        };
        this.radius = radius;
        this.mango = Bodies.circle(x,y,this.radius,options);
        this.image = loadImage("mango.png");
        Matter.World.add(world,this.mango);
    }
    display(){
        var pos = this.mango.position;
        var angle = this.mango.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        ellipse(0,0,this.radius);
        image(this.image,0,0,70,70);
        pop();
    }
}