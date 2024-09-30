class Light extends MoveableObject {
    width = 720*2;
    height = 480;
    speed = 0.05;

    constructor(ImagePath,x,y) {
        super().loadImage(ImagePath);

        this.x = x;
        this.y = y;

        this.swimLeft();
    }

    swimLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);        
    }
}