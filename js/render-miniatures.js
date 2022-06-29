import {getDescriptionsOfPhoto} from './get-descriptions-of-photo.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');


const descriptions = getDescriptionsOfPhoto();
const comments = descriptions.comments;

descriptions.forEach((miniature)=>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = miniature.url;
  pictureElement.querySelector('.picture__comments').textContent = miniature.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = miniature.likes;
  picturesContainer.append(pictureElement);
});

// console.log(pictureTemplate);
// console.log(picturesContainer);
// console.log(pictureElement);
console.log(comments);
