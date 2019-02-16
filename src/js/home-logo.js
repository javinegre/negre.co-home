import Helpers from './common/helpers';

const HomeLogo = (config) => {
  const reds = ['red', 'salmon', 'crimson', 'orangered', 'gold', 'darkred'];
  const greens = ['green', 'olivedrab', 'yellowgreen', 'seagreen', 'springgreen', 'lime'];
  const blues = ['blue', 'darkturquoise', 'teal', 'navy', 'aquamarine', 'lightskyblue'];

  let $canvas = null;
  let $gradBgCanvas = null;

  let w = 1;
  let h = 1;
  let xDomain = [];
  let yDomain = [];

  init();

  return {
    setDimensions,
    moveBackground,
    generateGradientBackground,
  };

  function init() {
    $canvas = config.$canvas;
    $gradBgCanvas = config.$gradBgCanvas;

    $canvas.style.opacity = 0;
    $canvas.style.transition = 'opacity 1s cubic-bezier(0, 0.75, 0.5, 1) 0s';

    w = config.w;
    h = config.h;

    run();
  }

  function setDimensions(newConfig) {
    w = newConfig.w;
    h = newConfig.h;

    translateBackground(0, 0);

    run();
  }

  function run() {
    reCalc();
    generateGradientBackground();
  }

  function reCalc() {
    const canvasBoundingRect = $canvas.getBoundingClientRect();

    xDomain = [
      canvasBoundingRect.x,
      -w + canvasBoundingRect.x + canvasBoundingRect.width,
    ];
    yDomain = [
      canvasBoundingRect.y,
      -h + canvasBoundingRect.y + canvasBoundingRect.height,
    ];
  }

  function getBackgroundTranslation(x, y) {
    const dX = x / w;
    const dY = y / h;

    return [
      ((1 - dX) * xDomain[0]) + (dX * xDomain[1]),
      ((1 - dY) * yDomain[0]) + (dY * yDomain[1]),
    ];
  }

  function moveBackground(ev) {
    const [tX, tY] = getBackgroundTranslation(ev.x, ev.y);
    translateBackground(tX, tY);
  }

  function translateBackground(x, y) {
    $gradBgCanvas.style.transform = `translate(${x}px,${y}px)`;
  }

  function generateGradientBackground() {
    const colorScheme = Helpers.shuffleArray([
      Helpers.randomElementFromArray(reds),
      Helpers.randomElementFromArray(greens),
      Helpers.randomElementFromArray(blues),
    ]);

    const rot = Helpers.randomInt(0, 120);

    $gradBgCanvas.style.background = [
      getLinearGradientStr(rot, colorScheme[0]),
      getLinearGradientStr(rot + 120, colorScheme[1]),
      getLinearGradientStr(rot + 240, colorScheme[2]),
    ].join(',');

    $canvas.style.opacity = 1;
  }

  function getLinearGradientStr(direction, color) {
    return `linear-gradient(${direction}deg, ${color}, transparent)`;
  }
};

export default HomeLogo;
