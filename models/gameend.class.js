class Gameend extends MoveableObject{

    currentImage = 0;

    typeLoose = {
        IMAGE :'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        IMAGES : [
            'img/6.Botones/Tittles/Game Over/Recurso 9.png',
            'img/6.Botones/Tittles/Game Over/Recurso 10.png',
            'img/6.Botones/Tittles/Game Over/Recurso 11.png',
            'img/6.Botones/Tittles/Game Over/Recurso 12.png',
            'img/6.Botones/Tittles/Game Over/Recurso 13.png',
        ]
    }

   typeWin = {
        IMAGE : 'img/6.Botones/Tittles/You win/Recurso 19.png',
        IMAGES : [
            'img/6.Botones/Tittles/You win/Recurso 19.png',
            'img/6.Botones/Tittles/You win/Recurso 20.png',
            'img/6.Botones/Tittles/You win/Recurso 21.png',
            'img/6.Botones/Tittles/You win/Recurso 22.png', 
        ]
   }

    width = 339;
    height = 89;

    constructor(typ) {
        super().loadImage(this.setType(typ).IMAGE)
        this.loadImages(this.setType(typ).IMAGES)
        this.loadImages(this.setType(typ).IMAGES)

        this.x = 191;
        this.y = 239;
        this.animate(typ)
    }

    /**
     * animate the ImageSet
     * 
     * @param {boolean} typ - true  = win / false = loose
     */
    animate(typ) {
        setInterval(() => {
            this.playAnimation(this.setType(typ).IMAGES)
        }, 250);
    }

    /**
     * set the ImagesSet for win or Loose
     * 
     * @param {boolean} typ - true  = win / false = loose
     * @returns 
     */
    setType(typ) {
        if (typ == true) {
            return this.typeWin
        } else if (typ == false) {
            return this.typeLoose
        }
    }
}