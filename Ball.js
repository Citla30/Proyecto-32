class Ball {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0,this.r,this.r);
        pop();

        if(this.body.position.y>760){
            if(this.body.position.x>310 && this.body.position.x<500){
                score=score+100;
                ball=null;
            }

            if(this.body.position.x>501 && this.body.position.x<900){
                score=score+200;
                ball=null;
            }

            if(this.body.position.x<300){
                score=score+500;
                ball=null;
              }

        }
    }

};