const randomElementFromArray: <T>(items: T[]) => T | undefined = <T>(items: T[]) => {
  const randomElem: T | undefined = items[Math.floor(Math.random() * items.length)];
  return randomElem;
};

const shuffleArray: <T>(arr: T[]) => T[] = <T>(arr: T[]) => {
  const newArr = arr
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  return newArr;
};

const randomInt: (min: number, max: number) => number = (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * ((maxFloor - minCeil) + 1)) + minCeil;
};

const debounce: (func: any, delay: number) => ((...args: any[]) => void) = (func, delay) => {
  let inDebounce: number | undefined;

  return function innerFunc(this: any, ...args): void {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = window.setTimeout(() => func.apply(context, args), delay);
  };
};

// http://browserhacks.com/#hack-dee2c3ab477a0324b6a2283c434108c8
const isChromium = !!(window as any).chrome;

const isMSEdge = 'CSS' in window && window.CSS.supports('-ms-ime-align', 'auto');

// http://browserhacks.com/#hack-462504c4ab517b400419d1b3d73d943a
const isSafari = !!navigator.userAgent.match(/safari/i)
  && !navigator.userAgent.match(/chrome/i)
  && typeof document.body.style.webkitFilter !== 'undefined'
  && !isChromium;

export default {
  randomElementFromArray,
  shuffleArray,
  randomInt,
  debounce,
  isChromium,
  isMSEdge,
  isSafari,
};
