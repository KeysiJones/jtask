/***********************VARIABLES****************************/

let newTaskInput = document.getElementById("input");
let addButton = document.getElementById("btn");
let taskList = document.getElementById("lista");
/***********************FUNCTIONS****************************/

let createNewTask = function () {
  noTaskMessageSwitcher(0);
  let valorAtualizado = newTaskInput.value;

  if (newTaskInput.value != "") {
    let newTask = document.createElement("li");
    let taskInput = document.createElement("input");
    let link = document.createElement("a");
    let texto = document.createTextNode(valorAtualizado);

    taskInput.setAttribute("type", "checkbox");
    taskInput.className = "mx-1";

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
  taskContainer.style.color = "white";
  taskCheckbox.style.display = "none";

  setTimeout(() => {
    taskContainer.remove();
    noTaskMessageSwitcher(1);
  }, 1000);

  // setTimeout(() => {}, 1100);
};

const noTaskMessageSwitcher = (zeroElementCount) => {
  let updatedList = document.querySelector("#lista");
  let noTasks = document.querySelector("#no-tasks");
  console.log(updatedList.childElementCount);
  updatedList.childElementCount <= zeroElementCount
    ? (noTasks.innerHTML =
        "Congrats, you've finished all your tasks ! <br/> feel free to add more tasks if you want ;)")
    : (noTasks.innerHTML = "");
};

/***********************EVENTS****************************/
addButton.addEventListener("click", createNewTask);

newTaskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    createNewTask();
  }
});
