import RestaurantImage from '../images/restaurant1.jpg';

export default () => {
  const element = document.createElement('div');
  const textWrapper = document.createElement('div');

  const heading = document.createElement('h2');
  heading.innerHTML = 'The Dinning Room';
  textWrapper.appendChild(heading);

  const text = document.createElement('p');
  text.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing 
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
  anim id est laborum.`;

  textWrapper.appendChild(text);

  textWrapper.classList.add('main-wrapper');

  element.appendChild(textWrapper);

  const restaurantImage = new Image();
  restaurantImage.src = RestaurantImage;
  element.appendChild(restaurantImage);

  element.classList.add('main');

  return element;
};
