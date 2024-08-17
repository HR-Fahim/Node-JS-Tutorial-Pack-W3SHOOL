const Call = require('./call');

const call = new Call();

call.on('Timeout Called', ({ timeout, text}) => {
    console.log(`It Was Called After ${timeout} Seconds ${text}`);
});

call.function();

