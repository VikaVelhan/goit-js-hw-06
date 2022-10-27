function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetEl = document.querySelector(".widget");
const colorEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", onChangeColor);
function onChangeColor() {
  widgetEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = `${widgetEl.style.backgroundColor}`;
}
