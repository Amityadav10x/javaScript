const score = 500
// console.log(score);


const balance = new Number (10000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.abs(4));
console.log(Math.ceil(4.3));
console.log(Math.floor(6.1));
console.log(Math.min(4,3,2,4,4));
console.log(Math.floor(Math.max(4,3,2,6,4)));

// math.random will give 1 to 9 value 

console.log(Math.random());
console.log((Math.random()*10)+1);



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);