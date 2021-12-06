/*  В HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>
В JavaScript есть массив строк.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
Напиши скрипт, который для каждого элемента массива ingredients:
Создаст отдельный элемент <li>. Обзательно используй метод 
document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsRef = document.querySelector('#ingredients');
const createElement = el => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = el;
  return ingredientElement;
};
const elements = ingredients.map(createElement);
ingredientsRef.append(...elements);

/* const ulEl = document.querySelector('#ingredients');
const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
ulEl.innerHTML = list; */