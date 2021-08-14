let seconds = 0;
let minutes = 0;
let timerID: number;

export function timerFunction(): void {
  const timerShow = document.getElementById("timer") as HTMLElement;
  timerID = window.setInterval(() => {
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    } else {
      const strTimer = `${Math.trunc(minutes)}:${seconds}`;
      timerShow.innerHTML = strTimer;
    }
    ++seconds;
  }, 1000);
}

export function removeTimerFunction(): void {
  seconds = 0;
  minutes = 0;
  clearInterval(timerID);
}

export function getSeconds(): number {
  return seconds;
}

export function getMinutes(): number {
  return minutes;
}
