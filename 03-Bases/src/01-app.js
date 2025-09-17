const Persona = {
    nombre: 'Edu',
    apellidos: {
        ApellidoPaterno: 'Morales',
        ApellidoMaterno: 'Carlos'
    },
    edad: 20,
    telefono: 5544332211
}

// Monstrar la Constante Persona
console.table(Persona);


function Saludar(Persona) {
    return `Hola ${Persona.nombre} ${Persona.apellidos.ApellidoPaterno}, Bienvenido a Node.js`;
}

// Imprimir en consola
console.log(Saludar(Persona));
console.log();