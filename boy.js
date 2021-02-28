class Boy {
  constructor(x,y,width,height){
      var options = {
          isStatic : true
      };
      this.width = width;
      this.height = height;
      this.boy = Bodies.rectangle(x,y,this.width,this.height,options);
      this.image = loadImage("boy.png");
      Matter.World.add(world,this.boy);
  }
  display(){
      var pos = this.boy.position;
      push();
      rectMode(CENTER);
      fill("green");
      rect(pos.x,pos.y,this.width,this.height);
      image(this.image,150,400,260,330);
      pop();
  }
}