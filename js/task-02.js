const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
const listIngEl = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  listIngEl.push(liEl);
}
listEl.append(...listIngEl);
console.log(listEl);
