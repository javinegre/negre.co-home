
import * as Helpers from './common/helpers';

const HomeLogo = (config) => {
  // TODO: find better way to use helpers
  const helpers = Helpers.default;

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

    w = config.w;
    h = config.h;

    reCalc();
    generateGradientBackground();
  }

  function setDimensions(newConfig) {
    w = newConfig.w;
    h = newConfig.h;

    reCalc();
    // TODO: uncomment line below after debouncing line below
    // generateGradientBackground();
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
    $gradBgCanvas.style.transform = `translate(${tX}px,${tY}px)`;
  }

  function generateGradientBackground() {
    const colorScheme = helpers.shuffleArray([
      helpers.randomElementFromArray(reds),
      helpers.randomElementFromArray(greens),
      helpers.randomElementFromArray(blues),
    ]);

    const rot = helpers.randomInt(0, 120);

    $gradBgCanvas.style.background = [
      getLinearGradientStr(rot, colorScheme[0]),
      getLinearGradientStr(rot + 120, colorScheme[1]),
      getLinearGradientStr(rot + 240, colorScheme[2]),
    ].join(',');

    // TODO: move to css
    $gradBgCanvas.style.backgroundBlendMode = 'screen';
  }

  function getLinearGradientStr(direction, color) {
    return `linear-gradient(${direction}deg, ${color}, transparent)`;
  }
};

export default HomeLogo;
