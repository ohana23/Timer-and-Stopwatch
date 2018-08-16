var time;
function Timer(timerInput, timer) {
  var interval;
  var offset;
  var audio;

  function update() {
    // Decrement timer until 0 is reached. If it is, show 0.
    if (this.isOn) {
      if (time > 0) time -= 10;
      else {
        this.cancel();
        time = userTime;
        playSound(); // emit end of timer alarm
      }
    }

    console.log(time);
    timer.textContent = timeFormatter(time);
  }

  // Change current time value.
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  // Format our time to be written as "00 : 00 . 00".
  function timeFormatter(milliseconds) {
    var time = new Date(milliseconds);
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    if (minutes.length < 2) minutes = "0" + minutes;

    if (seconds.length < 2) seconds = "0" + seconds;

    if (milliseconds >= 3600000)
      return hours - 19 + " : " + minutes + " : " + seconds;

    return minutes + " : " + seconds;

    //   return (hours - 19) + " : " + minutes + " : " + seconds;
  }

  function playSound() {
    audio = new Audio("audio/alarm.mp3");
    audio.play();
  }

  this.isOn = false;

  // Set 'time' to be the time given by the user.
  this.setTime = function(userTime) {
    time = userTime;
    timer.textContent = timeFormatter(time);
  };

  // Start our countdown.
  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.pause = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  // Pause our countdown and reset it to the user's time.
  this.cancel = function() {
    pause();
    time = userTime;
    timer.textContent = "Timer";
  };
}
