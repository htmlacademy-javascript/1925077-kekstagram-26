//Функция, возвращающая случайное целое число из переданного диапазона включительно
export const getRandomOnlyPositiveInt = (min = 2, max = 3) => {
  if (min < 0 || max < 0) {
    return ('Оба числа должны быть больше либо равным нулю');
  }

  const randomInt = min + Math.random() * (max - min);
  return (Math.round(randomInt));
};
