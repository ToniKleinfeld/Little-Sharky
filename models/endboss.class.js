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

    animate() {
        
        setInterval(() => {  

           this.firstContactBoss();

            if (this.spawnAnimation < 10) {
                this.playAnimation(this.IMAGES_SPAWN)            
            } else if (this.firstContact) {
                this.playAnimation(this.IMAGES_FLOATING); 
            }  

        this.spawnAnimation++
        }, 250);   
    }

    firstContactBoss() { 
        if (world.character.x > 3400 && !this.firstContact) {
            this.firstContact = true; 
            this.spawnAnimation = 0;                        
        }   
    } 
}