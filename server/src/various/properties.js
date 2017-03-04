function Foo() {

}

Foo.prototype.bar = "bar";

var foo = new Foo();

for(var prop in foo) {
    console.log(prop);
}

console.log(foo.hasOwnProperty("bar")); // false, because the property "bar" comes from the prototype and does not live on the foo instance

foo.baz = "baz";  // baz is an own property of foo

console.log(foo.hasOwnProperty("baz")); // true, because baz lives directly on the foo instance



// iterating all properties of an object:

// for .. in   yields the properties of the obj instance as well as the properties of its parent prototype

Object.values = function (obj) {
    var vals = [];
    for(var key in obj) {
        vals.push(obj[key]);
    }
    return vals;
}

console.log(Object.values(foo)); // bar and baz



// Object.keys  only returns the own properties of the obj instance

console.log(Object.keys(foo)); // only baz



// contents of getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(foo, "bar")); // "undefined" 
console.log(Object.getOwnPropertyDescriptor(foo, "baz")); // {propertyDescriptor} 

// contents of the propertyDescriptor

// value: actual value of the property
// writable: false -> property becomes readonly
// enumerable: false ->  for .. in  wont list the property anymore; no more json serialization
// configurable: false -> value, writable, enumerable cant be changed anymore


// set property settings

Object.defineProperty(foo, 'bam', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'bam'
});

console.log(foo.bam); // bam
console.log(Object.getOwnPropertyDescriptor(foo, "bam"));


// getters and setters

var foo2 = {
    firstName: "",
    lastName: "",
    get fullName() { return this.firstName + " " + this.lastName; },
    set fullName(value) { 
        var splitted = value.split(" ");
        this.firstName = splitted[0];
        this.lastName = splitted[1];
    }
};

foo2.fullName = "Julius Caesar";
console.log(foo2.firstName) // Julius

