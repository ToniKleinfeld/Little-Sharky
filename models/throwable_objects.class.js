class ThrowableObjects extends MoveableObject {

    speedX = 20;
    startX;

    constructor(x,y,direction){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.width = 50;
        this.height = 50;
        this.y = y + 85;
        this.x = this.checkDirectionOfX(direction,x);
        this.trow(direction)
        this.startX = this.x
    }

    trow(direction) {        
        this.setStoppableInterval(() => {
            this.checkTrwowAbleObjectDirection(direction);            
        },10);
    }

    checkDirectionOfX(direction,x) {
        if (!direction) {
           return x + 150;     
        } else {
            return x
        }
    }

    checkTrwowAbleObjectDirection(direction) {
        if (!direction) {
            this.x += 5;
        } else {
            this.x -= 5;
        }
        this.checkMovedDistance()
    }

    checkMovedDistance() {
        if (this.startX + 400 == this.x || this.startX - 400 == this.x) {  
            this.stopIntervall(this.intervalIds[0])
            world.throwableObject.splice(0,1);                                   
        }
    }
}