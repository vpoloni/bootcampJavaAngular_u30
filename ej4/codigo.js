// asignamos el array de valores a una variable
let valores = [true, 5, false, 'hola', 'adios', 2];

// BLOQUE 1
// asignamos el valor inicial a la variable que guardará el string con la longitud máxima
let mayor = '';
//recorremos el array de valores
valores.forEach((val) => {
    // si el tipo de valor recorrido es String y la longitud de este String es mayor que la longitud de variable "mayor"
    if (typeof val === 'string' && val.length > mayor.length) {
        // asignamos el String recorrido a la variable "mayor"
        mayor = val;
    }
})
// mostramos por consola el String con la longitud máxima
console.log(`El elemento de texto con la longitud máxima es: ${mayor}`);

// BLOQUE 2
// si los valores en las posiciones [0] y [2] son de tipo boolean
if ((typeof valores[0] && typeof valores[2] === 'boolean')) {
    // retornamos 'true'
    console.log('true');
    // si los valores examinados no son iguales
    if (!(valores[0] === valores[2])) {
        // retornamos 'false'
        console.log('false');
    }
}

// BLOQUE 3
// asignamos los valores obtenidos del array de valores
let operando1 = valores[1];
let operando2 = valores[5];

// mostramos po consola el resultado de las cinco operaciones matemáticas sobre los operandos
function sumar(val1, val2) {
    console.log(val1 + val2);
}
// invocamos las funciones definidas pasándoles como parámetros los operandos 
sumar(operando1, operando2);

function restar(val1, val2) {
    console.log(val1 - val2);
}
restar(operando1, operando2);

function multiplicar(val1, val2) {
    console.log(val1 * val2);
}
multiplicar(operando1, operando2);

function dividir(val1, val2) {
    console.log(val1 / val2);
}
dividir(operando1, operando2);

function modulo(val1, val2) {
    console.log(val1 % val2);
}
modulo(operando1, operando2);