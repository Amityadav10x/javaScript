const user = {
    username: "Amit",
    price:999,

    WelcomeMessage:  function(){
             console.log(`${this.username}, welcome to website`);


             console.log(this);
    }

}

// user.WelcomeMessage()

// user.username = "sam"
// user.WelcomeMessage()


// console.log(this);



// function chai(){
//     let username = "Amit"
//     console.log(this);
// }

// chai()



const chai =  () => {
    let username = "Amit"
    // console.log(this.username);
    console.log(this.username);
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }




// const addTwo = (num1, num2) => num1 + num2 


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => {username: "hitesh"}

console.log(addTwo(2,3));


// const myArray  = [2,3,4,5,5]
// myArray.forEach()