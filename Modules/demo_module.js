var http = require('http');
var dt = require('./myfirstmodule'); // Includes myfirstmodule.js file

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime()); //  Here dt.myDateTime() calls the function
    res.end();
}).listen(8080);