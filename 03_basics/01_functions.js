// functions are first-class citizens in JavaScript
// functions basically are objects, we are making a package of code and we are calling it a function

// function is a block of code that can be called anywhere in the program

function sayMyName(){
    console.log("G")
    console.log("A")
    console.log("U")
    console.log("R")
    console.log("A")
    console.log("V")
}
// sayMyName() // G A U R A V

// function add(a, b){
//     console.log(a + b)
// }
// result = add(2, 3) // 5
// console.log(result) // undefined
// result is undefined because we are not returning anything from the function
// we are just printing the result in the function
// we can return the result from the function
function add(a, b){
    return a + b
}
result = add(2, 3) // 5
console.log("Result : ", result) // 5

function loginUserMessage(username){
    if(username === undefined){ // or we can write !username
        return "Please enter a username"
    }
    return `User logged in with username ${username}`
}

loginUserMessage("Gaurav") // not displaying anything because we are not printing it
console.log(loginUserMessage("Gaurav")) // User logged in with username Gaurav
console.log(loginUserMessage()) // Please enter a username

function calculateCart(...num1){
    return num1
}
console.log(calculateCart(1, 2, 3, 4)) // [ 1, 2, 3, 4 ]

function calculateCartPrice(cartItems){
    let totalPrice = 0
    for(let i = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i].price
    }
    return totalPrice
}

const user = {
    name: "Gaurav",
    price: 100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObject(user) // username is Gaurav and price is 100

handleObject({
    name: "Sam",
    price: 100
})

const myNewArray = [100,200,300,400,500]
function handleArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
handleArray(myNewArray) // 100 200 300 400 500