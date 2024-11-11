class BossEnergy extends MoveableObject{

    IMAGES_BOSSHP = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_ copia 2.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png'        
    ];

    precentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOSSHP);
        this.x = world.level.enemies[world.filterEnemiesForBossId()].x + 70;
        this.y = world.level.enemies[world.filterEnemiesForBossId()].y + 40;
        this.height = 30;
        this.width = 108;
        this.setPrecentage(100);

        this.animate();
    }

    /**
     * refresh the position of the Bosshealthbar and checkcurrent energy
     */
    animate() {
        this.setStoppableInterval(() => {this.setNewPosition();this.checkLife();}, 75);
    }

    /**
     * 
     */
    setNewPosition() {
        this.x = world.level.enemies[world.filterEnemiesForBossId()].x + 70;
        this.y = world.level.enemies[world.filterEnemiesForBossId()].y + 40;
    }

    /**
     * check the current Boss enegry and call function to drawn eceptet Image 
     */
    checkLife() {
        const currentLife = world.level.enemies[world.filterEnemiesForBossId()].energy;
        this.setPrecentage(currentLife);
    }


    /**
     * Set the current draw image to current precentage
     * 
     * @param {number} precentage - get the current precentage
     */
    setPrecentage(precentage) {
        this.precentage = precentage;
        let path = this.IMAGES_BOSSHP[this.resolveImageIndex()]
        this.img = this.imageCache[path]
    }

    /**
     * Get the image number for current status per precentage hight
     * 
     * @returns number 
     */
    resolveImageIndex() {
        if (this.precentage == 100) {
           return 5; 
        } else if(this.precentage == 80) {
            return 4;
        } else if(this.precentage == 60) {
            return 3;
        } else if(this.precentage == 40) {
            return 2;
        } else if(this.precentage == 20) {
            return 1;
        } else {
            return 0;
        }
    } 


}