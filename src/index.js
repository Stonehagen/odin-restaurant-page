import './style.css';
import pageLoad from './modules/page-load';
import menuPage from './modules/menu-page';
import headerMenu, { menuList } from '../header-menu';
import contactPage from './modules/contact-page';

const contentContainer = document.querySelector('#content');

contentContainer.appendChild(headerMenu());
contentContainer.children[0].children[0].classList.add('active');
contentContainer.appendChild(pageLoad());

menuList.forEach((item) => {
  document.querySelector(`#${item}`).addEventListener('click', () => {
    if (item === 'Home') {
      contentContainer.removeChild(contentContainer.children[1]);
      contentContainer.appendChild(pageLoad());
      contentContainer.querySelector('.active').classList.remove('active');
      contentContainer.children[0].children[0].classList.add('active');
    } else if (item === 'Menu') {
      contentContainer.removeChild(contentContainer.children[1]);
      contentContainer.appendChild(menuPage());
      contentContainer.querySelector('.active').classList.remove('active');
      contentContainer.children[0].children[1].classList.add('active');
    } else if (item === 'Contact') {
      contentContainer.removeChild(contentContainer.children[1]);
      contentContainer.appendChild(contactPage());
      contentContainer.querySelector('.active').classList.remove('active');
      contentContainer.children[0].children[2].classList.add('active');
    }
  });
});
