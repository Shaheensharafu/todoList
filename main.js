const todoList = [];

renderTodoList();

const inputElement = document.querySelector('.js-input');
const inputDateElement = document.querySelector('.js-date');

inputElement.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

function renderTodoList() {
  let html = '';
  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const { name, date } = todo;
    const todoHtml = `
      <p>${name} ${date} <button onclick='deleteTodo(${i}); renderTodoList();'>Delete</button></p>
    `;
    html +=  todoHtml;
  }
  document.querySelector('.todoList').innerHTML = html;
}

function addTodo(){
  const name = inputElement.value;
  const date = inputDateElement.value;
  todoList.push({ name, date });
  inputElement.value = '';
  inputDateElement.value = '';
  renderTodoList();
}

function deleteTodo(index){
  todoList.splice(index, 1);
  renderTodoList();
}
