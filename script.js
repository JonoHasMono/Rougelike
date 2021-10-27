const version = "0.2.3";

const bodyVar = document.createElement('div');
bodyVar.setAttribute('class','bodyVar');
document.body.appendChild(bodyVar);

let logo = document.createElement('div');
logo.setAttribute('class', 'logo');
bodyVar.appendChild(logo);

let logoVis = document.createElement('img');
logoVis.setAttribute('class', 'logoVis');
logoVis.setAttribute('src','images/Logo.png');
logo.appendChild(logoVis);

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
     darkBG.style.backgroundImage = "linear-gradient(#020112, #006220)"; 
  })

  let gabeCard = document.createElement('div');
  gabeCard.setAttribute('class','gabeCard');
  let gabeCardVis = document.createElement('img');
  gabeCardVis.setAttribute('class','gabeCardVis');
  gabeCardVis.setAttribute('src','images/G Card.png');
  gabeCardVis.addEventListener('click', function () {
      darkBG.style.backgroundImage = "linear-gradient(#020112, #004064)"; 
   })

  let jonoVis = document.createElement('img');
        jonoVis.setAttribute('class', 'jonoVis');
        jonoVis.setAttribute('src', 'images/J pixel.png');

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
  let weapon1Firerate = 50;

function charChoose() {
    removeStartButton();
    startButton.style.animation = "disappear 0.5s ease";
    logo.style.animation = "disappear 1s ease";
    logo.style.animationFillMode = "forwards";
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
        function createJonoCard() {
            jonoCard.style.animation = "jonoCardAppear 1s ease";
            jonoCard.style.animationFillMode = "forwards";
            jonoCardVis.addEventListener('click', selectJonoCard);
            bodyVar.appendChild(jonoCard);
            jonoCard.appendChild(jonoCardVis);
            function selectJonoCard() {
                bodyVar.removeChild(gabeCard);
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
        function createGabeCard() {
            gabeCard.style.animation = "gabeCardAppear 1s ease";
            gabeCard.style.animationFillMode = "forwards";
            //gabeCardVis.addEventListener('click', selectGabeCard);
            bodyVar.appendChild(gabeCard);
            gabeCard.appendChild(gabeCardVis);
            function selectGabeCard() {
                selectedCharacter = 1;
                gabeCard.style.animation = "gabeCardChoose 1s ease 1";
                gabeCard.style.animationFillMode = "forwards";
                bodyVar.appendChild(characterConfirm);
                characterConfirm.style.animation = "appear 1s ease";
                characterConfirm.style.animationFillMode = "forwards";
                characterConfirm.addEventListener('click', startGame);
                bodyVar.removeChild(charChooseText);
                gabeCardVis.removeEventListener('click', selectGabeCard);
            }
        }
        createJonoCard();
        setTimeout(() => {
            createGabeCard();
        },100)
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
        jono.appendChild(jonoVis);

    document.addEventListener('keydown', movementDown);
    document.addEventListener('keyup', movementUp);

    function movementDown(e) {
        let key = ` ${e.code}`
        key = key.toString();
        if (key == ' KeyW') {
            wDown = true;
            jonoVis.style.transform = 'rotate(180deg) translate(7%,7%)'
            } else if (key == ' KeyA') {
                aDown = true;
                jonoVis.style.transform = 'rotate(90deg) translate(-7%,7%)'
            } else if (key == ' KeyS') {
                sDown = true;
                jonoVis.style.transform = 'rotate(0deg) translate(-7%,-7%)'
            } else if (key == ' KeyD') {
                dDown = true;
                jonoVis.style.transform = 'rotate(270deg) translate(7%,-7%)'
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
            jonoVis.style.transform = 'rotate(180deg) translate(7%,7%)'
            } else if (key == ' KeyJ') {
                jDown = true;
                jonoVis.style.transform = 'rotate(90deg) translate(-7%,7%)'
            } else if (key == ' KeyK') {
                kDown = true;
                jonoVis.style.transform = 'rotate(0deg) translate(-7%,-7%)'
            } else if (key == ' KeyL') {
                lDown = true;
                jonoVis.style.transform = 'rotate(270deg) translate(7%,-7%)'
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
            if(selectedCharacter == 1) {
                firerate =  50;
            }
        fireWeapon()
        fireWeaponDelays();
        function fireWeaponDelays() {
            if(weapon == 1) {
                weapon1FirerateCD()
                function weapon1FirerateCD() {
                    setTimeout(() => {
                        if (weapon1Firerate > 0) {
                            weapon1Firerate -= 1;
                        }
                        weapon1FirerateCD()
                    }, 15);
                }
            }
        }
        function fireWeapon() {
            if(weapon == 1) {
                shootWeapon1()
            }
            function shootWeapon1() {
                if (iDown == true || jDown == true || kDown == true || lDown == true) {
                    if (weapon1Firerate == 0) {
                        weapon1Firerate = 25;
                let directionX = 0;
                let directionY = 0;
                let bulletDirection = 0;
                let bullet1 = document.createElement('div');
                bullet1.setAttribute('class', 'bullet1');
                if (iDown == true) {
                    directionY = -10;
                    bulletDirection = 0;
                } else if (jDown == true) {
                    directionX = -10;
                    bulletDirection = 1;
                } else if (kDown == true) {
                    directionY = 10;
                    bulletDirection = 0;
                } else if (lDown == true) {
                    directionX = 10;
                    bulletDirection = 1;
                }
                setTimeout(() => {
                    let bulletPosX = posX;
                    let bulletPosY = posY;
                    if(bulletDirection == 1) {
                        bullet1.style.transform = 'rotate(90deg)'
                        bulletPosX -= 1;
                        bulletPosY -= 2.5;
                        bullet1.style.top = bulletPosY + "%"
                        bullet1.style.left = bulletPosX + "%";
                        bodyVar.appendChild(bullet1);
                    } else {
                        bullet1.style.left = bulletPosX + "%";
                        bullet1.style.top = bulletPosY + "%";
                        bodyVar.appendChild(bullet1);
                    }
                    moveBullet();
                    function moveBullet() {
                        setTimeout(() => {
                            if(bulletPosX > -5 && bulletPosX < 105 && bulletPosY > -5 && bulletPosY < 105) {
                                bulletPosX = bulletPosX + (directionX / 16);
                                bulletPosY = bulletPosY + (directionY / 9);
                                bullet1.style.left = bulletPosX + "%";
                                bullet1.style.top = bulletPosY + "%";
                                moveBullet();
                            } else {
                                bodyVar.removeChild(bullet1);
                            }
                        },5);
                    }
                },5)
            }
        }

        }
        setTimeout(() => {
            fireWeapon()
        },5)}
}