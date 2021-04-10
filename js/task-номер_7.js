const inputSize = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
const checkSize = function () {
  inputSize.span.style.fontSize = `${inputSize.input.value}px`;
};
inputSize.input.addEventListener("input", () => checkSize());
