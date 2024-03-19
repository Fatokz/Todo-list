let input = document.getElementById("input")
let todoDiv = document.getElementById("todoDiv")
let todoArr = []


function displayArr() {
    todoDiv.innerHTML = ''
    for (let index = 0; index < todoArr.length; index++) {
        todoDiv.innerHTML += `<p> ${todoArr[index]} <button onclick= "deleteTodo(${index})">delete</button> </p>`;
    }
}

function addTodo() {
    todoArr.push(input.value)
    console.log(todoArr);
    displayArr()
}

function deleteTodo(index) {
    todoArr.splice(index , 1)
    console.log(todoArr); 
    displayArr()
}