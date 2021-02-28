class Tree {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        };
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('tree.png');
        Matter.World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image,775,270,470,510);
        pop();
    }
}