let timerStarted = false;
let startDate;
let Interval;

function startReactionTest() {
  setLayoutForReactionTest();
  Interval = setInterval(startTimerRandom, 45);
}

function setLayoutForReactionTest() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructionHeadline").style.display = "none";
  document.getElementById("output").style.display = "none";
  document.body.style.backgroundColor = "blue";
}

function startTimerRandom() {
  randomNumber = Math.random();
  if (randomNumber < 0.01) {
    document.body.style.backgroundColor = "green";
    startDate = Date.now();
    timerStarted = true;
    clearInterval(Interval);
  }
}

window.onkeyup = function (event) {
  let key = event.keyCode;
  if (key == 32) {
    spaceKeyClicked();
  }
};

function spaceKeyClicked() {
  if (timerStarted) {
    clickedCorrect();
  } else {
    clickedFalse();
  }
}

function clickedCorrect() {
  timeElapsedSinceStart = Date.now() - startDate;
  resetLayout();
  document.getElementById("output").innerText = "Deine Reaktionszeit für diesen Versuch beträgt: " + timeElapsedSinceStart + " ms";
}

function clickedFalse() {
  resetLayout();
}

function resetLayout() {
  clearInterval(Interval);
  timerStarted = false;
  document.getElementById("instructionHeadline").style.display = "block";
  document.getElementById("output").style.display = "block";
  document.getElementById("startButton").style.display = "inline-block";
  document.getElementById("output").innerText = "Versuch ungültig, warte bis der Hintergrund grün wird";
  document.body.style.backgroundColor = "white";
}
