let button = document.getElementById("button");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

button.addEventListener("click", function() {
    if (input.value !== '') {
        let task = document.createElement("p");
        task.innerText = '- ' + input.value;
        input.value = '';

        task.addEventListener("click", function() {
            if (task.style.textDecoration === "line-through") {
                task.style.textDecoration = "";
            } else {
                task.style.textDecoration = "line-through";
            }
        });

        task.addEventListener("dblclick", function() {
            task.remove();
        });

        taskList.appendChild(task);
    }
});