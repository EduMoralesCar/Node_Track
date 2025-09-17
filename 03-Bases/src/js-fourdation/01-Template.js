const emailTemplate = (nombre, apellido) => {
    return `
    <h1>Hola ${nombre} ${apellido}</h1>
    <p>Gracias por registrarte en nuestro sitio web.</p>
    <p>Esperamos que disfrutes de tu experiencia con nosotros.</p>
    <p>Saludos cordiales,</p>
    <p>El equipo de Node.js</p>
    `;
}

//console.log(emailTemplate('Edu', 'Morales'));
module.exports = { emailTemplate };