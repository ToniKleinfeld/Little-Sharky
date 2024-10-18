class ThrowableObjects extends MoveableObject {

    speedX = 20;
    startX;   

    neutral = {
        typ : 'neutral',
        pic : ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png']
    }

    poisen = {
        typ : 'poisen',
        pic : ['img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png']
    }

    bubbleTyp;

    constructor(x,y,direction,typ){
        super().loadImage(this.checkType(typ).pic);
        this.width = 40;
        this.height = 40;
        this.y = y + 85;
        this.x = this.checkDirectionOfX(direction,x);
        this.trow(direction)
        this.startX = this.x
    }

    /**
     * repead check if an trowable object is in array and move it to left or right depending on param direction
     * 
     * @param {boolean} direction - get the info if the char is swim to left
     */
    trow(direction) {        
        this.setStoppableInterval(() => {
            this.checkTrwowAbleObjectDirection(direction);            
        },10); 
    }

    /**
     * set the startpoint of the Bubble depending on swim left or right
     * 
     * @param {boolean} direction - get the info if the char is swim to left
     * @param {number} x - position of startpoint
     * @returns the x or add 150px to x and return new value
     */
    checkDirectionOfX(direction,x) {
        if (!direction) {
           return x + 150;     
        } else {
            return x
        }
    }

    /**
     * Check in witch direction the object is moving ,left or right
     * 
     * @param {boolean} direction - get the info if the char is swim to left
     */
    checkTrwowAbleObjectDirection(direction) {
        if (!direction) {
            this.x += 5;
        } else {
            this.x -= 5;
        }
        this.checkMovedDistance()
    }

    /**
     * check how far the bubble object is moved from startposition and splice is out of array after 400px and stop the call intervall
     */
    checkMovedDistance() {
        if (this.startX + 400 == this.x || this.startX - 400 == this.x) {  
         this.deleteTrowableobject()                     
        }
    }

    deleteTrowableobject() {
        this.stopIntervall(this.intervalIds[0])
        world.throwableObject.splice(0,1);     
    }

    checkType(typ) {
        if (typ == 'neutral') {
            this.bubbleTyp = this.neutral
            return this.neutral
        } else if(typ == 'poisen'){
            this.bubbleTyp = this.poisen
            return this.poisen
        }
    }
}