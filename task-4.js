// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
const counterValue = document.querySelector("#value");
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
let number = 0;

increment.onclick = () => {
  number += 1;
  counterValue.innerHTML = number;
};
// increment.addEventListener("click", () => {
//   number += 1;
//   counterValue.innerHTML = number;
// });
decrement.onclick = () => {
  number -= 1;
  counterValue.innerHTML = number;
};
// decrement.addEventListener("click", () => {
//   number -= 1;
//   counterValue.innerHTML = number;
// });
