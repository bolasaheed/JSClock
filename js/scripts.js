const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const now = new Date();

  let seconds = now.getSeconds();
  let secondsDeg = ((seconds / 60) * 360) + 90;
  let transform = "rotate(" + secondsDeg + "deg)"
  secondHand.style.transform = transform;

  let minutes = now.getMinutes();
  let minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  transform = "rotate(" + minutesDeg + "deg)"
  minsHand.style.transform = transform;

  const hour = now.getHours();
  const hourDeg = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
  transform = "rotate(" + hourDeg + "deg)"
  hourHand.style.transform = transform;
}

setInterval(setTime, 1000);

setTime();