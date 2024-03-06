// let a = 10
// const b = 20
// var c = 30

{}  // scope


// if k andr jo bhi likha hai usko khte hai block scope 
//or jo bhi bhar hai wo global hai
// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }

// // console.log(a);  // error
// // console.log(b);  // error
// console.log(c);  // o/p = 30
 

let a = 300
if(true) {
    let a = 10
    const b = 20
    // console.log(a); // op is 10  // block scope
}

// console.log(a);  // op is 300  // global scope

function one() {
    const username = "Neha"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); // error  // scope k bhar access kr rahe hai isliye error dega
    //two()
}
one()  // one jesi excute hota hai uske baad two hota hai agr hum two() ko comment kr de to kuch bhi execute nhi hoga

if (true) {
    const username = "Neha"
    if(username === "Neha") {
        const website = " youtube"
        //console.log(username + website); // Neha youtube
    }
    //console.log(website); // error
}

//console.log(username); // error

console.log(addone(5));  // op is 6
function addone(num) {
    return num  + 1
}

addTwo(5)  // error
const addTwo = function(num) {
    return num + 2
}

