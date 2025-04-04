// if

const isLoggedIn = true

if(isLoggedIn){
    console.log("User is logged in")
}
else{
    console.log("User is not logged in")
}
// <,>,<=,>=,==,===,!=,!== (=== is strict equality operator which check type and value)

const score = 100
if(score >= 100){
    const power = "pro"
    console.log(`User is a ${power} user`)
}
console.log(`User is a ${power} user`) // ReferenceError: power is not defined

const balance = 1000
if(balance > 0) console.log("User has balance");

