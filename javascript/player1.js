class Player {
    constructor(ctx, canvasSize, posX, posY, width, height) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageInstance = undefined
        this.playerSpecs = {
            pos: { x: posX, y: posY },
            size: { w: width, h: height },
            velocity: { x: 30, y: 0 },
            gravity: 5,
            framesIndex: 0,
        }
        this.keys = []
        this.isJumping = false
        this.isMoving = false
        this.init()
    }
    init() {
        // this.imageInstance = new Image()
        // this.imageInstance.src = './images/trumpSprite.png'
    }
    setEventListeners() {
        window.addEventListener("keydown", e => {
            if ((e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight") && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key)
            }
        })
        window.addEventListener("keyup", e => {
            if (e.key === "ArrowDown" ||
                e.key === "ArrowUp" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight") {
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
        })

        if (this.keys.includes("ArrowRight") && !this.isMoving) {
            // this.playerSpecs.pos.x + 10
            this.playerSpecs.pos.x += this.playerSpecs.velocity.x

            // this.playerSpecs.velocity.y = this.maxSpeed

        }
        if (this.keys.includes("ArrowLeft")) {
            this.playerSpecs.pos.x -= this.playerSpecs.velocity.x

        } if (this.keys.includes("ArrowUp")) {
            this.jump()
        } if (this.keys.includes("ArrowDown")) {
            this.playerSpecs.pos.y += this.playerSpecs.velocity.y
        }
    }
    jump() {
        if (!this.isJumping) {
            this.isJumping = true
            this.playerSpecs.pos.y += -200

        }
    }

    draw() {
        this.move()
        this.setEventListeners()
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(this.playerSpecs.pos.x, this.playerSpecs.pos.y, this.playerSpecs.size.w, this.playerSpecs.size.h)
    }
    move() {

        if (this.playerSpecs.pos.y + this.playerSpecs.size.h <= this.canvasSize.h - (this.canvasSize.h / 30)) {
            this.playerSpecs.velocity.y += this.playerSpecs.gravity
            this.playerSpecs.pos.y += this.playerSpecs.velocity.y

            // } else {
            //     this.playerSpecs.pos.y = this.canvasSize.h - this.playerSpecs.size.h - (this.canvasSize.h / 30)
            //     this.playerSpecs.velocity.y = 5
            //     this.isJumping = false

        }
    }
}
