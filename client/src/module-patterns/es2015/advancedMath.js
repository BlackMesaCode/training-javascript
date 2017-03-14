// import "./simpleMath"; // we cannot omit the file extension (*.js) ! this wont work!
// import "./simpleMath.js"; // This will execute the target module without affecting the scope of the active module, i.e. this type of import has no side effects on our current moduel - therefore we coulndt use functions defined in simpleMath within advancedMath
// import sum from "./simpleMath.js"; // importing without {} requires the imported module to provide a default export
// import {sum, divide} from "./simpleMath.js";  // importing with {} allows us to choose which of all available exports, we want to include
// import * as simpleMath from './simpleMath.js'; // import all (*) only works when specifiying an alias (as); moreover import all only imports those functions that are prefixed with ONLY an export. functions that are prefixed with "export default" will NOT be imported. so in our example: sum would not be imported, as it is declared default

// import {sum, divide} from "./simpleMath.js";  // same as with import all (*): we cant import functions prefixed with "export default". so we couldnt import sum within {}

import sum, {divide} from "./simpleMath.js"; // thats the only working way! the syntax for importing default exports has to combined with the syntax for importing regular exports


// more:  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/import



function mult(a, b) {
    return a * b;
}

function multThenSum(a, b, c)
{
    return sum(mult(a, b), c);
}

export function multThenDivide(a,b,c) {
    return divide(mult(a,b), c);
}

export { mult as multiply, multThenSum } // with as keyword we could export as a different name

