
<p align="center">
<img width="268" height="305" alt="image" src="https://github.com/user-attachments/assets/c9b99089-571f-4116-8f03-f302e7d58108" />
</p>

---

# 🚀 Guía Rápida: Ejecución y Nodemon

## ¿Cómo ejecutar el proyecto?

Puedes ejecutar los scripts definidos en tu `package.json`:

### ▶️ Modo producción
```bash
npm start
```
Ejecuta la aplicación normalmente.

### 🛠️ Modo desarrollo (con recarga automática)
```bash
npm run dev
```
Utiliza `nodemon` para reiniciar el servidor automáticamente al guardar cambios.

---

## Instalación de nodemon

Nodemon es una herramienta que reinicia tu aplicación de Node.js automáticamente cuando detecta cambios en los archivos fuente.

🔗 [Documentación oficial de nodemon](https://www.npmjs.com/package/nodemon)

### 🌎 Instalación global
Instala nodemon para usarlo en cualquier proyecto:
```bash
npm install -g nodemon
```
Luego puedes ejecutar:
```bash
nodemon archivo.js
```

### 📁 Instalación local (recomendada para proyectos)
Instala nodemon solo en este proyecto:
```bash
npm install --save-dev nodemon

# Tambien puedes utilizar con la abreviatura

npm install -D nodemon
```
Así puedes usarlo en los scripts del `package.json` y no afecta otros proyectos.

---

> 💡 **Consejo:** Usar la instalación local es más seguro y mantiene tus dependencias organizadas por proyecto.

### Instalación de Dependecies
Instalación de [UUID](https://www.npmjs.com/package/uuid):
```bash
npm install uuid

# Tambien puedes utilizar con la abreviatura

npm i uuid
```

Instalación de [GET-AGE](https://www.npmjs.com/package/get-age):
```bash
npm install --save get-age

# Tambien puedes utilizar con la abreviatura

npm i get-age
```

Instalación de [AXIOS](https://www.npmjs.com/package/axios):
```bash
npm i axios
```

### The RESTful Pokemon API
Referencia: https://pokeapi.co/

Realizamos la prueba con:
```bash
https://pokeapi.co/api/v2/pokemon/1
```
