/* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн 
стиль при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const changeColor = document.querySelector(".color");
btn.addEventListener("click", () => {
 const color = getRandomHexColor();
 document.body.style.backgroundColor = color;
 changeColor.textContent = color;
}); 

/* ПРЕДЫДУЩИЙ ВАРИАНТ
const refs = {
  btn: document.querySelector( '.change-color' ),
  body: document.querySelector( "[data-color='cheng']" ),
  textColor:document.querySelector( '.color' )
}
refs.btn.addEventListener( 'click', onColorClick )
function onColorClick ( e ) {
  refs.body.style.backgroundColor = getRandomHexColor()
  refs.textColor.textContent = getRandomHexColor()
}
 */



