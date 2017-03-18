"use strict"; // not really necessary, as we are within a module, that is in strict mode per definition

let hans = {
    name: "Hans",
    age: "20"
}

let laura = {
    name: "Laura",
    age: "30"
}


function describeYourself(arg1, arg2) {
    console.log("I am " + this.name + " and i am " + this.age + " years old. Hobbies: " + arg1 + " and " + arg2);
}

hans.getDescription = describeYourself;
laura.getDescription = describeYourself;

hans.getDescription("soccer"); // will immediately execute and "this" will be implicitely  bound to the caller (hans)
laura.getDescription("dancing"); // will immediately execute and "this" will be implicitely  bound to the caller (laura)

// describeYourself("soccer"); // default binding in strict mode:  "this" == undefined -> throws error

describeYourself.call(hans, "soccer"); // explicit binding and immediate execution of the functon with the arg1 = "soccer"

let foo = describeYourself.bind(hans, "soccer"); // explicit binding of "this" to hans, BUT no immediate execution. instead: bind() will return a function object

console.log(typeof foo === "function"); // true

foo(); // later on, when we invoke foo, "this" is still bound to hans, and arg1 will still be "soccer".

foo("tennis"); // when we invoke foo with an additional argument, this argument gets pushed to the already present arguments. so in this example: "tennis" will be available as arg2


laura.getDescription("music", "reading"); // note, that we dont need to unbind() getDescription as it was never altered, the binding was only applied to the new returned foo function reference

let args = ["hiking", "photography"];

describeYourself.apply(hans, args); // this immediately invokes the function just like call(), but instead of passing each argument by hand, we can pass an array of arguments

