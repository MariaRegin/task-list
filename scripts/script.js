const input = document.getElementById("input");
const addButton = document.getElementById("button");
const tasksList = document.getElementById("tasks");
const emptyParagraph = document.getElementById("empty");
const clearButton = document.getElementById("clear");
const allCheckboxes = document.querySelectorAll("checkbox");

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
}

function showEmpty() {
  emptyParagraph.textContent = "Nothing here yet";
}

addButton.addEventListener("click", createTask);
tasksList.addEventListener("click", checkTask);
document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") createTask();
});
clearButton.addEventListener("click", clearList);
document.addEventListener("DOMContentLoaded", showEmpty);
