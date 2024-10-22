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
            this.checkCollisionsTrowableObjects();
            this.checkCollisionsForItems('Coin');
            this.checkCollisionsForItems('Poisenbottle');
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
        this.addObjectsToMap(this.level.coins); 
        this.addObjectsToMap(this.level.poisen); 
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);          

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
            if ( this.character.isColliding(enemy) && (!this.keyboard.space || enemy instanceof EnemyTwo || enemy instanceof Endboss) && enemy.energy > 0 && !this.character.isDead()) {
                this.getHitedByEnemy(enemy);
                this.character.selectHitAnimation(enemy);             
            } else if (this.keyboard.space && !this.character.isDead() && enemy instanceof Enemy && this.character.isColliding(enemy)) {
                enemy.energy = 0;  
            } 
         })
    }

    /**
     * Check if Character colide with item , and collect it / slice it out of array
     * 
     * @param {string} item - Value , which array should be checked
     */
    checkCollisionsForItems(item) {        
        this.selectItem(item).forEach((object,index) => {            
            if (this.character.isColliding(object)) {                
                if (object instanceof Coin || object instanceof Poisenbottle) {
                    this.selectStatusbar(item).precentage += 10; 
                    this.selectItem(item).splice(index,1);
                }                                              
            }
        })
    }

    /**
     * give back the array path
     * 
      @param {string} item - Value , which array should be checked
     * @returns path to Choosen Array
     */
    selectItem(item) {
        if (item == 'Coin') {
            return this.level.coins
        } else if(item == 'Poisenbottle') {
            return this.level.poisen
        }
    }

    /**
     * give back the Statusbar path
     * 
      @param {string} item - Value , which array should be checked
     * @returns path to Choosen Statusbar
     */
    selectStatusbar(item) {
        if (item == 'Coin') {
            return this.coinStatusBar
        } else if(item == 'Poisenbottle') {
            return this.poisonStatusBar
        }
    }

    /**
     * Check if a trowableObject collide with a enemy and call following functio , when yes
     */
    checkCollisionsTrowableObjects() {
        if(this.throwableObject.length != 0) {
            this.throwableObject.forEach((bubble) => {
                this.level.enemies.forEach((enemy) => {
                    if (bubble.isColliding(enemy) && enemy instanceof EnemyTwo && enemy.energy > 0) {
                        this.bubbleHitJelly(enemy,bubble);
                    } else if (bubble.isColliding(enemy) && enemy instanceof Enemy && enemy.energy > 0) {
                        this.bubbleHitPufferFish(enemy,bubble);
                    } else if(bubble.isColliding(enemy) && enemy instanceof Endboss && enemy.energy > 0){
                        this.bubbleHitEndboss(enemy,bubble);
                    };
                });
            });
        }
    }

    /**
     * call functions, what happen , when bubble hit endboss
     * 
     * @param {object} enemy enemy from enemies Array
     * @param {object} bubble bubble from trowableobject Array
     */
    bubbleHitEndboss(enemy,bubble) {
        if (bubble.bubbleTyp.typ == 'poisen' && !enemy.isHurt()) {
            enemy.hit();
            bubble.deleteTrowableobject();
            console.log(enemy.energy)
        } else {           
            bubble.deleteTrowableobject();
        }
    }

     /**
     * Call functions to animate what happen , when a bubble hit a jelly
     * 
     * @param {object} enemy enemy from enemies Array
     * @param {object} bubble bubble from trowableobject Array
     */
    bubbleHitJelly(enemy,bubble) {
        enemy.energy = 0;
        setTimeout(() => {
            bubble.deleteTrowableobject();
        }, 30)
    }

    /**
     * Call functions to animate what happen , when a bubble hit a Pufferfish
     * 
     * @param {object} enemy enemy from enemies Array
     *    * @param {object} bubble bubble from trowableobject Array
     */
    bubbleHitPufferFish(enemy,bubble) {
        if (!enemy.checkTimeInBlowUp()) {
            enemy.collideWithCharacter();
        }   
        setTimeout(() => {
            bubble.deleteTrowableobject();
        }, 30);
    }

    /**
     * when character collide with enemy without attack calling these functions
     * 
     * @param {string} mo- value from object
     */
    getHitedByEnemy(mo) {
        if (!this.character.isHurt()) {
            this.character.hit();
            this.character.setlastHitTyp(mo);
            this.statusBar.setPrecentage(this.character.energy);
            if (this.character.energy > 0 && mo.energy > 0) {
               mo.contactToCharacter = true
            }
        }
    }

    /**
     * check if keyboad d is pressed and the character still allive , to create a bubble object to the array depending on wich direction the char is swimming
     */
    checkTrowableObjects() {
        if (this.character.energy > 0 && this.keyboard.d && (this.character.x < 3150 || this.poisonStatusBar.precentage == 0) ) {
            let bubble = new ThrowableObjects(this.character.x, this.character.y, this.character.otherDirection ,'neutral');
            this.throwableObject.push(bubble);
        } else if (this.character.energy > 0 && this.keyboard.d && this.character.x > 3150 && this.poisonStatusBar.precentage > 0) {
            let bubble = new ThrowableObjects(this.character.x, this.character.y, this.character.otherDirection ,'poisen');
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
        this.level.backgroundmusic[0].play();  
    }
}