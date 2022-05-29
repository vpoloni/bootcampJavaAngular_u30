let numeroUsuario = prompt("Introduce un número entero: ");

function comprobarParImpar(param) {
    if (param % 2 == 0) {
        alert(`El número ${param} es par `);
    } else {
        alert(`El número ${param} es impar `);
    }
}

comprobarParImpar(numeroUsuario);