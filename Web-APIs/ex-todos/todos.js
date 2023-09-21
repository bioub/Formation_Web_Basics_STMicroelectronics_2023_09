/**
 * 
 * @param {string} title 
 * @returns {HTMLSpanElement}
 */
function createSpanEl(title) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todos-title';
  spanEl.innerText = title;

  return spanEl;
}

/**
 * 
 * @param {string} title 
 * @returns {HTMLInputElement}
 */
function createInputEl(title) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todos-title-input';
  inputEl.value = title;

  return inputEl;
}


/**
 * 
 * @param {object} todo 
 * @param {number} todo.id 
 * @param {string} todo.title 
 * @param {boolean} todo.completed 
 * @returns {HTMLDivElement}
 */
function createTodoRow(todo) {
  const rowEl = document.createElement('div');
  rowEl.className = "todos-item";
  rowEl.dataset.todoId = todo.id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todos-completed';
  checkboxEl.checked = todo.completed;
  rowEl.append(checkboxEl);

  const spanEl = createSpanEl(todo.title);
  rowEl.append(spanEl);

  const buttonEl = document.createElement('button');
  buttonEl.className = 'todos-remove';
  buttonEl.innerText = '-';
  rowEl.append(buttonEl);

  return rowEl;
  // Exercice 1
  // Retourner un HTMLDivElement qui correspond à ce HTML :
  // <div class="todos-item" data-todo-id="12">
  //   <input type="checkbox" class="todos-completed">
  //   <span class="todos-title">Acheter du pain</span>
  //   <button class="todos-remove">-</button>
  // </div>
  // cocher la checkbox si todo.completed === true

  // Exercice 2 (à faire ici dans ce fichier)
  // Ecouter le clic du bouton remove, et supprimer 
  // le HTMLDivElement (le parent du bouton)

  // Exercice 4
  // Ecouter le double-click (event "dblclick") d'élément span
  // le remplacer par (voir replaceWith) une balise input
  // écouter le keydown de cette balise input, si le code
  // de la touche correspond à la touche ENTREE remplacer
  // l'input par une balise span
}