function Foo() {
    this.name = "Peter";
    console.log(name);
}

Foo(); // calling Foo without new, causes 'this' to be the global scope (see 4. binding rule: default binding)
console.log(global.name);


function Bar() {
    this.name2 = "Stewie";
    // console.log(name2); // ReferenceError, as name2 is neither declared in the function scope, nor was it created on the global scope - instead it only exists on the this object
    console.log(this.name2) // prints Stewie
}

var returnValue = new Bar(); // calling Foo creates a new object for this
console.log(global.name2); // undefined

console.log(returnValue) // return this, as Bar does not specify an explicit return value