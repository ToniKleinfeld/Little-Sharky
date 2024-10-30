class Enemy extends MoveableObject {

    height = 80;
    width = 90;
    currentImage = 0;
    count = 0;
    timeInBlowUp;
    
    
    type1 = {
        START_IMAGE : 'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
        ],    
        IMAGES_BLOW_UP : [
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        ],    
        IMAGES_BLOW_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
        ],    
        IMAGES_DEATH : [
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png'
        ],
        dangerous: false,
    }

    type2 = {
        START_IMAGE : 'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
        ],
    
        IMAGES_BLOW_UP : [
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png',
        ],
    
        IMAGES_BLOW_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/2.bubbleswim5.png',
        ],
    
        IMAGES_DEATH : [
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png'
        ],
        dangerous: false,
    }

    type3 = {
        START_IMAGE : 'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        IMAGES_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
        ],
    
        IMAGES_BLOW_UP : [
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/3.transition5.png',
        ],
    
        IMAGES_BLOW_SWIM : [
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim1.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim2.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim4.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/3.bubbleswim5.png',
        ],
    
        IMAGES_DEATH : [
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png',
            'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.3.png'
        ],
        dangerous: false,
    }
    
    enemytype;    

    constructor(type) {        
        super().loadImage(this.setEnemyStartType(type).START_IMAGE);        
        this.loadImages(this.enemytype.IMAGES_SWIM);
        this.loadImages(this.enemytype.IMAGES_BLOW_UP);
        this.loadImages(this.enemytype.IMAGES_BLOW_SWIM);

        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 405;
        this.speed = 0.15 + Math.random() * 0.25;
        
        
        this.animate();  
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds     
     */
    animate() {
        /**
         * intervall to check which animation should be shown in cancas 
         */
        this.setStoppableInterval(() => {                         
            if (this.checkTimeInBlowUp() && this.isDead()) {
                this.loadImage(this.enemytype.IMAGES_DEATH[0]);
                this.timeInBlowUp = new Date().getTime();
            }  else if(this.isDead()){
                this.loadImage(this.enemytype.IMAGES_DEATH[1]);
            } else if (!this.contactToCharacter && !this.checkTimeInBlowUp() && !this.isDead()) {
                this.playAnimation(this.enemytype.IMAGES_SWIM);
                this.resetHeightAndWitdth();
            } else if(this.checkTimeInBlowUp() && !this.isDead()){
                this.playAnimation(this.enemytype.IMAGES_BLOW_SWIM);
            } else {
                this.collideWithCharacter()
            }                       
        }, 150);
        
        /**
         * intervall for change the position of enemy
         */
        this.setStoppableInterval(() => {
            if (!this.contactToCharacter && !this.isDead()) {
                this.swimLeft();
            } else if (this.checkTimeInBlowUp() && this.isDead()){
                this.x -= 20
                this.y -=30
            } else if(this.isDead() && this.y <= 410) {
                this.x -= 20
                this.y +=30
            }      
        }, 1000 / 60); 
    }

    /**
     * set the height an width to orginal value when blow up is ended
     */
    resetHeightAndWitdth(){
            if (this.height > 80) {
                this.height -= 8;
            }

            if (this.width > 90) {
                this.width -= 8;
            }
    }

    /**
     * Play animation for blowup , when the enemie get contact with the Character.
     */
    collideWithCharacter() {
        this.playAnimationOnes(this.enemytype.IMAGES_BLOW_UP);
        this.count++;
        this.width += 8;
        this.height += 8;

        if (this.count == this.enemytype.IMAGES_BLOW_UP.length) { 
            this.count = 0;
            this.timeInBlowUp = new Date().getTime();                                              
        } 
    }

    /**
     * Calculate time since blowUp animation is over , after 4 seconds it returns false
     * 
     * @returns true or false
     */
    checkTimeInBlowUp() {
        let timepassed = new Date().getTime() - this.timeInBlowUp; //ms
        timepassed = timepassed / 1000; //sec
        if (timepassed < 4) {
            this.contactToCharacter = false
        }
        return timepassed < 4;
    } 

    /**
     * Set The Pufferfish Typ , which of the 3 images sets is choosen
     * 
     * @param {number} type - set in level1 Enemyarray as 1,2,3 
     * @returns choosen object type
     */
    setEnemyStartType(type) {
        if (type === 3) {
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