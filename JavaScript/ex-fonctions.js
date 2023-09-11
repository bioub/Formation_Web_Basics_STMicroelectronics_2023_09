// Exercice 1
// compléter cette fonction pour qu'elle retourne
// - "Plus grand" si nb1 est plus grand que nb2
// - "Plus petit" si nb1 est plus petit que nb2
// - "Gagné" si nb1 est égal à nb2
function comparer(nb1, nb2) {
  if (nb1 < nb2) {
    return "Plus petit";
  } else if (nb1 > nb2) {
    return "Plus grand";
  } else {
    return "Gagné";
  }
}

console.log(comparer(5, 2)); // Plus grand
console.log(comparer(2, 5)); // Plus petit
console.log(comparer(5, 5)); // Gagné

// Exercice 2
// compléter cette fonction pour qu'elle retourne
// - undefined si le tableau nbs est vide ou undefined
// - 'Vous avez déjà saisi : 3 - 4 - 5' si le tableau nbs contient 3, 4, 5
function dejaSaisis(nbs = []) {
  if (!nbs.length) {
    return undefined;
  }

  return `Vous avez déjà saisi : ${nbs.join(' - ')}`;
}

console.log(dejaSaisis()); // undefined
console.log(dejaSaisis([])); // undefined
console.log(dejaSaisis([3, 4, 5])); // Vous avez déjà saisi : 3 - 4 - 5
console.log(dejaSaisis([5, 6, 7])); // Vous avez déjà saisi : 5 - 6 - 7

// Exercice 3
// compléter cette fonction pour qu'elle retourne
// le total d'éléments pairs du tableau


// programmation impérative
function totalPairs(nbs = []) {
  let nbEven = 0;

  for (const nb of nbs) {
    if (nb % 2 === 0) {
      nbEven++;
    }
  }

  return nbEven;
}

// programmation fonctionnelle
function totalPairs(nbs = []) {
  return nbs.filter((nb) => nb % 2 === 0).length;
}

console.log(totalPairs()); // 0
console.log(totalPairs([])); // 0
console.log(totalPairs([1, 2, 3])); // 1
console.log(totalPairs([1, 2, 3, 4, 5, 6])); // 3
