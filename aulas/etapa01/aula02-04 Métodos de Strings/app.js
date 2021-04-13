// métodos comuns de strings
const email = 'laracroft@elkabonga.com'

const lastIndexOfA = email.lastIndexOf('a')

console.log(lastIndexOfA)

const emailSlice1 = email.slice(0, 4)
const emailSlice2 = email.slice(4, 9)
const emailSlice3 = email.slice(0, 9)

console.log(emailSlice1);
console.log(emailSlice2);
console.log(emailSlice3);
console.log(email);

const emailReplace1 = email.replace('l', 'y')
console.log(emailReplace1);

const emailReplace2 = email.replace('laracroft', 'adaWong')
console.log(emailReplace2);

console.log(email);