// singleton


// Object litral

const mySym = Symbol("key1")


const user = {
    name : "Ramu",
    "full name": "Ramu thakur",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "ramu@gmail.com", 
    isLoggin: false,
    lastLoginDays: ["Monday", "Saturaday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.mySym);
// user.email = "mannu@gmail.com"
// Object.freeze(user)
// console.log(user);

user.greeting = function(){
    console.log("Hello world");
    
}
console.log(user.greeting());
user.greetingTwo = function(){
    console.log('Hello js user, ${this.name}');    
}
console.log(user.greetingTwo());
