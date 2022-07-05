import {getphotosWithData} from './get-photos-with-data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const photosWithData = getphotosWithData();
const fragment = document.createDocumentFragment();

photosWithData.forEach((aPhotoWithData)=>{
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = aPhotoWithData.url;
  pictureElement.querySelector('.picture__img').id = aPhotoWithData.id;

  if (aPhotoWithData.comments) {
    pictureElement.querySelector('.picture__comments').textContent = aPhotoWithData.comments.length;
  } else {
    pictureElement.querySelector('.picture__comments').textContent = 0;
  }

  pictureElement.querySelector('.picture__likes').textContent = aPhotoWithData.likes;
  fragment.append(pictureElement);
});

picturesContainer.append(fragment);

export {photosWithData, picturesContainer};
