const buttonEl = {
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector("#value"),
  currentValue: 0,
};

const increment = function () {
  buttonEl.currentValue += 1;
  getValue();
};

const decrement = function () {
  buttonEl.currentValue -= 1;
  getValue();
};

const getValue = function () {
  buttonEl.counterValue.textContent = buttonEl.currentValue;
};

buttonEl.buttonInc.addEventListener("click", () => increment());
buttonEl.buttonDec.addEventListener("click", () => decrement());
