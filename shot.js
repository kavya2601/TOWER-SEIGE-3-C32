/*class SHOTS{
    constructor(A, B){
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = B
        this.shot = Matter.Constraint.create(options);
        World.add(world, this.shot);
    }
    attach(body){
        this.shot.bodyA=shot;
     }
     fly(){
         this.shot.bodyA = null;
     }

    display(){
        if(this.shot.bodyA){
            var posA = this.shot.bodyA.position;
            var posB = this.pointB;
            strokeWeight(10);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
    
}*/