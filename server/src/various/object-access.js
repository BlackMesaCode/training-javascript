var person = {
    name : "Peter",
    "sons and daughters": "Meg, Chris, Stewie" // keys with spaces MUST be enclosed within quotes  
}

console.log(person.name);
// console.log(person."sons and daughters")  // wont work - we have to use bracket syntax:
console.log(person["sons and daughters"])