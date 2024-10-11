class Enemy extends MoveableObject {

    height = 80;
    width = 90;
    currentImage = 0;
    

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_SWIM);

        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 405;
        this.speed = 0.15 + Math.random() * 0.25;
        
        this.animate();  
    }

    animate() {
        this.setStoppableInterval(() => { 
            this.playAnimation(this.IMAGES_SWIM);
        }, 250);  

        this.setStoppableInterval(() => {
            this.swimLeft();
        }, 1000 / 60); 
    }
}