const formElement = document.querySelector('.img-upload__form');
const inputHashtagElement = document.querySelector('.text__hashtags');
const inputDescription = formElement.querySelector('.text__description');
// const unputFileElement = formElement.querySelector('.upload-file');

const MAX_LENGTH_OF_COMMENT = 140;
const MAX_AMOUNT_OF_TAGS = 5;


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
// /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/
// const value = 'asdf asdf asf jk';

const checkLongOfComment = (value) => value.length < MAX_LENGTH_OF_COMMENT;

pristine.addValidator(
  inputDescription,
  checkLongOfComment,
  'Длина комментария не более 140 символов'
);


const countHashtags = (value) => {
  if (value) {
    const hashTags = value.split(' ');
    let counter = 1;
    for (let i = 1; i < hashTags.length; i++) {
      counter += 1;
    }
    if (counter > MAX_AMOUNT_OF_TAGS) {
      return false;
    }
    return true;
  }
};

pristine.addValidator(
  inputHashtagElement,
  countHashtags,
  'Количество хэштэгов не более 5'
);


const checkMaskOfHashtag = (value) => {
  if (value) {
    const hashTags = value.split(' ');
    const regex = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
    let isValid;
    for (let i = 0; i < hashTags.length; i++) {
      isValid = regex.test(hashTags[i]);
    }
    return isValid;
  }
};

pristine.addValidator(
  inputHashtagElement,
  checkMaskOfHashtag,
  'Хэштэг должен начинаться с "#" и не включать остальные специальные символы'
);


const checkTheSameHashtag = (value) => {
  if (value) {
    const hashTags = value.split(' ');
    for (let i = 0; i < (hashTags.length); i++) {
      for (let j = i + 1; j < (hashTags.length); j++) {
        if (hashTags[i].toUpperCase() === hashTags[j].toUpperCase()) {
          return false;
        }
      }
    }
    return true;
  }
};

pristine.addValidator(
  inputHashtagElement,
  checkTheSameHashtag,
  'Хэштэги не могут быть одинаковы'
);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
