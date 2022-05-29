// array de carácteres para seleccionar la letra para DNI
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// pedimos al usuario que introduzca su DNI
let dniUsuario = prompt('Introduce tu DNI: ');

// buscamos la letra del DNI obtenido indicando la posición 
let letraDNI = dniUsuario.charAt(dniUsuario.length - 1);
// guardamos el substring del DNI indicado quitándole la letra 
let numerosDNI = dniUsuario.substring(0, dniUsuario.length - 1)

// validamos si el número del DNI proporcionado es válido
function comprobarDNI() {
    // si no es válido mostramos el mensaje de tipo alert
    if (numerosDNI < 0 || numerosDNI > 99999999) {
        alert('el número proporcionado no es válido');
        // paramos la ejecución del programa
        return;
    }
    // si es válido calculamos la letra que le corresponde
    let letraCalculada = numerosDNI % 23;

    // si la letra calculada no coincide con la letra inidcada por el usuario
    if (letras[letraCalculada] != letraDNI) {
        // mostramos el mensaje respectivo
        alert('La letra de DNI indicada no es correcta');
    } else {
        // en el caso si coincide también mostramos el mensaje respectivo
        alert('El número y la letra de DNI son correctas');
    }
}

// invocamos la función anterior
comprobarDNI();