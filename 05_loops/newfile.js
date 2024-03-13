// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
// // const newNums = myNumbers.map( (num) => num + 10)

// // chaining method
// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter( (num) => num > 40)
// console.log(newNums);



// reduce method

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currval: ${currVal}`)
    return acc + currVal
}, 0)
console.log(myTotal);