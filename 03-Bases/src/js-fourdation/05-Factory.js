
// const { getUUID } = require('../plugins/get-uuid.plugin.js');
// const { getAge } = require('../plugins/get-age.plugin.js');
const { getUUID, getAge } = require('../plugins');


const buildPerson = ({ nombre, fechaNacimiento }) => {

    return {
        id: getUUID(),
        nombre: nombre,
        fechaNacimiento: fechaNacimiento,
        edad: getAge(fechaNacimiento),
    }
}

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

const user1 = buildPerson(usuarios.user1);
const user2 = buildPerson(usuarios.user2);

console.log(user1, user2);