const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');

const elementRef = document.createElement('li');
elementRef.textContent = 'Картошка';

const firstElementRef = document.createElement('li');
firstElementRef.textContent = 'Грибы';

const twoElementRef = document.createElement('li');
twoElementRef.textContent = 'Чеснок';

const threeElementRef = document.createElement('li');
threeElementRef.textContent = 'Помидоры';

const fourthElementRef = document.createElement('li');
fourthElementRef.textContent = 'Зелень';

const fifthElementRef = document.createElement('li');
fifthElementRef.textContent = 'Приправы';

listRef.append(elementRef, firstElementRef, twoElementRef, threeElementRef, fourthElementRef, fifthElementRef);


console.log(listRef);
