const version = "0.1.7";

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

  let firerate = 0;
  let posX = 50;
  let posY = 50;
  let wDown = false;
  let aDown = false;
  let sDown = false;
  let dDown = false;
  let iDown = false;
  let jDown = false;
  let kDown = false;
  let lDown = false;

  let wepPosX = 0;
  let wepPosY = 0;
  let wepSpeed = 0;
  let wepDmg = 0;
  let money = 0;
  let health = 0;
  let weapon = 0;
  let weaponDelay = 0;

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
        health = 50;
        money = 0;
        weapon = 1;
        let movespeed = 2.5;
        wepDmg = 5;
        let wepSpeed = 10;
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
        moveCharacter();

        function moveCharacter() {
            setTimeout(() => {
                if(wDown == true) {
                    if (posY > 5) {
                    posY = posY - (movespeed / 9);
                    }
                } if(sDown == true) {
                    if (posY < 95) {
                        posY = posY + (movespeed / 9);
                    }
                } if(dDown == true) {
                    if (posX < 97) {
                        posX = posX + (movespeed / 16);
                    }
                } if(aDown == true) {
                    if (posX > 3) {
                        posX = posX - (movespeed / 16);
                     }
                }
                jono.style.left = posX + "%";
                jono.style.top = posY + "%";
                moveCharacter();
            }, 5);
        }
    }
    document.addEventListener('keydown', shootDown);
    document.addEventListener('keyup', shootUp);
    function shootDown(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyI') {
            iDown = true;
            } else if (key == ' KeyJ') {
                jDown = true;
            } else if (key == ' KeyK') {
                kDown = true;
            } else if (key == ' KeyL') {
                lDown = true;
            }
        }

        function shootUp(e) {
            let key = ` ${e.code}`
            key = key.toString();
            if (key == ' KeyI') {
                iDown = false;
                } else if (key == ' KeyJ') {
                    jDown = false;
                } else if (key == ' KeyK') {
                    kDown = false;
                } else if (key == ' KeyL') {
                    lDown = false;
                }
            }
            if(selectedCharacter) {
                firerate =  250;
            }
        fireWeapon()
        function fireWeapon() {
            if(weapon == 1) {
                shootWeapon1()
            }
            function shootWeapon1() {
                if (iDown == true || jDown == true || kDown == true || lDown == true) {
                let directionX = 0;
                let directionY = 0;
                let bullet1 = document.createElement('div');
                bullet1.setAttribute('class', 'bullet1');
                if (iDown == true) {
                    directionY = -10;
                } else if (jDown == true) {
                    directionX = -10;
                } else if (kDown == true) {
                    directionY = 10;
                } else if (lDown == true) {
                    directionX = 10;
                }
                setTimeout(() => {
                    bullet1.style.left = posX + "%";
                    bullet1.style.top = posY + "%";
                    bodyVar.appendChild(bullet1);
                },firerate)
            }

        }
        setTimeout(() => {
            fireWeapon()
        },firerate)}
}