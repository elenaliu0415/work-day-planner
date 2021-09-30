// Given a time block element

// let currentHour = get the current hour
// let blockHour = get time block hour

// IF currentHour < blockHour
//    add "future" class to block element
// ELSE IF currentHour > blockHour
//    add "past" class to block element
// ELSE
//    add "present" class to block element

// currentHour = 9
// blockHour = 9

// result adds "past" class to time block to make gray

// moment js to show today's day and current time
var today = moment();
$("#currentDay").text(today.format("LLLL"));
var todos = [];
var input = document.getElementsByClassName("description");
var saveButton = document.getElementsByClassName("saveBtn");
var todoItem = input.value;

// When input text in the textarea, click save button and the text will be stored
// If refresh the page, the todos are still showing
// localStorage.setItem("input");
localStorage.setItem("eventInfo", JSON.stringify(todoItem));

if (todoItem !== null) {
    todoItem = "";
}

// saveButton.addEventListener('click', 
    







// function renderMessage() {
//     var savedTodo = JSON.parse(localStorage.getItem("eventInfo"));
//     if (savedTodo !== null) {
//         document.querySelector(".description").textContent = savedTodo.todoItem;
//     }
// }