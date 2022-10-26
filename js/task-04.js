let counterValue = 0;
const counterEl = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const onDecrementClick = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};
const onIncrementClick = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};

btnDecrement.addEventListener("click", onDecrementClick);
btnIncrement.addEventListener("click", onIncrementClick);

console.log(counterValue);
console.log(btnDecrement);
console.log(btnIncrement);
