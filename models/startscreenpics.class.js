class Startscreenpics extends DrawableObject{


    constructor(ImagePath,x,y,width,height){
        super().loadImage(ImagePath);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}