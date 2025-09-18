// Destructuring (Desestructuración)
// console.log(process.env);

// Destructuración de variables de entorno
const { windir, PORT, TEMP, USERNAME } = process.env;

console.log({windir, PORT, TEMP, USERNAME});
console.table({windir, PORT, TEMP, USERNAME});

const caracteres = ['A', 'B', 'C', 'D', 'E'];
const [, , , , e] = caracteres;

console.table(caracteres);
console.log('Extraemos el Caracter:', e);