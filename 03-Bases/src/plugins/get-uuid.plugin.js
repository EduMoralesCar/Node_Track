
const { v4: uuidv4 } = require('uuid');

const getUUID = () => {
    const uuid = uuidv4();
    if (!uuid) return new Error('No se pudo generar el UUID');
    return uuid;
}

module.exports = {
    getUUID,
};