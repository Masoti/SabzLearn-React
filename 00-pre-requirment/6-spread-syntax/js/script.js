// let users = ['amir', 'ali', 'amin', 'hasan', 'babi']
// console.log(users)
// console.log(users[0], users[1], users[2]);
// console.log(...users);

// let users1 = ['ali', 'amin', 'amir']
// let users2 = ['mobin', 'babak', 'hasan']
// console.log(...users1, ...users2);

// let users1 = ['ali', 'amin', 'amir']
// let users2 = ['mobin', 'babak', 'hasan']
// let allUsers = [...users1, ...users2]
// console.log(allUsers);

// let users1 = ['ali', 'amin', 'amir']
// let users2 = ['mobin', 'babak', 'hasan']
// function showUsers(...users) { 
//     console.log(users);
// }
// showUsers(users1[0], users1[1], users2[2]); 

// let users1 = ['ali', 'amin', 'amir']
// let users2 = ['mobin', 'babak', 'hasan']
// function showUsers(...users) { 
//     console.log(users);
// }
// showUsers(...users1, ...users2); 

// let users1 = ['ali', 'amin', 'amir']
// let users2 = ['mobin', 'babak', 'hasan']
// const showUsers = (...users) => { // Rest Operator -> item => array
//     users.forEach(user => console.log(user));
// }
// showUsers(...users1, ...users2); // Spread Sysntax -> array => item