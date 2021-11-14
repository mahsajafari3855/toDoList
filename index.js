
const inputValue = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-btn");
todoButton.addEventListener("click", addtodo);
const todoList = document.querySelector(".to-container")
todoList.addEventListener("click", checkRemove);

function addtodo(e) {
    e.preventDefault();
    console.log("hi");
    const tododDiv = document.createElement("div");
    tododDiv.classList.add("todo");
    const newTodo=`<li>${inputValue.value}</li>
            <span><i class="fa fa-check-square"></i></span>
            <span><i class="fa fa-trash-alt"></i></span>
`
    tododDiv.innerHTML = newTodo;
    todoList.appendChild(tododDiv);
    inputValue.value = " ";
    

}
function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target;
    if (classList[1]=== "fa-trash-alt") {
        const todo = item.parentElement.parentElement;
        todo.remove();
        
        
    }
    else if (classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("complited");
        
        
        
        
        
    }
    
}
 