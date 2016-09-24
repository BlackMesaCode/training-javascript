import { multThenSum } from './advancedMath';

console.log("result: " + multThenSum(1,2,3));


// NO ES6 Module Support within Node yet! To make it work, we would have to transpile it to commonJS 

// see:  

// https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node
// https://github.com/bmeck/node-eps/blob/es6-module/002-es6-modules.md#es-import-path-resolution