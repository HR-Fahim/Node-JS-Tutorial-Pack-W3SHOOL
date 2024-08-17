var EventEmitter = require('events');

class Call extends EventEmitter {
    
    function(){
        setTimeout(() => {
            this.emit('Timeout Called', {
                timeout: 2000,
                text: 'Later'
            });
        }, 2000);
    }
}

module.exports = Call;