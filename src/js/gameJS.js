class Game {
  constructor(widget, hitCount, missCount, reloadBtn) {
    this.widget = widget || document.querySelectorAll(".impactField");
    this.hit_count = hitCount || document.querySelector(".hit-count");
    this.miss_count = missCount || document.querySelector(".miss-count");
    this.reload_btn = reloadBtn || document.querySelector(".reload-game");
    this.pressing = true;
    this.image = this.createGoblinImage(); // Создание изображения гоблина
  }

  // Создание изображения гоблина
  createGoblinImage() {
    const image = document.createElement('img');
    image.src = goblinImage;
    image.alt = 'Goblin';
    image.classList.add("invisible"); // Скрытие изображения по умолчанию
    document.body.append(image); // Добавление изображения на страницу
    return image;
  }

  // Метод для создания игрового поля через JS
  createGameField() {
    const gameField = document.querySelector('.hole-game');
    if (!gameField) {
      console.error('Элемент с классом hole-game не найден');
      return;
    }

    // Очищаем содержимое контейнера перед созданием нового поля
    gameField.innerHTML = '';

    for (let i = 1; i <= 16; i++) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      hole.id = `hole${i}`;
      gameField.appendChild(hole);
    }
  }

  // Логика игры
  startGame() {
    this.createGameField(); // Создание игрового поля
    this.addGameField();
    this.clickGoblin();
    this.replaceField();
    this.reloadButtonClick();
  }

  // Обработчик клика по гоблину
  clickGoblin() {
    this.image.addEventListener("click", () => {
      this.pressing = true;
      this.image.classList.add("invisible"); // Скрытие гоблина
      this.hit_count.textContent = Number(this.hit_count.textContent) + 1;
      this.replaceField(); // После клика, гоблин меняет место
    });
  }

  // Заменить местоположение гоблина
  replaceField() {
    const randomIndex = Math.floor(Math.random() * this.widget.length);
    const selectedField = this.widget[randomIndex];

    selectedField.append(this.image); // Обновляем положение гоблина
    this.image.classList.remove("invisible"); // Показать изображение
  }

  // Обработчик кнопки перезагрузки
  reloadButtonClick() {
    this.reload_btn.addEventListener("click", () => {
      this.resetGame();
    });
  }

  // Сброс состояния игры
  resetGame() {
    this.hit_count.textContent = '0';
    this.miss_count.textContent = '0';
    this.replaceField(); // Показать гоблина в новом месте
  }

  // Логика для добавления игрового поля
  addGameField() {
    this.widget.forEach(field => {
      field.addEventListener('click', () => {
        if (!this.pressing) {
          this.miss_count.textContent = String(Number(this.miss_count.textContent) + 1); // Приводим к строке для обновления
        }
        this.pressing = false;
      });
    });
  }
}

export default Game;
