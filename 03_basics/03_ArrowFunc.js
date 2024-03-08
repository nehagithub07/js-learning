const user = {
    username: "Neha",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage
// user.welcomeMessage()
// user.username = "Saniya"
// user.welcomeMessage()

//console.log(this);

// we cannot use this function in a function it will get undefined error
// function chai() {
//     let username = "Neha"
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "Neha"
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = "Neha"
//     console.log(this.username);
// }
// chai()

// syntax of arrow func 
// () => {

// }

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));



// implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,4));

// or we can write
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4));

// return object
const Obj = () => ({username: "Neha"});
console.log(Obj().username);

