"use strict";

let test = {
    name: "Hans",

    foo: () => {
        console.log(this.name); // in an arrow-function "this" will be lexically bound to the module context 
    },

    bar: function() {
        console.log(this.name) // this will be bound dynamically to the object that initiated the execution
    }
}

test.foo(); // returns undefined   as this is not bound to test
test.bar(); // returns "Hans"

