class Character extends MoveableObject{

    x;
    y;
    height = 170;
    width = 200;
    count = 0;

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

    world;

    swim_sound = new Audio('audio/swim.mp3')
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK_FIN);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HIT_POISEN);
        this.x = 10;
        this.y = 200;
        this.speed = this.speed * 80;

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.swim_sound.pause()
            } else if (this.world.keyboard.right && this.x < this.world.level.level_end_x + 390 && !this.world.keyboard.space) {
               this.swimRight();
               this.otherDirection = false;
               this.swim_sound.play();
            } else if (this.world.keyboard.left && this.x > -680 && !this.world.keyboard.space) {
               this.swimLeft();
               this.otherDirection = true;
               this.swim_sound.play();
            } else if (this.world.keyboard.top && this.y > -70  && !this.world.keyboard.space) {
                this.swimTop(); 
                this.swim_sound.play();
            } else if (this.world.keyboard.down && this.y < 330  && !this.world.keyboard.space) {
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
            } else if (this.isHurt()) {
                this.animateHitPoisen();
            } else if (this.world.keyboard.space) { 
                this.finAttack();
            }
        }, 60);

        setInterval(() => {    
         if (!this.world.keyboard.space && this.count == 0 && this.energy > 0) {
                this.swimAnimation();
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
}