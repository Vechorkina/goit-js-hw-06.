/* Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */

const formEl = document.querySelector('.login-form');
const formSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.elements.password.value === '' || event.currentTarget.elements.email.value === '') {
        alert('Все поля должны быть заполнены!');
    }
    else {
        const objForm = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(objForm);
        event.currentTarget.reset();
    }
} 
formEl.addEventListener('submit', formSubmit);





//ПРЕДЫДУЩЕЕ РЕШЕНИЕ
/* const formEl = document.querySelector( '.login-form' )
formEl.addEventListener( 'submit', onBtnSubmit )
function onBtnSubmit ( el ) {   
    el.preventDefault();
    const objForm = {};
    const formData = new FormData( el.currentTarget )
    formData.forEach( ( value, name ) => {
        objForm[name] = value 
    })
    console.log( objForm )
    el.currentTarget.reset()
} */