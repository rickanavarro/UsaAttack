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
        this.shootsleft = false
        this.imageInstance = undefined
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./images/hamburger.png"
    }
    drawBurguer() {
        this.move()
        this.ctx.drawImage(
            this.imageInstance,
            this.bulletsSpecs.pos.x,
            this.bulletsSpecs.pos.y,
            this.bulletsSpecs.size.w,
            this.bulletsSpecs.size.h,
        )
    }
    move() {
        if (!this.shootsleft) {
            this.bulletsSpecs.pos.x += this.bulletsSpecs.velocity.x;
        }
        else { this.bulletsSpecs.pos.x -= this.bulletsSpecs.velocity.x }
    }
}