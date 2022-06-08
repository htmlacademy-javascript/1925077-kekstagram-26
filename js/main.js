//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomOnlyPositiveInt = (min=2, max=3) => {
  let randomInt;

  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  if (Math.round(min) === Math.round(max)) {
    randomInt = min + Math.random() * (max + 1 - min);
    return (Math.round(randomInt));
  }

  randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};

getRandomOnlyPositiveInt(7, 4.8);

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checkLengthText = (text = 'hello', max = 140) => text.length <= max;

checkLengthText(TEXT, 140);
