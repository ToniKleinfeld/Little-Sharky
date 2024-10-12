let level1;

function InitLevel() {
    level1 = new darklevel(
        [
            new Enemy(),
            new Enemy(),
            new Enemy(),
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
            new Audio('audio/levelsound.mp3'),
        ]
    )
}

