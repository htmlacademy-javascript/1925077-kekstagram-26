import {photosWithData} from './render-miniatures.js';

document.querySelector('body').classList.add('modal-open');

const indexOfPhoto = 0;

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

const listOfCommentsElement = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const comments = photosWithData[indexOfPhoto].comments;
const fragment = document.createDocumentFragment();
const closingButton = bigPicture.querySelector('.big-picture__cancel');

//                заполненение неколлекционными данными
bigPicture.querySelector('.js-full-img').src = photosWithData[indexOfPhoto].url;
bigPicture.querySelector('.js-full-img').alt = photosWithData[indexOfPhoto].description;
bigPicture.querySelector('.social__caption').textContent = photosWithData[indexOfPhoto].description;
bigPicture.querySelector('.likes-count').textContent = photosWithData[indexOfPhoto].likes;
if (photosWithData[indexOfPhoto].comments) {
  const howManyComments = photosWithData[indexOfPhoto].comments.length;
  bigPicture.querySelector('.comments-count').textContent = howManyComments;
  if (howManyComments <= 5) {
    bigPicture.querySelector('.social__comment-count').textContent = `${howManyComments} из ${howManyComments} комментариев`;
  }
} else {
  bigPicture.querySelector('.social__comment-count').textContent = 'Прокомментируйте первым!';
}
//////////////////////////////////////////////////////////////////////////////////////////////


//                 заполнение комментариев
if (comments) {
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.append(commentElement);
  });
}
listOfCommentsElement.replaceChildren(fragment);
//////////////////////////////////////////////////////////////////


//                      закрыть окно с большим фото
closingButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}, {once: true});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
}, {once: true});
//////////////////////////////////////////////////////////////////


//
/////////////////////////////////////////////////////////////////////////////
bigPicture.querySelector('.social__comment-count').classList.add('hidden');//
listOfCommentsElement.classList.add('hidden');//      <=========      //////
/////////          временное скрытие          ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//

