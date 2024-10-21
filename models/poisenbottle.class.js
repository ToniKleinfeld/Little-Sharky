class Poisenbottle extends MoveableObject {

    height = 60;
    width = 60;

    dark = {
        IMGAGE : [
           'img/4. Marcadores/Posión/Dark - Left.png',
           'img/4. Marcadores/Posión/Dark - Right.png',          
        ]
    };

    light = {
        IMGAGE : [
           'img/4. Marcadores/Posión/Light - Left.png',
           'img/4. Marcadores/Posión/Light - Right.png',          
        ]
    };

    typ = this.dark;
       
    offset = {
        top:0,
        left:0,
        right:0,
        bottom:0
    };     

    constructor(x,y,typ) {
        super().loadImage(this.setTyp(typ).IMGAGE[0]);
        this.loadImages(this.typ.IMGAGE);

        this.x = x;
        this.y = y;

        this.animate()
    }

    /**
     * Play the Animation intetvall vor coin
     */
    animate() {
        this.setStoppableInterval(() => {
            this.playAnimation(this.typ.IMGAGE)
        },750)
    }

    /**
     * Get the type for level design
     * 
     * @param {string} typ - get string from level 
     * @returns typ
     */
    setTyp(typ) {
        if (typ == 'dark' ) {
            this.typ = this.dark;
            return this.dark
        } else if(typ == 'light') {
            this.typ = this.light;
            return this.light
        }
    }
}