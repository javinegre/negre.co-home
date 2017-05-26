import CVChart from './cv/CVChart';

import '../scss/style.scss';

if (document.querySelector('svg#cv-chart') !== null) {
  const chart = new CVChart('svg#cv-chart');
  chart.render();
}
