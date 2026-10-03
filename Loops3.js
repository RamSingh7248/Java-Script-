// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const num = nums.map( (n) => {return n + 10})

// const newNum = nums
//                     .map( (n) => n * 10)
//                     .map( (n) => num +1)

//                     console.log(newNum);
                    


const myNums = [1, 2, 3]

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)