// this = این

// function clickHandler () {
//     console.log('Click')
// }

// function clickHandler (param) {
//     console.log('Click', param)
// }

function clickHandler (param) {
    param.style.background = 'red'
    console.log('Click', param);
}

function showValue () {
    console.log(this);
}
showValue();

 

// let user = {
//     id: 12,
//     username: 'Amin',
//     age: 22,
//     showAge: function () {
//         console.log(this);
//         console.log(this.age);
//     }
// }

// user.showAge()