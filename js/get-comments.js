import {getRandomOnlyPositiveInt} from './get-random-only-positive-int.js';
import {shuffle} from './shuffle.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ? !'
];


const NAMES = ['Дамир Быков', 'Елена Дроздова', 'Кирилл Гордеев', 'Алёна Малахова', 'Александра Кузина', 'Руслан Исаев', 'Полина Герасимова', 'Аделина Панкратова', 'Ирина Новикова', 'Станислав Федоров', 'Michael Pierce', 'William Diaz', 'Clarence Sims', 'Mary Glover', 'Ashley Munoz', 'Joshua Smith', 'David Walker', 'William Ford', 'Raymond Kelly'];

//Формирует текст комментария из 1 или 2 предложений массива MESSAGES
const getTextofComment = () => {
  const amountOfIterations = getRandomOnlyPositiveInt(1, 2);
  const messages = [];
  //цикл пройдет 1 или 2 итерации, чтобы добавить в массив 1 или 2 предложения
  for (let i = 0; i < amountOfIterations; i++) {
    const rand = Math.floor(Math.random() * MESSAGES.length);
    messages[i] = MESSAGES[rand];
  }
  return messages.join(' ');
};

//Возвращает случайное имя из массива NAMES
const getUserName = () => {
  const rand = Math.floor(Math.random() * NAMES.length);
  return NAMES[rand];
};

//Возвращает сгенерированные комментарии (массив объектов)
export const getComments = () => {
  const amountOfIterations = getRandomOnlyPositiveInt(0, 4);//комментариев может быть от 0 до 4
  if (amountOfIterations === 0) {
    return undefined;
  }
  const ids = [];// Массив идентификаторов по порядку
  for (let i = 0; i < amountOfIterations; i++) {
    ids[i] = i + 1;
  }

  shuffle(ids);// Тасуем массив по беспорядку

  const comments = [];
  for (let i = 0; i < amountOfIterations; i++) {
    const comment = {
      id: ids[i],
      avatar: `img/avatar-${getRandomOnlyPositiveInt(1, 6)}.svg`,
      message: getTextofComment(),
      name: getUserName()
    };
    comments[i] = comment;
  }

  return comments;
};
