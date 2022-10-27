const fontSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", fontSizeChange);

function fontSizeChange() {
  textEl.style.fontSize = `${Number(fontSizeEl.value)}px`;
  console.log(`${Number(fontSizeEl.value)}px`);
}
