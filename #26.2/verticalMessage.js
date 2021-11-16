'use strict'
function showVerticalMessage(message) {
    if(typeof(message) !== 'string') {
        console.log(`TypeError: must be string, not ${typeof(message)}`);
        return;
    }
    message = message.slice(0, 10);
    if(message[0] === 'м') message = message[0].toUpperCase() + message.slice(1);
    for(let key of message) {
        console.log(key);
    }
}
showVerticalMessage('марафон');