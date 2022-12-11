// Variables to track a range of time for website styling purposes
var currentTime = dayjs();
var previousHour = currentTime.hour() - 1;
var futureHour = currentTime.hour() + 1;

// Ensure the document is loaded first before using this function
$(document).ready(function () {
  // Display the time in HTML Header
  $('#currentDay').text(currentTime.format("MMM DD YYYY [at] hh:mm:ss a"));
 
  // Function executed in intervals of 1 second 
  setInterval(function () {
    // Update HTML Header time every second
    $('#currentDay').text(currentTime.format("MMM DD YYYY [at] hh:mm:ss a"));

    // Update the HTML classes to update hour timeblocks of the day that are past in time
    for (i = 9; i <= previousHour; previousHour--) {
        $(`#hour-${previousHour}`).removeClass('present');
        $(`#hour-${previousHour}`).removeClass('future');
        $(`#hour-${previousHour}`).addClass('past');
      };

    // Update the HTML classes to update the hour timeblock corresponding with the current hour of the day (if between 9-17)  
    if(currentTime.hour() > previousHour) {
      $(`#hour-${currentTime.hour()}`).removeClass('past');
      $(`#hour-${currentTime.hour()}`).removeClass('future');
      $(`#hour-${currentTime.hour()}`).addClass('present')
    }

    // Update the HTML classes to update the hour timeblocks of the day which are in the future
    for (i = 17; i >= futureHour; futureHour++) {
      if(currentTime.hour() != futureHour)
        $(`#hour-${futureHour}`).removeClass('past');
        $(`#hour-${futureHour}`).removeClass('present');
        $(`#hour-${futureHour}`).addClass('future');
      };

    // Update the variables after all other code blocks have been executed first
    currentTime = dayjs();
    previousHour = currentTime.hour() - 1;
    futureHour = currentTime.hour() + 1;
}, 1000);

// Get an array of every element with the class name "saveBtn"
var workText = document.getElementsByClassName("saveBtn");

// Set local storage values when the save button is clicked with their respective timeblocks
for (var i=0; i<workText.length; i++) {
  workText[i].addEventListener("click", function(){
    const row = $(this).closest(".row");
    var text = row.find(".description").val();
    var time = row.attr('id');
    localStorage.setItem(time, text);
  });
}
});
