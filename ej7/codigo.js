let numeroUsuario = prompt('Introduce un numero entero para calcular el factorial: ');
let factorial = 1;

for (let i = numeroUsuario; i > 0; i--) {
    factorial *= i;
}

alert (`El factorial de ${numeroUsuario} es ${factorial}`);