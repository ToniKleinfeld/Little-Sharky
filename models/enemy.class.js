class Enemy extends MoveableObject {

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.height = 100;
        this.width = 100;
        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 405;
    }


}