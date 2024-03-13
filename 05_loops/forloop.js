// for loop
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i * j);
//     }
// }

// let myArr = ["flash", "batman", "superman"]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// let myArr = ["flash", "batman", "superman"]
// console.log(myArr.length);
// for (let index = 0; index <= myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of index is ${index}`);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`value of index is ${index}`);
    
// }


// While loop

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2;
// }

// let myArr = ["flash", "batman", "superman"]
// let arr = 0
// while(arr < myArr.length) {
//     console.log(`Value is ${myArr[arr]}`);
//     arr = arr + 1;
// }

// do while loop
// let score = 1
// do {
//    console.log(`Score is ${score}`);
//    score++;
// } while (score <= 10);


// for of loop
const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps
const map = new Map()  // return unique values and store key value pairs
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it will not print
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value]  of myObject) {
//     console.log(key, ':-', value); // TypeError: myObject is not iterable
    
// }  // object ko ese iterate nhi kr skte




