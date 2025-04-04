// for  loop
const array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element); // 1 2 3 4 5
}

// break and continue
const array1 = [1, 2, 3, 4, 5];
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    if (element === 3) {
        continue; // skip 3
    }
    console.log(element); // 1 2 4 5
}
// break
const array2 = [1, 2, 3, 4, 5];
for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    if (element === 3) {
        break; // break loop
    }
    console.log(element); // 1 2
}




// break and continue with label
outer: for (let index = 0; index < 3; index++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break outer; // break outer loop
        }
        console.log(`i: ${index}, j: ${j}`); // i: 0, j: 0
    }
}