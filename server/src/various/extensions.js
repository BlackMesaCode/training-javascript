"use strict";

// extension methods:

String.prototype.calcLength = function() {
    return this.length;
}

console.log("hello".calcLength());


Array.prototype.last = function() {
    return this[this.length -1];
}

Array.prototype.last = () =>  {
    console.log(this); // undefined due to "this" being resolved lexically
    return this[this.length -1]; // wont work because "this" is undefined
}

var a1 = [ 1,2,3 ];
console.log(a1.last()); // returns 3