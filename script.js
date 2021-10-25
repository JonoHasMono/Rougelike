const version = "0.0.3";

const bodyVar = document.createElement('div');
bodyVar.setAttribute('class','bodyVar');
document.body.appendChild(bodyVar);

let startButton = document.createElement('div');
startButton.setAttribute('class','startButton');
startButton.addEventListener('click', charChoose);
startButton.innerHTML = 'PLAY';
bodyVar.appendChild(startButton);

function charChoose() {
    bodyVar.removeChild(startButton);
    let charChooseText = document.createElement('div');
}