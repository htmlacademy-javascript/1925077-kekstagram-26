//Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomOnlyPositiveInt = (min=2, max=3) => {

  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  if (min > max) {
    const x = min;
    min = max;
    max = x;
  }

  if (Math.round(min) === Math.round(max)) {
    max++;
  }

  //Источник кода: https://learn.javascript.ru/task/random-int-min-max
  const randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};

getRandomOnlyPositiveInt(2, 2.2);

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checkLengthText = (text = 'hello', max = 140) => text.length <= max;

checkLengthText(TEXT, 140);
