// upon calling a constructor function with the new keyword, the following things happen:

// It creates a new object. The type of this object, is simply object.
// It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
// It makes the this variable point to the newly created object.
// It executes the constructor function, using the newly created object whenever this is mentioned.
// It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.

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