var timer = document.getElementById("timer");
var timerInput = document.getElementById("tIn");
var toggleButton = document.getElementById("toggle");
var cancelButton = document.getElementById("cancel");
var setButton = document.getElementById("set-button");

// TODO:

// Timers longer than 1 hour may not appear correctly. (Check at a
// time not equal to 7 pm or 8pm)

// Don't always show minutes. Allow the ability to hide the input box.

// Allow the ability to change theme on command.

// Keep timer running when out of the tab (then add the time left in page Title).

var userTime;
var timeSet = false;
var watch = new Timer(timerInput, timer);

function set() {
  userTime = timerInput.value * 60000;
  watch.setTime(userTime);
  timeSet = true;
  setButton.textContent = "Set";
  setButton.style.color = "rgb(60, 177, 231)";
  toggleButton.style.color = "#00BD22";
}

function start() {
  if (timeSet == false) watch.setTime(10 * 60000);

  watch.start();
  toggleButton.textContent = "Pause";
  toggleButton.style.color = "rgb(60, 177, 231)";
  setButton.style.color = "rgb(60, 177, 231)";
}

function pause() {
  watch.pause();
  toggleButton.textContent = "Start";
}

function cancel() {
  watch.cancel(userTime);
}

timerInput.addEventListener("click", function() {
  setButton.style.color = "#00BD22";
  toggleButton.style.color = "rgb(60, 177, 231)"
});

toggleButton.addEventListener("click", function() {
  watch.isOn ? pause() : start();
});

cancelButton.addEventListener("click", function() {
  cancel();
  timerInput.value = "";
});

setButton.addEventListener("click", function() {
  set();
});
