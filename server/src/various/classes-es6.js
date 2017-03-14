"use strict"; // we need to be in strict mode to use classes in node

class Vehicle {
    constructor(id) {
        this.id = id;
    }

    getDescription() {
        return `My id is ${this.id}`;
    }

    // let test = 3; // we cant define properties in a class like that
    // static let test = 3; // same with static properties

    static about() {
        return "a vehicle is a means of transportion."
    }
}

// The good people of TC39 want class declarations to declare and define the capabilities of a class. Not its members. An ES6 class declaration defines its contract for its user.

// we can define class properties like that:

Vehicle.prototype.color = "unknown";

// and static properties like that:

Vehicle.description = "means of transportation";


class Car extends Vehicle {
    constructor(numberOfTires) {
        super();
        this.numberOfTires = numberOfTires
    }
}

class Drone extends Vehicle {
    constructor(id, numberOfPropellors, price) {
        super(id); // if our class extends another class, we have to call the constructor of the base class
        this.numberOfPropellors = numberOfPropellors;
        this._price = price;  // _ prefix indicates a private field by convention; other means for private variables are symbols and weakmaps (see: http://www.2ality.com/2016/01/private-data-classes.html)
    }

    get price() { return `${this._price} Euro`; }

    getDescription() {
        return `My id is ${this.id} and i have ${this.numberOfPropellors} propellors.`;
    }
}


let awesomeDrone = new Drone(1337, 5, 100);
console.log(awesomeDrone.getDescription());
console.log(awesomeDrone.getDescriptionAlternative());

console.log(Vehicle.about());

console.log(awesomeDrone.price);

console.log(awesomeDrone.color);
console.log(Vehicle.description);


console.log(awesomeDrone instanceof Vehicle); // true

console.log(Object.valueOf(awesomeDrone)); // returns the primitive value of an object (if it has one, if not i just returns the object itself); example might be: primitive value of a sphere could be its radius .. 

