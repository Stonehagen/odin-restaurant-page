import MapImage from '../images/map.jpg';

export default () => {
  const element = document.createElement('div');
  const textWrapper = document.createElement('div');

  const heading = document.createElement('h2');
  heading.innerHTML = 'Where R We?';
  textWrapper.appendChild(heading);

  const text = document.createElement('p');
  text.innerHTML = `The Dinning Room<br>
  Mainstreet 213<br>
  36543 Citytown<br>`;

  textWrapper.appendChild(text);

  textWrapper.classList.add('main-wrapper');

  element.appendChild(textWrapper);

  const restaurantImage = new Image();
  restaurantImage.src = MapImage;
  restaurantImage.classList.add('map-img');
  element.appendChild(restaurantImage);

  element.classList.add('main');

  return element;
};
