// Get the elements
var count = 0;
const addTaskButton = document.getElementById("add-task-button");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add event listener to the add task button
addTaskButton.addEventListener("click", function () {
    // Get the task from the input fiel
    let task = taskInput.value;
    if (task == "") {
        alert("You must Write...");
    }
    else {
        // Create a new list item
        let newTask = document.createElement("li");
        newTask.innerHTML = task;
        newTask.setAttribute('class', 'jk');
        // Add a 'delete' button to the task
        let deleteButton = document.createElement("i");
        // deleteButton.innerHTML = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.setAttribute('style', 'float: right;')
        deleteButton.setAttribute('class', 'fa-solid fa-trash-can delete-button')
        //<i class="fa-solid fa-trash-can"></i>
        newTask.appendChild(deleteButton);

        // Add the task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
        count++;
        document.getElementById('count').innerHTML = count;
    }
});

// Add event listener to the task list
taskList.addEventListener("click", function (event) {
    // Check if the clicked element is a 'delete' button
    if (event.target.classList.contains("delete-button")) {
        // Remove the parent list item (which contains the task and the delete button)
        event.target.parentNode.remove();
        count--;
        document.getElementById('count').innerHTML = count;
    }
});
function callCompleteAll() {
    const list = document.querySelectorAll('.jk');
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
    document.getElementById('count').innerHTML = 0;
}

function clearTask() {
    document.getElementById('new-task').value = ""
}