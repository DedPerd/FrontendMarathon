'use strict'
function showVerticalMessage(message) {
    if(typeof(message) !== 'string') {
        console.log(`TypeError: must be string, not ${typeof(message)}`);
    }

    let verticalMessage = '';
    message = message[0].toUpperCase() + message.slice(1);
    for(let i = 0; i < 10; i++) {
        if(message[i]) {
            verticalMessage += `${message[i]}\n`;
        } else {
            break;
        }
    }
    console.log(verticalMessage);
}
showVerticalMessage('марафон');