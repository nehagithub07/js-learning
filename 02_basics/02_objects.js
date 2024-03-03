// object ko declare karne k 2 tarike hai-> 1-> literals 2-> constructor
// singleton -> koi b constructor se object bnate hai to singleton bnta hai.
// lekin jb literals ki trha declare karte hai to singleton nhi bnta hai
//Object.create


// ------------------ OBJECT LITERALS -----------------------
const mySym = Symbol("key1")
// creation of object
const JsUser = {
    name: "Neha", 
    "full_Name": "Neha Saniya",
    [mySym]: "myKey1", // right way to use symbol
    age: 21,
    location: "Haridwar",
    email: "neha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to acess objects
// console.log(JsUser.email); // shi way nhi hai ye acess krne ka
// console.log(JsUser["email"]);  // right way
// console.log(JsUser["full_Name"]); 
// console.log(JsUser[mySym]); 

JsUser.email = "nehasaniya@gmail.com" // ese hum value change kr skte hai

// Object.freeze(JsUser) // ese koi bhi value change nhi hogi
JsUser.age = 12;
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello js user");
}

// console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting()); 

JsUser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);
}

// console.log(JsUser.greeting()); 
// console.log(JsUser.greeting2());

// ---------------- OBJECT CONSTRUCTOR ----------------------

// const tinderUser = new Object() // singleton object
// console.log(tinderUser);  // {}

// const tinderUser = {}  // non singleton object
// console.log(tinderUser);  // {}

const tinderUser = {} 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


// object k andr object
const regularUser = {
    email: "neha@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Neha",
            lastName: "Saniya"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);


// combining of objects or merging of objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)  // agr hum "{}" isko nhi denge to saari value obj1 mai chli jaengi jo ko shi nhi hai isliye better hai hum isko use kre
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}  // jadatar yhi use krna hai 
// console.log(obj3);


// array k andr bhot saare object haii
const users = [ 
    {
        id: 1,
        email: "neha@gmail.com"
    },
    {
        id: 1,
        email: "neha@gmail.com"
    },
]
// access 
// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // output value ka datatype array hoga
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // array k andr array dikhaega

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye btaega ki key exists krti hai ya nhi



// --------------------- DeStructuring of objects -----------------

const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor
// const {courseInstructor} = course  // jahha bhi hum dekhenge {____} ese to iska mtlb de-structuring ki ja rahi hai
const {courseInstructor: instructor} = course  // agr hume lgta hai ki courseIntructor bhot bda naam hai to hum usko dusra naam bhi de skte hai
console.log(courseInstructor);
console.log(instructor);

// API se hmare pass value JSON format m aati hai phele k time mai XMl format m aaya krti thi
// how to create JSON format or object keys or value dono string ki form mai hoti hai
// {
//     "name": "Neha",
//     "courseName": "js in hindi",
//     "price": "free"
// }

// kahi baar hume APIs array k andr object k format m bhi milti hai
[
    {},
    {},
    {}
]