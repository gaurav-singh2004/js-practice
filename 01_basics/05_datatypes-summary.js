// primitive datatypes 

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('12345')
const anotherID = Symbol('12345')
console.log(id == anotherID)

const bigNumber = 765437654325432543n


// Refrence(Non Primitive)

//Array, Object, Functions

const fruits = ["apple","mango","banana","papaya"]

let myobj = {
    name : "Gaurav Singh",
    age : 21
}

const myfunction = function(){
    console.log("Hello Everyone");
}

console.log(typeof myobj);




// JavaScript is dynamically typed.
// This means:
// You don’t need to declare variable types explicitly.
// A variable’s type is determined at runtime, not at compile time.
// You can assign different types of values to the same variable without errors.

