const timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.textContent, 10);

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
}

timerElement.textContent = formatTime(seconds);

const countdown = setInterval(() => {
  seconds--;
  if (seconds < 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
  } else {
    timerElement.textContent = formatTime(seconds);
  }
}, 1000);
