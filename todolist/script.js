const pendings = document.querySelectorAll('.single-task');
const completedTodos = document.querySelector('.done');
const completedTasks = document.querySelector('.completed-tasks');

pendings.forEach(todo => todo.addEventListener('click', (event) => {
  let completedTodo = document.createElement('li');
  let todoContent = document.createTextNode(todo.textContent);
  completedTodo.appendChild(todoContent);
  completedTasks.insertBefore(completedTodo, completedTodos);
  todo.remove();
}));
