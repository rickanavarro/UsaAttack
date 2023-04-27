class Platform {
    constructor(ctx, canvasSize, posX, posY, width, height, info) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.platformSpecs = {
            pos: { x: posX, y: posY },
            size: { w: width, h: height }
        }
        this.imageInstance = undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/pixelgrass.png'
    }
    drawBackground() {
        this.ctx.drawImage(
            this.imageInstance,
            this.platformSpecs.pos.x,
            this.platformSpecs.pos.y,
            this.platformSpecs.size.w,
            this.platformSpecs.size.h,
        )
    }
}
