class Endboss extends MoveableObject {

    height = 220;
    width = 250;
    count = 0;
    attackTimer;
    directionLeftRight = true;

    type1 = {
        IMAGES_FLOATING : [
            'img/2.Enemy/3 Final Enemy/2.floating/1.png',
            'img/2.Enemy/3 Final Enemy/2.floating/2.png',
            'img/2.Enemy/3 Final Enemy/2.floating/3.png',
            'img/2.Enemy/3 Final Enemy/2.floating/4.png',
            'img/2.Enemy/3 Final Enemy/2.floating/5.png',
            'img/2.Enemy/3 Final Enemy/2.floating/6.png',
            'img/2.Enemy/3 Final Enemy/2.floating/7.png',
            'img/2.Enemy/3 Final Enemy/2.floating/8.png',
            'img/2.Enemy/3 Final Enemy/2.floating/9.png',
            'img/2.Enemy/3 Final Enemy/2.floating/10.png',
            'img/2.Enemy/3 Final Enemy/2.floating/11.png',
            'img/2.Enemy/3 Final Enemy/2.floating/12.png',
            'img/2.Enemy/3 Final Enemy/2.floating/13.png',
        ],
        IMAGES_SPAWN : [
            'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
        ],
        IMAGES_HIT : [
            'img/2.Enemy/3 Final Enemy/Hurt/1.png',
            'img/2.Enemy/3 Final Enemy/Hurt/2.png',
            'img/2.Enemy/3 Final Enemy/Hurt/3.png',
            'img/2.Enemy/3 Final Enemy/Hurt/4.png',
        ],
        IMAGES_DEAD : [
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
            'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
        ],
        IMAGES_ATTACK : [
            'img/2.Enemy/3 Final Enemy/Attack/1.png',
            'img/2.Enemy/3 Final Enemy/Attack/2.png',
            'img/2.Enemy/3 Final Enemy/Attack/3.png',
            'img/2.Enemy/3 Final Enemy/Attack/4.png',
            'img/2.Enemy/3 Final Enemy/Attack/5.png',
            'img/2.Enemy/3 Final Enemy/Attack/6.png',
        ],
        dangerous: false,
    }

    firstContact;
    spawnAnimation;
    enemytype = this.type1;
    
    offset = {
        top:90,
        left:15,
        right:20,
        bottom:40
    };
    
    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png')
        this.loadImages(this.enemytype.IMAGES_SPAWN);
        this.loadImages(this.enemytype.IMAGES_FLOATING);
        this.loadImages(this.enemytype.IMAGES_HIT);
        this.loadImages(this.enemytype.IMAGES_DEAD);
        this.loadImages(this.enemytype.IMAGES_ATTACK);

        this.x = 3800;
        this.y = 0;
        this.firstContact = false;
        this.spawnAnimation = 10;

        this.animate();
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds     
     */
    animate() {
        /**
         * this intervall check which animation should be displayed
         */
        this.setStoppableInterval(() => {
           this.firstContactBoss();
            if (this.spawnAnimation < 10) {
                this.playAnimation(this.enemytype.IMAGES_SPAWN)            
            } else if (this.isDead()) {
                this.die();
            } else if (this.isHurt()) {
                this.getHit();
            }else if (this.contactToCharacter) {
                this.collidewithChar()
            } else if (this.firstContact) {
                this.playAnimation(this.enemytype.IMAGES_FLOATING); 
            }
        this.spawnAnimation++
        }, 150);

        this.setStoppableInterval(() => {
            this.attack()
        }, 1000/30)

    }

    
    attack() {
        if (this.firstContact) {
            this.collidewithChar();
            if (this.x > 3500) {
                this.x -= 66;                
            }
            if (this.y < 270) {
                this.y += 45;
            }
        }
    }

    /**
     * play the death animation
     */
    die() {
        this.playAnimationOnes(this.enemytype.IMAGES_DEAD)
        this.count++

        if (this.count == this.enemytype.IMAGES_DEAD.length) {
            this.count = 5;
        }
    }

    /**
     * check if char is near the boss first time, and reset the animation counter to zero and set first contact to true when meet
     */
    firstContactBoss() { 
        if (world.character.x > 3200 && !this.firstContact) {
            this.firstContact = true; 
            this.spawnAnimation = 0;                        
        }   
    } 

    /**
     * play the hit animation
     */
    getHit(){
        this.playAnimationOnes(this.enemytype.IMAGES_HIT)
        this.count++

        if (this.count == this.enemytype.IMAGES_HIT.length) {
                this.count = 0;  
        }
    }

    /**
     * reduce energy by 25 , set it to 0 when engergy get below 0 and set lastHit current time 
     * 
     */
    hit() {
        this.energy -= 25;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit =  new Date().getTime();
        }
    }

    /**
     * play attack animation an reset contactToCharacter to false after it show all images
     */
    collidewithChar(){
        this.playAnimationOnes(this.enemytype.IMAGES_ATTACK)
        this.count++
    
        if (this.count == this.enemytype.IMAGES_ATTACK.length) {
                this.count = 0; 
                this.contactToCharacter = false;                 
        }
    }
}