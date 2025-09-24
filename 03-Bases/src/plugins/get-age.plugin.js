
const getAgePlugin = require('get-age');

const getAge = (fechaNacimiento) => {
    if (!fechaNacimiento) return new Error('Fecha de nacimiento es requerida');

    return getAgePlugin(fechaNacimiento);
}

module.exports = {
    getAge,
};
