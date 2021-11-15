
const inputValue = document.querySelector(".to-do-input");
const todoButton = document.querySelector(".to-do-btn");
const filterOption = document.querySelector(".filter-to-do");
document.addEventListener("DOMContentLoaded",getSavetodosToDom);

filterOption.addEventListener("click",filterTodo);
todoButton.addEventListener("click", addtodo);
const todoList = document.querySelector(".to-container")
todoList.addEventListener("click", checkRemove);

function addtodo(e) {
    e.preventDefault();
    const tododDiv = document.createElement("div");
    tododDiv.classList.add("todo");
    const newTodo=`<li>${inputValue.value}</li>
            <span><i class="fa fa-check-square"></i></span>
            <span><i class="fa fa-trash-alt"></i></span>`

    tododDiv.innerHTML = newTodo;
    todoList.appendChild(tododDiv);
    saveLocalStorage(inputValue.value);

    inputValue.value = " ";
    

}
function saveLocalStorage(todo) {
    let saveTodos = localStorage.getItem("todos") ?
        JSON.parse(localStorage.getItem("todos")) :
        [];
    saveTodos.push(todo);
    localStorage.setItem("todos", JSON.stringify(saveTodos));


    
}
function getSavetodosToDom() {
    let saveTodos = localStorage.getItem("todos") ?
        JSON.parse(localStorage.getItem("todos")) :
        [];
    saveTodos.forEach((todo) => {
        const tododDiv = document.createElement("div");
    tododDiv.classList.add("todo");
    const newTodo=`<li>${todo}</li>
            <span><i class="fa fa-check-square"></i></span>
            <span><i class="fa fa-trash-alt"></i></span>`

    tododDiv.innerHTML = newTodo;
    todoList.appendChild(tododDiv);

        
    })
    
}




function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target;
    if (classList[1]=== "fa-trash-alt") {
        const todo = item.parentElement.parentElement;
        removeLocalTodos(todo);  
        todo.remove();
    }
    else if (classList[1] === "fa-check-square") {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
        
        
        
        
        
    }
    
    
}
function removeLocalTodos(todo) {
    // console.log(todo.children[0].innerText);
    let saveTodos = localStorage.getItem("todos") ?
        JSON.parse(localStorage.getItem("todos")) :
        [];
    const filterTodos = saveTodos.filter((t) => t != todo.children[0].innerText)
    localStorage.setItem("todos", JSON.stringify(filterTodos));

 }
function filterTodo(e) {
    console.log(e.target.value)
    const todos = [...todoList.childNodes];
    // todos.splice
    console.log(todoList.childNodes);

    todos.forEach((todo) => {
        console.log("hi");
      switch (e.target.value) { 
            case 'all':
                todo.style.display = "flex";
                break; 
            case 'completed':
              if (todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              }
              else { todo.style.display = "none"; }
                break;
            case 'uncompleted':
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                
        }
        break;}
        
        
    })

    
     
 }