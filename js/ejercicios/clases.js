//Expresion class
class Perrito {
    name = ''
    age = ''

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getAge() {
        return this.age
    }

    getName() {
        return this.name
    }

    calcAlimentation() {
        let totalAlimetation = ''
        return `${name} debe comer (${age} * 3)kg!`
    }
}

const perrito1 = new Perrito('Cooper', 7)

console.log(perrito1)