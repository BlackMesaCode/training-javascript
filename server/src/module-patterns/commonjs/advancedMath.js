var simpleMath = require('./simpleMath.js'); // *.js extension MUST be present

function mult(a, b) {
    return a * b;
}

function multThenSum(a, b, c)
{
    return simpleMath.sum(mult(a, b), c);
}

exports.multThenSum = multThenSum;
exports.mult = mult;