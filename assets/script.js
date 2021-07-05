
function updateTime() {
    var now = moment();
    $('#currentDay').text(now.format('dddd MMMM Do, YYYY hh:mm:ss a'));
   
}
setInterval(updateTime, 1000);
updateTime();


$(document).ready(function () {

    $('.saveBtn').on('click', function () {

        var toDo = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, toDo);
    })

    function getTime() {

        var currentTime = moment().hour();


        $('.time-block').each(function () {
            var hourBox = parseInt($(this).attr('id').split('hour')[1]);

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
    

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    getTime();
})    
