// Closure Definitionen:

// Closure = dt. Verschluss .. d.h. eine Funktionsdeklaration umschließt seine lexikalische Umgebung, und wenn diese Funktionsreferenz dann herumgereicht wird, wird immer das ganze, umschlossene Paket herumgereicht.
// Closure is when a function "remembers" its lexical scope, even when the function is executed outside that lexical scope
// Das Closure Verhalten ist notwendig um Funktionsreferenzen sinnvoll herumreichen zu können. Würden Sie jedesmal ihren Deklarations-Kontext vergessen, wären sie wenig brauchbar
// Die in der Closure definierte Funktion merkt sich die Umgebung, in der sie erzeugt wurde.

// Variables captured with closure are not garbage collected

// Capture keeps the variable references, not the assigned values ! there is NO snapshotting


// Example 1

var blub = 3;

function foo() {
    console.log(blub);
}

function bar() {
    var blub = 4;
    foo();
}

foo();
bar(); // foo() executed by bar, remembered its lexical scope (the scope where it was defined), and did not adapt to the scope, where it was executed


// Example 2
function sayHello2(name) {
    var text = 'Hello ' + name; // Local variable
    var say = function() { console.log(text); }
    return say;
}
var say2 = sayHello2('Bob');  // sayHello2 return a function reference to a function declared within sayHello2 - when passing out that function reference, its lexcial context is remembered the moment, we invoke this function reference
say2(); // logs "Hello Bob"
