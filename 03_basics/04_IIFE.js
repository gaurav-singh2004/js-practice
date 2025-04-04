// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined.
// It is a design pattern that helps to avoid polluting the global scope.
// It is a function that is executed immediately after it is defined.

// we use IIFE to avoid polluting the global scope
(function chai(){
    console.log(`DB CONNECTED`)
})(); // DB CONNECTED ( ; should be used to end the statement)

( (name) => {
    console.log(`DB CONNECTED ${name}`)
})("Gaurav Singh"); // DB CONNECTED Gaurav Singh;




