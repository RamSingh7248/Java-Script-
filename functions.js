function SayMyName(){
    console.log("R");
    console.log("a");
    console.log("m");
    console.log("u");
}

// SayMyName()

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}
const result = addTwoNumber(3, 5)
// console.log("Result", result);


// function loginUser(username){
//     return '${username} just logged in'
// }

// console.log(loginUser())


function calculate(...num1){
    return num1
}
//console.log(calculate(200, 400, 400));

const newArr = [200, 400, 600]

function returnSecondValue(getArr){
     return getArr[1]
}

// console.log(returnSecondValue(newArr));
