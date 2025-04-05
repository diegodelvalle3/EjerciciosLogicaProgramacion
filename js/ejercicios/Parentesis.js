function cadenas(parentesis){
    const tamano = parentesis.length
    let parentesisArray = parentesis.split("")

    if(tamano % 2 == 0){
        console.log('La cadena está balanceada')
    }else{
        console.log('La cadena no está balanceada')
    }

    for(let i = 0; i <= tamano; i++){
        let char = parentesisArray[i]
        console.log(char)
    }
}

cadenas('(()')