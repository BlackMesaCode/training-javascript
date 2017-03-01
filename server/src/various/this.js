// "use strict";

// this is an object whos value is determined by the execution context of the function where "this" is used in
// there are four rules that determine the value of this:


// 1. new binding 
function NewBinding() {
    console.log(this.name); // outputs undefined
}

console.log("binding with new: ") 
new NewBinding()
// this is the value returned by the constructor function (if the constructor function doesnt return a different value). its an empty object, linked to the prototype of the Function, enriched by the command in the constructor function 




// 2. hard binding / explicit binding
// hardbinding/explicit binding defeats the purpose of the this keywoard - if we just wanted to reference a static context, we were better off just using a globally available object, or just pass the needed object to the function

console.log("hard/explicit binding: ")

var caller = {
    name: "Stewie",
    foo: foo,
}

var bar = {
    name: "Peter",
}

function foo() {
    console.log(this.name);
}

caller.foo.call(bar);  // prints Peter, as we explicitly bind this to bar - the this binding is for that one call only
caller.foo(); // print Stewie, due to implicit binding rule
// foo.bind(bar); // hardbinding this == bar; all following calls to foo() would use this == bar
// caller.foo();  // prints Peter, as we hardbind this to bar - this binding is permanent


// 3. implicit binding
console.log("implicit binding: ")

caller.foo(); // prints Stewie, as the caller object == this



// 4. default binding
console.log("default binding: ")

global.name = "Brian";
foo(); // if not in strict mode, a regular function call, results in this being the global scope; if in strict mode: this = undefined
console.log(name); // as within foo, this == global scope, when calling console.log(name), name is not found within the module (function) scope, we then go fish for that declaration in the global scope