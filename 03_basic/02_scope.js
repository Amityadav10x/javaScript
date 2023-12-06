// let a = 10
// const b = 20
// var c = 30

// var c = 300

let a = 400

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:",a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "amit"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

// one()


if (true){
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube"
        
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ************************* Interseting ******************/


console.log(addone (5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

