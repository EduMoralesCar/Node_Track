
const getPokemonById = require('./js-fourdation/06-PromesasCadena');

/* 06-Promesas.js

getPokemonById(4, (name) => {
    console.log({ name });
});
*/

getPokemonById(4)
    .then(name => console.log({ name }))
    .catch(err => console.log(err))
    .finally(() => console.log('Process finished'));