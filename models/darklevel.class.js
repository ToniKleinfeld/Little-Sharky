class darklevel {
    enemies;
    backgroundObjects;
    light;
    backgroundfloor;
    backgroundmusic;
    coins;
    poisen;
    level_end_x = 718*5;

    constructor(enemies, backgroundObjects, light, backgroundfloor,coins, poisen) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.light = light;
        this.backgroundfloor = backgroundfloor;
        this.coins = coins;
        this.poisen = poisen;
    }
}