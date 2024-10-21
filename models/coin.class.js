class Coin extends MoveableObject {

    height = 50;
    width = 50;

    type = {
        IMGAGE : [
            'img/4. Marcadores/1. Coins/1.png',
            'img/4. Marcadores/1. Coins/2.png',
            'img/4. Marcadores/1. Coins/3.png',
            'img/4. Marcadores/1. Coins/4.png',            
        ]
    }
       
    offset = {
        top:0,
        left:0,
        right:0,
        bottom:0
    };     

    constructor(x,y) {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.type.IMGAGE);

        this.x = x;
        this.y = y;

        this.animate()
    }

    /**
     * Play the Animation intetvall vor coin
     */
    animate() {
        this.setStoppableInterval(() => {
            this.playAnimation(this.type.IMGAGE)
        },150)
    }
}