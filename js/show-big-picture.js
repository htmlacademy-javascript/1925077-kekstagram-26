import {photosWithData} from './render-miniatures.js';

document.querySelector('body').classList.add('modal-open');

const indexOfPhoto = 0;

const bigPictureElement = document.querySelector('.big-picture');
bigPictureElement.classList.remove('hidden');

const listOfCommentsElement = bigPictureElement.querySelector('.social__comments');
const commentTemplateElement = bigPictureElement.querySelector('.social__comment');
const comments = photosWithData[indexOfPhoto].comments;
const fragment = document.createDocumentFragment();
const buttonCloseElement = bigPictureElement.querySelector('.big-picture__cancel');


//                заполненение неколлекционными данными
bigPictureElement.querySelector('.js-full-img').src = photosWithData[indexOfPhoto].url;
bigPictureElement.querySelector('.js-full-img').alt = photosWithData[indexOfPhoto].description;
bigPictureElement.querySelector('.social__caption').textContent = photosWithData[indexOfPhoto].description;
bigPictureElement.querySelector('.likes-count').textContent = photosWithData[indexOfPhoto].likes;
if (photosWithData[indexOfPhoto].comments) {
  const howManyComments = photosWithData[indexOfPhoto].comments.length;
  bigPictureElement.querySelector('.comments-count').textContent = howManyComments;
  if (howManyComments <= 5) {
    bigPictureElement.querySelector('.social__comment-count').textContent = `${howManyComments} из ${howManyComments} комментариев`;
  }
} else {
  bigPictureElement.querySelector('.social__comment-count').textContent = 'Прокомментируйте первым!';
}
//////////////////////////////////////////////////////////////////////////////////////////////


//                 заполнение комментариев
if (comments) {
  comments.forEach((comment) => {
    const commentElement = commentTemplateElement.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.append(commentElement);
  });
}
listOfCommentsElement.replaceChildren(fragment);
//////////////////////////////////////////////////////////////////


//                      закрыть окно с большим фото
buttonCloseElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}, {once: true});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
}, {once: true});
//////////////////////////////////////////////////////////////////


//
/////////////////////////////////////////////////////////////////////////////
bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');//
listOfCommentsElement.classList.add('hidden');//      <=========      //////
/////////          временное скрытие          ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//

