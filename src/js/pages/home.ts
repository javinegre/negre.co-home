import Logo from '../home/home-logo';
import Helpers from '../common/helpers';

import '../../scss/style.scss';

const Home = () => {
  const $canvas = document.querySelector('.home-logo-wrapper');
  const $gradBgCanvas = document.querySelector('.gradBg-canvas');

  let logo: any = null;

  const initLogo = () => {
    logo = Logo({
      $canvas,
      $gradBgCanvas,
      w: window.innerWidth,
      h: window.innerHeight,
    });

    initEvents();
  };

  const initEvents = () => {
    // Events
    window.addEventListener('resize', Helpers.debounce(resizeCalcs, 200));
    document.body.addEventListener('mousemove', logo.moveBackground);
    document.body.addEventListener('click', logo.generateGradientBackground);
  };

  const resizeCalcs = () => {
    logo.setDimensions({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  const checkClipPathSupport = () => {
    const oldBrowser = !('CSS' in window); // IE Explorer

    const isSupported = !oldBrowser && window.CSS.supports('clip-path', 'url()');

    // Disable for mobile devices as most of them don't
    // support clip-path (window.CSS.supports(...) fails)
    const touchCapable = 'ontouchstart' in document.documentElement;

    // FML this was supposed to be easy
    return isSupported && !oldBrowser && !Helpers.isSafari && !Helpers.isMSEdge && !touchCapable;
  };

  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then((registration) => {
          /* eslint-disable no-console */
          console.log('SW registered: ', registration);
        }).catch((registrationError) => {
          /* eslint-disable no-console */
          console.log('SW registration failed: ', registrationError);
        });
      });
    }
  };

  const init = () => {
    if (checkClipPathSupport()) {
      initLogo();
    } else {
      document.querySelector('.home-logo')?.classList.add('home-logo--noGradient');
    }

    registerServiceWorker();
  };

  init();
};

Home();
