export function sum(a, b) {  // with default defined, we could import this module by just writing  "import sum from './simpleMath.js'"
    return a + b;
}

// we cant use export default function sum( ....  and consume it with import * as simpleMath .... results in reference error .. 