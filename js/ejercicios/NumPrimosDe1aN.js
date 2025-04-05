function contador(num) {
    for (let i = 2; i <= num; i++) {
        let esPrimo = true

        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                esPrimo = false
                break
            }
        }

        if (esPrimo) {
            console.log(`El número ${i} es primo`)
        } else {
            console.log(`El número ${i} no es primo`)
        }
    }
}

contador(30)