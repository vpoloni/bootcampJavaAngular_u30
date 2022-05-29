// obtenemos la cadena de texto indicada por el usuario
const cadenaUsuario = prompt('Introduce una cadena de texto para comprobar si es palíndromo: ');

// la función que comprueba si la cadena recibida como parámetro es palíndromo
function comprobarPalindromo(param) {

  // eliminamos los espacios blancos de la cadena y la pasamos a minúscula
  let cadenaUsuarioSinEspacios = (param.split(' ').join('')).toLowerCase();

  // invertimos la cadena anterior
  let cadenaUsuarioSinEspaciosInvertida = cadenaUsuarioSinEspacios.split('').reverse().join('');

  // igualamos las cadenas haciendo uso del operador ternario
  let esPalindromo = (cadenaUsuarioSinEspaciosInvertida == cadenaUsuarioSinEspacios) ? 'es palíndromo' : 'no es palíndromo';
  alert(`${param} ${esPalindromo}`);
}
// invocamos la función anterior
comprobarPalindromo(cadenaUsuario);