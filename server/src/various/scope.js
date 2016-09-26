"use strict"; // must be declared on top of a file !

// global scope in browser: window.bar
var bar = "Hello";  // bar gets declared on the global scope: window.bar

// global scope in node js: global   https://nodejs.org/api/globals.html#globals_global
var baz = "Hello";

// unlike with browser, when declaring a variable with var boo() we donts declare it on the global scope (global.bar would be undefined), but instead we create it local to the current module (that means local to the current file, as nodejs module format is on a per file basis)

// The key difference is that all modules (script files) in Node.js are executed in their own closure while Chrome and other browsers execute all script files directly within the global scope.

// console.log(global.bar); // undefined in nodejs
// console.log(window.bar); // works fine in browser

// console.log(erijfgreiogjioerjgoeijeorijgoierg); --> ReferenceError
// console.log(global.erijfgreiogjioerjgoeijeorijgoierg); --> Undefined (by design, referencing undeclared variables on an object, will return Undefined instead of a ReferenceError)

// Example 1

var blub = "outer";
function foo() {
    var blub = "inner"; // when the jit compiler runs, this blub declaration gets added to the function foo() scope
    console.log(blub) // firsts asks for a declared variable within the scope of the foo function -> there is one  
}
foo(); // prints "inner"


// Example 2

var blah = "outer";
 function foo2() {
    var wuff = "inner"; // when the jit compiler runs, this blub declaration gets added to the function foo() scope
    console.log(blah) // firsts asks for a declared variable within the scope of the foo function -> there is none -> get the next outer lexical function scope, which is the global scope in this case
}
foo2(); // prints "outer"


// Let keyword

function lemme() {
    for (var i=0; i < 3; i++) {
        console.log("for: " + i);
    }

    for (var i=0; i < 3; i++) {  // this variable i is already declared, because vars get declared on the function scope ! use let instead for block scoping
        console.log("for: " + i);
    }

    for (let i=0; i < 3; i++) {
        console.log("let: " + i);
    }
}

lemme();