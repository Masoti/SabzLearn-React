let array = [12, 'ali', true, 21, 'babak']

// let item1 = array[0]
// let item2 = array[1]
// let item3 = array[2]
// console.log(item1, item2, item3);

// let [item1, item2, , item3, item4] = array
// console.log(item1, item2, item3, item4);


// let [item1, item2, item3, ...others] = array;
// console.log(item1, item2, item3, others);

let [item1, item2, , item4] = array;
console.log(item1, item2, item4);

// let [a, b] = [10, 20];
// console.log(a,b);

// let [a, b] = [10];
// console.log(a,b);

// let [a, b = 12] = [10];
// console.log(a,b);

// let [a = 5, b = 12] = [10];
// console.log(a,b);

// let [a = 5, b = 12] = [];
// console.log(a,b);

// const makeNumbers = () => {
//     return [40, 80]
// }

// // let [a = 5, b = 12] = []
// let [a = 5, b = 12] = makeNumbers() // [40, 80]

// console.log(a, b);