const version = "0.3.8";

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

let money = document.createElement('div');
money.setAttribute('class', 'money');
money.setAttribute('id', 'money');
let moneyval = 0;
money.innerHTML = "$" + moneyval;
bodyVar.appendChild(money);


let selectedCharacter = 0;

let playerHPVis = document.createElement('div');
playerHPVis.setAttribute('class', 'playerHPVis');

let darkBG = document.createElement('div');
darkBG.setAttribute('class', 'darkBG');
bodyVar.appendChild(darkBG);

let charChooseText = document.createElement('div');
    charChooseText.setAttribute('class', 'charChooseText');
    charChooseText.innerHTML = 'Choose your character';

// Character Cards

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

  let jonoVis = document.createElement('div');
        jonoVis.setAttribute('class', 'jonoVis');

  let characterConfirm = document.createElement('div');
  characterConfirm.setAttribute('class', 'characterConfirm');
  characterConfirm.innerHTML = "Ready?";

  let enemiesRemaining = 0
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
  let fdown = false;
  let hdown = false;
  let recentFire = 0;
  let ability1Active = false;
  let msDuration = 1500;

  let wepPosX = 0;
  let wepPosY = 0;
  let wepSpeed = 0;
  let wepDmg = 0;
  let health = 0;
  let weapon = 0;
  let weapon1Firerate = 50;
  let msFirerate = 100;
  let playerHP = 0;

  let bullet1Hitbox = 0;
  let enemy1Hitbox = 0;

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
    if(selectedCharacter == 1) {
        spawnJono();
        playerHP = 3;
        playerHPVis.style.width = (playerHP * 3) + "vw"
    } 

    spawnGUI();
    function spawnGUI() {
        bodyVar.appendChild(playerHPVis);
        document.getElementById('money').style.opacity = 1;
    }


    spawnWaves();

    function spawnWaves() {
        let wavePower = 0;
        spawnWave1();
        function spawnWave1() {
            wavepower = 10;
            spawnEnemy1();
            function spawnEnemy1() {
                if (wavepower > 1) {
                    setTimeout(() => {
                        wavepower --
                        spawnEnemy1();
                    },500)
                }
                let enemy1 = document.createElement('div');
                let enemy1HP = 10;
                let enemy1HPNum = document.createElement("div");
                enemy1HPNum.innerHTML = enemy1HP;
                enemy1Hitbox = enemy1.getBoundingClientRect();
                enemy1.setAttribute('class', 'enemy1');
                enemy1HPNum.setAttribute('class', 'enemy1HPNum');
                let enemyPosX = -2
                let enemyPosY = (Math.random() * 80) + 10;
                enemy1.style.left = enemyPosX + '%';
                enemy1.style.top = enemyPosY + '%';
                bodyVar.appendChild(enemy1);
                enemy1.appendChild(enemy1HPNum);
                let iframe = 0;
                let alive = true;
                moveEnemy1();
                function moveEnemy1() {
                    if (alive == true) {
                        enemyPosX += 0.08;
                        enemy1.style.left = enemyPosX + '%'
                    enemy1Hitbox = enemy1.getBoundingClientRect();
                    if(bullet1Hitbox.x <= (enemy1Hitbox.x + 95) 
                    && bullet1Hitbox.x >= (enemy1Hitbox.x - 75) 
                    && bullet1Hitbox.y <= (enemy1Hitbox.y + 75) 
                    && bullet1Hitbox.y >= (enemy1Hitbox.y - 55)
                    ) {
                        console.log('pls hit');
                        if(iframe == 0) {
                            enemy1.removeAttribute('class','enemy1');
                            enemy1.setAttribute('class','enemy1Hit');
                            iframe = 1;
                            console.log("yes")
                            setTimeout(() => {
                                enemy1HP -= 4
                                enemy1HPNum.innerHTML = enemy1HP;
                                console.log("bruh");
                                if (enemy1HP <= 0) {
                                    enemy1.remove();
                                    alive = false ;
                                    enemy1Hitbox = 1000;
                                    console.log("x_x");
                                    moneyval = moneyval + 1;
                                    document.getElementById('money').innerHTML = "$" + moneyval;
                                }
                            }, 10);
                            setTimeout(() => {
                                iframe = 0;
                                console.log("no")
                                enemy1.removeAttribute('class','enemy1Hit');
                                enemy1.setAttribute('class','enemy1');
                            }, 200);
                        }
                        }
                    }

                    setTimeout(() => {
                        moveEnemy1();
                    }, 5);
                }
            }

            }
        }

        darkBG.style.animation = "disappear 1s ease";
    darkBG.style.animationFillMode = "forwards";
    bodyVar.removeChild(characterConfirm);
    bodyVar.removeChild(jonoCard);
        

    function spawnJono() {
        let jono = document.createElement('div');
        health = 50;
        money = 0;
        weapon = 1;
        let movespeed = 5;
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
                recentFire = 1;
                } else if (key == ' KeyJ') {
                    jDown = false;
                    recentFire = 2;
                } else if (key == ' KeyK') {
                    kDown = false;
                    recentFire = 3;
                } else if (key == ' KeyL') {
                    lDown = false;
                    recentFire = 4;
                }
            }
            if(selectedCharacter == 1) {
                firerate =  50;
            }

            document.addEventListener('keydown', useAbility);
            function useAbility(e) {
                let key = ` ${e.code}`
                key = key.toString();
                if (key == ' KeyF') {
                    useAbility1();
                    } else if (key == ' KeyH') {
                        useAbility2();
                    }
                }

            // Abilities (Primary and Secondary)

            function useAbility1() {
                if(ability1Active == false){
                    ability1Active = true;
                    setTimeout(() => {
                        ability1Active = false
                    }, msDuration);
                if(selectedCharacter == 1) {
                    metalStorm();
                    function metalStorm() {
                        if (ability1Active == true) {
                bullet1Hitbox = 0;
                let directionX = 0;
                let directionY = 0;
                let bullet1 = document.createElement('div');
                bullet1.setAttribute('class', 'bulletms');
                if (recentFire == 1) {
                    directionY = -6;
                    bulletDirection = 0;
                } else if (recentFire == 2) {
                    directionX = -6;
                    bulletDirection = 1;
                } else if (recentFire == 3) {
                     directionY = 6;
                    bulletDirection = 0;
                } else if (recentFire == 4) {
                     directionX = 6;
                    bulletDirection = 1;
                }
                setTimeout(() => {
                    let bulletPosX = posX;
                    let bulletPosY = posY;
                    let randomX = (Math.random() * 3) - 2.5
                    let randomY = (Math.random() * 3) - 2.5
                    let bullet1Damage = 4;
                    bullet1Hitbox = bullet1.getBoundingClientRect();
                        bullet1.style.left = bulletPosX + randomX + "%";
                        bullet1.style.top = bulletPosY + randomY + "%";
                        bodyVar.appendChild(bullet1);
                    
                    let bulletHit = true;
                    moveBullet();
                    function moveBullet() {
                        setTimeout(() => {
                            if (bulletHit == true) {
                                bullet1Hitbox = bullet1.getBoundingClientRect();
                                if(bullet1Hitbox.x <= (enemy1Hitbox.x + 50) 
                                && bullet1Hitbox.x >= (enemy1Hitbox.x - 35) 
                                && bullet1Hitbox.y <= (enemy1Hitbox.y + 30) 
                                && bullet1Hitbox.y >= (enemy1Hitbox.y - 15) ) {
                                    if (bulletPosX > -5 && bulletPosX < 105 && bulletPosY > -5 && bulletPosY < 105) {
                                        bulletPosX = bulletPosX + (directionX / 16);
                                        bulletPosY = bulletPosY + (directionY / 9);
                                        bullet1.style.left = bulletPosX + randomX + "%";
                                        bullet1.style.top = bulletPosY + randomY + "%";
                                        moveBullet();
                                    } 
                                    bulletHit = false;
                                    if(bulletHit == false) {
                                        setTimeout(() => {
                                            deleteBullet()
                                        }, 0);
                                    }
                            } else if (bulletPosX > -5 && bulletPosX < 105 && bulletPosY > -5 && bulletPosY < 105) {
                                bulletPosX = bulletPosX + (directionX / 16);
                                bulletPosY = bulletPosY + (directionY / 9);
                                bullet1.style.left = bulletPosX + randomX + "%";
                                bullet1.style.top = bulletPosY + randomY + "%";
                                moveBullet();
                            } else {
                                bulletHit = false;
                                    if(bulletHit == false) {
                                        deleteBullet()
                                    }
                            }
                            function deleteBullet() {
                                setTimeout(() => {
                                    console.log('[[');
                                bullet1.remove();
                                bullet1Hitbox = 0;
                                },0);
                            }
                        }
                        },2);
                    }
                    metalStorm();
                        }, msFirerate);
                    }
                }
            }
        }
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
                bullet1Hitbox = 0;
                let bullet1 = document.createElement('div');
                bullet1.setAttribute('class', 'bullet1');
                if (iDown == true) {
                    directionY = -8;
                    bulletDirection = 0;
                } else if (jDown == true) {
                    directionX = -8;
                    bulletDirection = 1;
                } else if (kDown == true) {
                     directionY = 8;
                    bulletDirection = 0;
                } else if (lDown == true) {
                     directionX = 8;
                    bulletDirection = 1;
                }
                setTimeout(() => {
                    let bulletPosX = posX;
                    let bulletPosY = posY;
                    let bullet1Damage = 4;
                    bullet1Hitbox = bullet1.getBoundingClientRect();
                    if(bulletDirection == 1) {
                        bullet1.style.transform = 'rotate(90deg)'
                        bulletPosX -= 1;
                        bulletPosY -= 3.25;
                        bullet1.style.top = bulletPosY + "%"
                        bullet1.style.left = bulletPosX + "%";
                        bodyVar.appendChild(bullet1);
                    } else {
                        bullet1.style.left = bulletPosX + "%";
                        bullet1.style.top = bulletPosY + "%";
                        bodyVar.appendChild(bullet1);
                    }
                    let bulletHit = true;
                    moveBullet();
                    function moveBullet() {
                        setTimeout(() => {
                            if (bulletHit == true) {
                                bullet1Hitbox = bullet1.getBoundingClientRect();
                                if(bullet1Hitbox.x <= (enemy1Hitbox.x + 70) 
                                && bullet1Hitbox.x >= (enemy1Hitbox.x - 55) 
                                && bullet1Hitbox.y <= (enemy1Hitbox.y + 70) 
                                && bullet1Hitbox.y >= (enemy1Hitbox.y - 55) ) {
                                    if (bulletPosX > -5 && bulletPosX < 105 && bulletPosY > -5 && bulletPosY < 105) {
                                        bulletPosX = bulletPosX + (directionX / 16);
                                        bulletPosY = bulletPosY + (directionY / 9);
                                        bullet1.style.left = bulletPosX + "%";
                                        bullet1.style.top = bulletPosY + "%";
                                        moveBullet();
                                    } 
                                    bulletHit = false;
                                    if(bulletHit == false) {
                                        setTimeout(() => {
                                            deleteBullet()
                                        }, 10);
                                    }
                            } else if (bulletPosX > -5 && bulletPosX < 105 && bulletPosY > -5 && bulletPosY < 105) {
                                bulletPosX = bulletPosX + (directionX / 16);
                                bulletPosY = bulletPosY + (directionY / 9);
                                bullet1.style.left = bulletPosX + "%";
                                bullet1.style.top = bulletPosY + "%";
                                moveBullet();
                            } else {
                                bulletHit = false;
                                    if(bulletHit == false) {
                                        deleteBullet()
                                    }
                            }
                            function deleteBullet() {
                                setTimeout(() => {
                                    console.log('[[');
                                bullet1.remove();
                                bullet1Hitbox = 0;
                                },0);
                            }
                        }
                        },2);
                    }
                },1)
            }
        }

        }
        setTimeout(() => {
            fireWeapon()
        },5)}
    
}