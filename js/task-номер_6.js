const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (e) => {
  if (
    e.target.value.length < inputRef.dataset.length ||
    e.target.value.length > inputRef.dataset.length
  ) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
});
