// Importa el archivo para ejecutar su código
// require ('./js-fourdation/01-Template.js');

// Otra forma de importar
const { emailTemplate } = require('./js-fourdation/01-Template.js');

//Email Template
console.log(emailTemplate('Edu', 'Morales'));
console.log();
console.log(emailTemplate('Aldo', 'Morales'));

//Destructuring
console.log();
require('./js-fourdation/02-Destructuring.js');
