//Expresion class
class Animal {
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
        let totalAlimetation = this.age * 3
        return `${this.name} debe comer ${totalAlimetation}kg!`
    }
}

//Clse extiende de otra
class Perrito extends Animal {
    constructor(name, age) {
        super(name, age)
    }
}

const perrito1 = new Perrito('Cooper', 7)

console.log(perrito1.getName())
console.log(perrito1.getAge())
console.log(perrito1.calcAlimentation())


class Elefante extends Animal {
    constructor(name, age) {
        super(name, age)
    }

    calcAlimentation() {
        let totalAlimetationl = this.age * 10
        return `${this.name} debe comer ${totalAlimetationl}`
    }
}

const elefante1 = new Elefante('Kumby', 7)
console.log(elefante1)
console.log(elefante1.getAge());
console.log(elefante1.getName());
console.log(elefante1.calcAlimentation());




