function randomizeInt (min, max) {

  if (min < 0 || max < 0) {
    return alert('Оба числа должны быть больше либо равным нулю');
  }
  //Или можно каждое число приравнять к его абсолютному значению?

  min = Math.round(min);
  max = Math.round(max);

  if (min > max) {
    let x = min;
    min = max;
    max = x;
  } else if (min === max) {
    max++;
  }

  //Источник кода: https://learn.javascript.ru/task/random-int-min-max
  let randomInt = min + Math.random() * (max + 1 - min);
  return alert(Math.floor(randomInt));
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

function checkLengthText (text, max) {
  let isLongText = true;

  return text.length < max ? alert(isLongText = true) : alert(isLongText = false);
}

randomizeInt(2, 2.3);

checkLengthText(text, 140)
