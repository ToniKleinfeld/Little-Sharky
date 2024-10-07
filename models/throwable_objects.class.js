class ThrowableObjects extends MoveableObject {

    speedX = 20;

    constructor(x,y,direction){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.width = 50;
        this.height = 50;
        this.y = y + 85;
        this.x = this.checkDirectionOfX(direction,x);
        this.trow(direction)
    }

    trow(direction) {     
        
        setInterval(() => {
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
    }
}