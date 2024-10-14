class Enemy extends MoveableObject {

    height = 80;
    width = 90;
    currentImage = 0;
    count = 0;
    

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_BLOW_UP = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];
    

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_BLOW_UP);

        this.x = 300 + Math.random() * 500;
        this.y = Math.random() * 405;
        this.speed = 0.15 + Math.random() * 0.25;
        
        this.animate();  
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds     
     */
    animate() {
        /**
         * intervall to check which animation should be shown in cancas 
         */
        this.setStoppableInterval(() => { 
            if (!this.contactToCharacter) {
                this.playAnimation(this.IMAGES_SWIM);
            } else {
                this.collideWithCharacter()
            }            
        }, 150);  

        /**
         * intervall for change the position of enemy
         */
        this.setStoppableInterval(() => {
            if (!this.contactToCharacter) {
                this.swimLeft();
            }            
        }, 1000 / 60); 
    }

    /**
     * Play animation for blowup , when the enemie get contact with the Character.
     */
    collideWithCharacter() {
        this.playAnimationOnes(this.IMAGES_BLOW_UP);
        this.count++;

        if (this.count == this.IMAGES_BLOW_UP.length ) {                    
            this.contactToCharacter = false
            this.count = 0;                                              
        } 
    }
}