import goblinImage from '../img/goblin.png'; // Импорт изображения

class Game {
  constructor() {
    this.widget = document.querySelectorAll(".impactField");
    this.image = document.createElement('img');  // Создание элемента <img>
    this.image.src = goblinImage;  // Webpack обработает путь к изображению
    this.image.alt = 'Goblin';  // Добавление alt-описания
    this.image.classList.add("invisible");  // Скрытие изображения по умолчанию
    document.body.appendChild(this.image);  // Добавление изображения на страницу
    this.hit_count = document.querySelector(".hit-count");
    this.miss_count = document.querySelector(".miss-count");
    this.pressing = true;
    this.reload_btn = document.querySelector(".reload-game");
  }

  // Логика игры
  startGame() {
    this.addGameField();
    this.clickGoblin();
    this.replaceField();
    this.reloadButtonClick();
  }

  clickGoblin() {
    this.image.addEventListener("click", () => {
      this.pressing = true;
      this.image.classList.add("invisible");  // Скрытие гоблина
      this.hit_count.textContent = Number(this.hit_count.textContent) + 1;
    });
  }

  replaceField() {
    // Логика замены позиции гоблина
  }

  reloadButtonClick() {
    this.reload_btn.addEventListener("click", () => {
      location.reload();
    });
  }

  addGameField() {
    // Логика для добавления игрового поля
  }
}

export default Game;
