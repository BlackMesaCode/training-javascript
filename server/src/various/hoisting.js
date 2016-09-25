// Example 1

foo(); // executes fine, because a function declaration gets hoisted

function foo() {
    console.log("Hello world!");
}

// Example 2

console.log(blub) // var blub gets hoisted, but not its initialization - so, by the time we access blub - its undefined
var blub = "Hello world!";

// example to jit-compiles to:
// var blub;
// console.log(blub);
// blub = "Hello world!";


// Example 3

//bar(); // this wont work, because function expressions dont get hoisted. instead, only the variable declaration var bar gets hoisted, but at the time we call bar(), var bar is undefined -> so receive the error: bar is not a function;

var bar = function() {
    console.log("Hello world!");
}