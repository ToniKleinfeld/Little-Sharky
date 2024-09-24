class BackgroundObject extends MoveableObject {

    width = 720;
    height = 480;

    constructor(ImagePath,x,y) {
        super().loadImage(ImagePath);

        this.x = x;
        this.y = y;
    }
}