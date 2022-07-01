import {photosWithData} from './render-miniatures.js';

const bigPictureTemplate = document.querySelector('.big-picture');
bigPictureTemplate.classList.remove('hidden');

bigPictureTemplate.querySelector('.js-full-img').src = photosWithData[0].url;
bigPictureTemplate.querySelector('.js-full-img').alt = photosWithData[0].description;
bigPictureTemplate.querySelector('.social__caption').textContent = photosWithData[0].description;
bigPictureTemplate.querySelector('.likes-count').textContent = photosWithData[0].likes;



console.log('************************');
console.log(photosWithData[0]);
console.log('************************');
