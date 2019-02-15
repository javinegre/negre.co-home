import Home from './home';
import CV from './cv';
import Page404 from './404';

import '../scss/style.scss';

const $bodyId = document.querySelector('body').getAttribute('id');
switch ($bodyId) {
  case 'comp-home':
    Home();
    break;
  case 'comp-cv':
    CV();
    break;
  case 'comp-404':
    Page404();
    break;
  default:
    break;
}
