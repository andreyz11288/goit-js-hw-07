const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// let list = document.querySelector('#ingredients');
// const foodIngredients = ingredients.forEach(ingredient => {
//   let item = document.createElement('li');
//   item.innerHTML = ingredient;
// });
// list.append(...item);

const foodIngredients = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});
const list = document.querySelector('#ingredients');
list.append(...foodIngredients);
