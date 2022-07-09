const formElement = document.querySelector('.img-upload__form');
// const inputHashtagElement = document.querySelector('.text__hashtags');
const inputDescription = formElement.querySelector('.text__description');
// const unputFileElement = formElement.querySelector('.upload-file');


// const pristine = new Pristine(formElement);

const pristine = new Pristine(formElement, {
  classTo: 'form__item', // Элемент, на который будут добавляться классы
  errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  successClass: 'form__item--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'form__item', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'p', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'form__error' // Класс для элемента с текстом ошибки
});


// const regexHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;


const CheckLongOfInputHashtagElement = (value) => value.length < 140;

pristine.addValidator(
  inputDescription,
  CheckLongOfInputHashtagElement,
  'Длина комментария не более 140 символов'
);


formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
