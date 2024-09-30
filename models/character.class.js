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

    world;

    swim_sound = new Audio('audio/swim.mp3')
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_ATTACK_FIN);
        this.x = 10;
        this.y = 200;
        this.speed = this.speed * 80;
        // this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {

             if (this.world.keyboard.right && this.x < this.world.level.level_end_x + 390 && !this.world.keyboard.space) {
                this.swimRight();
             } else if (this.world.keyboard.left && this.x > -680 && !this.world.keyboard.space) {
                this.swimLeft();
             } else if (this.world.keyboard.top && this.y > -70  && !this.world.keyboard.space) {
                this.swimTop(); 
             } else if (this.world.keyboard.down && this.y < 330  && !this.world.keyboard.space) {
                this.swimDown();
            } else {
                 this.swim_sound.pause()
            }   

            if (this.x > this.world.level.level_end_x || this.x < -590) {
                
            } else {
                this.world.camera_x = -this.x +110;
            }

        }, 1000 / 60);


        setInterval(() => {    
            if (this.world.keyboard.space) { 
                this.finAttack();
            } 
        }, 60); 

        setInterval(() => {    
         if (!this.world.keyboard.space && this.count == 0) {
                this.swimAnimation();
            }  
        }, 250);    
        
    }

    finAttack() {
        this.playAttackAnimation(this.IMAGES_ATTACK_FIN)         
        this.count++  

        if (this.count == this.IMAGES_ATTACK_FIN.length ) {                    
            this.world.keyboard.space = false;
            this.count = 0;                                                   
        }  
    }

    swimAnimation() {
        if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.top || this.world.keyboard.down) {
            this.playAnimation(this.IMAGES_SWIM);
        }; 
    };

    swimRight(){
        this.x += this.speed;
        this.otherDirection = false;
        this.swim_sound.play();
    };

    swimLeft(){
        this.x -= this.speed;
        this.otherDirection = true;
        this.swim_sound.play();
    };

    swimTop() {
        this.y -= this.speed;
        this.swim_sound.play();
    }

    swimDown() {
        this.y += this.speed;
        this.swim_sound.play();
    }
}