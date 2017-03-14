import { multiply, multThenSum } from './advancedMath.js';
// module "./advancedMath.js"; // the module syntax is only available in typescript and equals: import * as <moduleName> from "./<moduleName>.js"

console.log("multiply result: " + multiply(2,2));
console.log("multThenSum result: " + multThenSum(1,2,3));
// console.log("multThenDIvide result: " + multThenDivide(1,2,3));


// modules are created on a per file basis !