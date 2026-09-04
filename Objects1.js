//const tinder = new Object()

const tinder = {}
tinder.id = "123abc"
tinder.name = "Ramu"
tinder.isLogin = false
// console.log(tinder);

const newuser = {
    email: "sohan@gmail.com",
    fullname: {
        userName: {
            firstName: "Ramu",
            lastName: "Thakur"
    }
}
}
// console.log(newuser);
// console.log(newuser.fullname.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// newuser[1].email
// console.log(tinder);
// console.log(Object.keys(tinder));

