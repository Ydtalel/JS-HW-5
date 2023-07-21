const timer = document.getElementById("timer");
const currentTime = new Date();
const endTime = new Date();
// endTime.setHours(currentTime.getHours() );
// endTime.setMinutes(currentTime.getMinutes());
count = Number(timer.textContent);
endTime.setSeconds(currentTime.getSeconds() + count);
let timeDiff = endTime.getTime() - currentTime.getTime();
let intervalId = setInterval(() => {
  const hours = Math.floor(timeDiff / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  timer.textContent = `${hours}:${minutes}:${seconds}`;
  timeDiff -= 1000;

  if (timeDiff < 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
    let link = document.getElementById('logo__link')
    alert(link)
    const url = 'README.md'
    link.href = url;
    console.log(url);
    link.click();
  }
}, 1000);