// index.js
const { getUUID, getAge } = require('./plugins');

// 05-app.js
const { buildMakePerson } = require('./js-fourdation/05-Factory.js');

// Crear la función makePerson con las dependencias inyectadas
const makePerson = buildMakePerson({ getUUID, getAge });


const usuarios = {
    user1: {
        nombre: 'Edu',
        fechaNacimiento: '2004-08-12'
    },
    user2: {
        nombre: 'Aldo',
        fechaNacimiento: '1995-06-22'
    }
}

const user1 = makePerson(usuarios.user1);
const user2 = makePerson(usuarios.user2);

console.log({ user1 }, { user2 });
