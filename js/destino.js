import {mensaje, suma, resta, multiplica, calculadora} from './origen.js'; // En JS plano hay que añadir la extensión del archivo
import operacionExponencial from './origen.js'; // La importación del default no hace falta que vaya entre llaves
                                                // El default se puede importar con otro nombre directamente
import {suma as plus, resta as minus} from './origen.js';
import * as all from './origen.js'; // Importación de todo
import Fecha from './Fecha.js';  // Buena práctica porque el default se llama como el archivo

console.log(mensaje);
console.log(suma(2,3));
console.log(multiplica(4,2));

console.log(calculadora.resta(10,5));

console.log(operacionExponencial(2,3));

console.log(minus(100, 80));

console.log(all.suma(6, 8));

// console.log(all.aviso); Lo que no esté exportado no se podrá consumir

console.log(Fecha.getMarcaTiempo('2021-10-18'));