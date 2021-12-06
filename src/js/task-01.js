/* В HTML есть список категорий ul#categories.
Напиши скрипт который:
Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет 
в консоль текст заголовка элемента (тега <h2>) и 
  количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5 */

const selectedByClass = document.querySelectorAll('.item');
        //const quantityСategories = selectedByClass.length;
        //console.log(`Number of  categories: ${quantityСategories.length}`);
console.log(`Number of  categories: ${selectedByClass.length}`);

selectedByClass.forEach(el => {
  const category = el.firstElementChild.textContent;
  const quantityElements = el.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${quantityElements}`,
  );
});


//const selectedByClass = document.querySelectorAll('.item');
//console.log(`Number of categories: ${selectedByClass.length}`);
//selectedByClass.forEach(el => {
    //const numberOfCategory = el.querySelector('h2');
    //const numberOfElements = el.querySelectorAll('li');

    //console.log(`Category: ${numberOfCategory.textContent}`);
    //console.log(`Elements: ${numberOfElements.length}`);
//});



