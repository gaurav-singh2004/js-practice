const score = 100;
console.log(score);
const balance = new Number(1000);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed());
console.log(balance.toFixed(2));

const otherNumber = 100.123456789;
console.log(otherNumber.toFixed(2));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(5));

const hundreds = 100000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI); 
console.log(Math.abs(-100));
console.log(Math.round(1.9));
console.log(Math.floor(1.9));
console.log(Math.ceil(1.1));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

console.log(Math.random());
console.log(Math.random() * 10 + 1);

const random = Math.floor(Math.random() * 10 + 1);

const min = 10
const max = 20
const randomOne = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomOne);

