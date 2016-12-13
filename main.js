document.addEventListener("DOMContentLoaded", function() {
  setBackgroundImage("background", 'background');
  setHour10("hour10", '1');
  setHour01("hour01", '1');
  setBackgroundImage("seperator", 'seperator');
  setMinute10("minute10", '3');
  setMinute01("minute01", '4');
  setBackgroundImage("cover", 'cover');
});

function setBackgroundImage(id, image) {
  var el = document.getElementById(id);
  el.style.backgroundImage = "url(clock-radio-script/" + image + ".png)";
}

function setPrefix(id, image) {
  setBackgroundImage(id, 'digit' + image);
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
