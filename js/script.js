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

var todos = [];
var saveButton = $(".saveBtn");

var today = $("#currentDay").text(moment().format("LLLL"));

saveButton.on("click", function() {
    // console.log(this);
    var hour = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();

    localStorage.setItem(hour, input);
})

// $("#container").each(function () {
//     var i = $(this).children("id").val(localStorage.getItem(i));
//     var j = $(this).children("description").val(localStorage.getItem(j));
//     console.log(i, j);
// });





    





