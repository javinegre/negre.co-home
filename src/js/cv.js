import 'waypoints/lib/noframework.waypoints';

import CVChart from './cv/CVChart';

const CV = () => {
  const host = 'gmail.com';
  const name = 'javi.negre';
  const emailLink = `mailto:${name}@${host}`;
  const mailtos = document.getElementsByClassName('js-mailto');
  const len = mailtos.length;
  for (let i = 0; i < len; i += 1) {
    mailtos[i].setAttribute('href', emailLink);
  }

  const cvChart = new CVChart('#cv-chart');
  cvChart.draw();

  const $nav = document.getElementById('cv-back-button');
  new Waypoint({
    element: document.getElementById('comp-cv'),
    handler: (direction) => {
      $nav.classList.toggle('cv-back-button--bottom-reached', direction === 'down');
    },
    offset: 'bottom-in-view',
  });
};

export default CV;
