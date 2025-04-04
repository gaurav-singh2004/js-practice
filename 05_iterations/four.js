const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++',
}
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`); // js JavaScript, py Python, rb Ruby, cpp C++
}
// for (const key of myObject) {
//     console.log(key); // TypeError: myObject is not iterable
// }

const programming = ["js", "py", "rb", "cpp"]
for (const key in programming) {
    console.log(key); // 0 1 2 3
    console.log(programming[key]); // js, py, rb, cpp
}

