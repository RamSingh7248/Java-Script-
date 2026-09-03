// (1). primitive :- there are 7 types 
// String, number, boolean, null. undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const islogin = false
const temp = null

const id = Symbol('123')
const anotherId = Symbol(123)

console.log(id === anotherId);


// (2). Non premitive :- Arrays, Objects, Functions
// Array
const heros = ["shakyiman", "naagraj", "doga"]

// Object
let myObject = {
    name : "Ramu",
    age : 22,
}

// Function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
