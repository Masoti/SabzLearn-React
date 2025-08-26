let scores = [3, 1, 2, 12, 10, 6]

// scores.map(function () {
//     console.log('Item')
// })

// scores.map(function (score) {
//     console.log('Item :', score)
// })

// let mapResult = scores.map(function (score) {
//     return score * 2
// })
// console.log(mapResult); // [6, 2, 4, 24, 20, 12]

let result = scores.map((score, index) => {
    console.log(index+1, score);
    return score * 2
})

