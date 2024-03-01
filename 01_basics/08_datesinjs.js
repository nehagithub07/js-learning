// Dates

let myDate = new Date()
// // console.log(myDate);  // o/p is not readable - 2024-03-01T12:06:10.334Z
// // console.log(myDate.toString()); // Fri Mar 01 2024 12:06:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());  // Fri Mar 01 2024
// console.log(myDate.toISOString());  // 2024-03-01T12:07:11.981Z
// console.log(myDate.toLocaleString());  // 3/1/2024, 12:07:47 PM
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23)  // months jo hai 0 se start hote hai js k andr
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-14-2 023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // convert into sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`  // string interpolation

newDate.toLocaleString('default', {
    weekday: "long"
    //timeZone: ''
})
