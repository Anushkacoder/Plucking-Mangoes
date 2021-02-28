class Constraint22 {
    constructor(x,y){
      var options = {
          bodyA : x,
          bodyB : y,
          length : 10,
          stiffness : 0.04
      };
       this.connect = Constraint.create(options);
       Matter.World.add(world,this.connect);
    }
    fly(){
        this.connect.bodyA = null;
    }
    display(){
        if(this.connect.bodyA != null){
        var pos1 = this.connect.bodyA.position;
        var pos2 = this.connect.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        }
    }
}