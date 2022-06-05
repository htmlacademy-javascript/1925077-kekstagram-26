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

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

function checkLengthText (text, max) {
  let isLongText = true;
  // alert(isLongText);
  return text.length > max ?  isLongText = false :  isLongText = true;// error  'isLongText' is assigned a value but never used  no-unused-vars
}

randomizeInt(2, 2.3);

checkLengthText(TEXT, 140);
