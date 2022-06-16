//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomOnlyPositiveInt = (min=2, max=3) => {
  // const randomInt;

  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  // if (Math.round(min) === Math.round(max)) {
  //   randomInt = min + Math.random() * (max + 1 - min);
  //   return (Math.round(randomInt));
  // }

  const randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};

getRandomOnlyPositiveInt(7, 4.8);

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checkLengthText = (text = 'hello', max = 140) => text.length <= max;

checkLengthText(TEXT, 140);

//sd
// const whatEver = {
//   id: 1,
//   url: 'photos/{{i}}.jpg',
//   description: '',
//   likes: 0,
//   comments: [
//   {
//        id: 1,
//        avatar: 'xxxxxxxxx',
//        message: ['asdf', 'sdfasd'],
//        name: 'asdf'
//    }
// ]
// };

const DESCRIPTIONS = [
  'Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений.',
  'Разнообразный и богатый опыт консультация с широким активом обеспечивает широкому кругу.',
  'Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу.',
  'С другой стороны укрепление и развитие структуры обеспечивает участие в формировании систем массового участия.',
  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
  'Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.',
  'Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.',
  'Товарищи! сложившаяся структура организации представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
  'Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.',
  'Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
  'This is me',
  'hola everyone',
  'I enjoy kexing'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент ? !'
];

const AMOUNT_OF_USERS = 25;

const NAMES = ['Дамир Быков', 'Елена Дроздова', 'Кирилл Гордеев', 'Алёна Малахова', 'Александра Кузина', 'Руслан Исаев', 'Полина Герасимова', 'Аделина Панкратова', 'Ирина Новикова', 'Станислав Федоров', 'Michael Pierce', 'William Diaz', 'Clarence Sims', 'Mary Glover', 'Ashley Munoz', 'Joshua Smith', 'David Walker', 'William Ford', 'Raymond Kelly'];

console.log(DESCRIPTIONS, MESSAGES, NAMES, AMOUNT_OF_USERS);

// const createComment = () => {
//   return {
//     id: 0,
//     text: 'sd'.
//   };
// };

//Формирует текст комментария из 1 или 2 предложений массива MESSAGES
const getTextofComment = () => {
  const iterations = getRandomOnlyPositiveInt(1, 2);
  const messages = [];
  //цикл пройдет 1 или 2 итерации, чтобы добавить в массив 1 или 2 предложения
  for (let i = 0; i < iterations; i++) {
    const rand = Math.floor(Math.random() * MESSAGES.length);
    messages[i] = MESSAGES[rand];
  }
  return messages.join(' ');
};

getTextofComment();
// console.log(getTextofComment());

//Возвращает случайное имя из массива NAMES
const getUserName = () => {
  const rand = Math.floor(Math.random() * NAMES.length);
  return NAMES[rand];
};

getUserName();
// console.log(getUserName());

