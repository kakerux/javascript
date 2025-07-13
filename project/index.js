let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        <span>${task}</span>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    saveAndRender();
  }
}

function editTask(index) {
  const updated = prompt("Edit Task:", tasks[index]);
  if (updated !== null && updated.trim() !== "") {
    tasks[index] = updated.trim();
    saveAndRender();
  }
}

function deleteTask(index) {
  if (confirm("Delete this task?")) {
    tasks.splice(index, 1);
    saveAndRender();
  }
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Initial render
renderTasks();
