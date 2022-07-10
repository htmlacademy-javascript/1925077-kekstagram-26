import {inputHashtagElement, inputDescription, formElement} from './inputs-validation.js';

const inputUploadElement = formElement.querySelector('#upload-file');
const formOverlayElement = formElement.querySelector('.img-upload__overlay');
const buttonCloseElement = formElement.querySelector('#upload-cancel');
// const previewImgElement = document.querySelector('.img-upload__preview');

inputUploadElement.addEventListener('change', () => {

  // const file = inputUploadElement.files[0];
  // previewImgElement.src = URL.createObjectURL(file);
  formOverlayElement.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});


//                      закрыть окно с загруженным фото
buttonCloseElement.addEventListener('click', () => {
  formOverlayElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  inputHashtagElement.value = '';
  inputDescription.value = '';
  formElement.value = '';
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if ((inputHashtagElement !== document.activeElement) && (inputDescription !== document.activeElement)) {
      formOverlayElement.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
      inputHashtagElement.value = '';
      inputUploadElement.file = '';
      formElement.value = '';
    }
  }
});
//////////////////////////////////////////////////////////////////
