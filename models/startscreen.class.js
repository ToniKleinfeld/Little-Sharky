class StartScreen{
    ctx;
    canvas;
    UserInteractWithSideforSounds = false;
    intervall;
    sounds;
    
    pics = [
        new Startscreenpics('img/3. Background/Mesa de trabajo 1.png', -15, 0, 850, 480),
        new Startscreenpics('img/6.Botones/Key/arrow keys.png', 40, 35 , 95 , 55),
        new Startscreenpics('img/6.Botones/Key/D key.png', 270, 40 , 38 , 38),
        new Startscreenpics('img/6.Botones/Key/Space Bar key.png', 450, 50 , 140 , 30),
    ];

    constructor(canvas,sounds,volumeStatus){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.sounds = sounds;
        this.volumeStatus = volumeStatus;
        this.draw();
        this.playBackgroundMusic();
    }

    /**
     * Function to add all object to canvas , when game starts
     */
    draw() {
        this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height); 

        this.ctx.shadowColor = "grey";
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 5;

        this.addObjectsToMap(this.pics); 
        this.setTextForKeyboard()

        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 0;

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        }); 
    }

    /**
     * Draw the Img to the canvas
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
                this.sounds.playSound('backgroundmusic','dark','play')
            } 
        }, 1000/60);
    }

    /**
     * Insert text elements to the Canvas
     */
    setTextForKeyboard() {
        const grad = this.ctx.createLinearGradient(0,0,280,0);
        grad.addColorStop(0, "darkblue");
        grad.addColorStop(1, "purple");

        this.ctx.font = '22px luckiestguy ';
        this.ctx.strokeStyle = grad;
        this.ctx.fillStyle = 'white';

        this.ctx.strokeText('Move Sharky',15,110);
        this.ctx.strokeText('Fin Attack',465,105);
        this.ctx.strokeText('Bubble Attack',220,100);

        this.ctx.fillText('Move Sharky',15,110);
        this.ctx.fillText('Fin Attack',465,105);
        this.ctx.fillText('Bubble Attack',220,100);
    }
}

