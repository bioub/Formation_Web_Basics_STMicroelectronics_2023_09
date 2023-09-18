const names = ['Romain', 'Chayma', 'Ludovic'];

/**
 * Dit bonjour (JSdoc)
 * @param {string} name Le prénom
 * @returns Le message
 */
function hello(name) {
  // cette string est délimitée par des backquotes `` (AltGr-7)
  return `Hello ${name}`;
}

for (const n of names) {
  console.log(hello(n));
}
