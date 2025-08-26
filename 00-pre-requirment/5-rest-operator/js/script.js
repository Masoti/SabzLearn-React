//   

// function sum (a, b, c) {
//     console.log(arguments[0] + arguments[1] + arguments[2]);
// }

// let sum = function (a, b, c) {
//     console.log(a +b + c);
// }
// sum(10, 20, 30)

// function sum(a, b, c) {
//     console.log(arguments);
//     console.log(arguments[0] + arguments[1] + arguments[2]);
// }
// sum(10, 20, 30)

// let sum = (a, b, c) => {  //وجود ندارد argument امکان استفاده از 
//     console.log(arguments);
//     console.log(arguments[0] + arguments[1] + arguments[2]);
// }
// sum(10, 20, 30)

// let sum = function (a, b, c) {
//     console.log(arguments);
//     console.log(arguments[0] + arguments[1] + arguments[2]);
// }
// sum(10, 20, 30)

//rest operator
// let sum = (...args) => {
//     console.log(args);
// }
// console.log(sum(10, 20, 30, 50, 30, 20));

// let sum = (a, b, c, ...sumArgs) => {
//     console.log(a, b, c);
//     console.log(sumArgs);
// }
// console.log(sum(10, 20, 30, 50, 40, 70, 90));

//آرگومان باید ورودی آخر باشد در غیر این صورت با خطا مواجه می شوید
// let sum = (a, b, c, ...sumArgs, d) => {
//     console.log(a, b, c);
//     console.log(sumArgs);
// }
// console.log(sum(10, 20, 30, 50, 40, 70, 90));

// let sum = (...sumArgs) => {
//     console.log(sumArgs);
// }
// sum(10, 20, 30, 50, 40, 70, 90);

// let sum = (...sumArgs) => {
//     console.log(sumArgs);
//     return sumArgs.reduce((prev, current) => prev + current)
// }
// console.log(sum(10, 20, 30, 50, 40, 70));


// const numbers = [10, 20, 30, 40, 50];
// const sum = numbers.reduce((jam, current) => jam + current, 0);
// console.log('Sum: ', sum);


// const staff = [
//     { name: 'John', age: 30, salary: 5000 },
//     { name: 'Jane', age: 25, salary: 6000 },
//     { name: 'Doe', age: 35, salary: 7000 }
// ];
// const totalSalary = staff.reduce((total, persons) => total + persons.salary, 0);
// console.log('totalSalary :', totalSalary);

const votes = ['pvh', 'ashi', 'pvh', 'pvh', 'old', 'pvh', 'old', 'khorma', 'khorma', 'old'];
const votesCount = votes.reduce((name, vote_count) => {
    name[vote_count] = (name[vote_count] || 0) + 1;
    return name;
}, {});
console.log('votesCount :', votesCount);