// const tinderUser = new object()


const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "samay"
 tinderUser.isLoggedIn = false 

 const regularUser = {
    email: "ay3040@gmail.com",
    fullName: {
        Userfullname: {
            firstName: "amit",
            lastName: "yadav"
        }
    }
 }

console.log(regularUser.fullName.Userfullname.firstName);


const obj1 = {1: "a",2: "b"}
const obj2 = {2: "a",4: "b"}
const obj4 = {3: "a",6: "c"}

// const obj3 = {3: "a",5: "b"}

// // const obj3 = Object.assign({},obj1, obj2,obj4)

// const obj3 = {...obj1[1],...obj2}
// console.log(obj3);


const course = {
    courseName : "js hindi",
    Price: "999",
    Instructor: "amit"
}

const {Instructor} = course
console.log(Instructor);

console.log(Instructor);

// {
//     "name":"amit",
//     "coursename": "js in hindi",
//     "price": "free"
// }





