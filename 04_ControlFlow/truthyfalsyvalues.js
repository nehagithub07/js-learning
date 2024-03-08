const userEmail = "abcd@.ai"
// if(userEmail) {
//     console.log("Got user email");  // true
// } else {
//     console.log("Don't have user email");
// }

// falsy values
//-> false, 0, -0, BihInt -> 0n, "", null, undefined, NaN (not a number)

// Truthy Values
//-> "0", 'false', " ", [], {}, function() {} -> empty function is a truthy value

if(userEmail.length === 0) {
    console.log("Array is empty");
}
// true

const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} 
// true


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20  // jo bhi first value milegi wahi op milgea jese 10 first value mili
console.log(val1);

// Terniary Operator
// condtion ? ture : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")