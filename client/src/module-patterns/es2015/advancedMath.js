import * as simpleMath from './simpleMath.js';

function mult(a, b) {
    return a * b;
}

function multThenSum(a, b, c)
{
    return simpleMath.sum(mult(a, b), c);
}

export { mult, multThenSum as multThenSum } // with as keyword we could export as a different name

