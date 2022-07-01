import {photosWithData} from './render-miniatures.js';

const idOfPhoto = 0;

const bigPictureTemplate = document.querySelector('.big-picture');
bigPictureTemplate.classList.remove('hidden');

const listofCommentsTemplate = bigPictureTemplate.querySelector('.social__comments');
const commentTemplate = bigPictureTemplate.querySelector('.social__comment');
// const commentElement = bigPictureTemplate.querySelectorAll('.social__comment').cloneNode(true);
const hardComments = bigPictureTemplate.querySelectorAll('.social__comment');
const comments = photosWithData[idOfPhoto].comments;
const fragment = document.createDocumentFragment();


bigPictureTemplate.querySelector('.js-full-img').src = photosWithData[idOfPhoto].url;
bigPictureTemplate.querySelector('.js-full-img').alt = photosWithData[idOfPhoto].description;
bigPictureTemplate.querySelector('.social__caption').textContent = photosWithData[idOfPhoto].description;
bigPictureTemplate.querySelector('.likes-count').textContent = photosWithData[idOfPhoto].likes;

if (photosWithData[idOfPhoto].comments) {
  const howManyComments = photosWithData[idOfPhoto].comments.length;
  bigPictureTemplate.querySelector('.comments-count').textContent = howManyComments;
  if (howManyComments <= 5) {
    bigPictureTemplate.querySelector('.social__comment-count').textContent = `${howManyComments} из ${howManyComments} комментариев`;
  }
} else {
  bigPictureTemplate.querySelector('.social__comment-count').textContent = 'Прокомментируйте первым!';
}

// const fragment

// hardComments.remove();//Удаление жестко отрисованных комментарев в разметке

if (comments) {
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__text').textContent = comment.message;
    console.log(commentElement);
    listofCommentsTemplate.append(commentElement);
  });
}


// listofCommentsTemplate.append(fragment);

// commentElement.querySelector('.social__picture').src = 'img/avatar-6.svg';
// commentElement.querySelector('.social__text').textContent = 'img/avatar-3.svg';

// listofCommentsTemplate.append(commentElement);




// console.log('************************');
// console.log(photosWithData[0]);
// console.log(commentTemplate);
// console.log(comments);
