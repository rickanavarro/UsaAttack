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
        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/trumpSprite.png'
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

        if (this.keys.includes("ArrowRight")) {
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
    animate(framescounter) {
        if (framesCounter % 4 == 0) {
            this.image.framesIndex++;
        }

        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0
        }
    }
    jump() {
        if (!this.isJumping) {
            this.isJumping = true
            this.playerSpecs.pos.y += -100

        }
    }

    draw() {
        this.move()
        this.setEventListeners()
        this.ctx.drawImage(
            this.imageInstance,
            0,
            100,
            80,// this.playerSpecs.size.w / this.playerSpecs.frames * this.playerSpecs.framesIndex,
            70,// cambiar tamaño del muchacho
            this.playerSpecs.pos.x,
            this.playerSpecs.pos.y,
            this.playerSpecs.size.w,
            this.playerSpecs.size.h,
        )
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
