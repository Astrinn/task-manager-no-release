const taskForm = document.querySelector('form');
const taskInput = document.querySelector('#input-task');
const taskList = document.querySelector('#task-list');

let tasks = [];

// Event listener for adding a new task
taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const newTask = taskInput.value.trim();

  if (newTask === '') {
    return;
  }

  tasks.push(newTask);
  renderTasks();

  taskInput.value = '';
});

// Render the list of tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}
