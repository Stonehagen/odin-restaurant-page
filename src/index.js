import './style.css';
import pageLoad from './modules/page-load';
import menuPage from './modules/menu-page';
import headerMenu, { menuList } from '../header-menu';

const contentContainer = document.querySelector('#content');

contentContainer.appendChild(headerMenu());
contentContainer.appendChild(pageLoad());

menuList.forEach((item) => {
  document.querySelector(`#${item}`).addEventListener('click', () => {
    if (item === 'Home') {
      contentContainer.removeChild(contentContainer.children[1]);
      contentContainer.appendChild(pageLoad());
    } else if (item === 'Menu') {
      contentContainer.removeChild(contentContainer.children[1]);
      contentContainer.appendChild(menuPage());
    }
  });
});
