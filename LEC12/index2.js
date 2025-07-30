//1.create a new element using createElement function
//2.insert required data in that element using .innerHTML or innerText
//3. insert new element in parent container using appendChild or append

let todos =[
    
    {
    id:234234,
    title:"study at 9pm"
    } ,
     {
    id:23478234,
    title:"play at 6pm"
    },
    {
    id:23428734,
    title:"sleep at 10pm"
    }

]
let todoContainer = document.querySelector(".todocontainer")
function addTodo(todo){
    let li = document.createElement("li");
    li.innerHTML= `<div>
            <input type="checkbox" name="" id="">
            <h1>${todo.title}</h1>
            <div>
                <button>❌</button>
                <button>✔️</button>
            </div>
        </div>`
        todoContainer.appendChild(li);
}

function showAllTodos(todos){
     todos.forEach(todo=>{
        addTodo(todo)
     });
}
showAllTodos(todos)