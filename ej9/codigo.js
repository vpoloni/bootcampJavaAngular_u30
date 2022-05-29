// obtenemos la cadena de texto indicada por el usuario
let cadenaUsuario = prompt("Introduce una cadena de texto");

// la función que comprueba qué letras contiene la cadena de texto recibida como parámetro 
function comprobarCadena(param) {
    if (param.toUpperCase() == param) {
        alert(`"${param}" contiene solo mayúsculas`);
    } else if (param.toLowerCase() == param) {
        alert(`"${param}" contiene solo minúsculas`);
    } else {
        alert(`"${param}" contiene mayúsculas y minúsculas`);
    }
}
// invocamos la función pasándole como parámetro la cadena de texto
comprobarCadena(cadenaUsuario);