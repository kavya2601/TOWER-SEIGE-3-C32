class SlingShot{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = B;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA=body;
     }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
             strokeWeight(4);
             line(posA.x, posA.y, posB.x, posB.y);
          /* push();
            stroke(61 , 23 , 23);

            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-25 , pointA.y , pointB.x-20 , pointB.y+10); 
                line(pointA.x-25 , pointA.y , pointB.x+25 , pointB.y);
                image(this.sling3 , pointA.x-30 , pointA.y-10 , 12 , 25 );
            }
            else{
                strokeWeight(3);
                line(pointA.x+25 , pointA.y+5 , pointB.x-20 , pointB.y+10); 
                line(pointA.x+25 , pointA.y+5 , pointB.x+25 , pointB.y);
            }
            
            pop();
            */
        }
    }
    
}