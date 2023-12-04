// Primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23323322332332323n
console.log(bigNumber);


// reference (non primitive)

// Array, object, Functions

const heros = ["amit","sumit","ajay"]
let myObj = {
    name:"amit",
    age:22,
      
}

const myFunction = function(){
      console.log("hello");
}

console.log(typeof bigNumber);
console.log(typeof myFunction)
console.log(typeof myObj);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap(non-primitive)

let myYoutubename = "amityadavcom"

let anothername = myYoutubename
anothername = "chai code"

console.log(anothername);
console.log(myYoutubename);


let useOne = {
    email:"ay3040869@gmail.com",
    upi: "user@ybl"
}

let UserTwo = userOne

UserTwo.email = "ay30408@gmail.com"

console.log(userOne.email);
console.log(useTwo.email);




