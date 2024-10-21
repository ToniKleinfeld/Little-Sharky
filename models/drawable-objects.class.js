class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;  
    height;
    width;

    /**
     * function to load the images
     * 
     * @param {string} path - path of the Images , which should be load
     */
    loadImage(path) {
        this.img = new Image(); 
        this.img.src = path;
    }

    /**
     * load every images of a array to the imageCache
     * 
     * @param {Array} arr - Array with the Img pathes
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * method to show the images to the Canvas
     * 
     * @param {string} ctx - value for add images to the canvas
     */
    draw(ctx) {        
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn('Error loading image', e);
            console.log('Could not load Image',)
        }
    }  

    /**
     * draw a Framebox on the Char, enemy and Enboss , get later deleted
     * 
     * @param {string} ctx - value for add images to the canvas
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemy || this instanceof Endboss || this instanceof EnemyTwo || this instanceof Coin) { 
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width ,this.height);
        ctx.stroke();
        }
    }

    /**
     * draw a a smaller Framebox on the Char, enemy and Enboss for hit , get later deleted
     * 
     * @param {string} ctx - value for add images to the canvas
     */
    drawHitframe(ctx) {
        if (this instanceof Character || this instanceof Enemy || this instanceof Endboss || this instanceof ThrowableObjects || this instanceof EnemyTwo) { 
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top , this.width - this.offset.right - this.offset.left, this.height - this.offset.bottom - this.offset.top);
            ctx.stroke();
            }
    }
}