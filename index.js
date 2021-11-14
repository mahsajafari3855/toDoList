
const inputValue = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-btn");
todoButton.addEventListener("click", addtodo);
const todoList=document.querySelector(".to-container")
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
    

}
 