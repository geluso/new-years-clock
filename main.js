var DIRECTORY = "clock-radio-script";
DIRECTORY = "countdown-clock";

document.addEventListener("DOMContentLoaded", function() {
    setInterval(showRandomTime, 1000);
});

function showRandomTime() {
  var hour = Math.floor(Math.random() * 12) + 1;
  var minute = Math.floor(Math.random() * 60);

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours > 12) {
    hours -= 12;
  }

  console.log(hours, minutes, seconds);

  var hour10 = Math.floor(hours / 10);
  var hour01 = hours % 10;
  var minute10 = Math.floor(minutes / 10);
  var minute01 = minutes % 10;
  var seconds10 = Math.floor(seconds / 10);
  var seconds01 = seconds % 10;

  // built for parties starting after 8PM, going past 11PM, going through 6AM.
  // the clock should show 08:30 PM
  // the clock should show 10:30 PM
  // the clock should show 10:59 PM
  // the clock should show 59:59 for 11:00:01 PM
  // the clock should show 59:58 for 11:00:02 PM
  // the clock should show 01:00 for 11:59:00 PM
  // the clock should show 00:59 for 11:59:01 PM
  // the clock should show 00:10 for 11:59:50 PM
  // the clock should show 00:00 for 12:00:00 PM 2017
  // the clock should show 00:01 for 12:00:01 PM 2017
  // uhh, so basically it shows military time for anything but the 11PM hour
  if (hour10 === 1 && hour01 === 1) {
    minutesLeft = 60 - (minute10 * 10 + minute01);

    hour10 = Math.floor(minutesLeft / 10);
    hour01 = minutesLeft % 10;

    minutes10 = seconds10;
    minutes01 = seconds01;
  }

  console.log(hour10, hour01, minute10, minute01);

  setBackgroundImage("background", 'Layer_0');
  setHour10("hour10", hour10);
  setHour01("hour01", hour01);
  setBackgroundImage("seperator", 'seperator');
  setMinute10("minute10", minute10);
  setMinute01("minute01", minute01);
  setBackgroundImage("background", 'border');
}

function setBackgroundImage(id, image) {
  var el = document.getElementById(id);
  el.style.backgroundImage = "url(" + DIRECTORY + "/" + image + ".png)";
}

function setPrefix(id, image) {
  setBackgroundImage(id, 'digit_' + image);
}

function setMinute01(id, image) {
  setPrefix(id, image + "");
}

function setMinute10(id, image) {
  setPrefix(id, image + "-001");
}

function setHour01(id, image) {
  setPrefix(id, image + "-002");
}

function setHour10(id, image) {
  setPrefix(id, image + "-003");
}
