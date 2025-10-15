function updateCountdown() {
  let now = new Date();
  let ramzan2026 = new Date("2026-02-17T00:00:00");
  let diffMilliseconds = ramzan2026 - now;

  if (diffMilliseconds <= 0) {
    document.getElementById("countdown").innerHTML = "🌙 Ramadan Mubarak! 🌙";
    return;
  }

  let diffSeconds = diffMilliseconds / 1000;
  let diffMinutes = diffSeconds / 60;
  let diffHours = diffMinutes / 60;
  let diffDays = diffHours / 24;
  let diffWeeks = diffDays / 7;

  document.getElementById("countdown").innerHTML = `
    <p><span>${Math.floor(diffMilliseconds)}</span> Milliseconds</p>
    <p><span>${Math.floor(diffSeconds)}</span> Seconds</p>
    <p><span>${Math.floor(diffMinutes)}</span> Minutes</p>
    <p><span>${Math.floor(diffHours)}</span> Hours</p>
    <p><span>${Math.floor(diffDays)}</span> Days</p>
    <p><span>${Math.floor(diffWeeks)}</span> Weeks</p>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
