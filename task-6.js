const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.getAttribute("data-length");
console.log(inputEl);
console.log(inputEl.value.length);

inputEl.addEventListener("blur", eventList);
function eventList() {
  if (inputEl.value.length >= lengthEl) {
    inputEl.setAttribute("class", "valid");
    console.log("ok");
  } else {
    inputEl.setAttribute("class", "invalid");
    console.log("fake");
  }
}
