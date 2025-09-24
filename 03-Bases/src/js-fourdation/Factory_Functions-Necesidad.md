# 🏭 Factory Functions: Necesidad y Dependencias

## ¿Por qué necesitamos estas dependencias?

### 📦 UUID - Generador de identificadores únicos
El paquete `uuid` es esencial para crear identificadores únicos universales. En nuestro Factory Function, necesitamos asignar IDs únicos a cada objeto persona que creemos.

**¿Para qué sirve?**
- ✅ Generar IDs únicos para cada registro
- ✅ Evitar duplicados en bases de datos
- ✅ Crear identificadores seguros y únicos globalmente

🔗 [Documentación oficial de UUID](https://www.npmjs.com/package/uuid)

#### Instalación:
```bash
npm install uuid
```

#### Uso correcto:
```javascript
const { v4: uuidv4 } = require('uuid');

// Genera un ID único cada vez
const uniqueId = uuidv4();
console.log(uniqueId); // Ejemplo: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

---

### 🎂 get-age - Calculador de edad
El paquete `get-age` nos permite calcular la edad exacta de una persona basándose en su fecha de nacimiento.

**¿Para qué sirve?**
- ✅ Calcular edad automáticamente desde fecha de nacimiento
- ✅ Manejar años bisiestos correctamente
- ✅ Obtener edad precisa sin cálculos manuales complejos

🔗 [Documentación oficial de get-age](https://www.npmjs.com/package/get-age)

#### Instalación:
```bash
npm install get-age
```

#### Uso correcto:
```javascript
const getAge = require('get-age');

// Ejemplo con fecha de nacimiento
const birthDate = new Date('1990-05-15');
const age = getAge(birthDate);
console.log(`Edad: ${age} años`);

// También acepta formato string
const ageFromString = getAge('1990-05-15');
console.log(`Edad: ${ageFromString} años`);
```

---

## 🔧 Implementación en Factory Function

```javascript
const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const buildPerson = ({ name, birthdate }) => {
  return {
    id: uuidv4(),           // ID único automático
    name,
    birthdate,
    age: getAge(birthdate)  // Edad calculada automáticamente
  };
};

// Uso del factory
const person = buildPerson({
  name: 'Juan Pérez',
  birthdate: '1990-03-15'
});

console.log(person);
/*
{
  id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  name: 'Juan Pérez',
  birthdate: '1990-03-15',
  age: 33
}
*/
```

## 📋 Ventajas de usar estas dependencias:

| Dependencia | Sin librería | Con librería |
|-------------|--------------|--------------|
| **UUID** | Código complejo, posibles duplicados | ID único garantizado |
| **get-age** | Cálculos manuales, errores con años bisiestos | Cálculo preciso automático |

> 💡 **Tip:** Estas dependencias hacen que nuestro Factory Function sea más robusto y confiable, eliminando la necesidad de implementar lógica compleja nosotros mismos.