// Importaciones del Callback

const { getUserById } = require('./js-fourdation/04-Arrow.js');

const id = 1;

getUserById(id, (error, user) => {
    if (error) {
        console.log('Error!');
    } else {
        console.log('Usuario encontrado:');  
        console.table(user);
    }
});