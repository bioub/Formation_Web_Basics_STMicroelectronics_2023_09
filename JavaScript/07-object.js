// en JS on manipule de nombreux objets globaux
console.log(typeof Math); // object
console.log(typeof JSON); // object
// les tableaux, les chaines de caractères et meme les fonctions sont
// des objects

// [].
// ''.
// (function() {}).
console.log(typeof Number); // function (donc object)

// idem pour les plateformes

// Node
console.log(typeof process); // object (dans Node)

// Navigateur (Web APIs)
console.log(typeof document); // object (dans un navigateur)

// la plupart du temps on accède au contenu de l'objet en
// lecture, ex :

// ici PI est random sont des clés de l'objet
// les clés qui représentent des valeurs sont appelées "propriétés"
// les clés qui représentent des fonctions sont appelées "méthodes"
console.log(Math.PI); // 3.14....
console.log(Math.random()); // 0......

// exemple d'API qui utilise ce vocabulaire
console.log(Object.keys(process)); // converti les clés en tableau
console.log("".hasOwnProperty('length')); // true
console.log("".hasOwnProperty('toUpperCase')); // false

// il existe un 2e opérateur pour accéder dynamiquement à une clé : les crochets []
const key = 'PI';
console.log(Math[key]);
console.log(Math['pi'.toUpperCase()]);
const method = 'log';
console[method]('Hello');

// On peut aussi modifier un object (un dictionnaire)
// ATTENTION : mauvaise pratique de modifier des objets qu'on a pas créé
// ex : les objets du langage (Math..), de la plateforme (document..) ou d'une lib externe (React)
// (sauf dans les tests unitaires)

// Pas de clé sum dans Math
console.log(Math.sum); // undefined

// On va pouvoir "étendre" l'objet avec une nouvelle clé :
Math.sum = (a, b) => a + b; // MAUVAISE PRATIQUE pour Math
console.log(Math.sum(1, 2)); // 3

// exemple d'API qui utilise ce vocabulaire
console.log(Object.isExtensible(Math)); // true

// On peut modifier et même supprimer des clés
// Math.random = () => 0.5;
// console.log(Math.random()); // 0.5

// delete Math.random;
// console.log(Math.random()); // ERREUR
delete Math.sum;

// Peut etre une bonne pratique dans un test unitaire
function pileOuFace() {
  return (Math.random() > 0.5) ? 'pile' : 'face';
}

// imaginons ce code dans un test :
// avant le test
const originalRandom = Math.random;
Math.random = () => 0.75
console.log(pileOuFace()); // 'pile'
console.log(pileOuFace()); // 'pile'
Math.random = () => 0.25
console.log(pileOuFace()); // 'face'
console.log(pileOuFace()); // 'face'
// après le test
Math.random = originalRandom;

// ici le vrai Math.random :
console.log(Math.random());
