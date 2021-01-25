import CVChart from '../cv/CVChart';
import helpers from '../common/helpers';

const CV: () => void = () => {
  const cvChart = new CVChart('#cv-chart');
  cvChart.draw();

  const $nav: HTMLElement | null = document.getElementById('cv-back-button');

  const toggleNavVisibility: () => void = () => {
    const isPageBottom: boolean =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    $nav?.classList.toggle('cv-back-button--bottom-reached', isPageBottom);
  };

  window.addEventListener('scroll', helpers.debounce(toggleNavVisibility, 60));
};

export default CV;
