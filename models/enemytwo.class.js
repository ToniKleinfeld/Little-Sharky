class EnemyTwo extends MoveableObject {

    height = 80;
    width = 90;
    currentImage = 0;
    count = 0;
    baseY;
    directionUpDown;
    
    type1 = {
        START_IMAGE : 'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
        ],    
        IMAGES_DEATH : [
            'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
            'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
            'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
            'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
        ],
        dangerous: false,
    }

    type2 = {
        START_IMAGE : 'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
            'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png',
        ],    
        IMAGES_DEATH : [
            'img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
            'img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
            'img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
            'img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png',
        ],
        dangerous: false,
    }

    type3 = {
        START_IMAGE : 'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
        ],    
        IMAGES_DEATH : [
            'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
            'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
            'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
            'img/2.Enemy/2 Jelly fish/Dead/green/g4.png',
        ],
        dangerous: true,
    }

    type4 = {
        START_IMAGE : 'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
            'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
        ],    
        IMAGES_DEATH : [
            'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
            'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
            'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
            'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
        ],
        dangerous: true,
    }
    
    enemytype;    

    constructor(type,x) {        
        super().loadImage(this.setEnemyStartType(type).START_IMAGE);        
        this.loadImages(this.enemytype.IMAGES_SWIM);
        this.loadImages(this.enemytype.IMAGES_DEATH);

        this.x = x + Math.random() * 500;
        this.y = Math.random() * 340;
        this.baseY = this.y;
        this.speed = 0.25 + Math.random() * 0.25;
        this.directionUpDown = Math.random() < 0.5;       
        
        this.animate();  
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds     
     */
    animate() {
        this.setStoppableInterval(() => {this.playDisplayedAnimations();}, 150);  
        this.setStoppableInterval(() => {this.changePositionsOfEnemy();}, 1000 / 30); 
    }
    /**
    * intervall for change the position of enemy
    */
    changePositionsOfEnemy() {
        if (!this.isDead()) {
            this.swimLeft();
            this.setDirectionUpDown()
            this.swimUpandDown()
        } 
    }

    /**
    * check which animation should be shown in cancas 
    */
    playDisplayedAnimations() {
        if(this.isDead()){
            this.trapedInBubble()
        } else {
            this.playAnimation(this.enemytype.IMAGES_SWIM);
        }   
    }

    /**
     * let the enemy swim top or down
     */
    swimUpandDown() {     
        if (this.directionUpDown) {
            this.y += this.speed ;
        } else if (!this.directionUpDown) {
            this.y -= this.speed ; 
        }        
    }

    /**
     * set the direction if the enemy swim top or down
     */
    setDirectionUpDown() {
        let topmax = this.baseY +64;
        let downmax = this.baseY -64;      
 
        if ( topmax <= this.y) {
            this.directionUpDown = false;              
        } else if ( downmax >= this.y ) {
            this.directionUpDown = true;     
        } 
    }

    /**
     * Play animation for traped in bubble
     */
    trapedInBubble() {
        this.playAnimationOnes(this.enemytype.IMAGES_DEATH);
        this.count++;

        if (this.count == this.enemytype.IMAGES_DEATH.length) { 
            this.count = 0;                                             
        } 
    }

    /**
     * Set The Pufferfish Typ , which of the 3 images sets is choosen
     * 
     * @param {number} type - set in level1 Enemyarray as 1,2,3 
     * @returns choosen object type
     */
    setEnemyStartType(type) {
        if (type === 4) {
            this.enemytype = this.type4;            
            return this.type4
        } else if (type === 3) {
            this.enemytype = this.type3;            
            return this.type3
        } else if (type === 2) {
            this.enemytype = this.type2;            
            return this.type2
        } else if(type === 1) {
            this.enemytype = this.type1;             
            return this.type1
        }
    }
}