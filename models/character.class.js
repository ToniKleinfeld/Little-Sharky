class Character extends MoveableObject{

    x;
    y;
    height = 170;
    width = 200;
    count = 0;
    timeCount = Date.now();
    

    IMAGES_SWIM = [
            'img/1.Sharkie/3.Swim/1.png',
            'img/1.Sharkie/3.Swim/2.png',
            'img/1.Sharkie/3.Swim/3.png',
            'img/1.Sharkie/3.Swim/4.png',
            'img/1.Sharkie/3.Swim/5.png',
            'img/1.Sharkie/3.Swim/6.png'
        ];

        IMAGES_ATTACK_FIN = [
            'img/1.Sharkie/4.Attack/Fin slap/1.png',
            'img/1.Sharkie/4.Attack/Fin slap/2.png',
            'img/1.Sharkie/4.Attack/Fin slap/3.png',
            'img/1.Sharkie/4.Attack/Fin slap/4.png',
            'img/1.Sharkie/4.Attack/Fin slap/5.png',
            'img/1.Sharkie/4.Attack/Fin slap/6.png',
            'img/1.Sharkie/4.Attack/Fin slap/7.png',
            'img/1.Sharkie/4.Attack/Fin slap/8.png',
            'img/1.Sharkie/3.Swim/1.png'
        ];

        IMAGES_DEAD = [
            'img/1.Sharkie/6.dead/1.Poisoned/1.png',
            'img/1.Sharkie/6.dead/1.Poisoned/2.png',
            'img/1.Sharkie/6.dead/1.Poisoned/3.png',
            'img/1.Sharkie/6.dead/1.Poisoned/4.png',
            'img/1.Sharkie/6.dead/1.Poisoned/5.png',
            'img/1.Sharkie/6.dead/1.Poisoned/6.png',
            'img/1.Sharkie/6.dead/1.Poisoned/7.png',
            'img/1.Sharkie/6.dead/1.Poisoned/8.png',
            'img/1.Sharkie/6.dead/1.Poisoned/9.png',
            'img/1.Sharkie/6.dead/1.Poisoned/10.png',
            'img/1.Sharkie/6.dead/1.Poisoned/11.png',
            'img/1.Sharkie/6.dead/1.Poisoned/12.png'
        ];

        IMAGES_HIT_POISEN = [
            'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
        ];

        IMAGES_BUBBLE_TRAP = [
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
            'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png',
        ];

        IMAGES_IDLE = [
            'img/1.Sharkie/1.IDLE/1.png',
            'img/1.Sharkie/1.IDLE/2.png',
            'img/1.Sharkie/1.IDLE/3.png',
            'img/1.Sharkie/1.IDLE/4.png',
            'img/1.Sharkie/1.IDLE/5.png',
            'img/1.Sharkie/1.IDLE/6.png',
            'img/1.Sharkie/1.IDLE/7.png',
            'img/1.Sharkie/1.IDLE/8.png',
            'img/1.Sharkie/1.IDLE/9.png',
            'img/1.Sharkie/1.IDLE/10.png',
            'img/1.Sharkie/1.IDLE/11.png',
            'img/1.Sharkie/1.IDLE/12.png',
            'img/1.Sharkie/1.IDLE/13.png',
            'img/1.Sharkie/1.IDLE/14.png',
            'img/1.Sharkie/1.IDLE/15.png',
            'img/1.Sharkie/1.IDLE/16.png',
            'img/1.Sharkie/1.IDLE/17.png',
            'img/1.Sharkie/1.IDLE/18.png',            
        ];

        IMAGES_LONG_IDLE = [
            'img/1.Sharkie/2.Long_IDLE/i1.png',
            'img/1.Sharkie/2.Long_IDLE/i2.png',
            'img/1.Sharkie/2.Long_IDLE/i3.png',
            'img/1.Sharkie/2.Long_IDLE/i4.png',
            'img/1.Sharkie/2.Long_IDLE/i5.png',
            'img/1.Sharkie/2.Long_IDLE/i6.png',
            'img/1.Sharkie/2.Long_IDLE/i7.png',
            'img/1.Sharkie/2.Long_IDLE/i8.png',
            'img/1.Sharkie/2.Long_IDLE/i9.png',
            'img/1.Sharkie/2.Long_IDLE/i10.png',
            'img/1.Sharkie/2.Long_IDLE/i11.png',
            'img/1.Sharkie/2.Long_IDLE/i12.png',
            'img/1.Sharkie/2.Long_IDLE/i13.png',
            'img/1.Sharkie/2.Long_IDLE/i14.png',        
        ];

        IMAGES_LONG_IDLELOOP = [
            'img/1.Sharkie/2.Long_IDLE/i11.png',
            'img/1.Sharkie/2.Long_IDLE/i12.png',
            'img/1.Sharkie/2.Long_IDLE/i13.png',
            'img/1.Sharkie/2.Long_IDLE/i14.png',        
        ];

    world;

    offset = {
        top:60,
        left:30,
        right:30,
        bottom:30
    };

    swim_sound = new Audio('audio/swim.mp3')
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK_FIN);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_POISEN);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLELOOP);
        this.x = 10;
        this.y = 200;
        this.speed = this.speed * 80;

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.swim_sound.pause()
            } else if (this.world.keyboard.right && this.x < this.world.level.level_end_x + 390 && !this.world.keyboard.space && !this.world.keyboard.d) {
               this.swimRight();
               this.otherDirection = false;
               this.swim_sound.play();
            } else if (this.world.keyboard.left && this.x > -680 && !this.world.keyboard.space && !this.world.keyboard.d ) {
               this.swimLeft();
               this.otherDirection = true;
               this.swim_sound.play();
            } else if (this.world.keyboard.top && this.y > -70  && !this.world.keyboard.space && !this.world.keyboard.d) {
                this.swimTop(); 
                this.swim_sound.play();
            } else if (this.world.keyboard.down && this.y < 330  && !this.world.keyboard.space && !this.world.keyboard.d) {
                this.swimDown();
                this.swim_sound.play();
            } else {
                this.swim_sound.pause()
            }

            this.moveCamera()
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) { 
                if (this.count !== this.IMAGES_DEAD.length-1 && this.energy == 0) {
                    this.swim_sound.pause()           
                    this.animateDead();   
                }   
            } else if (this.world.keyboard.space) { 
                this.finAttack();
            } else if (this.world.keyboard.d) {
                if (this.count == 6) {
                    this.world.checkTrowableObjects();
                }    
                this.bubbleTrap();            
            }
        }, 60);

        setInterval(() => {    
         if (this.count == 0 && this.energy > 0 && this.checkIfAnyKeyPressed()) {
                this.swimAnimation();
            } else if(!this.isDead() && Date.now() - this.timeCount <= 5000){
                this.idleAnimation(this.IMAGES_IDLE)
            } else if(!this.isDead() && Date.now() - this.timeCount <= 7250) {
                this.idleAnimation(this.IMAGES_LONG_IDLE)
            } else if(!this.isDead()) {
                this.idleAnimation(this.IMAGES_LONG_IDLELOOP)
            }
        }, 250);            
    }

    finAttack() {
        this.playAnimationOnes(this.IMAGES_ATTACK_FIN);         
        this.count++;  

        if (this.count == this.IMAGES_ATTACK_FIN.length ) {                    
            this.world.keyboard.space = false;
            this.count = 0;                                                   
        }  
    }

    bubbleTrap() {
        this.playAnimationOnes(this.IMAGES_BUBBLE_TRAP);         
        this.count++;  

        if (this.count == this.IMAGES_BUBBLE_TRAP.length ) {                    
            this.world.keyboard.d = false;
            this.count = 0;                                              
        }  
    }

    animateDead() {
        this.count++;
        this.playAnimationOnes(this.IMAGES_DEAD);   
    }

    animateHitPoisen() {        
        this.playAnimation(this.IMAGES_HIT_POISEN);
    }

    swimAnimation() {
        if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.top || this.world.keyboard.down) {
            this.playAnimation(this.IMAGES_SWIM);
        }; 
    };

    idleAnimation(IMAGES) {
        if (!this.checkIfAnyKeyPressed()) {
            this.playAnimation(IMAGES)
        }
    }

    checkIfAnyKeyPressed() {
        if (this.world.keyboard.top || this.world.keyboard.down || this.world.keyboard.left || this.world.keyboard.right || this.world.keyboard.space || this.world.keyboard.d) {
            this.timeCount = Date.now();
            return true
        } else {
            return false
        }
    }

    selectHitAnimation(enemy) {
        if((enemy instanceof Enemy || enemy instanceof Endboss) && this.isHurt()){
            this.animateHitPoisen()
         }
    }
}