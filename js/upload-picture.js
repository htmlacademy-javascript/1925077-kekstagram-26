import {inputHashtagElement, inputDescriptionElement, formElement} from './inputs-validation.js';

const bodyElement = document.querySelector('body');
const inputUploadElement = formElement.querySelector('#upload-file');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const buttonCloseElement = formElement.querySelector('#upload-cancel');


inputUploadElement.addEventListener('change', () => {
  formOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
});


//                      закрыть окно с загруженным фото
buttonCloseElement.addEventListener('click', () => {
  formOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  inputHashtagElement.value = '';
  inputDescriptionElement.value = '';
  formElement.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if ((inputHashtagElement !== document.activeElement) && (inputDescriptionElement !== document.activeElement)) {
      formOverlayElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
      inputHashtagElement.value = '';
      inputDescriptionElement.value = '';
      inputUploadElement.value = '';
    }
  }
});
//////////////////////////////////////////////////////////////////
