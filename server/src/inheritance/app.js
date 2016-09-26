// upon calling a constructor function the following things happen:

// It creates a new object. The type of this object, is simply object.
// It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
// It makes the this variable point to the newly created object.
// It executes the constructor function, using the newly created object whenever this is mentioned.
// It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.


function Foo(name) {
    var defaultPin = "1234";  // private instance field
    this.name = name; // public instance field

    this.bar = function() {   // declaring functions this ways, causes the function to be in memory for every single instance of Foo
        console.log(this.name);
        console.log(defaultPin);
        console.log(Foo.smtpPort);
    }

    Foo.baz = "can i be declared within the constructor function?"; // static variables can be declared within the constructor variable, but they become only available after first instantiation, which is ususally not what we want
}

Foo.smtpPort = "2554"; // static variable - everwhere accessable

Foo.prototype.sharedFunc = function() {  // function shared across all instances of Foo, BUT allows to access instance variables
    console.log(this.name);
    console.log(Foo.smtpPort);
}


Foo.log = function() {
    console.log("smtp-Port: " + Foo.smtpPort); // static function - can only access static variables
    console.log(this); // this == Foo  (the static class object) because of implicit binding - execution context was Foo.log();
}


var foo = new Foo("Peter");
console.log(foo.name);
console.log(typeof foo.__proto__.constructor)
var bar = new foo.__proto__.constructor();

foo.bar();
Foo.log();

var foo1 = new Foo("Hans");
var foo2 = new Foo("Wurst");
foo1.sharedFunc();
foo2.sharedFunc();


function Vehicle(numberOfWheels) {
    this.base = "123"
    this.numberOfWheels = numberOfWheels;
}

function Motorcylce() {
    this.doWheely = function() {
        console.log("doing a wheely now! on all my " + this.numberOfWheels + " tires");
    }
}

function Car() {
    this.fillTires = function() {
        console.log("filling all my " + this.numberOfWheels + " tires");
    }

    this.openTrunk = function() {
        console.log("opening trunk");
    }
}

Car.prototype = new Vehicle();
Motorcylce.prototype = new Vehicle();

var car1 = new Car(4);
car1.fillTires();
console.log(car1.base);


// extension methods:

String.prototype.calcLength = function() {
    return this.length;
}

console.log("hello".calcLength());


// reflection

var obj = { name: "Peter", height: 180 }
for(var prop in obj) {
    console.log(prop);
    obj[prop] = "overriden!";
}
console.log(obj.name);

var test = 1;


