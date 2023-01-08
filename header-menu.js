export const menuList = ['Home', 'Menu', 'Contact'];

export default () => {
  const element = document.createElement('ul');

  element.classList.add('header-menu');

  menuList.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.id = item;
    menuItem.innerHTML = item;
    element.appendChild(menuItem);
  });

  return element;
};
