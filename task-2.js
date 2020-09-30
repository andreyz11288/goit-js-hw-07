const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
let list = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  list.appendChild(item);
});
