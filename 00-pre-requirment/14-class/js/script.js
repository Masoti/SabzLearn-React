// function Car () {
//     this.color = 'red'
//     this.name = 'peugeot'
//     this.tairCount = 4
// }

// let peugeot405 = new Car()
// console.log(peugeot405);

// let peugeot206 = new Car()
// console.log(peugeot206);



// function Car (color, name, tairCount) {
//     this.color = color
//     this.name = name
//     this.tairCount = tairCount
// }

// let peugeot405 = new Car('White', 'Peugeot 405', 4)
// let parsTu5 = new Car('Gray', 'Peugeot Pars TU5', 4)
// console.log(peugeot405);
// console.log(parsTu5);

// class Car {
//         color = 'red'
//         name = 'Pars'
//         tairCount = 4
//     }

// let peugeot405 = new Car()
// console.log(peugeot405);


class Car {
    constructor(color, name, tairCount) {
        this.color = color
        this.name = name
        this.tairCount = tairCount
    }
}

let peugeot405 = new Car('White', '405', 4)
let peugeotPars = new Car('Gray', 'Pars', 4)

console.log(peugeot405);
console.log(peugeotPars);