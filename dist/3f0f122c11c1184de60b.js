var deadGoblin = document.getElementById('dead');
var lostGoblin = document.getElementById('lost');
var getHoleClass = function getHoleClass(index) {
  return document.getElementById("hole".concat(index));
};
// eslint-disable-next-line no-plusplus
var _loop = function _loop() {
  var mole = document.getElementById(getHoleClass(i).id);
  mole.onclick = function () {
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
};
for (var i = 1; i <= 16; i++) {
  _loop();
}