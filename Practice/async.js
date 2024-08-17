var fs = require('fs');

var EventEmitter = require('events');
const { time } = require('console');

const eventEmitter = new EventEmitter();

eventEmitter.on('Program Ended', () => {
    console.log('Event Handler Called');
});

eventEmitter.on('Timeout Called', ({ timeout, text}) => {
    console.log(`It Was Called After ${timeout} Seconds ${text}`);
});

fs.readFile('example.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
    setTimeout(() => {
        eventEmitter.emit('Program Ended');
    }, 1000);
    setTimeout(() => {
        eventEmitter.emit('Timeout Called', {
            timeout: 2000,
            text: 'Later'
        });
    }, 2000);
});
