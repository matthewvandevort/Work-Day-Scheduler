// Integrates the time on the page using moment.js.
function updateTime() {
    var now = moment();
    $('#currentDay').text(now.format('dddd MMMM Do, YYYY hh:mm:ss a'));
   
}
// Updates the time every second.
setInterval(updateTime, 1000);
updateTime();

// Button event listener using .ready() method which runs the JavaScript as soon as the page's DOM is safe to interact with.
$(document).ready(function () {
    // Listening for the 'click'.
    $('.saveBtn').on('click', function () {

        // This gets the values of the description box.
        var toDo = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // This will save the text in the description box in local storage
        localStorage.setItem(time, toDo);
    })

    // Function to get hours so we can change the colors of the description box.
    function getTime() {
        // This variable stores the current hours using moment.
        var currentTime = moment().hour();

        // Now we loop over each time-block, taking the hour, and storing it in a variable of hourBox so it can be compared to the variable currentTime.
        $('.time-block').each(function () {
            var hourBox = parseInt($(this).attr('id').split('hour')[1]);

            // This if/else statement will check the time and add or remove classes for the backgroung colors.
            if (hourBox < currentTime) {
                $(this).removeClass('present');
                $(this).removeClass('future');
                $(this).addClass('past');
            }
            else if (hourBox === currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('past');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
                
            }     
        })    
    } 
    
    // This will retrieve items from local storage if they exist.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // Calling the function getTime.
    getTime();
})    
