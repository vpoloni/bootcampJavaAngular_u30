let numero1 = 5;
let numero2 = 8;

if (numero1 < numero2){
    console.log('numero1 no es mayor que numero2');
}

if (numero2 > 0){
    console.log('numero2 es positivo');
}

if (numero1 < 0 || numero1 != 0){
    console.log('numero1 es negativo o distinto de zero');
}

if (numero1++ < numero2 || numero1++ == numero2){
    console.log('incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que el numero2');
}


