class Ground {
    constructor(height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(canvas.width / 2, canvas.height - (height / 2), canvas.width, height, options);
        World.add(world, this.body);
        this.width = canvas.width;
        this.height = height;
    }
    display() {
        rectMode(CENTER);
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        rect(posX, posY, this.width, this.height);
    }
}