// asignamos el input a una variable
let numeroUsuario = prompt("Introduce un número entero para indicar la paridad: ");

// función que comprueba la paridad del número recibido como parámetro
function comprobarParImpar(param) {
    // hacemos uso del operador ternario para establecer la condición y guardar el resultado según el caso
   let esParImpar = (param % 2 == 0) ? 'es par' : 'es impar';
   alert(`${param} ${esParImpar}`);
}

comprobarParImpar(numeroUsuario);
