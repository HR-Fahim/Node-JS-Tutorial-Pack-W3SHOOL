var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) { // Using open() method
    if (err) throw err;
    console.log('Saved!');
});