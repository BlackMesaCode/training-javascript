function sum(a, b) {
    return a + b;
}

module.exports.sum = sum;

// is equivalent to above:

// exports.sum = sum;

// module.exports = {
//     "sum" : sum,
// }



// dont do:

// exports = {
//     "sum" : sum,
// }

// because exports is just a reference to module.exports:
// var exports = module.exports = {};

// by assigning exports = { "sum" : sum } we completely override that alias and disconnect it from the modules object

