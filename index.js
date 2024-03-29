let add = document.getElementById("add");
let todolist = document.getElementById("todolist");
let input = document.getElementById("input");

let todos = [];
window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => addTodo(todo));
};
add.addEventListener("click", () => {
  todos.push(input.value);
  localStorage.setItem("todos", JSON.stringify(todos));
  addTodo(input.value);
  input.value = "";
});

function addTodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todolist.appendChild(para);

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
    console.log(todos);
  });
  para.addEventListener("dblclick", () => {
    todolist.removeChild(para);
    remove(todo);
    console.log(todos);
  });
}
function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) {
    todos.splice(index, 1);
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
