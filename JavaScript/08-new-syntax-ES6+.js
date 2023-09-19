// REST (... à la reception)
// conversion de syntaxe
// d'une liste de valeur (ici 3, 4, 5)
// vers un tableau (ici nbs vaut [3, 4, 5])
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));


// SPREAD (... à la lecture)
// conversion de syntaxe
// d'un tableau (ici [3, 4, 5])
// vers une liste de valeur (ici a vaut 3, b vaut 4, c vaut 5)
function multiply(a, b, c) {
  return a * b * c;
}

const nbs = [3, 4, 5];
console.log(multiply(...nbs));

// Destructuration
//    [3    , 4     , 5   ]
const [trois, quatre, cinq] = nbs;

// Cumulable avec d'autres syntaxes (default + REST) :
//    [3       , 4   , 5   ]
const [three = 3, ...others] = nbs;

// Fonctionne également sur des objets
const coords = {x: 1, y: 2};
const coords3d = {...coords, z: 3}; // SPREAD
const {z = 0, ...coords2d} = coords3d; // REST

// Le SPREAD On s'en sert pour cloner :
const cloneArray = [...nbs];
const cloneObject = {...coords};
