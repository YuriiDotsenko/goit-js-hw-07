const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("#ingredients");

const firstEl = document.createElement("li");
firstEl.textContent = "Картошка";

const twoEl = document.createElement("li");
twoEl.textContent = "Грибы";

const threeEl = document.createElement("li");
threeEl.textContent = "Чеснок";

const fourEl = document.createElement("li");
fourEl.textContent = "Помидоры";

const fiveEl = document.createElement("li");
fiveEl.textContent = "Зелень";

const sixEl = document.createElement("li");
sixEl.textContent = "Приправы";

ingredientsRef.append(firstEl, twoEl, threeEl, fourEl, fiveEl, sixEl);
