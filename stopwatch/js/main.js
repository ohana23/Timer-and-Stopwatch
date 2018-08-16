var timer = document.getElementById("timer");
var toggleButton = document.getElementById("toggle");
var resetButton = document.getElementById("reset");

var watch = new Stopwatch(timer);

function start() {
  watch.start();
  toggleButton.textContent = "Stop";
}

function stop() {
  watch.stop();
  toggleButton.textContent = "Start";
}

function st() {
  watch.stop();
  toggleButton.textContent = "Start";
}

toggleButton.addEventListener("click", function() {
  watch.isOn ? stop() : start();
});

resetButton.addEventListener("click", function() {
  watch.reset();
});
