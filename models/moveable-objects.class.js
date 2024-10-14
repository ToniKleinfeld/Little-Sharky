class MoveableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    intervalIds = [];
    contactToCharacter = false;

    offset = {
        top:0,
        left:0,
        right:0,
        bottom:0
    };

    /**
     * add the x speed value of class to the position of class (x)
     */
    swimLeft() {        
        this.x -= this.speed;               
    }

    /**
     * add the x speed value of class to the position of class (x)
     */
    swimRight(){
        this.x += this.speed;
    };

    /**
     * add the y speed value of class to the position of class (y)
     */
    swimTop() {
        this.y -= this.speed;
    }

    /**
     * add the y speed value of class to the position of class (y)
     */
    swimDown() {
        this.y += this.speed;
    }

    /**
     * let the Caamera move with the Char position x , when not near of world start/end
     */
    moveCamera() {
        if (this.x > this.world.level.level_end_x || this.x < -590) {                
        } else {
            this.world.camera_x = -this.x +110;
        }
    }

    /**
     * Calls the pictures from Array to show the animation on screen, restart it when last image is shown
     * 
     * @param {Array} IMAGES 
     */
    playAnimation(IMAGES) {
            let i = this.currentImage % IMAGES.length;
            let path = IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++        
    }

    /**
     * play the Animation only ones
     * 
     * @param {Array} IMAGES 
     */
    playAnimationOnes(IMAGES) {
        let i = this.count;
        let path = IMAGES[i];
        this.img = this.imageCache[path];         
    }
    
    /**
     * check if the object get in touch each other
     * 
     * @param {string} mo -value from object
     * @returns true or false
     */
    isColliding(mo) {
      return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * reduce energy by 10 , set it to 0 when engergy get below 0 and set lastHit current time 
     */
    hit() {
      this.energy -= 10;
      if (this.energy < 0) {
          this.energy = 0;
      } else {
          this.lastHit =  new Date().getTime();
      }
    }

    /**
     * get the time beweeen lasthit time and current time
     * 
     * @returns true or false
     */
    isHurt() {
      let timepassed = new Date().getTime() - this.lastHit; //ms
      timepassed = timepassed / 1000; //sec
      return timepassed < 0.5;
    }

    /**
     * check if engery is 0
     * 
     * @returns true or false
     */
    isDead() {
      return this.energy == 0;
    }
    
    /**
     * wrapper for setIntervall , pushed into an array , to get the id to stop them , when wanted
     * 
     * @param {Function} fn - what should happen in intervall
     * @param {number} time - time to repead the function
     */
    setStoppableInterval(fn,time) {
      let id = setInterval(fn,time);
      this.intervalIds.push(id);
    }

    /**
     * stop the intervall with current id
     * 
     * @param {number} id 
     */
    stopIntervall(id) {        
         clearInterval(id) 
    }
}