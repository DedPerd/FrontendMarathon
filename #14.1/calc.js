'use strict'
function calc(operator, a, b) {
    let operations = {
        sum: Number(a) + Number(b),
        diff: a - b,
        multi: a * b,
        div: a / b, 
        pow: a ** b,
    };
    let result = operations[operator];
    return isFinite(result) ? result : 'Error';
}