let counter = document.getElementById('clicker__counter');
let img = document.getElementById('cookie');
let spead = document.getElementById('clicker__spead');
let increase = true;
let start;
let end;
function diff(start,end){ return (1000/Math.abs(end.getTime() - start.getTime())).toFixed(2)}
// let counterText = counter.textContent;
img.onclick = () => {
  counter.textContent = Number(counter.textContent) + 1;
  if (increase){
    start = new Date();
    img.width += 10;
  } else {
    img.width -= 10;
    end = new Date();
  }
  increase = !increase;
  spead.textContent = diff(start,end);
}
