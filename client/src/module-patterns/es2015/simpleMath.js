export default function sum(a, b) {  // with default defined, we could import this module by just writing  "import sum from './simpleMath.js'" without using {}
    return a + b;
}

export function divide(a, b) {
    return a / b;
}