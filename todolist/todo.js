// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTasks); 
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = createTaskElement(taskText);
    taskList.appendChild(li);
    // Save tasks in localStorage
    saveTasks();
    taskInput.value = "";
}

function createTaskElement(taskText) {
    let li = document.createElement("li");
    li.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
        li.remove();
        // Update localStorage after removal
        saveTasks();
    };

    li.appendChild(removeBtn);
    return li;
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        // Save only the task text
        tasks.push(li.firstChild.textContent);
    });
    // Store in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    savedTasks.forEach(taskText => {
        let li = createTaskElement(taskText);
        taskList.appendChild(li);
    });
}
