const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');
// Cambiar node a mayúsculas
const newData = data.replace(/node/g, 'NODE');

// console.log(data);

// Escribir en un nuevo archivo (crea uno si no existe)
fs.writeFileSync('README-modificado.md', newData);