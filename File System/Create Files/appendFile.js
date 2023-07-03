var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello Content!', function (err) { // Using appendFile() method
    if (err) throw err;
    console.log('Saved!');
});