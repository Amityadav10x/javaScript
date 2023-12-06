// console.log("h");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");



// function sayMyName () {
// console.log("h");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");

// }

// // sayMyName()

// // function addTwoNumbers (number1, number2) {

// //      console.log(number1 + number2 );
// // }

// function addTwoNumbers (number1, number2) {

//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(3,7)
// console.log("result:" , result);



// function loginUserMessage(username = "amit"){


//     // if (username === undefined){

//     if(!username){
        
//         console.log("please enter a username");
//         return
//     }



        
    
    
//     return `${username} just logged in`

// }

// console.log(loginUserMessage("amit"));
// // console.log(loginUserMessage());



function calculateCardPrice(...num1){ 
    return num1
}

console.log(calculateCardPrice(200,400,500))

function calculateCardPrice(val1,val2,...num1){ 
    return num1
}

console.log(calculateCardPrice(200,400,200,500))

const user = {
    username: "amit",
    price:199
}

function handleObject(anyobject){
    console.log(`userName is  ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "sam",
    price:300
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
    // console.log(returnSecondValue(myNewArray));

    console.log(returnSecondValue([200,300,400,500]));
}