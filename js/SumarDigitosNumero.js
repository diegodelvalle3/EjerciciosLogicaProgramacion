function sumarDigitos(num) {
    let array = num.toString().split('').map(s => parseInt(s, 10))

    let suma = array.reduce((acumulador, valorActual) => {
        return acumulador + valorActual
    }, 0)

    console.log(suma)
}

sumarDigitos("123343")