
const Helpers = {

  randomElementFromArray: (items) => {
    const randomElem = items[Math.floor(Math.random() * items.length)];
    return randomElem;
  },

  shuffleArray: (arr) => {
    const newArr = arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

    return newArr;
  },

  randomInt: (min, max) => {
    const miin = Math.ceil(min);
    const maax = Math.floor(max);
    return Math.floor(Math.random() * ((maax - miin) + 1)) + miin;
  },

};

export default Helpers;
