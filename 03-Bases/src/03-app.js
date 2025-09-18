// Importaciones del Callback

const { getUserById } = require('./js-fourdation/03-Callbacks.js');

const id = 6;

getUserById(id, function (user, error) {
    if (error) {
        console.log('Error!');
    } else {
        console.log('Usuario encontrado:');  
        console.table(user);

    }
});