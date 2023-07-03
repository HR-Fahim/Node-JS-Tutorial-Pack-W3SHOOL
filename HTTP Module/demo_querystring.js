var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

    res.writeHead(200, { 'content-text': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);

}).listen(8080);

// Using API http://localhost:8080/?year=2017&month=July