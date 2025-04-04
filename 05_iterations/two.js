// while
let i = 0;
while (i < 5) {
    console.log(i); // 0 1 2 3 4
    i= i + 2; // increment by 2
}

// do while
let j = 0;
do {
    console.log(j); // 0 1 2 3 4
    j = j + 2; // increment by 2
} while (j < 5); // do while will execute at least once even if condition is false

let myArray = [1, 2, 3, 4, 5];
let arr = 0;
while (arr < myArray.length) {
    console.log(myArray[arr]); // 1 2 3 4 5
    arr++;
}