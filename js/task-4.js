const ref = {
  counterEl: document.querySelector('#counter'),
  counterValue: document.querySelector('#value'),
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  number: 0,
};

ref.increment.onclick = () => {
  ref.number += 1;
  ref.counterValue.innerHTML = ref.number;
};
// increment.addEventListener("click", () => {
//   number += 1;
//   counterValue.innerHTML = number;
// });
ref.decrement.onclick = () => {
  ref.number -= 1;
  ref.counterValue.innerHTML = ref.number;
};
// decrement.addEventListener("click", () => {
//   number -= 1;
//   counterValue.innerHTML = number;
// });
ref.counterEl.style.marginBottom = '15px';
