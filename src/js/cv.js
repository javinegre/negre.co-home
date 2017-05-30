import CVChart from './cv/CVChart';

const CV = () => {
  const host = 'negre.co';
  const name = 'javi';
  const emailLink = `mailto:${name}@${host}`;
  const mailtos = document.getElementsByClassName('js-mailto');
  const len = mailtos.length;
  for (let i = 0; i < len; i += 1) {
    mailtos[i].setAttribute('href', emailLink);
  }

  const cvChart = new CVChart('#cv-chart');
  cvChart.draw();
};

export default CV;
