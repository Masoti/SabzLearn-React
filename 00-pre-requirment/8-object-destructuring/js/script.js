let user = {
    id: 1,
    name: 'Mohammad',
    family: 'Ahmadi',
    age: 23,
}

// let id = user.id
// let name = user.name
// let family = user.family
// let age = user.age

// console.log(id, name, family, age);

// let id

let {name, id: userId, age, family} = user

console.log(userId, name, family, age);