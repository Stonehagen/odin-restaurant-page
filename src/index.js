import './style.css';
import RestaurantImage from './images/restaurant1.jpg';

const contentContainer = document.querySelector('#content');

const component = () => {
  const element = document.createElement('div');

  const restaurantImage = new Image();
  restaurantImage.src = RestaurantImage;

  element.appendChild(restaurantImage);

  return element;
};

contentContainer.appendChild(component());
