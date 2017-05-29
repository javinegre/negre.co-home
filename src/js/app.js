import CVChart from './cv/CVChart';

import '../scss/style.scss';

if (document.querySelector('svg#cv-chart') !== null) {

  const host = 'negre.co';
  const name = 'javi';
  const emailLink = `mailto:${name}@${host}`;

  for (const el of document.getElementsByClassName('js-mailto')) {
    el.setAttribute('href', emailLink);
  }

  const chart = new CVChart('svg#cv-chart');
  chart.render();
}
