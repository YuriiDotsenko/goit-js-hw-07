const refs = {
  input: document.querySelector("#name-input"),
  spanName: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.input.value
    ? (refs.spanName.textContent = event.currentTarget.value)
    : (refs.spanName.textContent = "незнакомец");
}
