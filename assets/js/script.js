var currentTime = dayjs();
var previousHour = currentTime.hour() - 1;
var futureHour = currentTime.hour() + 1;

console.log(currentTime.hour());
console.log(previousHour);
console.log(futureHour);

$(document).ready(function () {
  $('#currentDay').text(currentTime.format("MMM DD YYYY [at] hh:mm:ss a"));
 
  setInterval(function () {
    $('#currentDay').text(currentTime.format("MMM DD YYYY [at] hh:mm:ss a"));

    for (i = 9; i <= previousHour; previousHour--) {
        $(`#hour-${previousHour}`).removeClass('present');
        $(`#hour-${previousHour}`).removeClass('future');
        $(`#hour-${previousHour}`).addClass('past');
      };

    if(currentTime.hour() > previousHour) {
      $(`#hour-${currentTime.hour()}`).removeClass('past');
      $(`#hour-${currentTime.hour()}`).removeClass('future');
      $(`#hour-${currentTime.hour()}`).addClass('present')
    }

    for (i = 17; i >= futureHour; futureHour++) {
      if(currentTime.hour() != futureHour)
        $(`#hour-${futureHour}`).removeClass('past');
        $(`#hour-${futureHour}`).removeClass('present');
        $(`#hour-${futureHour}`).addClass('future');
      };

    currentTime = dayjs();
    previousHour = currentTime.hour() - 1;
    futureHour = currentTime.hour() + 1;
}, 1000);

  $('#saveBtn').addEventListener("click", function(event) {

  });

});
