function updateClock() {
  // Set time to Zurich timezone
  const now = new Date();
  const zhTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Europe/Zurich" })
  );

  // extract hours, minutes, seconds 
  const seconds = zhTime.getSeconds();
  const minutes = zhTime.getMinutes();
  const hours = zhTime.getHours();

  // calculate degrees for each hand
  const secondDegrees = (seconds / 60) * 360 + 270; // +270 to offset initial position
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 270;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 270;

  // rotate hands
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondDegrees}deg)`;
  document.querySelector(
    ".min-hand"
  ).style.transform = `rotate(${minuteDegrees}deg)`;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDegrees}deg)`;
}

// initial call to set clock immediately
updateClock();

// upate clock every second
setInterval(updateClock, 1000);
