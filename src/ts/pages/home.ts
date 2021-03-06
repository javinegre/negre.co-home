import React from 'react';
import ReactDom from 'react-dom';

import Helpers from '../common/helpers';

import '../../scss/style.scss';
import LogoComponent from '../components/logo/logo';
import { ILogoComponentProps } from '../components/logo/interfaces';
import { LogoLayoutType } from '../components/logo/types';

const Home: () => void = () => {
  let $logo: Element | null = null;

  const unmountLogoComponent: () => void = () => {
    if ($logo) {
      ReactDom.unmountComponentAtNode($logo);
    }
  };

  const renderLogoComponent: () => void = () => {
    const mBreakpoint = 768;
    const layout: LogoLayoutType =
      window.innerWidth <= mBreakpoint ? 'flat' : 'block';

    const logoComponent = React.createElement<ILogoComponentProps>(
      LogoComponent,
      { layout },
    );

    ReactDom.render(logoComponent, $logo);
  };

  const onWindowResize: () => void = () => {
    unmountLogoComponent();
    renderLogoComponent();
  };

  const initEvents: () => void = () => {
    // Events
    window.addEventListener('resize', Helpers.debounce(onWindowResize, 200));
  };

  const init: () => void = () => {
    $logo = document.querySelector('[data-react="LogoComponent"]');

    renderLogoComponent();

    initEvents();
  };

  init();
};

Home();
