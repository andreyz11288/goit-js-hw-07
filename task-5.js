const inputEl = document.querySelector("#name-input");
console.log(inputEl.value);
const spanEl = document.querySelector("#name-output");
console.log(spanEl.textContent);

inputEl.addEventListener("input", eventList);
function eventList(event) {
  if (inputEl.value === "") {
    spanEl.textContent = "незнакомец";
  } else {
    spanEl.textContent = inputEl.value;
  }
}
