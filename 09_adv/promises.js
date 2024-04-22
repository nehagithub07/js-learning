//Creation of promises

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(function () {
        console.log('Async taks is complete')
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "chai@exapmle.com."})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "Neha", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    }, 2000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log('Error');
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function () {
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: js went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    } 
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// or we can write like this 

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


