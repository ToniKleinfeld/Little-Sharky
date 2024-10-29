class Gamewin extends MoveableObject {

    width = 720;
    height= 480;

    gameWin = 'img/6.Botones/Tittles/You win/Mesa de trabajo 1.png';

    constructor() {
        super().loadImage(this.gameWin)
        this.x = 0;
        this.y = 0;
    }
}