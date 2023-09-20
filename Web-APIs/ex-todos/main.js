/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const valueEl = document.querySelector('.todos-value');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todos-container');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-toggle');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  // à faire pour trouver le code dans l'exercice 4 :
  // if (event.submitter.name === 'moins') {
  //   console.log('click moins');
  // } else if (event.submitter.name === 'plus') {
  //   console.log('click plus');
  // }
  
  const itemEl = createTodoRow({
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    title: valueEl.value,
    completed: false,
  });

  containerEl.append(itemEl);
});

// Exercice 3
// Ecouter le clic de la checkbox "todos-toggle"
// cocher/décocher toutes les checkboxes "todos-completed"
toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxesEls = containerEl.querySelectorAll('.todos-completed');

  for (const checkboxEl of checkboxesEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});