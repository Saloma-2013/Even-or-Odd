let currentNumber = 0;
let currentStreak = 0;
let highestStreak = 0;
let timeleft = 10;
let attemptsLeft = 5;
let timerInterval;

function genarateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function updateNumber() {
  currentNumber = genarateRandomNumber();
  document.getElementById(
    "numberDisplay"
  ).textContent = `Number: ${currentNumber}`;
}
function guessEven() {
  if (currentNumber % 2 === 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}

function guessOdd() {
  if (currentNumber % 2 != 0) {
    correctGuess();
  } else {
    wrongGuess();
  }
}

function correctGuess() {
  currentStreak++;
  if (currentStreak > highestStreak) {
    highestStreak = currentStreak;
  }
  updateStreaks();
  document.getElementById("result").textContent = "Correct!";
  resetTimer();
  updateNumber();
}

function wrongGuess() {
  currentStreak = 0;
  attemptsLeft--;
  updateStreaks();
  updateAttempts();
  document.getElementById("result").textContent = "Wrong!";
  resetTimer();
  updateNumber();
  if (attemptsLeft === 0) {
    endGame();
  }
}

function updateStreaks() {
  document.getElementById("currentStreak").textContent = currentStreak;
  document.getElementById("highestStreak").textContent = highestStreak;
}

function updateAttempts() {
  document.getElementById("attemptsLeft").textContent = attemptsLeft;
}

function startTimer() {
  timeleft = 10;
  document.getElementById("timer").textContent = timeleft;
  timerInterval = setInterval(() => {
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if (timeleft <= 0) {
      wrongGuess();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  startTimer();
}

function endGame() {
  clearInterval(timerInterval);
  document.getElementById("gameOverMessage").style.display = "block";
  document.getElementById("resetBtn").style.display = "block";
  document.getElementById("evenBtn").disabled = true;
  document.getElementById("oddBtn").disabled = true;
}

function resetGame() {
  currentStreak = 0;
  highestStreak = 0;
  attemptsLeft = 5;
  document.getElementById("gameOverMessage").style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  document.getElementById("evenBtn").disabled = false;
  document.getElementById("oddBtn").disabled = false;
  updateAttempts();
  updateStreaks();
  updateNumber();
  startTimer();
}
