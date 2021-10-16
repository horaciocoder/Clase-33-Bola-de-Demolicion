class Box {
    constructor(x, y, scale) {
        this.body = Bodies.rectangle(x, y, scale, scale);
        World.add(world, this.body);
        this.width = scale;
        this.height = scale;
    }
    display() {
        var pos = this.body.position;
        var rotation = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(rotation);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}