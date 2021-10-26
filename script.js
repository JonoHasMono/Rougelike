const version = "0.0.7";

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
        bodyVar.appendChild(darkBG);
        darkBG.style.animation = "appear 1s ease";
        darkBG.style.animationFillMode = "forwards";
        darkBG.addEventListener('mouseover', function () {
           darkBG.style.backgroundImage = "linear-gradient(#040122, #400000)"; 
        })
    }
    moveChooseText();
    function moveChooseText() {
        charChooseText.style.animation = "charChooseTextAnim 1s ease";
        charChooseText.style.animationFillMode = "forwards";
    }
    createCards();
    function createCards() {
        let jonoCard = document.createElement('div');
        jonoCard.setAttribute('class','jonoCard');
        bodyVar.appendChild(jonoCard);
        let jonoCardVis = document.createElement('img');
        jonoCardVis.setAttribute('class','jonoCardVis');
        jonoCardVis.setAttribute('src','images/J Card.png');
        jonoCardVis.addEventListener('click', selectJonoCard);
        jonoCard.appendChild(jonoCardVis);
        jonoCardVis.addEventListener('mouseover', function () {
            darkBG.style.backgroundImage = "linear-gradient(#040122, #006220)"; 
         })
        jonoCard.style.animation = "jonoCardAppear 1s ease";
        jonoCard.style.animationFillMode = "forwards";
        function selectJonoCard() {

        }
    }
}