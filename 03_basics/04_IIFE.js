// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai() {
    console.log(`DB Connected`);
})();
// yaha end m semicolon lgana bhot jruri hai exection ko end krne k liye
//(......) -> defination of a function, () -> execution of a function 

// global scope k polution se dikkt hoti hai bhot baar to jo global scope k variables and jo bhi declaration hai usko htane k liye humne IIFE ka use kia, immediate execution k liye
// unnamed IIFE
( ()  => {
    console.log(`DB Connected two`);
})();

( (name) => {
    console.log(`DB Connected two ${name}`);
})('Neha');