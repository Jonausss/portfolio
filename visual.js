function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//==========HEADER SECTION==========
//Hide Header when scrolls ======
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.opacity = "1";
  } else {
    document.getElementById("header").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

//==========HOME SECTION==========

//Cycle Text ======
const wordsList = [' Web Developer.', ' 2D Game Developer.', ' person.', ' 3D Game Developer.']
const el = document.getElementById("typeWriter");

let interval = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true){
        let word = wordsList[curPhraseIndex];

        for (let i = 0; i <= word.length; i++) { //Write actual word
            el.innerText = word.substring(0, i + 1);
            await sleep(interval);
        }
        await sleep(interval*10);
        for (let i = word.length; i > 0; i--) {
            el.innerText = word.substring(0, i - 1);
            await sleep(interval);
        }
        await sleep(interval*5);
        if (curPhraseIndex === wordsList.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }

    }
};
writeLoop();

//Background move Gradient ======
$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.home').css(
        'background',
        'linear-gradient(0deg, #242424 0%, rgb(0, 0, 0, 0) 30%), radial-gradient(circle at ' + mouseXpercentage + '% 100%, rgba(0,142,255,0) 30%, rgba(163,29,175, 0.3) 100%)');
  });