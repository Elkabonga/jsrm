// inteiros e decimais
const radius = 10
console.log('radius', typeof (radius), radius);
const pi = 3.14
console.log('pi', typeof (pi), pi);

// operadores aritméticos
const reminder = 5 % 2
console.log('reminder', typeof (reminder), reminder);
const area = pi * radius ** 2
console.log('area', typeof (area), area);

// ordem de operações
// 1º parenteses
// 2º expoentes ou raízes
// 3º multiplicação e divisão
// 4º adição e subtração
const crazyOperations = 5 * (10 - 3) ** 2
console.log('crazyOperations', typeof (crazyOperations), crazyOperations);

// operadores de incremento e decremento
let postLikes = 10
console.log('postLikes', typeof (postLikes), postLikes);
++postLikes
console.log('postLikes incremento', typeof (postLikes), postLikes);
--postLikes
console.log('postLikes decremento', typeof (postLikes), postLikes);

// addition, subtraction, multiplication e division assignment
postLikes += 10
console.log('postLikes addition', typeof (postLikes), postLikes);
postLikes -= 10
console.log('postLikes subtraction', typeof (postLikes), postLikes);
postLikes *= 10
console.log('postLikes multiplication', typeof (postLikes), postLikes);
postLikes /= 10
console.log('postLikes division assignment', typeof (postLikes), postLikes);

// NaN - not a number
console.log(7 / 'oi');

// concatenação de string com numero
const likesMessage = 'O post tem ' + postLikes + ' likes'
console.log('likesMessage', typeof (likesMessage), likesMessage);