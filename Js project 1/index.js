

let todos = [
    { text : "go to gym",
      id : Date.now() + 1,
      isCompleted : false
    },
    { text : "revision",
      id : Date.now() + 2,
      isCompleted : false
    },
    { text : "take class",
      id : Date.now() + 3,
      isCompleted : false
    }
   
]

let form = document.querySelector("#todo-form");
let input = document.querySelector("#todo-input");
let todoList = document.querySelector("#todo-list");


form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let newTodo = {
        id : Date.now(),
        text : input.value,
        isCompleted : false
    }
    
    todos.push(newTodo);
    addTodo(newTodo);
    
    input.value = "";
})

let li;

function addTodo (newTodo){
     li = document.createElement("li");
    li.dataset.id = `${newTodo.id}`;
    
    li.innerHTML =  `<div class="flex justify-between">
                    <div class="flex items-center gap-2">
                    <input type="checkbox">
                    <p>${newTodo.text}</p>
                </div>

                <div class="flex items-center gap-4" >
                    <button data-action="edit">edit</button>
                    <button data-action="delete">delete</button>
                </div>
                </div>`
    todoList.append(li);            
}

function render(){
    todoList.innerHTML = ""

    todos.forEach((todo)=>{
        addTodo(todo);
    })
}
render();

todoList.addEventListener("click",(e)=>{

    let target = e.target;
    let id = target.closest("li")?.dataset.id;
    let action = target.dataset.action;
    let nearestLi = e.target.closest("li");
    let checkbox = target.closest("input");
    if(action==="edit"){
        console.log("editing");
    }
    if(action==="delete"){
        deleteTodo(id,nearestLi)
    }  
    
    console.log(todos);


})

function deleteTodo(id,nearestLi){
    nearestLi.remove();

    todos = todos.filter((todo)=>{
        if(todo.id!==Number(id)){
            return todo;
        }
    })
}