define(['./simpleMath.js'], function (simpleMath) {

    function mult(a, b) {
        return a * b;
    }

    function multThenSum(a, b, c)
    {
        return simpleMath.sum(mult(a, b), c);
    }

    return {
        "mult" : mult,
        "multThenSum" : multThenSum,
    }
})

