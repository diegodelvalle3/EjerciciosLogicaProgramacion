function fizzbuzz(num) {

    for (let i = 1; i <= num; i++) {
        let fizz = (i % 2 == 0)
        let buzz = (i % 5 == 0)

        if (fizz && buzz) {
            console.log(`El número ${i} es FizzBuzz`)
        } else if (fizz) {
            console.log(`El número ${i} es Fizz`)
        } else if (buzz) {
            console.log(`El número ${i} es Buzz`)
        } else {
            console.log(`${i} solo es ${i}`)
        }
    }
}

fizzbuzz(100)