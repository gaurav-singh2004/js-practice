// for of
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number); // 1 2 3 4 5
}
// for in
const person = {
    name: "Gaurav",
    age: 25,
    city: "Delhi"
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // name: Gaurav, age: 25, city: Delhi
}
// forEach
const array = [1, 2, 3, 4, 5];
array.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`); // Element: 1, Index: 0
});


// map
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("AU", "Australia")
// console.log(map) // Map(4) { 'IN' => 'India', 'US' => 'United States', 'UK' => 'United Kingdom', 'AU' => 'Australia' }
// console.log(map.size) // 4
for(const [key, value] of map) {
    console.log(key ,': ', value); // IN :  India, US :  United States, UK :  United Kingdom, AU :  Australia
}

const myObject = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Hockey',
}
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value); // game1 Cricket, game2 Football, game3 Hockey
}