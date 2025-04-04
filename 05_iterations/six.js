// const coding = ["js", "py", "rb", "cpp"];
// coding.forEach( function(element){
//     console.log(element); // js, py, rb, cpp
// });
// coding.forEach( (element) => {
//     console.log(element); // js, py, rb, cpp
// });

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num)=>num>4)
console.log(newNums); // [5, 6, 7, 8, 9, 10]