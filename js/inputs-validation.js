const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('huy');
  } else {
    console.log('not huy');
  }
});
