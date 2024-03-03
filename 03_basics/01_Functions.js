// Functions

// define a function
function sayMyName() {
    console.log("N");
    console.log("E");
    console.log("H");
    console.log("A");
}

// how to execute
// sayMyName()

// function addTwoNumbers(number1, number2) {   
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 5); // 8
// addTwoNumbers(3, "5");  // 35
// addTwoNumbers(3, null);
// Note: jb bhi hum function k andr values pass krte hai unko parameters khte hai or jb hum calling k time value pass krte hai unko khte hai arguments

// const result = addTwoNumbers(3, 5)
// console.log(result); // undefined kyuki hum function m kuch return nhi kr rahe hai sirf value print kr rahe hai

// function addTwoNumbers(number1, number2) {   
//     let result = number1 + number2
//     return result // return krne k baad kuch bhi execute nhi hoga
//     //console.log("Hello"); // ye execute nhi hoga
// }

// const result = addTwoNumbers(3, 5)
// console.log(result); // 8 


function addTwoNumbers(number1, number2) {   
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log(result); // 8 

function loginUserMessage(userName) {   
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Neha"))
// console.log(loginUserMessage()) // yaha pr null nhi aaega undefined aaega kyuki yaha define nhi kiya hum ise shi krne k liye or use krne k liye if-else ka use krte hai


function loginUserMessage(userName) {   
    if(userName === undefined) {
        console.log("Please enter a username:");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage()) 


function loginUserMessage(userName) {   
    if(!userName) {
        console.log("Please enter a username:");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage()) 


function loginUserMessage(userName = "neha") {   
    if(!userName) {
        console.log("Please enter a username:");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage()) 


function loginUserMessage(userName = "neha") {   
    if(!userName) {
        console.log("Please enter a username:");
        return
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage("Saniya"))  // override the value


// when we do not know how many argument will come
function calculateCartPrice(num1) {
    return num1
}
// console.log(calculateCartPrice(100)); // 100
// console.log(calculateCartPrice(100, 200, 300)); // 100


function calculateCartPrice(...num1) {  // hum ... iski wjha se function mai kitni bhi value pass kr skte hai
    return num1
}
// console.log(calculateCartPrice(100, 200, 300));



function calculateCartPrice(val1, val2, ...num1) {  
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500));  // val1 m 100 chla gya val2 m 200 chla gya baki bche num1 mai chle gye


// function with objects

const user = {
    userName: "Neha",
    price: "199"
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
// direct bhi object pass kr skte hai
handleObject({
    userName: "Sam",
    price: 399
})

// function with arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));