
const users = [
    { id: 1, nombre: 'Edu' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Luis' },
];

// Funcion sin Callback
const getUserById01 = (id) => {
    const user = users.find(function (user) {
        return user.id === id;
    });

    console.log({ user });
}


// Funcion con Callback
const getUserById = (id, callback) => {
    const user = users.find(function (user) {
        return user.id === id;
    });

    if (!user) {
        return callback(null, 'Usuario no encontrado');
    }

    callback(user);
}

module.exports = {
    getUserById,
}