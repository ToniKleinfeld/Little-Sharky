class Endboss extends MoveableObject {

    height = 220;
    width = 250;
    count = 0;
    attackArea = 2;
    attackcycle = true;
    attackTimer = new Date().getTime();

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
        top:100,
        left:20,
        right:25,
        bottom:45
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
                this.playAnimation(this.enemytype.IMAGES_SPAWN);
                if (this.spawnAnimation == 9) {
                    this.attackcycle = false;
                }
            } else if (this.isDead()) {
                this.die();
            } else if (this.isHurt()) {
                this.getHit();
            }else if (this.contactToCharacter && this.attackcycle) {
                this.collidewithChar();
            } else if (!this.attackcycle) {
                this.attack() 
            } else if (this.firstContact) {
                this.playAnimation(this.enemytype.IMAGES_FLOATING); 
            }
        this.spawnAnimation++;
        }, 150);

        this.setStoppableInterval(() => {
            if (this.setAttackTimer() && !this.isDead()) {
                this.randomDirectionAttack();
            };        
        }, 150);
    }

    /**
     * Check if there is a delay of 3 seconds between attack or hit
     * 
     * @returns true or false
     */
    setAttackTimer() {
        let timepassed = new Date().getTime() - this.attackTimer; //ms
        timepassed = (timepassed / 1000); //sec
        return timepassed > 2;
    }

    /**
     * roll a nummber  between 0-3 for attackArea, if it is already in use , it call the function again
     */
    randomDirectionAttack() {
       let newArea = Math.floor(Math.random() * 4);
       if (this.attackArea == newArea) {
        this.randomDirectionAttack();        
       } else {        
        this.attackArea = newArea;
        this.attackcycle = !this.firstContact ? this.attackcycle : false;
        this.attackTimer = new Date().getTime();
       }       
    }
    
    /**
     * Start the attack prosess
     */
    attack() {
        let x;
        let y;
        this.collidewithChar();
        this.chooseAttackArea(x,y);     
    }

    /**
     * if else which attack area is aktive
     * 
     * @param {boolean} x 
     * @param {boolean} y 
     */
    chooseAttackArea(x,y) {
        if (this.attackArea == 0) {
            x = this.leftAttackArea();
            y = this.topAttackArea();
        } else if (this.attackArea == 1) {                
            x = this.leftAttackArea();
            y = this.bottomAttackArea();
        } else if (this.attackArea == 2) {           
            x = this.rightAttackArea();
            y = this.topAttackArea();
        } else if (this.attackArea == 3) {
            x = this.rightAttackArea();
            y = this.bottomAttackArea();
        }
        this.endAttack(x,y);
    }

    /**
     * 
     * @returns boolean true , when reached x cordinates
     */
    leftAttackArea() {
        if (this.x > 3500) {
            this.x -= 66;                
        }  else {
            return true;
        }        
    }

    /**
     * 
     * @returns boolean true , when reached x cordinates
     */
    rightAttackArea() {
        if (this.x < 3900) {
            this.x += 66;                
        } else {
            return true;
        }
    }
    /**
     * 
     * @returns boolean true , when reached y cordinates
     */
    bottomAttackArea(){
        if (this.y < 270) {
            this.y += 45;
        } else {
            return true;
        }
    }

    /**
     * 
     * @returns boolean true , when reached y cordinates
     */
    topAttackArea() {
        if (this.y > 0) {
            this.y -= 45;
        } else {
            return true;
        }
    }

    /**
     * end the attackcycle when reached the wanted x/y cordinates
     * 
     * @param {boolean} x 
     * @param {boolean} y 
     */
    endAttack(x,y) {        
        if (x && y) {
            this.attackcycle = true;
            this.setDirection();
        }
    }

    /**
     * Set the wal direction after attack depending on attackarea
     */
    setDirection() {
        if (this.attackArea == 0 || this.attackArea == 1) {
            this.otherDirection = true;
        } else {
            this.otherDirection = false;
        }
    }

    /**
     * play the death animation
     */
    die() {
        this.checkIfAttackInProgress();
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
        this.checkIfAttackInProgress();
        this.playAnimationOnes(this.enemytype.IMAGES_HIT)
        this.count++

        if (this.count == this.enemytype.IMAGES_HIT.length) {
                this.count = 0;  
        }
    }

    /**
     * If the attack is in progress , it stop and reset the count to 0
     */
    checkIfAttackInProgress() {
        if (!this.attackcycle) {
            this.attackTimer = new Date().getTime() - 800;
            this.count = 0
            this.attackcycle = true;
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