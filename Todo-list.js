const todolist = [];

renderTodoList();

function renderTodoList () {

  let todolistHTML = '';
  let num = 0;
  for (let i = 0; i < todolist.length; i += 1) {

    const storingValueObject = todolist[i];
    const name = storingValueObject.name;
    const dueDate = storingValueObject.dueDate;

    num = num + 1;

    const html = `
    <div>${num}. ${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
      todolist.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;

    todolistHTML += html;

  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML; 
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({name: name, dueDate: dueDate});

  inputElement.value = '';

  renderTodoList();
}