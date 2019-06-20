import 'waypoints/lib/noframework.waypoints';

import CVChart from '../cv/CVChart';

const CV = () => {
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
