const deadGoblin = document.getElementById('dead');
const lostGoblin = document.getElementById('lost');
const getHoleClass = (index) => document.getElementById(`hole${index}`);
// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 16; i++) {
  const mole = document.getElementById(getHoleClass(i).id);
  mole.onclick = () => {
    // eslint-disable-next-line eqeqeq
    if (mole.className == 'hole hole_has-goblin') {
      deadGoblin.textContent = Number(deadGoblin.textContent) + 1;
      // eslint-disable-next-line eqeqeq
      if (deadGoblin.textContent == 10) {
        // eslint-disable-next-line no-alert
        alert('Вы победили!');
        deadGoblin.textContent = 0;
        lostGoblin.textContent = 0;
      }
    } else {
      lostGoblin.textContent = Number(lostGoblin.textContent) + 1;
      // eslint-disable-next-line eqeqeq
      if (lostGoblin.textContent == 5) {
        // eslint-disable-next-line no-alert
        alert('Вы проиграли :-(');
        deadGoblin.textContent = 0;
        lostGoblin.textContent = 0;
      }
    }
  };
}