const version = "0.1.1";

const bodyVar = document.createElement('div');
bodyVar.setAttribute('class','bodyVar');
document.body.appendChild(bodyVar);

let startButton = document.createElement('div');
startButton.setAttribute('class','startButton');
startButton.addEventListener('click', charChoose);
startButton.innerHTML = 'PLAY';
bodyVar.appendChild(startButton);

let selectedCharacter = 0;

let darkBG = document.createElement('div');
darkBG.setAttribute('class', 'darkBG');
bodyVar.appendChild(darkBG);

let charChooseText = document.createElement('div');
    charChooseText.setAttribute('class', 'charChooseText');
    charChooseText.innerHTML = 'Choose your character';

 let jonoCard = document.createElement('div');
 jonoCard.setAttribute('class','jonoCard');
 let jonoCardVis = document.createElement('img');
 jonoCardVis.setAttribute('class','jonoCardVis');
 jonoCardVis.setAttribute('src','images/J Card.png');
 jonoCardVis.addEventListener('click', function () {
     darkBG.style.backgroundImage = "linear-gradient(#040122, #006220)"; 
  })

  let characterConfirm = document.createElement('div');
  characterConfirm.setAttribute('class', 'characterConfirm');
  characterConfirm.innerHTML = "Ready?";

  let posX = 50;
  let posY = 50;
  let wDown = false;
  let aDown = false;
  let sDown = false;
  let dDown = false;

function charChoose() {
    removeStartButton();
    startButton.style.animation = "disappear 0.5s ease";
    startButton.style.animationFillMode = "forwards";
    bodyVar.appendChild(charChooseText);
    function removeStartButton() {
        setTimeout(() => {
            bodyVar.removeChild(startButton);
        },500);
    }
    createDarkBG()
    function createDarkBG() {
        darkBG.style.animation = "appear 1s ease";
        darkBG.style.animationFillMode = "forwards";
    }
    moveChooseText();
    function moveChooseText() {
        charChooseText.style.animation = "charChooseTextAnim 1s ease 1";
        charChooseText.style.animationFillMode = "forwards";
    }
    createCards();
    function createCards() {
        jonoCard.style.animation = "jonoCardAppear 1s ease";
        jonoCard.style.animationFillMode = "forwards";
        jonoCardVis.addEventListener('click', selectJonoCard);
        bodyVar.appendChild(jonoCard);
        jonoCard.appendChild(jonoCardVis);
        function selectJonoCard() {
            selectedCharacter = 1;
            jonoCard.style.animation = "jonoCardChoose 1s ease 1";
            jonoCard.style.animationFillMode = "forwards";
            bodyVar.appendChild(characterConfirm);
            characterConfirm.style.animation = "appear 1s ease";
            characterConfirm.style.animationFillMode = "forwards";
            characterConfirm.addEventListener('click', startGame);
            bodyVar.removeChild(charChooseText);
            jonoCardVis.removeEventListener('click', selectJonoCard);
        }
    }
}

function startGame() {
    darkBG.style.animation = "disappear 1s ease";
    darkBG.style.animationFillMode = "forwards";
    bodyVar.removeChild(characterConfirm);
    bodyVar.removeChild(jonoCard);
    if(selectedCharacter == 1) {
        spawnJono();
    } 

    function spawnJono() {
        let jono = document.createElement('div');
        let health = 50;
        let money = 0;
        let weapon = 'GH05T';
        let movespeed = 5;
        jono.style.left = posX + "%";
        jono.style.top = posY + "%";
        jono.setAttribute('class', 'jono');
        bodyVar.appendChild(jono);

    document.addEventListener('keydown', movementDown);
    document.addEventListener('keyup', movementUp);

    function movementDown(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            wDown = true;
            } else if (key == ' KeyA') {
                aDown = true;
            } else if (key == ' KeyS') {
                sDown = true;
            } else if (key == ' KeyD') {
                dDown = true;
            }
        }

        function movementUp(e) {
            let key = ` ${e.code}`
            key = key.toString();
            if (key == ' KeyW') {
                wDown = false;
                } else if (key == ' KeyA') {
                    aDown = false;
                } else if (key == ' KeyS') {
                    sDown = false;
                } else if (key == ' KeyD') {
                    dDown = false;
                }
            }
    

        function moveUp() {

        }
    }
}