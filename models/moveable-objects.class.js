class MoveableObject {
    x;
    y;
    img;
    height;
    width;


    constructor() {

    }

    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right')
    }

    moveLeft() {
        
    }
}