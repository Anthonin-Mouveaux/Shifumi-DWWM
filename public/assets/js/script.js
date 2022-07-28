const compBarInner = document.querySelector('#compBarOuter div');
const playerBarInner = document.querySelector('#playerBarOuter div');
const compWeaponText = document.querySelector('#compWeapon p');
const playerWeaponText = document.querySelector('#playerWeapon p');
const compModel = document.querySelector('.compModel');
const playerModel = document.querySelector('.playerModel');

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
    } else if (weapon == "Lance") {
        playerLancePick.textContent++;
        playerWeaponText.textContent = 'Lance';
    } else {
        playerAxePick.textContent++
        playerWeaponText.textContent = 'Hache';
    }

    //SHIFUMI DES ARMES

    if ((weapon == 'Epée' && compPick == 2) || (weapon == 'Lance' && compPick == 0) || (weapon == 'Hache' && compPick == 1)) {
        result.textContent = 'Gagné';
        if (compBarInner.classList.contains('firstLoss')) {
            compBarInner.classList.toggle('firstLoss');
            compBarInner.classList.toggle('secondLoss');
            compLifeAmount.textContent = '10';
        } else if (compBarInner.classList.contains('secondLoss')) {
            compBarInner.classList.toggle('secondLoss');
            compBarInner.classList.toggle('lastLoss');
            compLifeAmount.textContent = '0';
        } else {
            compBarInner.classList.toggle('firstLoss');
            compLifeAmount.textContent = '20';
        }
    } else if ((weapon == 'Epée' && compPick == 1) || (weapon == 'Lance' && compPick == 2) || (weapon == 'Hache' && compPick == 0)) {
        result.textContent = 'Perdu';
        if (playerBarInner.classList.contains('firstLoss')) {
            playerBarInner.classList.toggle('firstLoss');
            playerBarInner.classList.toggle('secondLoss');
            playerLifeAmount.textContent = '10';
        } else if (playerBarInner.classList.contains('secondLoss')) {
            playerBarInner.classList.toggle('secondLoss');
            playerBarInner.classList.toggle('lastLoss');
            playerLifeAmount.textContent = '0';
        } else {
            playerBarInner.classList.toggle('firstLoss');
            playerLifeAmount.textContent = '20';
        }
    } else {
        result.textContent = 'Egalité'
    }

    //ANIMATION DES PERSONNAGES

    if (result.textContent == 'Gagné') {
        if (weapon == 'Epée') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('swordWin');
            compModel.classList.add('axe');
        } else if (weapon == 'Lance') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('lanceWin');
            compModel.classList.add('sword');
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            playerModel.classList.add('axeWin');
            compModel.classList.add('lance');
        }
    } else if (result.textContent == 'Perdu') {
        if (weapon == 'Epée') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('swordWin');
            playerModel.classList.add('axe');
        } else if (weapon == 'Lance') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('lanceWin');
            playerModel.classList.add('sword');
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('axeWin');
            playerModel.classList.add('lance')
        }
    } else {
        if (weapon == 'Epée') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('sword');
            playerModel.classList.add('sword');
        } else if (weapon == 'Lance') {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('lance');
            playerModel.classList.add('lance');
        } else {
            playerModel.className = 'playerModel';
            compModel.className = 'compModel';
            compModel.classList.add('axe');
            playerModel.classList.add('axe')
        }
    }

    console.log(weapon, compPick);

}


sword.addEventListener('click', () => {
    fight(sword.textContent);
})

lance.addEventListener('click', () => {
    fight(lance.textContent);
})

axe.addEventListener('click', () => {
    fight(axe.textContent);
})