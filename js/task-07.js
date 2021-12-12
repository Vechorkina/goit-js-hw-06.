/* Напиши скрипт, который реагирует на изменение значения input#font-size-control 
(событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при 
перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */


 const refs = {
   controlFont :document.querySelector( '#font-size-control' ),
   textSpan :document.querySelector( '#text' )
}


refs.controlFont.addEventListener( 'input', onControlInput )
text.style.fontSize = '30px'
function onControlInput () {

   let sliderText = refs.controlFont.value
   refs.textSpan.style = `font-size: ${ sliderText }px`
} 