// For of
// ["", "", ""]
// [{}, {},  {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//    console.log(num);  
// }

// const g = "Hello World"
// for (const i of g) {
//   console.log(i);
    
// }

// Map

const map = new Map()
map.set('In', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
//console.log(map);
 
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }


const myObject = {
    js: "javascript",
    cpp:'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
 console.log(`${key} shortcut is for ${myObject[key]}`);
 
}