const inputEl = document.querySelector("#validation-input");
const lengthEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", eventList);
function eventList() {
  if (inputEl.value.length >= lengthEl) {
    inputEl.setAttribute("class", "valid");
  } else if (inputEl.value === "") {
    inputEl.setAttribute("class", "");
  } else {
    inputEl.setAttribute("class", "invalid");
  }
}

inputEl.style.marginBottom = "15px";
