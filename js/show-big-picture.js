import {photosWithData} from './render-miniatures.js';


const bigPictureElement = document.querySelector('.big-picture');


const listOfCommentsElement = bigPictureElement.querySelector('.social__comments');
const commentTemplateElement = bigPictureElement.querySelector('.social__comment');
const fragment = document.createDocumentFragment();
const buttonCloseElement = bigPictureElement.querySelector('.big-picture__cancel');


const pluckLinksElements = () => {
  const linksMiniImgContainer = document.querySelector('.pictures');

  const onLinkMiniImgClick = (idOfPhoto) => {
    for (let i = 0; i < photosWithData.length; i++) {
      if (photosWithData[i].id === idOfPhoto) {
        const comments = photosWithData[i].comments;//массив комментов конкретного фото

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


        //                заполненение неколлекционными данными
        bigPictureElement.querySelector('.js-full-img').src = photosWithData[i].url;
        bigPictureElement.querySelector('.js-full-img').alt = photosWithData[i].description;
        bigPictureElement.querySelector('.social__caption').textContent = photosWithData[i].description;
        bigPictureElement.querySelector('.likes-count').textContent = photosWithData[i].likes;
        if (photosWithData[i].comments) {
          const howManyComments = (photosWithData[i].comments.length);
          if ((howManyComments) > 5) {
            bigPictureElement.querySelector('.social__comment-count').textContent = `5 из ${howManyComments} комментариев`;
          }
          else {
            bigPictureElement.querySelector('.social__comment-count').textContent = `${howManyComments} из ${howManyComments} комментариев`;
          }
        } else {
          bigPictureElement.querySelector('.social__comment-count').textContent = 'Прокомментируйте первым!';
        }
        //////////////////////////////////////////////////////////////////////////////////////////////
        bigPictureElement.classList.remove('hidden');
      }
    }
  };

  linksMiniImgContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('js-picture__img')) {
      onLinkMiniImgClick(+(evt.target.getAttribute('id')));
      document.querySelector('body').classList.add('modal-open');
    }
  });
};

pluckLinksElements();


//                      закрыть окно с большим фото
buttonCloseElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPictureElement.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});
//////////////////////////////////////////////////////////////////
