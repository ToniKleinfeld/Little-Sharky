class Character extends MoveableObject{

    x = 10;
    y = 200;
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
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right) {
                this.x += this.speed * 12;
            } else if (this.world.keyboard.left) {
                this.x -= this.speed * 12;
            } else if (this.world.keyboard.top) {
                this.y -= this.speed * 12;
            } else if (this.world.keyboard.down) {
                this.y += this.speed * 12;
            } 



            
        }, 1000 / 60);

        setInterval(() => { 
            if (this.world.keyboard.right || this.world.keyboard.left || this.world.keyboard.top || this.world.keyboard.down) {

                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++
            }

        }, 250);

    }

    jump() {

    }
}