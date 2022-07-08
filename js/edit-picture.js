// document.querySelector('.big-picture').classList.add('hidden');

const formOverlayElement = document.querySelector('.img-upload__overlay');

// const formElement = document.querySelector('.img-upload__form');


// const buttonSubmitElement = formOverlayElement.querySelector('.img-upload__submit');
const buttonCloseElement = formOverlayElement.querySelector('.img-upload__cancel');

// formOverlayElement.classList.remove('hidden');


// buttonSubmitElement.addEventListener('click', (evt) => {
//   evt.preventDefault();
// });

// console.log(formOverlayElement);
// console.log(formElement);

//                      закрыть окно редактирования фото
buttonCloseElement.addEventListener('click', () => {
  formOverlayElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}, {once: true});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    formOverlayElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
}, {once: true});
//////////////////////////////////////////////////////////////////
