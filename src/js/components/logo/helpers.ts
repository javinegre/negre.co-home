import Helpers from '../../common/helpers';

import config from './config';

const getLinearGradientStr: (direction: number, color: string) => string = (direction, color) => `linear-gradient(${direction}deg, ${color}, transparent)`;

const getGradientBackground: () => string = () => {
  const colorScheme: string[] = Helpers.shuffleArray<string>([
    Helpers.randomElementFromArray(config.reds) ?? 'red',
    Helpers.randomElementFromArray(config.greens) ?? 'green',
    Helpers.randomElementFromArray(config.blues) ?? 'blue',
  ]);

  const rot = Helpers.randomInt(0, 120);

  return [
    getLinearGradientStr(rot, colorScheme[0]),
    getLinearGradientStr(rot + 120, colorScheme[1]),
    getLinearGradientStr(rot + 240, colorScheme[2]),
  ].join(',');
};

const getSolidBackground: () => string | undefined = () => (
  Helpers.randomElementFromArray([
    Helpers.randomElementFromArray(config.reds),
    Helpers.randomElementFromArray(config.greens),
    Helpers.randomElementFromArray(config.blues),
  ])
);

const checkClipPathSupport: () => boolean = () => {
  const oldBrowser = !('CSS' in window); // IE Explorer

  const isSupported = !oldBrowser && window.CSS.supports('clip-path', 'url()');

  // Disable for mobile devices as most of them don't
  // support clip-path (window.CSS.supports(...) fails)
  const touchCapable = 'ontouchstart' in document.documentElement;

  return isSupported && !oldBrowser && !Helpers.isSafari && !Helpers.isMSEdge && !touchCapable;
};

const canBeAnimated: () => boolean = () => {
  const sBreakpoint: number = 480;

  return window.innerWidth > sBreakpoint && checkClipPathSupport();
};

export default {
  canBeAnimated,
  checkClipPathSupport,
  getGradientBackground,
  getSolidBackground,
};
