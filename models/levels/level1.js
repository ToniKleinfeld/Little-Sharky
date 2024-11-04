let level1;

function InitLevel() {
    level1 = new level(
        [
            new Enemy(1,300),
            new Enemy(2,1500),
            new Enemy(3,2500),
            new Enemy(1,600),
            new Enemy(2,1800),
            new Enemy(3,3000),
            new Enemy(1,900),
            new Enemy(2,1400),
            new Enemy(3,2600),
            new EnemyTwo(1,600),
            new EnemyTwo(2,1400),
            new EnemyTwo(3,2200),
            new EnemyTwo(4,2800),
            new EnemyTwo(1,400),
            new EnemyTwo(2,1200),
            new EnemyTwo(3,2000),
            new EnemyTwo(4,1800),
            new EnemyTwo(3,2000),
            new EnemyTwo(4,2500),            
            new Endboss(),
        ],
        [   
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -719 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -719 ,0),        
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -719 ,0), 
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0 ,0), 
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0 ,0),
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 ,0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 ,0),
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*2 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*2 ,0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*2 ,0),
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*3 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*3 ,0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*3 ,0),
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719*4 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719*4 ,0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719*4 ,   0),
    
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719*5 ,0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719*5 ,0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719*5 ,0),
        ],
        [
            new Light('img/3. Background/Layers/1. Light/1.png',920 ,0),
            new Light('img/3. Background/Layers/1. Light/2.png',2360,0),
        ],
        [   
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D2.png', -720 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D1.png', 0 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D2.png', 720 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D1.png', 720*2 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D2.png', 720*3 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D1.png', 720*4 ,0),
            new Backgroundfloor('img/3. Background/Layers/2. Floor/D2.png', 720*5 ,0),    
        ],
        [
            new Coin(900,50),
            new Coin(970,20),
            new Coin(1040,-10),
            new Coin(1110,20),
            new Coin(1180,50),

            new Coin(2400,350),
            new Coin(2470,320),
            new Coin(2540,290),
            new Coin(2610,320),
            new Coin(2680,350),
        ],
        [
            new Poisenbottle(1510,350),
            new Poisenbottle(1580,320),
            new Poisenbottle(1650,290),
            new Poisenbottle(1710,320),
            new Poisenbottle(1780,350),

            new Poisenbottle(2850,50),
            new Poisenbottle(2920,20),
            new Poisenbottle(2990,-10),
            new Poisenbottle(3060,20),
            new Poisenbottle(3130,50),
        ],
    )
}

