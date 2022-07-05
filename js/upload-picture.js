const inputUploadElement = document.querySelector('.img-upload__input');
const formOverlayElement = document.querySelector('.img-upload__overlay');
const previewImgElement = document.querySelector('.img-upload__preview');

inputUploadElement.addEventListener('change', () => {
  const file = inputUploadElement.files[0];
  previewImgElement.src = URL.createObjectURL(file);
  formOverlayElement.classList.remove('hidden');
});
