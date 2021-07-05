var hr9 = $('#9');
var hr10 = $('#10');
var hr11 = $('#11');
var hr12 = $('#12');
var hr1 = $('#13');
var hr2 = $('#14');
var hr3 = $('#15');
var hr4 = $('#16');
var hr5 = $('#17');
var timeOfDay = moment();


function startSchedule() {
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY hh:mm:ss a'));
    setInterval(startSchedule(), 1000);


}

startSchedule();
