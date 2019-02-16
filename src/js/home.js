import Logo from './home-logo';
import Helpers from './common/helpers';

const Home = () => {
  const $canvas = document.querySelector('.home-logo-wrapper');
  const $gradBgCanvas = document.querySelector('.gradBg-canvas');

  let logo = null;

  init();

  function init() {
    if (checkClipPathSupport()) {
      initLogo();
    } else {
      document.querySelector('.home-logo').classList.add('home-logo--noGradient');
    }
  }

  function initLogo() {
    logo = Logo({
      $canvas,
      $gradBgCanvas,
      w: window.innerWidth,
      h: window.innerHeight,
    });

    initEvents();
  }

  function initEvents() {
    // Events
    window.addEventListener('resize', Helpers.debounce(resizeCalcs, 200));
    document.body.addEventListener('mousemove', logo.moveBackground);
    document.body.addEventListener('click', logo.generateGradientBackground);
  }

  function resizeCalcs() {
    logo.setDimensions({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  }

  function checkClipPathSupport() {
    return 'CSS' in window && window.CSS.supports('clip-path', 'url()');
  }
};

export default Home;
