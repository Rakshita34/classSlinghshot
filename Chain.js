class SlingShot{
    constructor(BodyA, PointB){
        var options = {
            bodyA: BodyA,
            pointB: PointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= PointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}