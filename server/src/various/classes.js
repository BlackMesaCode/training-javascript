"use strict"; // we need to be in strict mode to use classes in node

// see: http://stackoverflow.com/questions/1535631/static-variables-in-javascript

function MyClass () { // constructor function
  var privateVariable = "foo";  // Private variable 

  this.publicVariable = "bar";  // Public variable 

  this.privilegedMethod = function () {  // Public Method
    alert(privateVariable);
  };
}

// Instance method will be available to all instances but only load once in memory 
MyClass.prototype.publicMethod = function () {    
  alert(this.publicVariable);
};

// Static variable shared by all instances
MyClass.staticProperty = "baz";

var myInstance = new MyClass();


Vehicle.prototype.getDescriptionAlternative = function() {  // this was the old way of adding functions to a prototype
    return `My id is ${this.id}`;
}