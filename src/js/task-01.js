const selectedByClass = document.querySelectorAll('.item');
//const quantityСategories = selectedByClass.length;
//console.log(`Number of  categories: ${quantityСategories.length}`);
console.log(`Number of  categories: ${selectedByClass.length}`);

selectedByClass.forEach(el => {
  const category = el.firstElementChild.textContent;
  const quantityElements = el.lastElementChild.children.length;
  console.log(
    `Category: ${category}
 Elements: ${quantityElements}`,
  );
});







