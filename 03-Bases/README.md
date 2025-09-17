
<p align="center">
	<img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="Node.js Logo" width="80"/>
</p>

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
