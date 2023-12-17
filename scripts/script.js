const input = document.getElementById("input");
const addButton = document.getElementById("button");
const tasksList = document.getElementById("tasks");
const emptyParagraph = document.getElementById("empty");
const clearButton = document.getElementById("clear");
const allCheckboxes = document.querySelectorAll("checkbox");
const tasksArray = [];
const getTasks = localStorage.getItem("tasksArray");

function createTask() {
  const newTask = document.createElement("li");
  const newTaskText = input.value;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  emptyParagraph.textContent = "";
  newTask.textContent = newTaskText;
  tasksList.append(newTask);
  newTask.append(checkbox);
  input.value = "";
  clearButton.removeAttribute("disabled");
  tasksArray.push(newTaskText);
  localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
}

function checkTask(evt) {
  if (evt.target.tagName === "LI") {
    evt.target.classList.toggle("checked");
  }
}

function clearList() {
  tasksList.textContent = "";
  emptyParagraph.textContent = "Nothing here yet";
  clearButton.setAttribute("disabled", "");
  localStorage.removeItem("tasksArray");
}

addButton.addEventListener("click", createTask);
tasksList.addEventListener("click", checkTask);
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") createTask();
});
clearButton.addEventListener("click", clearList);

document.addEventListener("DOMContentLoaded", function () {
  const parsedArray = JSON.parse(getTasks);
  const newTask = document.createElement("li");
  const checkbox = document.createElement("input");
  if (getTasks) {
    JSON.parse(getTasks);
    clearButton.removeAttribute("disabled");
    emptyParagraph.textContent = "";
    for (let i = 0; i < parsedArray.length; i++) {
      tasksList.append(newTask);
      newTask.textContent = parsedArray[i];
    }
    for (let i = 0; i < parsedArray.length; i++) {
      newTask.append(checkbox);
      checkbox.type = "checkbox";
    }
  }
});
