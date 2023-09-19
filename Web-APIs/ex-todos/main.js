/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const valueEl = document.querySelector('.todos-value');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todos-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  // à faire pour trouver le code dans l'exercice 4 :
  // console.log(event); 
  
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
