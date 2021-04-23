const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação
console.log('Você manja o filme \'As branquelas\'?');
console.log("Você manja o filme 'As branquelas'?");
const postMessage1 = 'O post "' + postTitle + '" do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log('postMessage1', typeof (postMessage1), postMessage1);

// usando template strings
const postMessage2 = `O post "${postTitle}" do ${postAuthor}, tem ${postComments} comentários.`
console.log('postMessage2', typeof (postMessage2), postMessage2);

// criando templates HTML
const html = `<h2>${postTitle}</h2>
<p>${postAuthor}</p>
<span>Este post tem ${postComments} comentários</span>`

console.log(html);
