class Background {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize
        this.backgroundsSpecs = {
            pos: { x: 0, y: 0 },
            size: { w: canvasSize.w, h: canvasSize.h }
        }
        this.image = new Image()
        this.image.src = "./images/White.jpg"
    }


    drawBackgroundReal() {
        this.ctx.drawImage(
            this.image,
            this.backgroundsSpecs.pos.x,
            this.backgroundsSpecs.pos.y,
            this.backgroundsSpecs.size.w,
            this.backgroundsSpecs.size.h,
        )
    }
}