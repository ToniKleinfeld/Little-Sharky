class Poisenbottle extends MoveableObject {

    height = 60;
    width = 60;

    typ = {
        IMGAGE : [
           'img/4. Marcadores/Posión/Animada/1.png',
           'img/4. Marcadores/Posión/Animada/2.png',    
           'img/4. Marcadores/Posión/Animada/3.png',
           'img/4. Marcadores/Posión/Animada/4.png',
           'img/4. Marcadores/Posión/Animada/5.png',
           'img/4. Marcadores/Posión/Animada/6.png',
           'img/4. Marcadores/Posión/Animada/7.png',
           'img/4. Marcadores/Posión/Animada/8.png',          
        ]
    };
       
    offset = {
        top:0,
        left:0,
        right:0,
        bottom:0
    };     

    constructor(x,y) {
        super().loadImage(this.typ.IMGAGE[0]);
        this.loadImages(this.typ.IMGAGE);

        this.x = x;
        this.y = y;

        this.animate()
    }

    /**
     * Play the Animation intetvall for coins
     */
    animate() {
        this.setStoppableInterval(() => {
            this.playAnimation(this.typ.IMGAGE)
        },150)
    }
}