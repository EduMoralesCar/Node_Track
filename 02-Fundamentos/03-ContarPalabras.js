const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const ContarPalabras = content.split(' ').length;

console.log('Longitud del texto:', ContarPalabras);

// Buscar la palabra Node (mayúscula y minúscula)
const buscarPalabra = content.match(/Node/gi).length;
console.log('Numero de repeticion de Node: ', buscarPalabra ? buscarPalabra : 0);
