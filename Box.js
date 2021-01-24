class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0.1
          //isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(2)
      stroke(0);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  