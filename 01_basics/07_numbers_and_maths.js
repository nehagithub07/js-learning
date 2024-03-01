// ----------------- Numbers ---------------------------

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

//const otherNumber = 123.8966  // o/p is 124
//console.log(otherNumber.toPrecision(3)); 
// const otherNumber = 23.8966  // 23.9
// console.log(otherNumber.toPrecision(3));
// const otherNumber = 123.8966  // 123.9
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());  // US value

// -----------------------------------------------------

// ----------------------- Maths -----------------------

// console.log(Math);
// console.log(Math.abs(-4));  // convert neagtive to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));  // mtlb jra sa bhi 4 se jada hua to 4 se upr ki value hi lega
// console.log(Math.floor(4.9));  // yaha hmesha lowest value lega 4.9 hai to 4 hi lega
// console.log(Math.max(4, 3, 6, 8));
// console.log(Math.min(4, 3, 6, 8));

console.log(Math.random());  // iski value hmesha 0 or 1 k bich aaegi
// console.log(Math.random() * 10 + 1);
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);  // agr hme single digit chahiye to math.floor use kro or 1 isliye add kiya hai 0 ko avoid krne k liye or ki hme 1 se upr ki value mile 1 se leke 9 tk ki value dega 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);