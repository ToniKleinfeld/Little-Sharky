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
    throwableObject = [];
    UserInteractWithSideforSounds = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    /**
     * let the character class acess to world class
     */
    setWorld() {
        this.character.world = this
    }

    /**
     * intervall to caLL collision function , and backgroundmusic
     */
    run() {
        this.character.setStoppableInterval(() => {            
            this.checkCollisions();
            this.playBackgroundMusic();         
        },100 / 60);
    }

    /**
     * Function to add all object to canvas , when game starts
     */
    draw() {
        this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects); 
        this.addObjectsToMap(this.level.light); 
        this.addObjectsToMap(this.level.backgroundfloor);    
        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObject)
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

    /**
     * check for every object in array enemies , if it collide with the character and call following function when yes
     */
    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if ( this.character.isColliding(enemy) && !this.character.isHurt()) {
                 this.character.hit();
                 this.statusBar.setPrecentage(this.character.energy);
                 if (this.character.energy > 0) {
                    enemy.contactToCharacter = true
                 }                
            }  
            this.character.selectHitAnimation(enemy);
            
         })
    }

    /**
     * check if keyboad d is pressed and the character still allive , to create a bubble object to the array depending on wich direction the char is swimming
     */
    checkTrowableObjects() {
        if (this.character.energy > 0 && this.keyboard.d ) {
            let bubble = new ThrowableObjects(this.character.x, this.character.y, this.character.otherDirection);
            this.throwableObject.push(bubble);
        }
    }

    /**
     * take an Objekt and call for every string addToMap function
     * 
     * @param {string} object - string from object -> image path
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Draw the Img to the canvas , check if the image should be flip
     * 
     * @param {string} mo - string from object -> image path
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawHitframe(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }        
    }

    /**
     * save the image and flip it
     * 
     * @param {string} mo - string from object -> image path
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width ,0);
        this.ctx.scale(-1,1);
        mo.x = mo.x * -1;  
    }

    /**
     * Flip the image back to Orginal
     * 
     * @param {string} mo - string from object -> image path
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1
        this.ctx.restore()
    }

    /**
     * Play backgroundmusic , when user interactet with webside
     */
    playBackgroundMusic() {
        if (this.UserInteractWithSideforSounds) {
            this.level.backgroundmusic[0].play();  
        } 
    }
}