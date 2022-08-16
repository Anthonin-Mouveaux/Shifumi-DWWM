const compBarInner = document.querySelector('#compBarOuter div');
const playerBarInner = document.querySelector('#playerBarOuter div');
const compWeaponText = document.querySelector('#compWeapon p');
const playerWeaponText = document.querySelector('#playerWeapon p');
const compModel = document.querySelector('.compModel');
const playerModel = document.querySelector('.playerModel');
let scorePlayer = 0;
let scoreComp = 0;

function fight(weapon) {

    // CHOIX DE L'IA ET INCREMENTATION DE SA PICKRATE

    let compPick = Math.floor(Math.random() * 3);
    if (compPick == 0) {
        compSwordPick.textContent++;
        compWeaponText.textContent = 'Epée';
    } else if (compPick == 1) {
        compLancePick.textContent++;
        compWeaponText.textContent = 'Lance';
    } else {
        compAxePick.textContent++;
        compWeaponText.textContent = 'Hache';
    }

    //INCREMENTATION DE LA PICKRATE DU JOUEUR

    if (weapon == 'Epée') {
        playerSwordPick.textContent++;
        playerWeaponText.textContent = 'Epée';
    } else if (weapon == 'Lance') {
        playerLancePick.textContent++;
        playerWeaponText.textContent = 'Lance';
    } else {
        playerAxePick.textContent++
        playerWeaponText.textContent = 'Hache';
    }

    //SCORE ET PV

    if ((weapon == 'Epée' && compPick == 2) || (weapon == 'Lance' && compPick == 0) || (weapon == 'Hache' && compPick == 1)) {
        result.textContent = 'Victoire';
        if (compBarInner.classList.contains('firstLoss')) {
            setTimeout(function () {
                compBarInner.classList.toggle('firstLoss');
                compBarInner.classList.toggle('secondLoss');
                compLifeAmount.textContent = '10';
            }, 1100)
        } else if (compBarInner.classList.contains('secondLoss')) {
            setTimeout(function () {
                compBarInner.classList.toggle('secondLoss');
                compBarInner.classList.toggle('lastLoss');
                compLifeAmount.textContent = '0';
            }, 1100)
        } else {
            setTimeout(function () {
                compBarInner.classList.toggle('firstLoss');
                compLifeAmount.textContent = '20';
            }, 1100)
        }
        scorePlayer++;
    } else if ((weapon == 'Epée' && compPick == 1) || (weapon == 'Lance' && compPick == 2) || (weapon == 'Hache' && compPick == 0)) {
        result.textContent = 'Defaite';
        if (playerBarInner.classList.contains('firstLoss')) {
            setTimeout(function () {
                playerBarInner.classList.toggle('firstLoss');
                playerBarInner.classList.toggle('secondLoss');
                playerLifeAmount.textContent = '10';
            }, 1100)
        } else if (playerBarInner.classList.contains('secondLoss')) {
            setTimeout(function () {
                playerBarInner.classList.toggle('secondLoss');
                playerBarInner.classList.toggle('lastLoss');
                playerLifeAmount.textContent = '0';
            }, 1100)
        } else {
            setTimeout(function () {
                playerBarInner.classList.toggle('firstLoss');
                playerLifeAmount.textContent = '20';
            }, 1100)
        }
        scoreComp++
    } else {
        result.textContent = 'Egalite'
    }

    //CALCUL DU SCORE

    if (scorePlayer == 0 && scoreComp == 0) {

    } else {
        ratio.innerHTML = Math.round(scorePlayer / (scorePlayer + scoreComp) * 100);
    }

    //ANIMATION DES PERSONNAGES

    if (result.textContent == 'Victoire') {
        if (weapon == 'Epée') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('swordWin');
            compModel.classList.add('axe');
            setTimeout(function () { playerModel.className = 'playerModel sword'; }, 3500);
        } else if (weapon == 'Lance') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('lanceWin');
            compModel.classList.add('sword');
            setTimeout(function () { playerModel.className = 'playerModel lance'; }, 3500);
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('axeWin');
            compModel.classList.add('lance');
            setTimeout(function () { playerModel.className = 'playerModel axe'; }, 3500);
        }
    } else if (result.textContent == 'Defaite') {
        if (compPick == 0) {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('swordWin');
            playerModel.classList.add('axe');
            setTimeout(function () { compModel.className = 'compModel sword'; }, 3500);
        } else if (compPick == 1) {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('lanceWin');
            playerModel.classList.add('sword');
            setTimeout(function () { compModel.className = 'compModel lance'; }, 3500);
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('axeWin');
            playerModel.classList.add('lance')
            setTimeout(function () { compModel.className = 'compModel axe'; }, 3500);
        }
    } else {
        if (weapon == 'Epée') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('swordWin');
            playerModel.classList.add('swordWin');
            setTimeout(function () {
                playerModel.className = 'playerModel sword';
                compModel.className = 'compModel sword';
            }, 3500)
        } else if (weapon == 'Lance') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('lanceWin');
            playerModel.classList.add('lanceWin');
            setTimeout(function () {
                playerModel.className = 'playerModel lance';
                compModel.className = 'compModel lance';
            }, 3500)
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('axeWin');
            playerModel.classList.add('axeWin')
            setTimeout(function () {
                playerModel.className = 'playerModel axe';
                compModel.className = 'compModel axe';
            }, 3500)
        }
    }

    if (scorePlayer === 3) {
        setTimeout(function () {
            compModel.classList.add('defeated');
            gameDataInner.style.display = 'none';
            gameEnd.style.display = 'flex';
            gameResult.textContent = 'Bravo';
        }, 4500)
    }
    if (scoreComp === 3) {
        setTimeout(function () {
            playerModel.classList.add('defeated');
            gameDataInner.style.display = 'none';
            gameEnd.style.display = 'flex';
            gameResult.textContent = 'Dommage';
        }, 4500)
    }
}

// RELOAD LA PAGE

replay.addEventListener('click', () => {
    window.location.reload();
})


// APPEL DES FONCTIONS

sword.addEventListener('click', () => {
    fight(sword.textContent);
})

lance.addEventListener('click', () => {
    fight(lance.textContent);
})

axe.addEventListener('click', () => {
    fight(axe.textContent);
})