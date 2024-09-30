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
    // speedY = 0;
    // acceleration = 1;

    // applyGravity(){
    //     setInterval(() => {
    //         if (this.isAboveGround() || this.speedY > 0) {
    //             this.y -= this.speedY;
    //             this.speedx -= this.acceleration;
    //         }
    //     }, 1000/25);
    // }

    // isAboveGround(){

    //     return this.y < 180;
    // }

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

    moveRight() {
        console.log('Moving right')
    }

    swimLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);        
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