class Enemy {
    constructor(ctx, canvasSize, posX, posY, width, height) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.enemySpecs = {
            pos: { x: posX, y: posY },
            size: { w: width, h: height }
        }
        this.burguers = []

        this.drawEnemy()
    }
    drawEnemy() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.enemySpecs.pos.x, this.enemySpecs.pos.y, this.enemySpecs.size.w, this.enemySpecs.size.h);
    }
    shoot() {
        this.burguers.push(new Burguers(this.ctx, this.canvasSize, this.posX, this.posY, this.width, this.height));
    }
    clearBurguers() {
        this.burguers = this.burguers.filter(bur => bur.posX <= this.gameWidth)
    }
}