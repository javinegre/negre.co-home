const randomElementFromArray = (items) => {
  const randomElem = items[Math.floor(Math.random() * items.length)];
  return randomElem;
};

const shuffleArray = (arr) => {
  const newArr = arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  return newArr;
};

const randomInt = (min, max) => {
  const miin = Math.ceil(min);
  const maax = Math.floor(max);
  return Math.floor(Math.random() * ((maax - miin) + 1)) + miin;
};

const debounce = (func, delay) => {
  let inDebounce;
  return function innerFunc(...args) {
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

// http://browserhacks.com/#hack-dee2c3ab477a0324b6a2283c434108c8
const isChromium = !!window.chrome;

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
