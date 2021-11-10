'use strict'
function calc(operator, a, b) {
    let result = 0;
    switch(operator) {
        case 'sum':
            result = Number(a) + Number(b);
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
        case 'pow':
            result = a ** b;
            break;
        default:
            result = 'unknown operation';
            break;
    }
    return isFinite(result) ? result : 'Error';
}

