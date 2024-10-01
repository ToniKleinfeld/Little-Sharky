class darklevel {
    enemies;
    backgroundObjects;
    light;
    backgroundfloor;
    level_end_x = 718*5;

    constructor(enemies, backgroundObjects, light, backgroundfloor) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.light = light;
        this.backgroundfloor = backgroundfloor;
    }
}