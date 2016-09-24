'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multThenSum = exports.mult = undefined;

var _simpleMath = require('./simpleMath.js');

var simpleMath = _interopRequireWildcard(_simpleMath);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mult(a, b) {
    return a * b;
}

function multThenSum(a, b, c) {
    return simpleMath.sum(mult(a, b), c);
}

exports.mult = mult;
exports.multThenSum = multThenSum; // with as keyword we could export as a different name