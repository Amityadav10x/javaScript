// singleton 

// object literals 

// Object.create

const mySum = Symbol("key1")


const JsUser = {
    name: "Amit",
    "full name": "amit yadav",
    mySum: "myn1",
    [mySum]: "myn1",
    age:18,
    email: "amit@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday" ,"tuesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log( typeof JsUser.mySum);
console.log(  JsUser[mySum]);


JsUser.email = "yaduvanshiamit.com"

// Object.freeze(JsUser)     to freeze anything

JsUser.email = "amit.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());


console.log(JsUser.greeting2);
console.log(JsUser.greeting2());