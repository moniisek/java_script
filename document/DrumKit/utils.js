// add CSS style transform on key press and remove it on release
var onKeyDown = function(e) {
  var keyStr = e.key.toLowerCase();
  var divEl = document.getElementById(keyStr);
  var audio = document.querySelector(`audio[data-key="${keyStr}"]`);
  if (!audio) {return};

  if (keyStr === 'a' | keyStr === 'b' | keyStr === 'c') {
    divEl.classList.add("active");
  }
  audio.currentTime = 0;
  audio.play();
};

var onKeyRelease = function(e) {
  var keyStr = e.key.toLowerCase();
  var divEl = document.getElementById(keyStr);
  if (keyStr === 'a' | keyStr === 'b' | keyStr === 'c') {
    divEl.classList.remove("active");
  }

};

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyRelease);
