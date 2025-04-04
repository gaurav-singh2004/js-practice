// singleton 
// object.create

// objects literals 

const mySym = Symbol("key1")

const jsUser = {
    name: "Gaurav",
    "full name": "Gaurav Singh",
    [mySym]: "mykey1",
    age: 25,
    location: "India",
    email: "gaurav@gmail.com",
    isActive: true,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "gauravsingh@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "gauravsin@gmail.com"
console.log(jsUser) // it will not change the value of email

jsUser.greeting = function(){
    console.log("Hello User")  
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting()) // Hello User
console.log(jsUser.greetingTwo()) // Hello JS user, Gaurav\





