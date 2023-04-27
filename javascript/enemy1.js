class Enemy {
    constructor(ctx, canvasSize, posX, posY, width, height, shootingleft) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageInstance = undefined
        this.enemySpecs = {
            pos: { x: posX, y: posY },
            size: { w: width, h: height }
        }
        this.burguers = []
        this.shootsleft = shootingleft
        this.init()
        this.drawEnemy()
        // this.shootleft()

    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = "./images/clinton.png "
    }
    drawEnemy(frames) {
        //  this.burguers.forEach(bur => bur.drawBurguer())
        this.ctx.drawImage(
            this.imageInstance,
            this.enemySpecs.pos.x,
            this.enemySpecs.pos.y,
            this.enemySpecs.size.w,
            this.enemySpecs.size.h,
        )
        this.drawBullets()
        this.shoot(frames)
        this.clearBurguers()
    }
    shoot(frames) {
        if (frames % 30 === 0) {
            this.burguers.push(new Burguers(this.ctx, this.canvasSize, this.enemySpecs.pos.x + this.enemySpecs.size.w / 2, this.enemySpecs.pos.y, this.enemySpecs.size.w, this.enemySpecs.size.h));
        }
    }
    clearBurguers() {
        this.burguers = this.burguers.filter(bur => bur.bulletsSpecs.pos.x < this.canvasSize.w)
    }
    drawBullets() {
        this.burguers.forEach(bur => bur.drawBurguer())
    }
    //     shootleft(shootingleft) {

    //     }
}