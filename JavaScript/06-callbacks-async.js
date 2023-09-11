setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Question: Dans quel ordre vont appaitre les lettres ?
// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C <---- Bonne réponse

// pile d'appels
// ^
// |
// |                                      [lg   ]        [lg  ][lg   ]
// |[st  ][st  ][st  ][st  ][lg ] ..⟳..   [taskB] ..⟳.. [taskA][taskD] ..⟳.. [taskC]
// +--------------------------------------6ms------------500ms----------------1000ms-----------> temps
//                          E             B

// file d'attente (timer) 0ms : taskB
// file d'attente (timer) 6ms :
// file d'attente (timer) 500ms : taskA - taskD
// file d'attente (timer) 501ms : taskD
// file d'attente (timer) 502ms :
// file d'attente (timer) 1000ms : taskC

// Jake Archibald - In the loop (JSConf Asia 2018)
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
