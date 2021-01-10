class SlingShot{
    constructor(BodyA, PointB){
        var options = {
            bodyA: BodyA,
            pointB: PointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = PointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
    display(){
        if(this.sling.bodyA){
                   
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }          
}
}   