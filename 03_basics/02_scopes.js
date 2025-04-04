// basically scopes are the visibility of variables
// in js there are 3 types of scopes
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope
// Global Scope
// Global scope is the outermost scope
// Global scope is the scope that is available everywhere in the program
// Local Scope, is the scope that is available inside a function 
// block scope is the scope that is available inside a block, block means {}

// let a = 10
// const b = 20
// var c = 30
let a = 10
if(true){
    let a = 100
    const b = 200
    var c = 300
    console.log("Inner: ", a) // 100
}
    
console.log("Outer: ", a) // 10
// console.log(a) // 10
// console.log(b) // 20
console.log(c) // 300

function one(){
    const username = "Gaurav"
    function two(){
        const website ="youtune"
        console.log(username) // Gaurav
    }
    // console.log(website) // ReferenceError: website is not defined
    two()
}

one()

if(true){
    const userName = "Gaurav"
    if(userName === "Gaurav"){
        const website = "youtube"
        console.log("User Name is Gaurav")
    }
    // console.log(website) // ReferenceError: website is not defined

}

// console.log(userName) // ReferenceError: userName is not defined


/**************************** interesting *************************/
addone(5) // 6
function addone(num){
    return num + 1
}

// addtwo(5) // cannot access addtwo before initialization
const addtwo = function(num){
    return num + 2
}
addtwo(5) // 7
