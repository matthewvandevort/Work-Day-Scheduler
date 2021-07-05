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
    $('#currentDay').text(now.format('dddd, MMMM Do, YYYY hh:mm:ss a'));

    
}
setInterval(updateTime, 1000);
updateTime();
