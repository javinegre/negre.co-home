import CV from './pages/cv';
import Page404 from './pages/404';

import '../scss/style.scss';

const $bodyId = document.querySelector('body').getAttribute('id');
switch ($bodyId) {
  case 'comp-cv':
    CV();
    break;
  case 'comp-404':
    Page404();
    break;
  default:
    break;
}
