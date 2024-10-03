class World {
    character = new Character();
    level = level1
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBar = new HpStatusBar();
    coinStatusBar = new CoinStatusBar();
    poisonStatusBar = new PoisonStatusBar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    };

    setWorld() {
        this.character.world = this
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
               if ( this.character.isColliding(enemy) && !this.character.isHurt()) {
                    this.character.hit();
                    this.statusBar.setPrecentage(this.character.energy);
               } 
            })
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects); 
        this.addObjectsToMap(this.level.light); 
        this.addObjectsToMap(this.level.backgroundfloor);    
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);            

        this.ctx.translate(-this.camera_x,0);

        this.addToMap(this.statusBar);
        this.addToMap(this.coinStatusBar);
        this.addToMap(this.poisonStatusBar);   

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });      
    }

    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }        
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width ,0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;  
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore()
    }
}