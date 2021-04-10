const buttonEl = document.querySelectorAll("#controls button");
const boxesEl = document.querySelector("#boxes");
buttonEl[0].addEventListener("click", onButtonRenderClick);
buttonEl[1].addEventListener("click", onButtonDestroyClick);
function onButtonRenderClick() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function onButtonDestroyClick() {
  boxesEl.innerHTML = "";
}
function random() {
  return Math.floor(Math.random() * 256);
}
