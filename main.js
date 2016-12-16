var DIRECTORY = "clock-radio-script";
DIRECTORY = "countdown-clock";

document.addEventListener("DOMContentLoaded", function() {
    setInterval(showRandomTime, 1000);
});

function showRandomTime() {
  var hour = Math.floor(Math.random() * 12) + 1;
  var minute = Math.floor(Math.random() * 60);

  var hour10 = Math.floor(hour / 10);
  var hour01 = hour % 10;
  var minute10 = Math.floor(minute / 10);
  var minute01 = minute % 10;

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

function setHour10(id, image) {
  setPrefix(id, image + "");
}

function setHour01(id, image) {
  setPrefix(id, image + "-001");
}

function setMinute10(id, image) {
  setPrefix(id, image + "-002");
}

function setMinute01(id, image) {
  setPrefix(id, image + "-003");
}
