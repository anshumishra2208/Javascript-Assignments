let todos = JSON.parse(localStorage.getItem("todos")) || []

let form = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let input = document.querySelector("#todo-input");
let btn = document.querySelector("#btn");
let taskCount = document.querySelector("#taskCount");
let completed = document.querySelector("#completed")


let isEdit = null;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(input.value===""){
        return
    }
    if(isEdit){
        todos = todos.map((todo)=>{
        if(todo.id===Number(id)){
            return {
                ...todo,
                text : input.value
            }
        }
        return todo;
    })
    localStorage.setItem("todos",JSON.stringify(todos))
    isEdit = null;
    renderTodo();
    }

    else{
        let newTodo = {
        id : Date.now(),
        text : input.value,
        isCompleted : false
    }
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos))
    }

    renderTodo();


})

function renderTodo(){
    todoList.innerHTML = "";
    todos.forEach((todo)=>{
        let li = document.createElement("li");
        li.dataset.id = todo.id;
        li.className = "bg-blue-200 p-2.5 rounded-md"
        li.innerHTML = `<div class="flex justify-between">
                    <div class="flex items-center gap-2">
                    <input data-action="toggle" ${todo.isCompleted? "checked" : ""} type="checkbox">
                    <p>${todo.text}</p>
                </div>

                <div class="flex items-center gap-4" >
                    <button class="bg-pink-200 py-1 px-2 rounded-lg" data-action="edit">edit</button>
                    <button class="bg-pink-200 py-1 px-2 rounded-lg" data-action="delete">delete</button>
                </div>
                </div>`
        todoList.append(li);
        btn.textContent = "Add";
        input.value = ""
      
            
    })

      taskCount.textContent = ` TASK (${(todos.length)})`;
        // let completedTodo = todos.filter((todo)=>{
        //     if(todo.isCompleted===true){
        //         return todo
        //     }
        // })
        // completed.textContent = `COMPLETED : ${completedTodo.length}`
        completed.textContent = ` COMPLETED : ${todos.filter((todo)=>{
            if(todo.isCompleted){
            return todo
            }
            }).length}`
}

renderTodo();

let id;
todoList.addEventListener("click",(e)=>{
    // let checkbox = e.target?.closest("input");
    let toggleAction = e.target.dataset.action
    let target = e.target;
    id = target.closest("li")?.dataset.id;
    let action = target.closest("button")?.dataset.action;
    if(action==="delete"){
        deleteTodo(id)
    }
    if(action==="edit"){
        editTodo(id)
    }
    if(toggleAction==="toggle"){
        todos = todos.map((todo)=>{
            if(todo.id===Number(id)){
                return {
                    ...todo,
                    isCompleted : !todo.isCompleted
                }
            }
            localStorage.setItem("todos",JSON.stringify(todos))
            return todo
        })
        localStorage.setItem("todos",JSON.stringify(todos))
        renderTodo()
    }
})

function deleteTodo(id){
    todos = todos.filter((todo)=>{
        if(todo.id!==Number(id)){
            return todo
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))
    renderTodo()
}

function editTodo(id){
    isEdit = id;
    let currentTodo = todos.find((todo)=>{
        if(todo.id===Number(id)){
            return todo
        }
    })
    input.value = currentTodo.text;
    btn.textContent = "Update";

}

