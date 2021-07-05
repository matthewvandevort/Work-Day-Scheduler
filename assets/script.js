var hr9 = $('#9');
var hr10 = $('#10');
var hr11 = $('#11');
var hr12 = $('#12');
var hr1 = $('#13');
var hr2 = $('#14');
var hr3 = $('#15');
var hr4 = $('#16');
var hr5 = $('#17');


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


        $('time-block').each(function () {
            var hourBox = parseInt($(this).attr('id').split('hour')[1]);

            if (hourBox < currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
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
    getTime();
})    
