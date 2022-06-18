import {getRandomOnlyPositiveInt} from './get-random-only-positive-int.js';
import {shuffle} from './shuffle.js';
import {getComments} from './get-comments.js';

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

const AMOUNT_OF_USERS = 25;

// Возвращает массив чисел от 1 до AMOUNT_OF_USERS в случайном порядке
const getIdentifiers = () => {
  const identifiers = [];
  for (let i = 0; i < AMOUNT_OF_USERS; i++) {
    identifiers[i] = i + 1;
  }
  shuffle(identifiers);
  return identifiers;
};

export const getDescriptionsOfPhoto = () => {
  const ids = getIdentifiers();
  const urlNumbers = getIdentifiers();
  const descriptions = [];
  for (let i = 0; i < AMOUNT_OF_USERS; i++) {
    const description = {
      id: ids[i],
      url: `photos/${urlNumbers[i]}.jpg`,
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      likes: getRandomOnlyPositiveInt(15, 200),
      comments: getComments()
    };
    descriptions[i] = description;
  }

  return descriptions;
};
