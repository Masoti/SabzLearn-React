// declearation function
// function showValue () {
//     console.log('React Js ');
// }
// showValue ()

// expression function
// let showValue = function () {
//     console.log('React Js ');
// }
// showValue ()

// arrow function
// let showValue = () => {
//     console.log('React Js :)');
// }
// showValue()

// let sum = (num1, num2) => {
//     return num1 + num2
// }
// console.log('Sum: ', sum(3,8));

// let sum = (num1, num2) => num1 + num2
// console.log('Sum: ', sum(4,8));

// let doubleNumber = num => num * 2 //num = (num)
// console.log('double: ', doubleNumber(3));

// let makeUser = (id, name) => ({id: id, name: name}); //پرانتز دو سمت کرلی بریس برای جلوگیری از سینتکس ارور است
// console.log('User:', makeUser(7, 'Masoud'));

// function User (id) {
//     return id 
// }
// console.log('User: ', User(7))
// let  user1 = new User()
// console.log(user1)

//به عنوان توابع سازنده وجود ندارد arrow امکان استفاده از توابع 
// let User = () => {
//     //
// }
// let  user1 = new User()
// console.log(user1);

/////////////////////////////////////////

let users = [
    {id: 1, name: 'ali', age: 21},
    {id: 2, name: 'amin', age: 23},
    {id: 3, name: 'amir', age: 19},
    {id: 4, name: 'hasan', age: 14},
    {id: 5, name: 'babak', age: 31},
]
// users.forEach(function (user) {
//     console.log(user);
// })

// users.forEach(user => console.log(user))

let mainUserItem = users.find(user => user.name === 'amir')
console.log(mainUserItem);