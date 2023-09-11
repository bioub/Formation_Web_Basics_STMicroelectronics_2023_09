const names = ['Romain', 'Chayma', 'Ludovic'];

names.filter((n) => n.length === 6)
     .forEach((n) => console.log(`Hello ${n}`));

// pile d'appels
// ^
// |
// |[=> ][=> ][=> ][=> ][=> ]
// |[filter       ][forEach ]
// +---------------------------------> temps
//                 Rom  Chay
