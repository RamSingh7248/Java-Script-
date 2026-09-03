//  const name = "hitesh"
//  const repoCount = 50

// console.log(name + repoCount + " Value");
 
// console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('hitesh')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const another = gameName.slice(-8, 2)
console.log(another);

const newStringOne = "   Ramu     "
console.log(newStringOne.trim());

const url = "https://ramu.com"

console.log(url.includes('%20', '-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));

 