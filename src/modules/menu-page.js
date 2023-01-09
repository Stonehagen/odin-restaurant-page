export default () => {
  const element = document.createElement('div');
  element.classList.add('main-food');

  const menu = {
    Beverages: [
      {
        name: 'Red Bubble Water',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore`,
        price: '5',
      },
      {
        name: 'Cheap Soda',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam`,
        price: '4',
      },
      {
        name: 'Some Fluid',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad`,
        price: '7.5',
      },
      {
        name: 'Green Hoax',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim`,
        price: '8',
      },
      {
        name: 'Soda With Nothing',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam`,
        price: '5.5',
      },
    ],
    Lunch: [
      {
        name: 'Red Stuffed Burger',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor`,
        price: '14',
      },
      {
        name: 'Orange Bowl',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam`,
        price: '16.5',
      },
      {
        name: 'Black Salad',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
      elit, sed do eiusmod tempor`,
        price: '16',
      },
      {
        name: 'Just Ginger',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad`,
        price: '54.5',
      },
    ],
  };

  Object.keys(menu).forEach((category) => {
    const divider = document.createElement('h1');
    divider.innerHTML = category;
    divider.classList.add('divider');
    element.appendChild(divider);

    menu[category].forEach((item) => {
      const textWrapper = document.createElement('div');
      textWrapper.classList.add('text-wrapper');

      const heading = document.createElement('h2');
      heading.innerHTML = item.name;
      textWrapper.appendChild(heading);

      const text = document.createElement('p');
      text.innerHTML = item.text;
      textWrapper.appendChild(text);

      const price = document.createElement('p');
      price.innerHTML = item.price;
      price.classList.add('price-tag');
      textWrapper.appendChild(price);

      const itemCard = document.createElement('div');
      itemCard.classList.add('menu-card');
      itemCard.appendChild(textWrapper);

      element.appendChild(itemCard);
    });
  });

  return element;
};
