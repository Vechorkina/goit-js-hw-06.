/*  Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.  */


const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.counterValue;
});
decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.counterValue;
});
