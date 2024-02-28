// -----Primitive-----------
// there are 7 primitive datatypes 
// String, Number, Boolean, null, undefiner, Symbol, Bigint
// Symbol(Kisi bhi value ko unique bnane k liye use kiya jata hai)

const score = 100
const scoreValue = 100.3
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 23784687178869837198n

console.log(typeof bigNumber);  // bigint
console.log(typeof outSideTemp); // object
console.log(typeof userEmail); // undefined
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof anotherId);  // symbol

// ---------Reference (Non Primitive)------
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Neha",
    age : "21",
}

const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof heros); // object
console.log(typeof myFunction);  // function



// ****************************************************************

// Stack (jitne bhi Primitive type hote hai waha stack use hoti hai) {declared variable ka copy milta hai}, Heap (Non - primitive m heap use hoti hai) {Heap me refrence aata hai}


//--------- example of stack ---------
let myName = "Neha"
let anotherName = myName
anotherName = "Saniya"

console.log(myName);
console.log(anotherName);

//--------------------------------------

//--------- example of heap ------------

let userOne = { 
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//---------------------------------------