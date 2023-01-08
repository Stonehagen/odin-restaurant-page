import './style.css';
import pageLoad from './modules/page-load';
import menuPage from './modules/menu-page';
import headerMenu from '../header-menu';

const contentContainer = document.querySelector('#content');

contentContainer.appendChild(headerMenu());
contentContainer.appendChild(pageLoad());
contentContainer.appendChild(menuPage());
