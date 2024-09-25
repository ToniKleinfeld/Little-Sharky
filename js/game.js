let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

document.addEventListener('keydown', (e) => {   
    if (e.keyCode == 39) {
        keyboard.right = true;        
    } else if (e.keyCode == 38) {
        keyboard.top = true;
    } else if (e.keyCode == 37) {
        keyboard.left = true;
    } else if (e.keyCode == 40) {
        keyboard.down = true;
    } else if (e.keyCode == 32) {
        keyboard.space = true;
    } else if (e.keyCode == 68) {
        keyboard.d = true;
    } 
})


document.addEventListener('keyup', (e) => {   
    if (e.keyCode == 39) {
        keyboard.right = false;        
    } else if (e.keyCode == 38) {
        keyboard.top = false;
    } else if (e.keyCode == 37) {
        keyboard.left = false;
    } else if (e.keyCode == 40) {
        keyboard.down = false;
    } else if (e.keyCode == 32) {
        keyboard.space = false;
    } else if (e.keyCode == 68) {
        keyboard.d = false;
    } 
})