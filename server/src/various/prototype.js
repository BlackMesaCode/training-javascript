/// Object creation method 1

function Foo(name) {   // constructor method in camel case by convention
    this.name = name;
}

var foo = new Foo("Carl"); // new keyword creates an empty object. this obj can be referenced within the constructor function by "this"
console.log(foo);
console.log(typeof foo);

/// Object creation method 1

var foo2 = Object.create(Foo.prototype);
console.log(foo2);

// the __proto__ property

// every object has a __proto__ property. the __proto__ property is a reference to the object, that was used as a prototype for that particular object instance. the prototype object itself contains the constructor and a reference to its own prototype. so we can walk up the ancestor chain of an object with its __proto__ property. in javascript everything, that is not a primitive type, is an object. so even functions are objects, that have a __proto__ property. all objects besides null inherit from Object.prototype. So Object.__proto__ is null.


// the prototype property

// the prototype property can only be found on functions. prototype contains a reference to an object, that was used to create the __proto__ object. so the __proto__ property on objects is nothing else, than a reference to the prototype property of the function that the object was constructed with:

console.log(foo.__proto__ === Foo.prototype);

console.log(foo.prototype === undefined); // foo is not a function, so it cant access its prototype via the prototype property, but instead via the __proto__ property


// extending a prototype

// so the prototype is the blueprint object for new instances ... that means, if we alter the blueprint, we can alter the shape of new instances. lets see:

Foo.prototype.laugh = () => console.log("lol!");
Foo.prototype.greatness = 999;

foo.laugh(); // now every object. that was created with new Foo(), has the ability to laugh - even though we extended the Foo.prototype AFTER the Foo() constructor was used to instantiate the foo object - so the possible members of an object are resolved at the time they are called, rather than fixated at the time the object is created.

console.log(foo.greatness); // even properties are possible

Foo.loveliness = 777; // note that loveliness is different to greatness. properties that are created on the Foo object directly are static variables that are only associated to that constructor object ("class" object) and not associated with its instances.

console.log(foo.loveliness); // undefined !

