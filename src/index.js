import './style.css';
import pageLoad from './modules/page-load';
import menuPage from './modules/menu-page';

const contentContainer = document.querySelector('#content');

contentContainer.appendChild(pageLoad());
contentContainer.appendChild(menuPage());
