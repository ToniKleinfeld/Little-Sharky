let canvas;
let world;
let keyboard = new Keyboard();
let sounds = new Sounds();
let volumeStatus = 'on';
let fullscreen = false;
let chooseLevel = false;

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
    toggleRetryStartContainers()
    stopMusic();
    canvas = document.getElementById('canvas');
    InitLevel();
    world = new World(canvas, keyboard, sounds, volumeStatus);    
}

/**
 * Return to the loading Screen
 */
function loadStartScreen() {
    toggleRetryWhenGoStart()
    init();
    clearAllIntervals();
    hideContainer('startcontainer');
    hideContainer('returnStart');
}

/**
 * Check if the retry container have display none class , when not toggle it
 */
function toggleRetryWhenGoStart() {
    let retry = document.getElementById('retry');
    if (!retry.classList.contains('d-none')) {
        retry.classList.toggle('d-none');
    }
}

/**
 * toogle the startcontainer with display none or the retry container
 */
function toggleRetryStartContainers() {
    if (world instanceof StartScreen) {
        hideContainer('mobilecontrolls');
        hideContainer('startcontainer');
        hideContainer('returnStart');
    } else if (world instanceof World) {
        clearAllIntervals();
        document.getElementById('retry').classList.toggle('d-none');
    } 
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * swtich level mode button and string
 */
function toggleLevel() {
    let mode = document.getElementById('chooseLevel');
    if (!chooseLevel) {
        mode.innerHTML = 'Hard'
    } else {
        mode.innerHTML = 'Easy'
    }
    mode.classList.toggle('easy');
    mode.classList.toggle('hard');
    chooseLevel = chooseLevel ?!chooseLevel : true;
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

/**
 * Hide or show the Infocontainer
 */
function showInfoContainer() {    
    const start = document.getElementById('startgame');
    const infocontainer = document.getElementById('infocontainer');
    const button = document.getElementById('infos');    
    const impressumButton = document.getElementById('impressumButton');    

    toggleAnimation(infocontainer);
    toggleInfo(infocontainer,start,button,impressumButton);    
}

/**
 * 
 * @param {*} infocontainer - dom path to infocontainer
 */
function toggleAnimation(infocontainer) {    
    infocontainer.classList.toggle('slide-in-bottom');
    infocontainer.classList.toggle('slide-out-bottom');    
}

/**
 * toggle the icon in the info button , and the start / info container , impressum button
 * 
 * @param {string} infos - dom path to infocontainer
 *  @param {string} start - dom path to start button
 *  @param {string} button - dom path to infobutton
 *  @param {string} impressumButton - dom path to impressumButton
 */
function toggleInfo(infos,start,button,impressumButton) {
    if (!infos.classList.contains('d-none')) {
        setTimeout(() => {
            start.classList.toggle('d-none');
            infos.classList.toggle('d-none');
        }, 500);
        button.innerHTML = '?';
        impressumButton.innerHTML = 'Impressum';
    } else {
        start.classList.toggle('d-none');
        infos.classList.toggle('d-none');
        button.innerHTML = 'x'
        impressumButton.innerHTML = 'Close';
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
        controlls.classList.toggle('d-none');
    } else if (world instanceof World) {
        controlls.classList.toggle('d-none');
    }
}

/**
 * load wanted content für help section
 * 
 * @param {string} keyword - keyword , to know wich content should be load
 */
function loadContent(keyword) {
    const content = document.getElementById('infocontainer');

    content.innerHTML = contentHTML(keyword);
}

