export default function Hole() {
    const playing = true;
    let activeHole = 1;
    // eslint-disable-next-line no-return-assign
    // const stop = () => playing = true;
    const getHole = (index) => document.getElementById(`hole${index}`);
    // eslint-disable-next-line no-return-assign
    const deactivateHole = (index) => getHole(index).className = 'hole';
    // eslint-disable-next-line no-return-assign
    const activateHole = (index) => getHole(index).className = 'hole hole_has-goblin';
    const next = () => setTimeout(() => {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 16);
      activateHole(activeHole);
      next();
    }, 1000);
    next();
  } Hole();