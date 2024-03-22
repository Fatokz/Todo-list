// Retrieving DOM elements by their IDs
let input = document.getElementById("input"); // Input field for adding new todo items
let todoDiv = document.getElementById("todoDiv"); // Container for displaying todo items
let todoArr = []; // Array to store todo items

// Function to display todo items in the DOM
function displayArr() {
    // Clearing existing content in todoDiv
    todoDiv.innerHTML = '';
    
    // Iterating over the todoArr to generate HTML content for each todo item
    for (let index = 0; index < todoArr.length; index++) {
        // Generating HTML code for displaying todo item with delete and edit buttons
        todoDiv.innerHTML +=
            `<p id="onn"> 
            ${index + 1} ${todoArr[index]}
            <span> 
                <button id="press" onclick= "deleteTodo(${index})"><i class="fa-solid fa-trash-can"></i></button>
                <button id="press" onclick="edit(${index})"><i class="fa-solid fa-pen"></i></button>
            </span>
        </p>`;
    }
}

// Function to add a new todo item
function addTodo() {
    // Checking if the input field is empty or contains only whitespace
    if (input.value == '' || input.value.trim() == '') { 
        alert("Your Input is empty");
    }
    else {
        // Adding the new todo item to the todoArr
        todoArr.push(input.value);
        console.log(todoArr); // Logging the updated todoArr
        displayArr(); // Displaying the updated todo list
    }
}

// Function to delete a todo item
function deleteTodo(index) {
    // Removing the todo item at the specified index from the todoArr
    todoArr.splice(index, 1);
    console.log(todoArr); // Logging the updated todoArr
    displayArr(); // Displaying the updated todo list
}

// Function to edit a todo item
function edit(index) {
    // Prompting the user to enter the updated todo item
    const changing = prompt('enter', `${todoArr[index]}`);
    // Replacing the todo item at the specified index with the updated value
    todoArr.splice(index, 1, changing);
    console.log(todoArr); // Logging the updated todoArr
    displayArr(); // Displaying the updated todo list
}