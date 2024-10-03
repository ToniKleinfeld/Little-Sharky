class MoveableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;

    swimLeft() {        
        this.x -= this.speed;               
    }

    swimRight(){
        this.x += this.speed;
    };

    swimTop() {
        this.y -= this.speed;
    }

    swimDown() {
        this.y += this.speed;
    }

    moveCamera() {
        if (this.x > this.world.level.level_end_x || this.x < -590) {                
        } else {
            this.world.camera_x = -this.x +110;
        }
    }

    playAnimation(IMAGES) {
            let i = this.currentImage % IMAGES.length;
            let path = IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++        
    }

    playAnimationOnes(IMAGES) {
        let i = this.count;
        let path = IMAGES[i];
        this.img = this.imageCache[path];         
    }

      isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
      }

      hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit =  new Date().getTime();
        }
      }

      isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //ms
        timepassed = timepassed / 1000; //sec
        return timepassed < 0.5;
      }

      isDead() {
        return this.energy == 0;
      }
}