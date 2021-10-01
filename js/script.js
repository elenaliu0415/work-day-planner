var saveButton = $(".saveBtn");
var today = $("#currentDay").text(moment().format("LLLL"));

saveButton.on("click", function() {

    var button = $(this);
    var hour = button.parent().attr("id");
    var input = button.siblings(".description").val();

    localStorage.setItem(hour, input);
})

var currentHour = moment().format("HH");
       
// Loop through each time slot
$(".time-block").each(function() {
    var hour = $(this).attr("id");
    var timeSlotHr = hour.replace("hour-", "");
    var saveData = localStorage.getItem(hour);

    if(parseInt(currentHour) > parseInt(timeSlotHr)) {
        $(this).addClass("past");
    } else if(parseInt(currentHour) == parseInt(timeSlotHr)) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
    if(saveData != null) {
        $(this).find(".description").val(saveData);
    }
});




    





