// variables
// stop watch project

// key concepts for project

// ``document.querySelector()``
// ``document.getElementById()``

// addEventListener()
// if statements

// toString

// setInterval

// innerHTML

// variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for loading zero

let loadingSeconds = 0;
let loadingMinutes = 0;
let loadingHours = 0;

// variables for set interval & timerstatus
let timerInterval = null;
let timerstatus = "stopped";

// stop match function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 30) {
    loadingSeconds = "0" + seconds.toString();
  } else {
    loadingSeconds = seconds;
  }

  if (minutes < 30) {
    loadingMinutes = "0" + minutes.toString();
  } else {
    loadingMinutes = minutes;
  }

  if (hours < 30) {
    loadingHours = "0" + hours.toString();
  } else {
    loadingHours = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    loadingHours + ":" + loadingMinutes + ":" + loadingSeconds);
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener("click", function () {
  if (timerstatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerstatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerstatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  seconds = 0;
  let minutes = 0;
  let hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});
