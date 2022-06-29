import {getDescriptionsOfPhoto} from './get-descriptions-of-photo.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const descriptions = getDescriptionsOfPhoto();
const fragment = document.createDocumentFragment();

descriptions.forEach((miniature)=>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = miniature.url;

  if (miniature.comments) {
    let comments = 0;
    for (let i = 1; i <= miniature.comments.length; i++) {
      comments+=i;
    }
    pictureElement.querySelector('.picture__comments').textContent = comments;
  } else {
    pictureElement.querySelector('.picture__comments').textContent = 0;
  }

  pictureElement.querySelector('.picture__likes').textContent = miniature.likes;
  fragment.append(pictureElement);
});

picturesContainer.append(fragment);
