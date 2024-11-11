class Sounds{   

    sharky;
    backgroundmusic;

    constructor() {
        this.soundsOn()
    }

    /**
    * Play/pause the wanted sound , and load the values for playspeed and valume
    * 
    * @param {string} path - path info , to getinfo of with element
    * @param {string} track - path info , to get the wanted sound
    * @param {string} state - get info for if else if sound should be play or paused
    */
    playSound(path,track,state) {
        if (state == 'play') {
            this[path][track].audio.play();
        } else if (state == 'pause') {
            this[path][track].audio.pause();
        }        
        this[path][track].audio.volume = this[path][track].setvolume;
        this[path][track].audio.playbackRate = this[path][track].playbackspeed;
    }

    /**
     * push the sound objects with settet volume in the values
     */
    soundsOn() {
        this.sharky = { 
            swim :  {
                audio : new Audio('audio/swim.mp3'),
                setvolume : 1,
                playbackspeed : 1,
            },
            bubble: {
                audio : new Audio('audio/blowbubble.mp3'),
                setvolume : 0.3,
                playbackspeed : 10,
            },
            tail : {
                audio : new Audio('audio/tailattack.mp3'),
                setvolume : 0.6,
                playbackspeed : 1,
            },
            snore : {
                audio : new Audio('audio/snore.mp3'),
                setvolume : 0.5,
                playbackspeed : 3,
            }
        }

        this.hit =  {
            fish : {
                audio : new Audio('audio/hitfish.mp3'),
                setvolume : 1,
                playbackspeed : 1,
            },
            jelly : {
                audio : new Audio('audio/hitjelly.mp3'),
                setvolume : 1,
                playbackspeed : 1,
            },
            pufferfish : {
                audio : new Audio('audio/defeatpuffer.mp3'),
                setvolume : 0.2,
                playbackspeed : 2,
            },
            bubble : {
                audio : new Audio('audio/bubbleexplode.mp3'),
                setvolume : 1,
                playbackspeed : 1,
            }
        }
        
        this.backgroundmusic = {
            dark : {
                audio : new Audio('audio/levelsound.mp3'),
                setvolume : 1,
                playbackspeed : 1
            }
        }
    }

     /**
     * push the sound objects with volume zero in the values
     */
    soundsOff() {
        this.sharky = { 
            swim :  {
                audio : new Audio('audio/swim.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            },
            bubble: {
                audio : new Audio('audio/blowbubble.mp3'),
                setvolume : 0,
                playbackspeed : 10,
            },
            tail : {
                audio : new Audio('audio/tailattack.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            },
            snore : {
                audio : new Audio('audio/snore.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            }
        }

        this.hit =  {
            fish : {
                audio : new Audio('audio/hitfish.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            },
            jelly : {
                audio : new Audio('audio/hitjelly.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            },
            pufferfish : {
                audio : new Audio('audio/defeatpuffer.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            },
            bubble : {
                audio : new Audio('audio/bubbleexplode.mp3'),
                setvolume : 0,
                playbackspeed : 1,
            }
        }

        this.backgroundmusic = {
            dark : {
                audio : new Audio('audio/levelsound.mp3'),
                setvolume : 0,
                playbackspeed : 1
            }
        }
    }


}