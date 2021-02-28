class Stone {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        };
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
        this.stone = Bodies.rectangle(x,y,this.width,this.height,options);
        Matter.World.add(world,this.stone);
    }
    display(){
      var pos = this.stone.position;
      push();
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      image(this.image,pos.x,pos.y,60,60);
      pop();
    }
}