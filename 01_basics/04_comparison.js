// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  // typescript is not allowed to compare diff datatypes
// console.log("02" > 1);

/* -------- avoid these type of conversions-----
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);  // comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 us false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
--------------------------------------------------
*/

// ===  check datatype also
console.log("2" === 2);

