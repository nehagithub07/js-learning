// array
// js array-copy operations create shallow copies.
//(All standard buil-in copy operations with any js objects create shallow copies, rathe than deep copies)

// creation of an arrays
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shakiman", "nagraj"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) // array k start m insert ho rahi hai value
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));  // exists or not

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);  // string


// slice, splice

// console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // orignal array ko manipulate krta hai splice
// console.log("C", myArr);
// console.log(myn2);

//----------------------------------------------------------------


const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_arr = [1, 2, 3 , [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr);

console.log(Array.isArray("Neha"));
console.log(Array.from("Neha"));

console.log(Array.from({name: "Neha"}));  // interview m poocha ja skta hai yaha pr ye empty arr dega kyuki ye convert nhi kar pa raha hai ki keys ka arrays bnau ya value ka array bnau

let score1 = 100
let score2 = 200
let score3 = 300
// agar hume in scores ko array me convert krna hai to Array.of use krenge
console.log(Array.of(score1, score2, score3));
