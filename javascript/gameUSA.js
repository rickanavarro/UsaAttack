
const Game = {
    gameTitle: "USAeating",
    authors: "Fernando Durban & Ricardo Navarro",
    version: "1.0.0",
    license: undefined,
    description: "Arcade game inspired in America",
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined,
    },
    player: undefined,
    isMoving: false,
    isJumping: false,
    platforms: [],
    enemies: [],
    getPlatformsData() {
        return [
            {
                posX: 0,
                posY: this.canvasSize.h / 12 * 2,
                width: this.canvasSize.w * 12 / 40,
                height: this.canvasSize.h / 60 * 2,
                info: 'first platform on the left'
            },
            {
                posX: this.canvasSize.w * 12 / 40,
                posY: this.canvasSize.h / 12 * 2,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 10,
                info: 'the end of the first platform on the left'
            },
            {
                posX: 0,
                posY: this.canvasSize.h / 12 * 10,
                width: this.canvasSize.w / 8 * 4,
                height: this.canvasSize.h / 60 * 2,
                info: 'second platform on the left'
            },
            {
                posX: 0,
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 2),
                width: this.canvasSize.w,
                height: this.canvasSize.h / 60 * 2,
                info: 'down border'
            },
            {
                posX: 0,
                posY: 0,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h,
                info: 'left border'
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 2),
                posY: 0,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h,
                info: 'right border'
            },
            {
                posX: 0,
                posY: 0,
                width: this.canvasSize.w,
                height: this.canvasSize.h / 60 * 2,
                info: 'upper border'
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 13),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 4),
                width: this.canvasSize.w / 40 * 13,
                height: this.canvasSize.h / 60 * 3,
                info: 'first staircase'
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 11),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 6),
                width: this.canvasSize.w / 40 * 11,
                height: this.canvasSize.h / 60 * 3,
                info: 'second staircase'
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 9),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 8),
                width: this.canvasSize.w / 40 * 9,
                height: this.canvasSize.h / 60 * 3,
                info: 'third staircase'
            },
            {
                posX: this.canvasSize.w - ((this.canvasSize.w / 40) * 7),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 10),
                width: this.canvasSize.w / 40 * 7,
                height: this.canvasSize.h / 60 * 3,
                info: "fourth staircase"
            },
            {
                posX: this.canvasSize.w - ((this.canvasSize.w / 40) * 5),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 12),
                width: this.canvasSize.w / 40 * 5,
                height: this.canvasSize.h / 60 * 3,
                info: "fifth staircase",
            },
            {
                posX: this.canvasSize.w - ((this.canvasSize.w / 40) * 3),
                posY: this.canvasSize.h - (this.canvasSize.h / 60 * 14),
                width: this.canvasSize.w / 40 * 3,
                height: this.canvasSize.h / 60 * 3,
                info: "sixth staircase"
            },
            {
                posX: this.canvasSize.w / 40 * 10,
                posY: this.canvasSize.h / 40 * 22,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 60 * 10,
                info: "first column"
            },
            {
                posX: this.canvasSize.w - ((this.canvasSize.w / 40) * 15),
                posY: this.canvasSize.h / 2,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 12 * 3.5,
                info: "second column"
            },
            {
                posX: this.canvasSize.w / 40 * 16,
                posY: this.canvasSize.h / 60 * 43,
                width: this.canvasSize.w / 40 * 10,
                height: this.canvasSize.h / 60 * 2,
                info: "left platform second column"
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 6),
                posY: this.canvasSize.h * 7.5 / 12,
                width: this.canvasSize.w / 40 * 4,
                height: this.canvasSize.h / 60 * 2,
                info: "platform right wall"
            },
            {
                posX: this.canvasSize.w - (this.canvasSize.w / 40 * 6),
                posY: this.canvasSize.h * 4 / 12,
                width: this.canvasSize.w / 40 * 4,
                height: this.canvasSize.h / 60 * 2,
                info: "second platform right wall"
            },
            {
                posX: this.canvasSize.w / 40 * 18,
                posY: this.canvasSize.h / 40 * 19,
                width: this.canvasSize.w / 40 * 15,
                height: this.canvasSize.h / 60 * 2,
                info: "top platform second column"
            },
            {
                posX: this.canvasSize.w / 40 * 16,
                posY: this.canvasSize.h * 7.5 / 12,
                width: this.canvasSize.w / 40 * 4,
                height: this.canvasSize.h / 60 * 2,
                info: "medium platform small"
            },
            {
                posX: this.canvasSize.w / 40 * 7,
                posY: this.canvasSize.h / 60 * 32,
                width: this.canvasSize.w / 40 * 5,
                height: this.canvasSize.h / 60 * 2,
                info: 'first platform left column'
            },
            {
                posX: this.canvasSize.w / 40 * 7,
                posY: this.canvasSize.h / 60 * 42,
                width: this.canvasSize.w / 40 * 5,
                height: this.canvasSize.h / 60 * 2,
                info: 'second platform left column'
            },
            {
                posX: this.canvasSize.w / 40 * 7,
                posY: this.canvasSize.h / 60 * 22,
                width: this.canvasSize.w / 40 * 7,
                height: this.canvasSize.h / 60 * 2,
                info: 'third platform left column'
            },
            {
                posX: this.canvasSize.w / 40 * 7,
                posY: this.canvasSize.h / 60 * 22,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 60 * 4,
                info: 'third platform left column'
            },
            {
                posX: this.canvasSize.w / 40 * 23,
                posY: this.canvasSize.h / 12 * 2,
                width: (this.canvasSize.w * 15 / 40),
                height: this.canvasSize.h / 60 * 2,
                info: 'first platform on the right'
            },
            {
                posX: this.canvasSize.w / 40 * 17.5,
                posY: this.canvasSize.h / 60 * 12,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 60 * 6,
                info: 'first part of the s'
            },
            {
                posX: this.canvasSize.w / 40 * 17.5,
                posY: this.canvasSize.h / 60 * 16,
                width: this.canvasSize.w / 40 * 10,
                height: this.canvasSize.h / 60 * 2,
                info: 'second part of the s'
            },
            {
                posX: this.canvasSize.w / 40 * 27,
                posY: this.canvasSize.h / 60 * 16,
                width: this.canvasSize.w / 40 * 2,
                height: this.canvasSize.h / 60 * 6,
                info: 'last part of the s'
            }

        ]
    },
    init() {
        this.setContext()
        this.setDimmensions()
        this.reset()
        this.start()
    },

    setContext() {

        this.ctx = document.querySelector('canvas').getContext('2d')

    },
    setDimmensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    reset() {
        this.player = new Player(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 4, this.canvasSize.h / 60 * 52, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2)
        this.platforms = this.getPlatformsData().map(elm => new Platform(this.ctx, this.canvasSize, elm.posX, elm.posY, elm.width, elm.height))
        this.enemies.push(
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 10, this.canvasSize.h / 60 * 25, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 31, this.canvasSize.h / 60 * 13, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 4, this.canvasSize.h / 60 * 47, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 29, this.canvasSize.h / 60 * 33, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 22, this.canvasSize.h / 60 * 40, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
            new Enemy(this.ctx, this.canvasSize, this.canvasSize.w / 40 * 18, this.canvasSize.h / 60 * 7, this.canvasSize.w / 40, this.canvasSize.h / 60 * 2),
        )
    },
    drawPlayer() {
        this.player.draw()
    },
    isCollision() {
        let platform = this.platforms
        // this.platforms.forEach(platform => {
        //     if (this.player.playerSpecs.pos.x < platform.platformSpecs.pos.x + platform.platformSpecs.size.w &&
        //         this.player.playerSpecs.pos.x + this.player.playerSpecs.size.w > platform.platformSpecs.pos.x &&
        //         this.player.playerSpecs.pos.y < platform.platformSpecs.pos.y + platform.platformSpecs.size.h &&
        //         this.player.playerSpecs.size.h + this.player.playerSpecs.pos.y > platform.platformSpecs.pos.y) {

        //     }
        // })
        for (let i = 0; i < platform.length; i++) {
            if (this.player.playerSpecs.pos.x < platform[i].platformSpecs.pos.x + platform[i].platformSpecs.size.w &&
                this.player.playerSpecs.pos.x + this.player.playerSpecs.size.w > platform[i].platformSpecs.pos.x &&
                this.player.playerSpecs.pos.y < platform[i].platformSpecs.pos.y + platform[i].platformSpecs.size.h &&
                this.player.playerSpecs.size.h + this.player.playerSpecs.pos.y > platform[i].platformSpecs.pos.y) {

                if (this.player.playerSpecs.pos.y + this.player.playerSpecs.size.h > platform[i].platformSpecs.pos.y
                    && this.player.playerSpecs.velocity.y >= 0) {
                    this.player.playerSpecs.pos.y = platform[i].platformSpecs.pos.y - this.player.playerSpecs.size.h;
                    this.player.playerSpecs.velocity.y = 0;
                    this.player.isJumping = false
                    //bottom player withh platform top
                }
                else if (this.player.playerSpecs.pos.y < platform[i].platformSpecs.pos.y + platform[i].platformSpecs.size.h
                    && this.player.playerSpecs.velocity.y <= 0) {
                    console.log('hola')
                    this.player.playerSpecs.pos.y = platform[i].platformSpecs.pos.y + platform[i].platformSpecs.size.h;
                    this.player.playerSpecs.velocity.y = 0;         //player top with bottom platform
                }
                else if (this.player.playerSpecs.pos.x < platform[i].platformSpecs.pos.x + platform[i].platformSpecs.size.w
                    && this.player.playerSpecs.velocity.x >= 0) {
                    this.player.playerSpecs.pos.x = platform[i].platformSpecs.pos.x - this.player.playerSpecs.size.w;
                    this.player.playerSpecs.velocity.x = 0; //players right with platforms left       
                }
                else if (this.player.playerSpecs.pos.x + this.player.playerSpecs.size.w > platform[i].platformSpecs.pos.x
                    && this.player.playerSpecs.velocity.x <= 0) {
                    this.player.playerSpecs.pos.x = platform[i].platformSpecs.pos.x + platform[i].platformSpecs.size.w;
                    this.player.playerSpecs.velocity.x = 0;  //players left with platforms righ
                }
            }
        }
    },
    clearEnemies() {

    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.isCollision()
        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll() {
        this.platforms.forEach(elm => elm.drawBackground())
        this.drawPlayer()
        this.enemies.forEach(elm => elm.drawEnemy())
    },
}
