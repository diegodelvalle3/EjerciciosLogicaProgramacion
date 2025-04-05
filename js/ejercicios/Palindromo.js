function palidromo(string) {
    let stringReversa = string.split("").reverse().join("")

    if (stringReversa == string) {
        console.log(`La palabra ${string} es palíndroma`)
    } else {
        console.log(`La palabra ${string} no es palíndroma`)
    }
}

palidromo('reconocer')
palidromo('hola')
palidromo('retroceder')
palidromo('narran')


