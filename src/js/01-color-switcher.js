function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
console.log(body);
const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
startBtn.style.backgroundColor = getRandomHexColor;
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn.dataset);

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  console.log(`Interval with id ${getRandomHexColor()} has stopped!`);
});
