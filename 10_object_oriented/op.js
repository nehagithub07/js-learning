const user = {
    username: "Neha",
    loginCount: 0,
    singnedIn: true,

    getUserDetails: function() {
        //console.log("Got user details from database");
       // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);


// ----------------------------------------------------------------
// Constructor (new keyword is a constructor fnc)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // this.greeting = function() {
    //     console.log(`Welcome ${this.username}`);
    // }
   // return this  (implicitly define by default (optional))
} 

// const userOne = User("neha", 12, true)
// const userTwo = User("ChaiOrCode", 10, true)  // override userone
// console.log(userOne);


// const userOne = new User("neha", 12, true)
// const userTwo = new User("ChaiOrCode", 10, true)  // override userone
// console.log(userOne);
// console.log(userTwo);


const userOne = new User("neha", 12, true)
console.log(userOne.constructor);  
// ------------------------------------------------------------------------




