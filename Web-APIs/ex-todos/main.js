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
  valueEl.classList.remove('invalid');
  if (valueEl.value === '') {
    valueEl.classList.add('invalid');
    return;
  }
  
  const itemEl = createTodoRow({
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    title: valueEl.value,
    completed: false,
  });

  containerEl.prepend(itemEl);
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

/*
Exercice 5
On souhaite déplacer les addEventListener de todos.js dans ce fichier
Comme les actions concernent des éléments qui n'existent pas au chargement
de la page (bouton moins, la balise span, la balise input) on va
écouter les mêmes événements sur l'élément containerEl qui les contient.
En utilisant event.target, regarder la propriété className
si la classe est todos-remove au click supprimer la balise parent
si la classe est todos-title au dblclick remplacer la balise input
si la classe est todos-title-input au keydown et que le code de la touche est Enter
remplacer la balise span
Attention vous n'aurez plus accès aux variables inputEl, spanEl, btnDeleteEl
déplacer vous dans l'arbre en utilisant parentElement, firstElementChild...
*/
containerEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-remove')) {
    target.closest('.todos-item').remove();
  }
});

containerEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-title')) {
    target.replaceWith(createInputEl(target.innerText));
  }
});

containerEl.addEventListener('keydown', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todos-title-input') && event.key === 'Enter') {
    target.replaceWith(createSpanEl(target.value));
  }
});

// Exercice 6
// Au chargement de la page envoyer une requête GET à l'URL
// https://jsonplaceholder.typicode.com/todos/
// Boucler sur le tableau reçu en JSON et afficher
// les données en appelant createTodoRow
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((todos) => {
    for (const todo of todos) {
      const itemEl = createTodoRow(todo);
      containerEl.append(itemEl);
    }
  });

// Exercice 7
// Au submit du formulaire afficher la bordure
// de <input type="text" class="todos-value">
// en rouge si aucune valeur n'a été saisie
// et ne pas ajouter la ligne

// Exercice 8
// Ecouter l'événément input sur le champ
// Stocker la saisie dans le localStorage
// Au chargement de la page reremplir le champ avec
// le contenu du localStorage
valueEl.addEventListener('input', () => {
  localStorage.setItem('new-todo', valueEl.value);
});

if (localStorage.getItem('new-todo')) {
  valueEl.value = localStorage.getItem('new-todo');
}
