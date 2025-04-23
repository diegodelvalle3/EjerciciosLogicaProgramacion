function FactorialRecursivo(numero) {
    if (numero === 0) {
        return 1; // Caso base: 0! = 1
    } else {
        return numero * FactorialRecursivo(numero - 1); // Paso recursivo
    }
}

let resultado = FactorialRecursivo(5);
console.log(`El factorial de 5 es: ${resultado}`);

//Sin recursividad

function FactorialNoRecursivo(numero) {
    let resultado = 1

    for (let i = numero; i > 0; i--) {
        resultado *= i
    }

    return resultado
}

const valor = FactorialNoRecursivo(5)
console.log(valor)