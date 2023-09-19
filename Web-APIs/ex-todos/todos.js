function createTodoRow(todo) {
  const rowEl = document.createElement('div');
  rowEl.className = "todos-item";
  rowEl.dataset.todoId = todo.id;

  const spanEl = document.createElement('span');
  spanEl.className = 'todos-title';
  spanEl.innerText = todo.title;
  rowEl.append(spanEl);

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