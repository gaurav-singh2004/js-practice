const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry',  'grape'];

const vegetables = ['artichoke', 'broccoli', 'cabbage', 'daikon', 'eggplant'];

// fruits.push(vegetables);
// console.log(fruits);

// const fruitsandvegetables = fruits.concat(vegetables);
// console.log(fruits);
// console.log(vegetables);
// console.log(fruitsandvegetables);

const all = [...fruits, ...vegetables];
console.log(all);

console.log(Array.isArray(all));
console.log(Array.from('hello'));
console.log(Array.from({name : 'John'}));


