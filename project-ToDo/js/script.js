const taskInput = document.getElementById("task-input");
const dateInput = document.getElementById("date-input");
const addButton = document.getElementById("add-button");

const todos = [];

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    task,
    date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    taskInput.value = "";
    dateInput.value = "";
    console.log(todos);
  } else {
    alert("Warning");
  }
};

addButton.addEventListener("click", addHandler);
