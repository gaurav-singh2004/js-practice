const userEmail = "";
if(userEmail){
    console.log("Email is provided");
}
else{
    console.log("Email is not provided");
}

// // falsy values: false, 0, "", null, undefined, NaN
// // truthy values: true, 1, "0", " ", [], {}, function(){}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = null ?? 10;
// console.log(val1); // 10
val1 = undefined ?? 10;
console.log(val1); // 10


// Ternary Operator
const isLoggedIn = false;
const userName = isLoggedIn ? "Gaurav" : "Guest"
console.log(userName); // Guest