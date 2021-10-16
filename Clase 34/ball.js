class Ball {
    constructor(x, y, radius) {
        this.radius = radius;
        var options = {
            restitution: 0,
            density: 1,
            friction: 1.1
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        circle(pos.x, pos.y, this.radius * 2);
    }
}