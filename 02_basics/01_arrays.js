// array

// Array is a collection of elements of same type or different type.

const myArray = [1, 2, 3, 4, 5];
const myHeroes = ['Superman', 'Batman', 'Shaktiman', 'Spiderman'];
const arr = new Array(1, 2, 3, 4, 5);
 
console.log(myArray);

// array methods

myArray.push(6);
myArray.push(7);
myArray.pop();
console.log(myArray);
myArray.unshift(9);
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.includes(3));
console.log(myArray.indexOf(3));
console.log(myArray.join(' '));
console.log(myArray.slice(1, 3));
console.log(myArray.concat(arr));

console.log("A ", myArray)  


const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray2 = newArray.splice(0, 5);
console.log(newArray2);
console.log(newArray);


