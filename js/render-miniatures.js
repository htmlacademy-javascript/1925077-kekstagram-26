import {getDescriptionsOfPhoto} from './get-descriptions-of-photo.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');


const descriptions = getDescriptionsOfPhoto();

descriptions.forEach((miniature)=>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = miniature.url;
  picturesList.append(pictureElement);
});

// console.log(pictureTemplate);
console.log(picturesList);
// console.log(pictureElement);
console.log(descriptions);
