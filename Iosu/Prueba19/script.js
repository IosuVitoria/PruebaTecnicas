const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let intervalId;
let startTime;
let elapsedTime = 0;
let running = false;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  hourElement.textContent = formatTime(hours);
  minuteElement.textContent = formatTime(minutes);
  secondElement.textContent = formatTime(seconds);
  millisecondElement.textContent = formatTime(milliseconds);
}

startButton.addEventListener('click', () => {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTimer, 10); 
    running = true;
  }
});

stopButton.addEventListener('click', () => {
  if (running) {
    clearInterval(intervalId);
    running = false;
  }
});

resetButton.addEventListener('click', () => {
  if (running) {
    clearInterval(intervalId);
    running = false;
  }

  elapsedTime = 0;
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  millisecondElement.textContent = '000';
});


stopButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetButton.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  elapsedTime = 0;
  hourElement.textContent = '00';
  minuteElement.textContent = '00';
  secondElement.textContent = '00';
  millisecondElement.textContent = '000';
});
