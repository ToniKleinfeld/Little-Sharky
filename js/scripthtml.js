/**
 * 
 * @param {string} keyword -get keyword
 * @returns html content for infos to play oder Impressum
 */
function contentHTML(keyword){
    switch (keyword) {
        case 'How to Play':
            return /*html*/`
                <div class="infobar">                
                <div class="infoButton" id="contentHead">
                    ${keyword}
                </div>
                </div>

                <div class="content center">
                <p>Fin attack is effective agains Pufferfishes.</p>
                <p>Bubble attack is good against Jellys.
                But be carefull , when it hit a Pufferfish.
                </p>
                <p>The wale only weakness are poisened bubbles.</p>
                <p>There is a chance that the Boss drop poisen,
                when he get hit by a normal bubble</p>
                <p>Poisen is automaticly used against the wale.</p>
                <p>Each level contains 10 coins.</p>
                </div>

            `

        case 'Impressum':
            return /*html*/`
                <div class="infobar">                
                <div class="infoButton" id="contentHead">
                    ${keyword}
                </div>
                </div>

                <div class="content center">
                <span>Toni Kleinfeld</span>
                <span>48161 Münster</span>
                <span>Goldaper Str.19</span>
                <br>
                <a href="mailto:tonikleinfeld@aol.com">tonikleinfeld@aol.com</a>
                <a href="tel:+01735451636">+01735451636</a>
                </div>
            `
    
        default:
            break;
    }
}