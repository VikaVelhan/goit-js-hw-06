const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

inputEl.addEventListener("blur", () => {
  inputEl.classList = "";
});

function onInputBlur() {
  inputEl.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add("valid")
    : inputEl.classList.add("invalid");
}
inputEl.addEventListener("blur", onInputBlur);
