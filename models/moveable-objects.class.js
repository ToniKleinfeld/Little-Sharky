class MoveableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    intervalIds = [];

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

    offset = {
        top:0,
        left:0,
        right:0,
        bottom:0
    };

      isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
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

      setStoppableInterval(fn,time) {
        let id = setInterval(fn,time);
        this.intervalIds.push(id);
    }
}