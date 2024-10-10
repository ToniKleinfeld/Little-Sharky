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
    }
})

document.addEventListener('touchstart', (e) => {   
    if (e.target.id == 'rightButton') {
        keyboard.right = true;        
    } else if (e.target.id == 'topButton') {
        keyboard.top = true;
    } else if (e.target.id == 'leftButton') {
        keyboard.left = true;
    } else if (e.target.id == 'downButton') {
        keyboard.down = true;
    } else if (e.target.id == 'spaceButton') {
        keyboard.space = true;
    } else if (e.target.id == 'dButton') {
        keyboard.d = true;
    } 
})

document.addEventListener('touchend', (e) => {  
    if (e.target.id == 'rightButton') {
        keyboard.right = false;        
    } else if (e.target.id == 'topButton') {
        keyboard.top = false;
    } else if (e.target.id == 'leftButton') {
        keyboard.left = false;
    } else if (e.target.id == 'downButton') {
        keyboard.down = false;
    }
})

InitLevel() // load level 1 <-- use later for start button when overlay designed