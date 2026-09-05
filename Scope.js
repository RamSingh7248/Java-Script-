let a = 300

if(true){
    let a = 10;
    const b = 20
    //console.log("Inner: ", a);

}

 //console.log(a);
//console.log(b);
//console.log(c);


function One() {
    const username = "Ramu"

    function two(){
        const website = "youtube"
       // console.log(username);
    }
  //  console.log(website);
    two()
}
//One()


if(true){
    const username1 = "Mannu"
    if(username1 === "Mannu") {
        const website1 = " facebook"
       // console.log(username1 + website1);    
    }
  //  console.log(website1);   
}
// console.log(username1);


// +++++++++++++ interesting +++++++++++

console.log(add(5));
function add(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5)