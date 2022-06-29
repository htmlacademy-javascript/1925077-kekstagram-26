const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a provident cum fuga. Accusantium aut perspiciatis temporibus ipsam, rem, error porro, deserunt ratione rerum ab quod veritatis. Incidunt, molestiae eos?';

const MAX_LENGTH = 140;

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария
const checkLengthText = (text = 'hello', max = 140) => text.length <= max;

export {TEXT, MAX_LENGTH, checkLengthText};
