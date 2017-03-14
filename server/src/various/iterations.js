"use strict";
// looping over an array in es6

let a1 = [ "a", "b", "c" ]
for (let item of a1) {  // use  for .. of   to iterate over arrays
    console.log(item)
}


let obj = {
    name : "Marge",
    age : 40
}

for (let key in obj) { // use for .. in    to iteratove over object property keys
    console.log(key);
}

for (let index in a1) { // if we use for .. in   on an Array, we will get its indices
    console.log(index); // 0, 1, 2
    console.log(a1[index]);  // a, b, c
}

