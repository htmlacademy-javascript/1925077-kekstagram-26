import {photosWithData} from './render-miniatures.js';

const idOfPhoto = 0;

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

const listofCommentsTemplate = bigPicture.querySelector('.social__comments');

/////////////////////////////////////////////////////////////////////////////
bigPicture.querySelector('.social__comment-count').classList.add('hidden');//
listofCommentsTemplate.classList.add('hidden');//      <=========      //////
/////////          временное скрытие          ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////

const commentTemplate = bigPicture.querySelector('.social__comment');
const comments = photosWithData[idOfPhoto].comments;
const fragment = document.createDocumentFragment();
const closingButton = bigPicture.querySelector('.big-picture__cancel');


bigPicture.querySelector('.js-full-img').src = photosWithData[idOfPhoto].url;
bigPicture.querySelector('.js-full-img').alt = photosWithData[idOfPhoto].description;
bigPicture.querySelector('.social__caption').textContent = photosWithData[idOfPhoto].description;
bigPicture.querySelector('.likes-count').textContent = photosWithData[idOfPhoto].likes;

if (photosWithData[idOfPhoto].comments) {
  const howManyComments = photosWithData[idOfPhoto].comments.length;
  bigPicture.querySelector('.comments-count').textContent = howManyComments;
  if (howManyComments <= 5) {
    bigPicture.querySelector('.social__comment-count').textContent = `${howManyComments} из ${howManyComments} комментариев`;
  }
} else {
  bigPicture.querySelector('.social__comment-count').textContent = 'Прокомментируйте первым!';
}

if (comments) {
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.append(commentElement);
  });
}

listofCommentsTemplate.append(fragment);

closingButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
}, {once: true});
