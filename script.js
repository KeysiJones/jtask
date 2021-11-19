/***********************VARIABLES****************************/

let newTaskInput = document.getElementById("input");
let addButton = document.getElementById("btn");
let taskList = document.getElementById("lista");
/***********************FUNCTIONS****************************/

newTaskInput.focus();

let createNewTask = function () {
  if (newTaskInput.value != "") {
    noTaskMessageSwitcher();
    let valorAtualizado = newTaskInput.value;
    let newTask = document.createElement("li");
    let taskInput = document.createElement("input");
    let link = document.createElement("a");
    let texto = document.createTextNode(valorAtualizado);

    taskInput.setAttribute("type", "checkbox");

    taskList.className = "ml-2 mr-1 my-2";
    taskInput.className = "mr-1";

    link.appendChild(texto);
    newTask.appendChild(taskInput);
    newTask.appendChild(link);
    taskList.appendChild(newTask);

    newTaskInput.value = "";

    newTask.children[0].addEventListener("click", finishTask);
  }
};

const finishTask = function () {
  let taskContainer = this.parentElement;
  let task = this.parentElement.children[1];
  let taskCheckbox = this.parentElement.children[0];
  task.style.textDecoration = "line-through";
  taskContainer.style.opacity = 0;
  taskCheckbox.style.opacity = 0;

  setTimeout(() => {
    taskContainer.remove();
    noTaskMessageSwitcher(0);
  }, 1000);
};

const noTaskMessageSwitcher = (zeroElementCount) => {
  let updatedList = document.querySelector("#lista");
  let noTasks = document.querySelector("#no-tasks");

  updatedList.childElementCount <= zeroElementCount
    ? (noTasks.innerHTML =
        "Congrats, you've finished all your tasks ! feel free to add more tasks if you want ;)")
    : (noTasks.innerHTML = "");
};

/***********************EVENTS****************************/
addButton.addEventListener("click", createNewTask);

newTaskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    createNewTask();
  }
});
