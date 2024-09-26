class Character extends MoveableObject{

    x;
    y;
    height = 170;
    width = 200;

    IMAGES_SWIM = [
            'img/1.Sharkie/3.Swim/1.png',
            'img/1.Sharkie/3.Swim/2.png',
            'img/1.Sharkie/3.Swim/3.png',
            'img/1.Sharkie/3.Swim/4.png',
            'img/1.Sharkie/3.Swim/5.png',
            'img/1.Sharkie/3.Swim/6.png'
        ];
    world;

    swim_sound = new Audio('audio/swim.mp3')
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 10;
        this.y = 200;
        this.speed = this.speed * 120
        this.animate();
    }

    animate() {
        setInterval(() => {
            
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x + 390) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swim_sound.play();
            } else if (this.world.keyboard.left && this.x > -680) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swim_sound.play();
            } else if (this.world.keyboard.top && this.y > -70) {
                this.y -= this.speed;
                this.swim_sound.play();
            } else if (this.world.keyboard.down && this.y < 330) {
                this.y += this.speed;
                this.swim_sound.play();
            } else {
                this.swim_sound.pause()
            }
            if (this.x > this.world.level.level_end_x) {
                
            } else if (this.x < -590) {
                
            } else {
                this.world.camera_x = -this.x +110;
            }

        }, 1000 / 60);

        setInterval(() => { 
            if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.top || this.world.keyboard.down) {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 250);    
    }

    jump() {

    }
}