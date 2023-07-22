let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
const holeGame = document.querySelector('.hole-game');
const elements = holeGame.querySelectorAll('.hole')
let play = true;
function restartGame(message){
  alert(message);
  dead.textContent = 0;
  lost.textContent = 0;
  playing = false;
}

function holeClick(event) {
  console.log(`Кликнули по элементу: ${event.target.id}`);
  if (event.target.className === 'hole hole_has-mole') {
    dead.textContent = Number(dead.textContent) + 1;
    if (dead.textContent == 10) {
      restartGame('Победа!');
    }
  } else {
    lost.textContent = Number(lost.textContent) + 1;
    if (lost.textContent == 5) {
      restartGame('Вы проиграли!')
    }
  }
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', holeClick);
}
