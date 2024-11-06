class Character extends CharacterImgSet{

    x;
    y;
    height = 170;
    width = 200;
    count = 0;
    timeCount = Date.now();
    lastHitTyp;

    world;

    offset = {
        top:70,
        left:30,
        right:30,
        bottom:30
    };    

    constructor() {
        super()
        this.x = 10;
        this.y = 200;
        this.speed = this.speed * 50;
        this.animate();
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds
     */
    animate() {
        /**
         * Play sound for swim or stop them when dead
         * calls the swim function so move the char when an arrow key is pressed
         */
        this.setStoppableInterval(() => {this.moveCharacter();  this.moveCamera();}, 1000 / 60);

        /**
         * Check if the Char is dead and play the animation one time 
         * if key for find attack or Bubble attack is pressed and play this animations/sounds and creat a bubble object in world trowable array one time 
         * if no if matched it calls the function to stop and reset the sounds for find/Bubble attack
         */
        this.setStoppableInterval(() => this.characterAttacks(), 60);

        /**
         * Check which animation should be shown , when press any key or when no key pressed when the idle animation starts and repeat when char is not dead
         */
        this.setStoppableInterval(() =>  this.idleAnimationIfElse(), 250);            
    }

    /**
     * if else , where the char is moving when pressing arrow keys
     */
    moveCharacter() {
        if (this.isDead()) {
            this.world.sounds.playSound('sharky','swim','pause');
        } else if (this.canSwimRight()) {
           this.swimRight();
           this.otherDirection = false;
           this.world.sounds.playSound('sharky','swim','play');
        } else if (this.canSwimLeft()) {
           this.swimLeft();
           this.otherDirection = true;
           this.world.sounds.playSound('sharky','swim','play');
        } else if (this.canSwimTop()) {
            this.swimTop(); 
            this.world.sounds.playSound('sharky','swim','play');
        } else if (this.canSwimDown()) {
            this.swimDown();
            this.world.sounds.playSound('sharky','swim','play');
        } else {
            this.world.sounds.playSound('sharky','swim','pause');
        }
    }

    /**
     * Check if char can swim down
     * 
     * @returns true or false
     */
    canSwimDown() {
        return this.world.keyboard.down && this.y < 330  && !this.world.keyboard.space && !this.world.keyboard.d
    }

    /**
     * check if char can swim top
     * 
     * @returns true or false
     */
    canSwimTop() {
        return this.world.keyboard.top && this.y > -70  && !this.world.keyboard.space && !this.world.keyboard.d
    }

    /**
     * can the character swim to the left
     * 
     * @returns true or false
     */
    canSwimLeft() {
        return this.world.keyboard.left && this.x > -680 && !this.world.keyboard.space && !this.world.keyboard.d 
    }

    /**
     * can the character swim to the right
     * 
     * @returns true or false
     */
    canSwimRight() {
        return this.world.keyboard.right && this.x < this.world.level.level_end_x + 390 && !this.world.keyboard.space && !this.world.keyboard.d
    }

    /**
     * if else which attack is animaten , when pressing d oder space
     */
    characterAttacks() {
        if (this.isDead()) { 
            this.chooseDeadAnimation();
        } else if (this.world.keyboard.space) { 
            this.finAttack();
        } else if (this.world.keyboard.d) {
            if (this.count == 6) { 
                this.world.checkTrowableObjects();
            }    
            this.bubbleTrap();           
        } else {
            this.resetAndPauseSounds();
        }
    }

    /**
     * if else for which state of idle animation is shown
     */
    idleAnimationIfElse() {
        if (this.count == 0 && this.energy > 0 && this.checkIfAnyKeyPressed()) {
            this.swimAnimation();
        } else if(!this.isDead() && Date.now() - this.timeCount <= 5000){
            this.idleAnimation(this.IMAGES_IDLE)
        } else if(!this.isDead() && Date.now() - this.timeCount <= 7250) {
            this.idleAnimation(this.IMAGES_LONG_IDLE)
        } else if(!this.isDead()) {
            this.idleAnimation(this.IMAGES_LONG_IDLELOOP)
        }
    }

    /**
     * check which enemy last hit the char and choose the depending deadth animation
     */
    chooseDeadAnimation() {
        if (this.count !== this.IMAGES_DEAD_POISEN.length-1 && this.energy == 0 && this.lastHitTyp == 'poisen') {          
            this.animateDeadPoisen();   
        } else if (this.count !== this.IMAGES_DEAD_ELEKTRO.length-1 && this.energy == 0 && this.lastHitTyp == 'elektro') {
            this.animateDeadElektro();
        } 
    }

    /**
     * set the currentTime of sound to 0 and pause the play from tail/ bubble attack
     */
    resetAndPauseSounds() {
        this.world.sounds.sharky.tail.audio.currentTime = 0;
        this.world.sounds.playSound('sharky','tail','pause');
        this.world.sounds.sharky.bubble.audio.currentTime = 0;
        this.world.sounds.playSound('sharky','bubble','pause');   
    }

    /**
     * Play the FinAttack Animation and Sound once with sound setting
     */
    finAttack() {
        this.playAnimationOnes(this.IMAGES_ATTACK_FIN);         
        this.count++;
        this.directionFinAttack()
        this.world.sounds.playSound('sharky','tail','play');

        if (this.count == this.IMAGES_ATTACK_FIN.length ) {                    
            this.world.keyboard.space = false;
            this.count = 0;                                                    
        }  
    }

    /**
     * push forward , depends on direction ,when calling finAttack()
     */
    directionFinAttack(){
        if (this.otherDirection) {
            this.x = this.x - 10;
        } else {
            this.x = this.x + 10;
        }
    }

    /**
     * Play the Bubble Animation and Sound once with sound setting
     */
    bubbleTrap() {
        this.playAnimationOnes(this.IMAGES_BUBBLE_TRAP);         
        this.count++;
        this.world.sounds.playSound('sharky','bubble','play');

        if (this.count == this.IMAGES_BUBBLE_TRAP.length ) {                    
            this.world.keyboard.d = false;
            this.count = 0;                                              
        }  
    }

    /**
     * Play the Death animation 
     */
    animateDeadPoisen() {
        this.count++;
        this.playAnimationOnes(this.IMAGES_DEAD_POISEN);   
    }

    /**
    * Play the Death animation 
    */
    animateDeadElektro() {
        this.count++;
        this.playAnimationOnes(this.IMAGES_DEAD_ELEKTRO);   
    }

    /**
     * Play the hit animation for normal hit
     */
    animateHitPoisen() {        
        this.playAnimation(this.IMAGES_HIT_POISEN);           
    }

    /**
     * Play the hit animation for elektro hit
     */
    animateHitElektro() {
        this.playAnimation(this.IMAGES_HIT_ELEKTRO);
    }

    /**
     * Draw the swim animation, when a arrow key is pressed
     */
    swimAnimation() {
        if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.top || this.world.keyboard.down) {
            this.playAnimation(this.IMAGES_SWIM);
        }; 
    };

    /**
     * Draw the wanted Images set
     * 
     * @param {Object} IMAGES - the current object with imiages , which should draw
     */
    idleAnimation(IMAGES) {
        if (!this.checkIfAnyKeyPressed()) {
            this.playAnimation(IMAGES)
        }
    }

    /**
     * 
     * @returns true or false depending on when a key game related key is pressed , set the timecount on current time for check time between input
     */
    checkIfAnyKeyPressed() {
        if (this.world.keyboard.top || this.world.keyboard.down || this.world.keyboard.left || this.world.keyboard.right || this.world.keyboard.space || this.world.keyboard.d) {
            this.timeCount = Date.now();
            return true
        } else {
            return false
        }
    }

    /**
     * Check, which enemyclass hit the Character , to choose the hit matched animation and call the getHited()
     * 
     * @param {string} enemy - current Enemy from enemies Array
     */
    selectHitAnimation(enemy) {
        if((enemy instanceof Enemy || enemy instanceof Endboss || enemy instanceof EnemyTwo ) && this.isHurt() && this.world.character.isColliding(enemy) && !enemy.enemytype.dangerous){
            this.animateHitPoisen();
            this.moveWhenGetHited();            
         } else if (enemy instanceof EnemyTwo && this.isHurt() && this.world.character.isColliding(enemy) && enemy.enemytype.dangerous) {
            this.animateHitElektro();
            this.moveWhenGetHited(); 
         }   
    }

    /**
    * When the char collied with enemy , check if which direction he swim an push him back if not on border of world
    * set timeCount to current time when hit , to break idle animation without pressing any key
    */
    moveWhenGetHited() {
        if (this.otherDirection && this.x + 0.5 < (3975)) {
            this.x = this.x + 0.7
        } else if(this.x - 0.5 > (-718)){
            this.x = this.x - 0.7
        }
        this.timeCount = Date.now();
    }
}