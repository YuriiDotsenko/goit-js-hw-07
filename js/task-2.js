const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("#ingredients");

const addListItems = (array) => {
  const listArray = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });
  ingredientsRef.append(...listArray);
};

addListItems(ingredients);
