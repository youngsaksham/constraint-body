class Ball {
  constructor(x, y, radius) {
    var options = {
        isStatic : true
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    //this.x = x;
    //this.y = y;
    

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    circle(0,0,this.radius);
    pop();
  }
}