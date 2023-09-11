const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  rl.question('Quel est le nombre ? ', (answer) => {
    // answer est de type string (à vous le convertir)
    console.log('Vous avez saisi : ' + answer);

    // rejouer (CTRL-C pour killer)
    jouer();

    // fin du programme :
    // rl.close();
  });
}

jouer();
