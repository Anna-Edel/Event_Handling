export default function Hole() {
  var playing = true;
  var activeHole = 1;
  // eslint-disable-next-line no-return-assign
  // const stop = () => playing = true;
  var getHole = function getHole(index) {
    return document.getElementById("hole".concat(index));
  };
  // eslint-disable-next-line no-return-assign
  var deactivateHole = function deactivateHole(index) {
    return getHole(index).className = 'hole';
  };
  // eslint-disable-next-line no-return-assign
  var activateHole = function activateHole(index) {
    return getHole(index).className = 'hole hole_has-goblin';
  };
  var _next = function next() {
    return setTimeout(function () {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 16);
      activateHole(activeHole);
      _next();
    }, 1000);
  };
  _next();
}
Hole();