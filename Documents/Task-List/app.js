//Define UI Vars
const form = document.querySelector("#task-form")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task")

//load all event listeners
loadEventListeners()

//load all event listeners
function loadEventListeners() {
  // add a task event
  form.addEventListener("submit", addTask)
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("add a task")
  }

  e.preventDefault()
}
