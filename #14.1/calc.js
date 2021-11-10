'use strict'
function calc(operator, a, b) {
    let result = 0;
    switch(operator) {
        case 'sum':
            result = a + b;
            break;
        case 'diff':
            result = a - b;
            break;
        case 'multi':
            result = a * b;
            break;
        case 'div':
            result = a / b;
            result = result.toFixed(2); // просто хочу округлить
            break;
        default:
            result = 'unknown operation';
            break;
    }
    return isFinite(result) ? result : 'Error';
}
console.log(calc('div', 4, 3))
