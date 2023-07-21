let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
const holeGame = document.querySelector('.hole-game');
const elements = holeGame.querySelectorAll('.hole')
let play = true;
function holeClick(event) {
  console.log(`Кликнули по элементу: ${event.target.id}`);
  if (event.target.className === 'hole hole_has-mole') {
    dead.textContent = Number(dead.textContent) + 1;
    if (dead.textContent == 10) {
      alert('Победа!')
      dead.textContent = 0;
      lost.textContent = 0;
      playing = false;
    }
  } else {
    lost.textContent = Number(lost.textContent) + 1;
    if (lost.textContent == 5) {
      alert('Вы проиграли!')
      dead.textContent = 0;
      lost.textContent = 0;
      playing = false;
    }
  }
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', holeClick);
}