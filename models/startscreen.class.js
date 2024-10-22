class StartScreen {
    ctx;
    canvas;
    start;
    arrowkeys;
    attackkeys;
    fullscreen; 
    UserInteractWithSideforSounds = false;
    intervall;

    backgroundmusic = new Audio('audio/levelsound.mp3'); 

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw()
        this.playBackgroundMusic() 
    }

    /**
     * Function to add all object to canvas , when game starts
     */
    draw() {
        this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height);


        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });      
    }

    /**
     * Draw the Img to the canvas , check if the image should be flip
     * 
     * @param {string} mo - string from object -> image path
     */
    addToMap(mo){
        mo.draw(this.ctx)    
    }

    /**
     * take an Objekt and call for every string addToMap function
     * 
     * @param {string} object - string from object -> image path
     */
    addObjectsToMap(object) {
        object.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * play the backgroundmusic , when the user clicked on canvas
     */
    playBackgroundMusic() {
        this.intervall = setInterval(() => {
            if (this.UserInteractWithSideforSounds) {
                this.backgroundmusic.play();  
            } 
        }, 1000/60);
    }
}

