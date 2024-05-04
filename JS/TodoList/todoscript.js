var todoInput = document.getElementById('add-task');
var addBtn = document.getElementById('add-btn');
var todoTask = document.getElementById('todo-task');
var taskCompleted = document.getElementById('task-done');

//New Todo List
var createNew = function(taskdata) {
    var listItem = document.createElement("li"); 
    var checkbox = document.createElement("input");
    var label = document.createElement("label")
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    checkbox.type = "checkbox";
    editInput.type = "text";
    editButton.innerHTML = "Edit";
    editButton.className = "edit-btn";
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";

    label.innerText = taskdata;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

//Add Todo

var addList = function() {
    var listItem =  createNew(todoInput.value);
    todoTask.appendChild(listItem);
    bindTaskEvents(listItem, completedTask);
    todoInput.value = "";
}


//edit
var editTask = function() {
    // console.log("Edit task...");
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var changeClass = listItem.classList.contains("editMode");

    if(changeClass){
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }

    listItem.classList.toggle("editMode");
}

//delete
var deleteTask = function() {
    // console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
}


var completedTask = function(){
    var listItem = this.parentNode;
    taskCompleted.appendChild(listItem);
    bindTaskEvents(listItem, currentTask);
}

var currentTask = function() {
    var listItem = this.parentNode;
    todoTask.appendChild(listItem);
    bindTaskEvents(listItem, completedTask);
}


var bindTaskEvents = function(taskItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    var checkbox = taskItem.querySelector("input[type=checkbox]");
    var deleteButton = taskItem.querySelector("button.delete-btn");
    var editButton = taskItem.querySelector("button.edit-btn");
    checkbox.onchange = checkBoxEventHandler;
    deleteButton.onclick = deleteTask;
    editButton.onclick = editTask;
}

addBtn.addEventListener("click", addList);

for (var i=0;i<todoTask.children.length; i++ ){
    bindTaskEvents(todoTask.children[i], completedTask);
}
for (var i=0;i<taskCompleted.children.length; i++ ){
    bindTaskEvents(taskCompleted.children[i], currentTask);
}