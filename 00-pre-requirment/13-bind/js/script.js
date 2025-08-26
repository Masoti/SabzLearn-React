// const user = {
//     id: 12,
//     username: 'ali',
//     age: 21,
//     showAge: function () {
//         // console.log(this);
//         console.log(this.age);
//         // console.log(this.username);
//     }
// }



// user.showAge()

// let showAgeFunc = user.showAge

// showAgeFunc()

// console.log(showAgeFunc);


// let showAgeFunc = user.showAge.bind(user)

// showAgeFunc()

// console.log(this.age);
////////////////////////////////////////////

// function showAgeFunc () {
//     console.log(this.age);
// }

////////////////////////////////////////////

let user1 = {
    id: 1,
    username: 'ali',
    age: 21
}

let user2 = {
    id: 2,
    username: 'amin',
    age: 22
}


function showAge () {
    console.log('Your Age:', this.age);
}

showAge()
let user1ShowAge = showAge.bind(user1)
let user2ShowAge = showAge.bind(user2)

// console.log(user1ShowAge)
user1ShowAge()
// console.log(user2ShowAge)
user2ShowAge()