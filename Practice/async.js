var fs = require('fs');

var EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('Program Ended', () => {
    console.log('Event Handler Called');
});

fs.readFile('example.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
    setTimeout(() => {
        eventEmitter.emit('Program Ended');
    }, 2000);
});
