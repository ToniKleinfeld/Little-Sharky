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
        currentImage = 0;
    

    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png')
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[i];
            this.img = this.imageCache[path];
            this.currentImage++
        }, 250);

    }

    jump() {

    }
}