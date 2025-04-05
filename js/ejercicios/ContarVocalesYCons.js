
function contador(palabra) {
    let palabraSeparada = palabra.split("") //Divide el string en un nuevo arrar ['p','a','l','a','b','r','a']
    let vocales = 0
    let consonantes = 0

    for (let i = 0; i < palabraSeparada.length; i++) {
        let char = palabraSeparada[i];
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vocales++;
        } else if (char >= 'a' && char <= 'z') {
            consonantes++;
        }
    }

    console.log(`La palabra "${palabra}" tiene ${vocales} vocales`)
    console.log(`La palabra "${palabra}" tiene ${consonantes} consonantes`)
}

// palabraSeparada.forEach(i => {
//     if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//         vocales++
//     } else if (i != " ") {
//         consonantes++
//     }
// });

contador('hola')
contador('Este es un mega texto')
