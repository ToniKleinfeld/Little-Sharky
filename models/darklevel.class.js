class darklevel {
    enemies;
    backgroundObjects;
    light;
    backgroundfloor;
    backgroundmusic;
    level_end_x = 718*5;

    constructor(enemies, backgroundObjects, light, backgroundfloor, backgroundmusic) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.light = light;
        this.backgroundfloor = backgroundfloor;
        this.backgroundmusic = backgroundmusic;
    }
}