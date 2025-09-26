
const getPokemonById = require('./js-fourdation/07-Promises');

/* 06-Promesas.js

getPokemonById(4, (name) => {
    console.log({ name });
});
*/

getPokemonById(4)
    .then(name => console.log({ name }))
    .catch(err => console.log(err))
    .finally(() => console.log('Process finished'));