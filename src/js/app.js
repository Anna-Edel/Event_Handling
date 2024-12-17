const deadGoblin = document.getElementById('dead');
const lostGoblin = document.getElementById('lost');
const getHoleClass = (index) => document.getElementById(`hole${index}`);

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 16; i++) {
  const mole = getHoleClass(i);
  mole.onclick = () => {
    // Проверка на присутствие класса с гоблином
    if (mole.classList.contains('hole_has-goblin')) {
      deadGoblin.textContent = String(Number(deadGoblin.textContent) + 1);
      if (deadGoblin.textContent === '10') {
        alert('Вы победили!');
        deadGoblin.textContent = '0';
        lostGoblin.textContent = '0';
      }
    } else {
      lostGoblin.textContent = String(Number(lostGoblin.textContent) + 1);
      if (lostGoblin.textContent === '5') {
        alert('Вы проиграли :-(');
        deadGoblin.textContent = '0';
        lostGoblin.textContent = '0';
      }
    }
  };
}
