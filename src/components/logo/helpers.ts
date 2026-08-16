import config from './config';

/* -------------------------------------------------------------------------- */

const getLinearGradientStr = (direction: number, color: string): string =>
  `linear-gradient(${direction}deg, ${color}, transparent)`;

/* -------------------------------------------------------------------------- */

const randomElementFromArray = <T>(items: T[]): T | undefined => {
  const randomElem: T | undefined = items[Math.floor(Math.random() * items.length)];
  return randomElem;
};

/* -------------------------------------------------------------------------- */

const shuffleArray = <T>(arr: T[]): T[] => {
  const newArr = arr
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  return newArr;
};

/* -------------------------------------------------------------------------- */

const randomInt = (min: number, max: number): number => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
};

/* -------------------------------------------------------------------------- */

// http://browserhacks.com/#hack-dee2c3ab477a0324b6a2283c434108c8
const isChromium = () => !!(window as unknown as { chrome?: unknown }).chrome;

/* -------------------------------------------------------------------------- */

const isMSEdge = () => 'CSS' in window && window.CSS.supports('-ms-ime-align', 'auto');

/* -------------------------------------------------------------------------- */

// http://browserhacks.com/#hack-462504c4ab517b400419d1b3d73d943a
const isSafari = () =>
  !!navigator.userAgent.match(/safari/i) &&
  !navigator.userAgent.match(/chrome/i) &&
  typeof document.body.style.webkitFilter !== 'undefined' &&
  !isChromium();

/* -------------------------------------------------------------------------- */

export const getGradientBackground = (): string => {
  const colorScheme: string[] = shuffleArray<string>([
    randomElementFromArray(config.reds) ?? 'red',
    randomElementFromArray(config.greens) ?? 'green',
    randomElementFromArray(config.blues) ?? 'blue',
  ]);

  const rot = randomInt(0, 120);

  return [
    getLinearGradientStr(rot, colorScheme[0]),
    getLinearGradientStr(rot + 120, colorScheme[1]),
    getLinearGradientStr(rot + 240, colorScheme[2]),
  ].join(',');
};

/* -------------------------------------------------------------------------- */

export const getSolidBackground = (): string | undefined =>
  randomElementFromArray([
    randomElementFromArray(config.reds),
    randomElementFromArray(config.greens),
    randomElementFromArray(config.blues),
  ]);

/* -------------------------------------------------------------------------- */

const checkClipPathSupport = (): boolean => {
  const oldBrowser = !('CSS' in window); // IE Explorer

  const isSupported = !oldBrowser && window.CSS.supports('clip-path', 'url()');

  // Disable for mobile devices as most of them don't
  // support clip-path (window.CSS.supports(...) fails)
  const touchCapable = 'ontouchstart' in document.documentElement;

  return isSupported && !oldBrowser && !isSafari() && !isMSEdge() && !touchCapable;
};

/* -------------------------------------------------------------------------- */

export const canBeAnimated = (): boolean => checkClipPathSupport();
