let canvas;
let world;
let keyboard = new Keyboard();
let sounds = new Sounds();
let volumeStatus = 'on';
let fullscreen = false;

/**
 * load, the startscreen , when dom is loaded
 */
function init() {    
    canvas = document.getElementById('canvas');
    world = new StartScreen(canvas,sounds,volumeStatus);
    addEventListenerFunctions(canvas);
    hideContainer('mobilecontrolls');
}

/**
 * function , where all eventlistener are collectet
 * 
 * @param {string} canvas - path of the cancas
 */
function addEventListenerFunctions(canvas) {
    canvas.addEventListener("click", function(){startSound();});
    canvas.addEventListener("touchstart",function(){startSound();});
}

/**
 * Start the game , change the world from startscreen to world
 */
function startGame() {
    stopMusic();
    canvas = document.getElementById('canvas');
    InitLevel(); // load level 1 <-- use later for start button when overlay designed
    world = new World(canvas, keyboard, sounds, volumeStatus);
    hideContainer('mobilecontrolls');
    hideContainer('startcontainer');
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

/**
 * set value to true when click on canvas ,to start background music
 */
function startSound() {
    world.UserInteractWithSideforSounds = true;
}

/**
 * Stop the backgroundmusic from Startscreen
 */
function stopMusic() {
    if (world.UserInteractWithSideforSounds == !undefined) {
        world.UserInteractWithSideforSounds = false;
        world.sounds.playSound('backgroundmusic','dark','pause') 
    }
}

/**
 * function to toogle button and mute unmute sounds
 */
function muteGame() {
    const img = document.getElementById('mute');
    img.classList.toggle('mute');
    img.classList.toggle('nomute');
    world.sounds.playSound('backgroundmusic','dark','pause') 

    if (volumeStatus == 'on') {
        sounds.soundsOff()
        volumeStatus = 'off';
    } else if(volumeStatus == 'off') {
        sounds.soundsOn();
        volumeStatus = 'on';
    }
    world.sounds.playSound('backgroundmusic','dark','play') 
}

/**
 * toggle between fullscreen and window screen
 */
function changeSize() {
    const img = document.getElementById('fullscreen');
    const content = document.getElementById('fullscreencontainer');
    const canvasscreen = document.getElementById('canvas');

    img.classList.toggle('smallscreen');
    img.classList.toggle('fullscreen');

    if (!fullscreen) {
        enterFullscreen(content)
        canvasscreen.classList.toggle('fullscreencanvas');
        return fullscreen = true
    } else if (fullscreen) {
        exitFullscreen()
        canvasscreen.classList.toggle('fullscreencanvas');
        return fullscreen = false
    }
}

/**
 * enter fullscreen
 *  
 * @param {string} content - id from html element
 */
function enterFullscreen(content) {
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if(content.webkitRequestFullscreen) {
        content.webkitRequestFullscreen();
    }
}

/**
 *  Close Fullscreen
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function showInfoContainer() {
    
    const start = document.getElementById('startgame');
    const infocontainer = document.getElementById('infocontainer');

    start.classList.toggle('d-none');
    infocontainer.classList.toggle('d-none')
    toggleInfobutton(infocontainer)
    
}

/**
 * toggle the icon in the info button
 * 
 * @param {string} infos - dom path to infocontainer
 */
function toggleInfobutton(infos) {
    const button = document.getElementById('infos');    
    
    if (infos.classList[2] == 'd-none') {
        button.innerHTML = '?'
    } else {
        button.innerHTML = 'x'
    }
}

/**
 * Hide Div container , based on world instance
 * 
 * @param {string} path - id from div container
 */
function hideContainer(path) {
    const controlls = document.getElementById(path);
    
    if (world instanceof StartScreen) {
        controlls.classList.add('d-none');
    } else if (world instanceof World) {
        controlls.classList.toggle('d-none');
    }
}

function loadContent(keyword) {
    const content = document.getElementById('infocontent');

    content.innerHTML = contentHTML(keyword);
}

function contentHTML(keyword){
    switch (keyword) {
        case 'How to Play':
            return /*html*/`
                <p>Fin attack is effective agains puffer fishes.</p>
                <p>Bubble attack is good against jellys.</p>
                <p>If you collectet poisen it is automticly used against the wale.</p>
                <p>The wale only weakness are poisened bubbles.</p>
                <p>Each level contains 10 coins.</p>
            `

        case 'Impressum':
            return /*html*/`
                test 2
            `

        case 'Privacy':
            return /*html*/`
                test 3
            `
    
        default:
            break;
    }
}
