const user = {
    name: "Gaurav",
    price: 100,
    welcomeMessage: function(){
        console.log(`Welcome to website, ${this.name}`)
        console.log(this)
    }
}

// user.welcomeMessage() // Welcome to website, Gaurav
// user.name = "Gaurav Singh"
// user.welcomeMessage() // Welcome to website, Gaurav Singh
// console.log(this) // Window { ... }

// function chai(){
//     let username = "gaurav"
//     console.log(this.username) // undefined
//     // console.log("chai")
//     // console.log(this) // Window { ... }
// }
// chai() // chai

const chai = () => {
    let username = "gaurav"
    console.log(this.username) // undefined
    console.log(this) // {}}
}
chai() 


// const addTwo = (a, b) => {
//     return a + b
// }
// const addTwo = (a, b) => a + b
// const addTwo = (a, b) => (a + b)
const addTwo = (a, b) => ({username : "gaurav"})
console.log(addTwo(2, 3)) // 5
