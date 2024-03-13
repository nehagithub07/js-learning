const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rd: 'ruby',
    swift: 'swift by apple'
}
// for in
// for (const key in myObject) {
//   console.log(key);
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
//   }

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//     console.log(key);  // in op it is giving the indexes 0 1 2 3 4
// }

// for (const key in programming) {
//     console.log(programming[key]);  
// }


const map = new Map()  
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// maps are not iterable

// for (const key in map) {
//     console.log(key);  
// }

