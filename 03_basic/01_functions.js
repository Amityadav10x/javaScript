console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");



function sayMyName () {
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");

}

// sayMyName()

// function addTwoNumbers (number1, number2) {

//      console.log(number1 + number2 );
// }

function addTwoNumbers (number1, number2) {

    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,7)
console.log("result:" , result);



function loginUserMessage(username = "amit"){


    // if (username === undefined){

    if(!username){
        
        console.log("please enter a username");
        return
    }



        
    
    
    return `${username} just logged in`

}

console.log(loginUserMessage("amit"));
// console.log(loginUserMessage());



