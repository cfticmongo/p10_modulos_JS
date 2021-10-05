export const mensaje = 'Hola Mundo!';
export const suma = (a, b) => a + b;

const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;

export {resta, multiplica}; // Si exige punto y coma

export const calculadora = {
    suma,
    resta,
    multiplica
}

const aviso = 'Warning'; // Deberá ser exportado para ser usado

const potencia = (a, b) => Math.pow(a, b);

export default potencia; // Mala práctica sino usamos como identificador el mismo nombre del archivo