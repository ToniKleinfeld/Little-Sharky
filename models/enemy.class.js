class Enemy extends MoveableObject {

    height = 80;
    width = 90;

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')

        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 405;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.5;
        }, 1000 / 60);
        
    }
}