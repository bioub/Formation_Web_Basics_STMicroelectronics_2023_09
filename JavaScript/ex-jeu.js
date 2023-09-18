function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


const readline = require('readline');

function jouer() {
  if (essais.length) {
    console.log('Vous avez saisi : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    // answer est de type string (à vous le convertir)
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const entierAlea = getRandomInt(0, 100);
const essais = [];
jouer();

// pile d'appels
// ^
// |                                  [question]                 [question]
// |[question]                        [jouer]                    [jouer]
// |[jouer   ] ..⟳..                  [taskAnswer] ..⟳..         [taskAnswer] ..⟳..
// +----------------------------------12ENTREE--------------------37ENTREE-> temps
//
