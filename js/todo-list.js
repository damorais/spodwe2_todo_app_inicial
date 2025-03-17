document.getElementById("new-todo").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const newTodoInput = document.getElementById("new-todo");
    const todoText = newTodoInput.value.trim();
    if (todoText === "") return;

    const todoList = document.getElementById("todo-list");
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    deleteButton.onclick = function () {
        todoList.removeChild(todoItem);
    };

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    newTodoInput.value = "";
}
