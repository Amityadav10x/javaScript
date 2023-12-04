const name = "amit"

const repoCount = 50

// console.log(name+repoCount + "value");

console.log('hello my name is ${name} and repo count is ${repoCount}');

const gameName = new String ('amit-y')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,1)
console.log(anotherString);

const newStringOne = "  AmitYadav  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://google.com/amit%2fdfnn"


console.log(url.replace('%2', '-'))

console.log(url.includes('amit'));

console.log(gameName.split('-'));

