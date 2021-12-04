//const selectedByClass = document.querySelectorAll('.item');
        //const quantityСategories = selectedByClass.length;
        //console.log(`Number of  categories: ${quantityСategories.length}`);
//console.log(`Number of  categories: ${selectedByClass.length}`);

//selectedByClass.forEach(el => {
  //const category = el.firstElementChild.textContent;
  //const quantityElements = el.lastElementChild.children.length;
  //console.log(`Category: ${category}`);
  //console.log(`Elements: ${quantityElements}`,
  //);
//});


const selectedByClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${selectedByClass.length}`);

selectedByClass.forEach(el => {
    const numberOfCategory = el.querySelector('h2');
    const numberOfElements = el.querySelectorAll('li');

    console.log(`Category: ${numberOfCategory.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});



