"use strict";

let arr = [ "a", "b", "c"];
let iterator = arr.values();  // .values() returns an iterator -  not supported in nodejs

while(!iterator.next().done()) {
    console.log(iterator.next().value);
}

// more:  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values


// by implementing an iterator we can make use of the more comfortable for .. of syntax