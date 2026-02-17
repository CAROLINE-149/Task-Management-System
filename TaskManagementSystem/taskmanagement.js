//list to hold all tasks
//full CRUD tasks

let tasks = [];

//window onload method to render the tasks
window.onload = () => {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    displayAllTasks();
}

//arrow function to add a task
const addNewTask = () => {
  let taskInput = document.getElementById("task");
  let newTask = taskInput.value.trim();

  if (!newTask || tasks.includes(newTask)) return;

  tasks.push(newTask);
  taskInput.value = "";

  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayAllTasks();
};



//function to display the tasks
const displayAllTasks = () => {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
      <span class="todo-text">${task}</span>
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;

    taskList.appendChild(li);
  });
};

//function to edit a task
const editTask = (index) =>{
    let editTask = prompt (`Want to edit ${todos[index]}`);
    if(editTask.length > 0){
        tasks[index] = editTask;
        displayAllTasks();
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
}

//function to delete a task
const deleteTask = (index) => {
    let delTask = prompt(`Want to delete ${tasks[index]}`); // want to delete walking
    let taskIndex = tasks.indexOf(delTask);// get the index of the todo to be deleted
    tasks.splice(taskIndex, 1);
    localStorage.setItem('todos', JSON.stringify(tasks));
    displayAllTasks();
    
}

// add event listener to the button
let addButton = document.getElementById("submitBtn");
addButton.addEventListener('click', addNewTask);