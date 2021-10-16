class Band {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA, 
            pointB: pointB,
            stiffness: 0.06,
            length: 100
        }
        this.restriction = Constraint.create(options);
        World.add(world, this.restriction);
    }
    display() {
        strokeWeight(4);
        var pointA = this.restriction.bodyA.position;
        var pointB = this.restriction.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}