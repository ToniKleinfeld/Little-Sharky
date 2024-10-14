class Endboss extends MoveableObject {

    height = 320;
    width = 350;    

    IMAGES_SPAWN = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    firstContact;
    spawnAnimation;
    
    offset = {
        top:90,
        left:15,
        right:20,
        bottom:40
    };
    
    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png')
        this.loadImages(this.IMAGES_SPAWN);
        this.loadImages(this.IMAGES_FLOATING);

        this.x = 3800;
        this.y = 0;
        this.firstContact = false;
        this.spawnAnimation = 10;

        this.animate();
    }

    /**
     *repead calls the if stated to check for changes for current Animations and sounds     
     */
    animate() {
        /**
         * this intervall check which animation should be displayed
         */
        this.setStoppableInterval(() => {
           this.firstContactBoss();
            if (this.spawnAnimation < 10) {
                this.playAnimation(this.IMAGES_SPAWN)            
            } else if (this.firstContact) {
                this.playAnimation(this.IMAGES_FLOATING); 
            }
        this.spawnAnimation++
        }, 150);   
    }

    /**
     * check if char is near the boss first time, and reset the animation counter to zero and set first contact to true when meet
     */
    firstContactBoss() { 
        if (world.character.x > 3200 && !this.firstContact) {
            this.firstContact = true; 
            this.spawnAnimation = 0;                        
        }   
    } 
}