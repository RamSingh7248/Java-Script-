// Decleration

// const arr = [0, 1, 2, 3, 4, 5, 6]
// const myheros = ["SitaRam", "Ram"]
// const newArr = new Array(1, 2, 3, 4, 5)
// console.log(arr[3]);


// Array Methods
// arr.push(8)
// arr.pop()
// console.log(arr);

// arr.unshift(12)
// arr.shift()
//console.log(arr);
// console.log(arr.includes(20));
// const newarr = arr.join()
// console.log(arr);
// console.log(typeof newarr);


// slice, splice

// console.log("A ", arr);
// const myn1 = arr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myn1);
// const myn2 = arr.splice(1, 3)
// console.log(arr)


const heros = ['thor', 'Ironman', 'Spiderman']
const dc = ["superman", "flash", "batman"]

// heros.push(dc)
//console.log(heros);
 
// const all = heros.concat(dc)
// console.log(all);

const all = [...heros, ...dc]
// console.log(all);

const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real = another.flat(Infinity)
console.log(real);


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
