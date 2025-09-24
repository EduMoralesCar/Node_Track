
const users = [
    { id: 1, nombre: 'Edu' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Luis' },
];


// Funcion con Callback
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    return (user)
        ? callback(null, user)
        : callback(`Usuario no encontrado con el id: ${id}`);
}

module.exports = {
    getUserById,
}
