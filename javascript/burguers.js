class Burguers {
    constructor(ctx, canvasSize, enemiesPosX, enemiesPosY, enemiesWidth, enemiesHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.bulletPosX = enemiesPosX + enemiesWidth / 2
        this.bulletsSpecs = {
            pos: { x: enemiesPosX, y: enemiesPosY },
            size: { w: enemiesWidth, h: enemiesHeight },
            velocity: { x: 8, y: 1 },
        }
        this.radius = 8
    }
    drawBurguer() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.arc(this.bulletsSpecs.pos.x, this.bulletsSpecs.pos.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
        this.move()
    }
    move() {
        this.bulletsSpecs.pos.x += this.bulletsSpecs.velocity.x;
    }
}