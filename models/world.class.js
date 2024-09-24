class World {
    character = new Character();
    enemies = [
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ];
    ctx;
    lights = [new Light()];
    floors = [new Floor()];
    backgroundfirstlayer = [new BackgroundLayerOne()];
    backgroundsecondlayer = [new BackgroundLayerTwo()];
    water = [new Water()];

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    };

    draw() {
        this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height);

        this.water.forEach(layer => {
            this.ctx.drawImage(layer.img, layer.x, layer.y,layer.width, layer.height  )
        });

        this.backgroundsecondlayer.forEach(layer => {
            this.ctx.drawImage(layer.img, layer.x, layer.y,layer.width, layer.height  )
        }); 

        this.lights.forEach(light => {
            this.ctx.drawImage(light.img, light.x, light.y,light.width, light.height  )
        }); 

        this.backgroundfirstlayer.forEach(layer => {
            this.ctx.drawImage(layer.img, layer.x, layer.y,layer.width, layer.height  )
        }); 

        this.floors.forEach(floor => {
            this.ctx.drawImage(floor.img, floor.x, floor.y,floor.width, floor.height  )
        }); 

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height)

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y,enemy.width, enemy.height)
        }); 



        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });      
    }
}