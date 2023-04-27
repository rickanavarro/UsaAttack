class Platform {
    constructor(ctx, canvasSize, posX, posY, width, height, info) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.platformSpecs = {
            pos: { x: posX, y: posY },
            size: { w: width, h: height }
        }
    }
    drawBackground() {
        this.ctx.fillStyle = "brown"
        this.ctx.fillRect(this.platformSpecs.pos.x, this.platformSpecs.pos.y, this.platformSpecs.size.w, this.platformSpecs.size.h)
    }
}
