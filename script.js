const version = "0.0.8";

const bodyVar = document.createElement('div');
bodyVar.setAttribute('class','bodyVar');
document.body.appendChild(bodyVar);

let startButton = document.createElement('div');
startButton.setAttribute('class','startButton');
startButton.addEventListener('click', charChoose);
startButton.innerHTML = 'PLAY';
bodyVar.appendChild(startButton);

let darkBG = document.createElement('div');
darkBG.setAttribute('class', 'darkBG');
bodyVar.appendChild(darkBG);

 let jonoCard = document.createElement('div');
 jonoCard.setAttribute('class','jonoCard');
 let jonoCardVis = document.createElement('img');
 jonoCardVis.setAttribute('class','jonoCardVis');
 jonoCardVis.setAttribute('src','images/J Card.png');
 jonoCardVis.addEventListener('click', function () {
     darkBG.style.backgroundImage = "linear-gradient(#040122, #006220)"; 
  })

function charChoose() {
    removeStartButton();
    startButton.style.animation = "disappear 0.5s ease";
    startButton.style.animationFillMode = "forwards";
    function removeStartButton() {
        setTimeout(() => {
            bodyVar.removeChild(startButton);
        },500);
    }
    let charChooseText = document.createElement('div');
    charChooseText.setAttribute('class', 'charChooseText');
    charChooseText.innerHTML = 'Choose your character';
    bodyVar.appendChild(charChooseText);
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
            jonoCard.style.animation = "jonoCardChoose 1s ease 1";
            jonoCard.style.animationFillMode = "forwards";
        }
    }
}