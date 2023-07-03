var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'contetnt-type': 'text/html' });
	res.end('Hello World!');
}).listen(8080);