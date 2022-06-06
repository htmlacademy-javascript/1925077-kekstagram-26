//Функция, возвращающая случайное целое число из переданного диапазона включительно
function randomizeInt (min, max) {

  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }
  //Или можно каждое число приравнять к его абсолютному значению?

  min = Math.round(min);
  max = Math.round(max);

  if (min > max) {
    const X = min;
    min = max;
    max = X;
  } else if (min === max) {
    max++;
  }

  //Источник кода: https://learn.javascript.ru/task/random-int-min-max
  const randomInt = min + Math.random() * (max + 1 - min);
  return (Math.floor(randomInt));
}

randomizeInt(2, 2.3);

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
function checkLengthText(text, max) {
  let isLongText = true;
  // return text.length > max ? isLongText = false : isLongText = true;//errors: Return statement should not contain assignment   no-return-assign | 'isLongText' is assigned a value but never used  no-unused-vars
  if (text.length > max) {
    isLongText = false;
    return isLongText;
  }

  isLongText = true;
  return isLongText;
}

checkLengthText(TEXT, 140);
