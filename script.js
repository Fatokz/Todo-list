let input = document.getElementById("input")
let todoDiv = document.getElementById("todoDiv")
let todoArr = []

function displayArr() {
    todoDiv.innerHTML = ''
    for (let index = 0; index < todoArr.length; index++) {
        todoDiv.innerHTML +=
            `<p id="onn"> 
            ${index + 1} ${todoArr[index]}
           <span> <button id="press" onclick= "deleteTodo(${index})"><i class="fa-solid fa-trash-can"></i></button>
             <button id="press" onclick="edit(${index})"><i class="fa-solid fa-pen"></i></button> </span>
        </p>`;
    }
}

function addTodo() {
    if (input.value == '' || input.value.trim() == '') { 
        alert("Your Input is empty");
    }
    else {
        todoArr.push(input.value)
        console.log(todoArr);
        displayArr()
    }
}

function deleteTodo(index) {
    todoArr.splice(index, 1)
    console.log(todoArr);
    displayArr()
}

function edit(index) {
    const changing = prompt('enter', `${todoArr[index]}`)
    todoArr.splice(index, 1, changing);
    console.log(todoArr);
    displayArr()
}