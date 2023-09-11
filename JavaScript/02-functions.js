// 4 façons de déclarer une fonction

// function declaration (bonne pratique)
function hello(name) {
  return `Hello ${name}`;
}

// function expression (on va utiliser une fonction
// comme une valeur)

// anonymous function expression (legacy)
const sum = function(a, b) {
  return a + b;
};

['Romain', 'Chayma', 'Ludovic'].forEach(function(name) {
  console.log(name);
});

// named function expression (legacy)
const sub = function substract(a, b) {
  return a - b;
};

['Romain', 'Chayma', 'Ludovic'].forEach(function logParam1(name) {
  console.log(name);
});

// arrow functions (ES2015+) (bonne pratique)
const multiply = (a, b) => a - b;

['Romain', 'Chayma', 'Ludovic'].forEach((name) => {
  console.log(name);
});
