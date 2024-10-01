class MoveableObject {
    x;
    y;
    img;
    height;
    width;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemy) { 
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width ,this.height );
        ctx.stroke();
        }
    }

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

    playAttackAnimation(IMAGES) {
        let i = this.count;
        let path = IMAGES[i];
        this.img = this.imageCache[path];         
    }

}